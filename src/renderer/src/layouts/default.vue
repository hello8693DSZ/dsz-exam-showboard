<template>
  <v-app>
    <AppTopBar />
    <v-main class="no-scrollbar">
      <router-view />
    </v-main>
    <div class="scale-control">
      <v-select
        v-model="fontSize"
        :items="fontSizeOptions"
        label="选择字体大小"
        class="scale-select"
      ></v-select>
      <div class="scale-label">调整字体大小</div>
    </div>
  </v-app>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

const fontSizeOptions = ['75%', '100%', '125%', '150%', '175%', '200%']; // 字体大小选项

const fontSize = ref('100%'); // 默认值为100%

watch(fontSize, (newFontSize) => {
  document.documentElement.style.fontSize = newFontSize; // 动态调整根元素的字体大小
});
</script>

<style scoped>
.no-scrollbar {
  overflow: hidden;
}

.scale-control {
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scale-select {
  margin-right: 10px;
}

.scale-label {
  margin-left: 10px;
}
</style>
