<template>
  <div>
    <h1>电视猪考试看板</h1>

    <el-button @click="OpenDialog">打开配置</el-button>

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useAppStore } from '@renderer/stores/app';

const globalStore = useAppStore()


function OpenDialog() {
  window.electron.ipcRenderer.send('prog:loadjson');
}

window.electron.ipcRenderer.on('common:openFile', (event, message) => {
  console.log(message.data);
  let examdata = JSON.parse(message.data);
  globalStore.$patch(examdata);
  router.push('/infoPage');
});

const router = useRouter();
//
</script>
