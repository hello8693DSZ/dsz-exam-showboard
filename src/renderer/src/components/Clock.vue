<template>
  <v-card class="mx-auto" max-width="600">
    <v-card-text class="text-center">
      <div class="display-1 font-weight-bold">
        {{ formattedTime }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useIntervalFn } from '@vueuse/core';
import moment from 'moment';

// 使用ref来存储当前时间
const formattedTime = ref('');

// 在页面加载完成后初始化时间
onMounted(() => {
  updateTime();
});

const formatDateTime = (isoString) => moment(isoString).format('HH:mm:ss');

// 更新时间的函数
function updateTime() {
  const now = new Date();
  formattedTime.value = formatDateTime(now);
}

// 每隔一分钟更新一次时间
useIntervalFn(updateTime, 250);
</script>

<style scoped>
.display-1 {
  font-size: 5rem; /* 调整字号以适应大屏幕 */
}
</style>
