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
    <v-app-bar-title>{{ profileStore.appHeader }}</v-app-bar-title>

    <template #append>
      <div class="ga-4">
        <v-btn @click="router.push('/mainWindow')">菜单</v-btn>
      </div>
    </template>
  </v-app-bar>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useProfileStore } from '../stores/app';

const profileStore = useProfileStore();

const ipcHandleExit = () => window.electron.ipcRenderer.send('prog:exit');

const router = useRouter();
</script>
