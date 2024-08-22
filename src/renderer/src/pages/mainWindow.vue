<template>
  <v-container class="main-container" fill-height>
    <v-row justify="center" align="center">
      <v-col cols="12" md="4">
        <v-card class="pa-4" outlined>
          <v-btn block color="primary" dark @click="openDialog"> 打开配置 </v-btn>
          <p class="mt-2 text-center">打开 JSON 配置文件</p>
        </v-card>
      </v-col>
      <v-col cols="12" md="4" class="mt-4 mt-md-0">
        <v-card class="pa-4" outlined>
          <v-btn block color="success" dark @click="gotoInfoPage"> 直接进入看板 </v-btn>
          <p class="mt-2 text-center">直接进入看板，将继续使用上次加载的配置</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useProfileStore } from '@renderer/stores/app';

const globalStore = useProfileStore();
const router = useRouter();

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
}
.v-btn {
  height: 48px;
}
.text-center {
  text-align: center;
}
</style>
