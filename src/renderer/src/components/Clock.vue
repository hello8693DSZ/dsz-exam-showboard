<template>
  <v-card class="mx-auto" max-width="750">
    <v-card-text class="text-center">
      <div class="display-1 font-weight-bold" @click="cycleFontSize">
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
const fontSizeIndex = ref(2); // 默认字体大小为7rem
const fontSizes = ['3rem', '5rem', '7rem']; //不同分辨率适合使用不同大小的字体

// 在页面加载完成后初始化时间
onMounted(() => {
  updateTime();
});

const formatDateTime = (isoString: moment.MomentInput) => moment(isoString).format('HH:mm:ss');

// 更新时间的函数
function updateTime() {
  const now = new Date();
  formattedTime.value = formatDateTime(now);
}

// 每隔一分钟更新一次时间
useIntervalFn(updateTime, 250);

// 切换字体大小的函数
function cycleFontSize() {
  fontSizeIndex.value = (fontSizeIndex.value + 1) % fontSizes.length;
}
</script>

<style scoped>
.display-1 {
  font-size: v-bind(fontSizes[fontSizeIndex]); /* 动态绑定字体大小 */
}
</style>
