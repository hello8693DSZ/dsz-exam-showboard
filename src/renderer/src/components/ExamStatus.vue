<template>
  <div class="exam-status">
    <el-row class="exam-info-bar">
      <el-col :span="3">
        <strong>{{ exam.name }}</strong>
      </el-col>

      <el-col :span="8">
        {{ formatDateTime(exam.start) }} ~ {{ formatDateTime(exam.end) }}
      </el-col>
      <el-col :span="3">
        <el-text class="mx-1" size="large" :type="statusColor">{{ statusText }}</el-text>

      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import moment from 'moment';

const props = defineProps({
  exam: {
    type: Object,
    required: true
  }
});

const formatDateTime = (isoString) => moment(isoString).format('HH:mm');

const statusColor = computed(() => {
  const now = moment();
  const start = moment(props.exam.start);
  const end = moment(props.exam.end);

  if (now.isBefore(start)) return 'running';
  if (now.isBetween(start, end)) return 'success';
  if (now.isAfter(end)) return 'error';
});

const statusText = computed(() => {
  const now = moment();
  const start = moment(props.exam.start);
  const end = moment(props.exam.end);

  if (now.isBefore(start)) return '未开始';
  if (now.isBetween(start, end)) return '进行中';
  if (now.isAfter(end)) return '已结束';
});
</script>

<style scoped>
.exam-status {

  padding: 10px;
  border: 1px solid #e9e9e9;
  margin-bottom: 10px;
}

.exam-info-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.4em;
}
</style>
