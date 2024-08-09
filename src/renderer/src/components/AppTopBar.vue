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
        <v-btn @click="toggleFullScreen">{{ isFullScreen ? '还原' : '全屏' }}</v-btn>
        <!-- 方便触屏全屏 --> 
        <v-btn @click="router.push('/mainWindow')">退出当前配置</v-btn>
        <!--原来携程打开配置文件了，这分明是退出吗！ -->
      </div>
    </template>
  </v-app-bar>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const ipcHandleExit = () => window.electron.ipcRenderer.send('prog:exit');

const router = useRouter();
const isFullScreen = ref(false);

const toggleFullScreen = () => {
  if (!isFullScreen.value) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
  isFullScreen.value = !isFullScreen.value;
};
</script>
