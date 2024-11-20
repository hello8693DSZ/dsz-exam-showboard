<template>
  <v-container class="main-container" fill-height>
    <v-row justify="center" align="center">
      <v-col cols="12" md="4">
        <v-card class="pa-4 fade-in slide-in" outlined>
          <v-text-field v-model="remoteUrl" label="请求地址" clearable></v-text-field>
          <v-btn block color="deep-purple accent-4" dark @click="saveUrl">保存地址</v-btn>
          <p class="mt-2 text-center">输入并保存请求地址</p>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="pa-4 fade-in slide-in" outlined>
          <v-btn block color="teal accent-4" dark @click="fetchConfig">请求配置</v-btn>
          <p class="mt-2 text-center">请求并加载配置</p>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="mt-4">
      <v-col cols="12" md="4">
        <v-card class="pa-4 fade-in slide-in" outlined>
          <v-btn block color="deep-purple accent-4" dark @click="openDialog">打开配置</v-btn>
          <p class="mt-2 text-center">打开 JSON 配置文件</p>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="pa-4 fade-in slide-in" outlined>
          <v-btn block color="teal accent-4" dark @click="gotoInfoPage">直接进入看板</v-btn>
          <p class="mt-2 text-center">直接进入看板，将继续使用上次加载的配置</p>
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
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useProfileStore } from '@renderer/stores/app';

const globalStore = useProfileStore();
const router = useRouter();
const remoteUrl = ref(localStorage.getItem('remoteUrl') || '');
const errorDialog = ref(false);
const errorMessage = ref('');

function saveUrl() {
  localStorage.setItem('remoteUrl', remoteUrl.value);
  alert('地址已保存');
}

async function fetchConfig() {
  if (remoteUrl.value) {
    try {
      const configResponse = await fetch(remoteUrl.value);
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
