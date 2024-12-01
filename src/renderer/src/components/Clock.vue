<template>
  <v-card class="mx-auto" max-width="750">
    <v-card-text class="text-center">
      <div
        :style="{ fontSize: fontSizes[fontSizeIndex] }"
        class="display-1 font-weight-bold"
        @click="cycleFontSize"
      >
        {{ formattedTime }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useIntervalFn } from '@vueuse/core';
import moment from 'moment';

const formattedTime = ref('');
const fontSizeIndex = ref(2);
const fontSizes = ['4rem', '6rem', '8rem'];

onMounted(() => {
  updateTime();
});

const formatDateTime = (isoString: moment.MomentInput) => moment(isoString).format('HH:mm:ss');

function updateTime() {
  const now = new Date();
  formattedTime.value = formatDateTime(now);
}

useIntervalFn(updateTime, 250);

function cycleFontSize() {
  fontSizeIndex.value = (fontSizeIndex.value + 1) % fontSizes.length;
}
</script>

<style scoped>
.display-1 {
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
