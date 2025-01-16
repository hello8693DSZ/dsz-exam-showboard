<template>
  <v-container class="main-container" fill-height>
    <v-row justify="center" align="center">
      <v-col cols="12" md="4" class="d-flex flex-column">
        <v-card class="pa-4 fade-in slide-in" outlined>
          <v-text-field v-model="remoteUrl" label="请求地址" clearable></v-text-field>
          <v-btn block color="deep-purple accent-4" dark @click="saveUrl">保存地址</v-btn>
          <p class="mt-2 text-center">输入并保存请求地址</p>
          <v-btn block color="deep-purple accent-4" dark class="mt-2" @click="openDialog"
            >打开配置</v-btn
          >
          <p class="mt-2 text-center">打开 Json 配置文件</p>
        </v-card>
      </v-col>
      <v-col cols="12" md="4" class="d-flex flex-column">
        <v-card class="pa-4 fade-in slide-in" outlined>
          <v-btn block color="teal accent-4" dark @click="fetchConfig">请求配置</v-btn>
          <p class="mt-2 text-center">请求并加载配置</p>
          <v-btn block color="teal accent-4" dark class="mt-2" @click="gotoInfoPage"
            >直接进入看板</v-btn
          >
          <p class="mt-2 text-center">直接进入看板，将继续使用上次加载的配置</p>
          <v-switch
            v-model="autoEnter"
            label="下次自动进入看板"
            class="mt-2 auto-enter-switch"
          ></v-switch>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="errorDialog" max-width="500">
      <v-card>
        <v-card-title class="headline">错误</v-card-title>
        <v-card-text>{{ errorMessage }}</v-card-text>
        <v-card-actions>
          <v-btn color="red darken-1" text @click="errorDialog = false">关闭</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useProfileStore } from '@renderer/stores/app';

const globalStore = useProfileStore();
const router = useRouter();
const route = useRoute();
const remoteUrl = ref(localStorage.getItem('remoteUrl') || '');
const autoEnter = ref(JSON.parse(localStorage.getItem('autoEnter') || 'false'));
const errorDialog = ref(false);
const errorMessage = ref('');

function saveUrl() {
  localStorage.setItem('remoteUrl', remoteUrl.value);
  alert('地址已保存');
}

async function fetchConfig() {
  if (remoteUrl.value) {
    try {
      const configResponse = await fetch(remoteUrl.value, { cache: 'no-store' });
      if (!configResponse.ok) {
        throw new Error('无法获取配置文件');
      }
      const config = await configResponse.json();
      globalStore.$patch(config);
      router.push('/infoPage');
    } catch (error) {
      errorMessage.value = error.message;
      errorDialog.value = true;
    }
  } else {
    errorMessage.value = '请输入有效的请求地址';
    errorDialog.value = true;
  }
}

function openDialog() {
  window.electron.ipcRenderer.send('prog:loadjson');
}

function gotoInfoPage() {
  router.push('/infoPage');
}

window.electron.ipcRenderer.on('common:openFile', (event, message) => {
  console.log(message.data);
  const examData = JSON.parse(message.data);
  globalStore.$patch(examData);
  router.push('/infoPage');
});

onMounted(() => {
  const savedUrl = localStorage.getItem('remoteUrl');
  if (savedUrl) {
    remoteUrl.value = savedUrl;
  }

  // 检查路由参数是否跳过自动跳转
  const skipAutoEnter = route.query.skipAutoEnter === 'true';
  if (!skipAutoEnter && autoEnter.value) {
    router.push('/infoPage');
  }
});

watch(autoEnter, (newVal) => {
  localStorage.setItem('autoEnter', JSON.stringify(newVal));
});
</script>

<style scoped>
.main-container {
  padding: 20px;
  display: flex;
  align-items: center;
}
.v-card {
  width: 100%;
  max-width: 300px;
  margin: auto;
  transition: transform 0.3s ease-in-out;
}
.v-card:hover {
  transform: scale(1.05);
}
.v-btn {
  height: 48px;
}
.text-center {
  text-align: center;
}
.auto-enter-switch {
  margin-top: 8px;
  display: flex;
  justify-content: center;
}
.fade-in {
  animation: fadeIn 1s ease-in-out;
}
.slide-in {
  animation: slideIn 1s ease-in-out;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes slideIn {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}
</style>