<template>
  <v-container class="main-area">
    <v-row>
      <v-col cols="12">
        <h1>{{ globalStore.examName }}</h1>
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
import { useProfileStore } from '@renderer/stores/app';
import { getCurrentTimeSlot, getNextExamTimeSlot } from '@renderer/utils/subjectUtils';

const globalStore = useProfileStore();

getCurrentTimeSlot(globalStore.examInfos);

const currentExam = computed(() => {
  const current = getCurrentTimeSlot(globalStore.examInfos);
  if (current == null) {
    return getNextExamTimeSlot(globalStore.examInfos);
  } else {
    return current;
  }
});

//
</script>

<style scoped>
.main-area {
  padding-left: 20px;
  padding-right: 20px;
}

.exam-list {
  margin: 20px;
}
</style>
