<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>电视猪考试看板</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-btn color="primary"  @click="openDialog" dark> 打开配置 </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useProfileStore } from '@renderer/stores/app';

const globalStore = useProfileStore();

function openDialog() {
  window.electron.ipcRenderer.send('prog:loadjson');
}

window.electron.ipcRenderer.on('common:openFile', (event, message) => {
  console.log(message.data);
  const examData = JSON.parse(message.data);
  globalStore.$patch(examData);
  router.push('/infoPage');
});

const router = useRouter();
</script>

<style scoped>
/* 根据需要添加额外的样式 */
</style>
