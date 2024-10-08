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

const updateCurrentExam = () => {
  const current = getCurrentTimeSlot(globalStore.examInfos);
  currentExam.value = current ? current : getNextExamTimeSlot(globalStore.examInfos);
};

onMounted(() => {
  updateCurrentExam();
  const interval = setInterval(updateCurrentExam, 20000); // 每20秒刷新一次
  onUnmounted(() => clearInterval(interval));
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
