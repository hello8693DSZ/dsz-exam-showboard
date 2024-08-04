<template>
  <v-system-bar class="position-fixed">
    <v-icon icon="mdi-window-close" @click="ipcHandleExit"></v-icon>
    <span class="ms-2">{{
      new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      })
    }}</span>
  </v-system-bar>
  <v-app-bar :elevation="2" class="position-fixed">
    <v-app-bar-title>DSZ考试看板</v-app-bar-title>

    <template #append>
      <div class="ga-4">
        <v-btn @click="router.push('/mainWindow')">打开配置</v-btn>
      </div>
    </template>
  </v-app-bar>
</template>

<script setup>
import { useRouter } from 'vue-router';

const ipcHandleExit = () => window.electron.ipcRenderer.send('prog:exit');

const router = useRouter();
</script>
