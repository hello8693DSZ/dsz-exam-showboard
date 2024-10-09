<template>
  <v-container class="main-area">
    <v-row>
      <v-col cols="12">
        <h1 class="large-title">{{ globalStore.examName }}</h1>
        <h2 class="medium-title">{{ globalStore.message }}</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <Clock></Clock>
        <SubjectInfo :exam="currentExam" />
      </v-col>

      <v-col cols="6">
        <ExamList :exam="globalStore.examInfos"></ExamList>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useProfileStore } from '@renderer/stores/app';
import { getCurrentTimeSlot, getNextExamTimeSlot } from '@renderer/utils/subjectUtils';

const globalStore = useProfileStore();
const currentExam = ref(null);
let timeout = null;

const updateCurrentExam = () => {
  const current = getCurrentTimeSlot(globalStore.examInfos);
  currentExam.value = current ? current : getNextExamTimeSlot(globalStore.examInfos);
};

const scheduleNextUpdate = () => {
  if (timeout) {
    clearTimeout(timeout);
  }

  const nextExam = getNextExamTimeSlot(globalStore.examInfos);
  if (nextExam) {
    const nextEndTime = new Date(nextExam.end).getTime();
    const now = Date.now();
    const delay = nextEndTime - now + 60000; // 下一次考试结束时间 + 1分钟

    timeout = setTimeout(() => {
      updateCurrentExam();
      scheduleNextUpdate();
    }, delay);
  }
};

onMounted(() => {
  updateCurrentExam();
  scheduleNextUpdate();
});

onUnmounted(() => {
  if (timeout) {
    clearTimeout(timeout);
  }
});
</script>

<style scoped>
.main-area {
  padding-left: 20px;
  padding-right: 20px;
}

.large-title {
  font-size: 3em; /* 放大h1文字 */
}

.medium-title {
  font-size: 1em; /* 略小一点的h2文字 */
}
</style>
