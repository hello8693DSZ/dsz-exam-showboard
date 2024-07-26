<template>
  <div class="main-area">
    <h1>{{ globalStore.examName }}</h1>

    <el-row>
      <el-col :span="13">
        <SubjectInfo
          v-if="isExamRunning"
          :exam="runningExam"
        ></SubjectInfo>
        <h2 v-else>
          考试未开始
        </h2>
      </el-col>
      <el-col :span="11">
        <div v-for="exam in globalStore.examInfos">
          <ExamStatus :exam="exam" />
        </div>
    </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useAppStore } from '@renderer/stores/app';
import { getCurrentTimeSlot } from '@renderer/utils/subjectUtils'

const globalStore = useAppStore();

const router = useRouter();

getCurrentTimeSlot(globalStore.examInfos);

const runningExam = computed(() => {
  return getCurrentTimeSlot(globalStore.examInfos);
});

const isExamRunning = computed(() =>{
  return getCurrentTimeSlot(globalStore.examInfos) == null;
});


//
</script>

<style scoped>
.main-area {
  padding-left: 20px;
  padding-right: 20px;
}
</style>
