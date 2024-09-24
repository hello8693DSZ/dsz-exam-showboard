<template>
  <v-system-bar class="position-fixed">
    <v-icon icon="mdi-window-close" @click="ipcHandleExit"></v-icon>
    <span class="ms-2">{{ currentTime }}</span>
  </v-system-bar>
  <v-app-bar :elevation="2" class="position-fixed">
    <v-app-bar-title>{{ profileStore.appHeader }}</v-app-bar-title>

    <template #append>
      <div class="ga-4">
        <v-btn @click="router.push('/mainWindow')">回到主页</v-btn>
      </div>
    </template>
  </v-app-bar>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { useProfileStore } from '../stores/app';

const profileStore = useProfileStore();
const router = useRouter();
const currentTime = ref(
  new Date().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
  })
);

const updateTime = () => {
  currentTime.value = new Date().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
  });
};

onMounted(() => {
  const interval = setInterval(updateTime, 1000);
  onUnmounted(() => clearInterval(interval));
});

const ipcHandleExit = () => window.electron.ipcRenderer.send('prog:exit');
</script>
