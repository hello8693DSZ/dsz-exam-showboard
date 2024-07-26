<template>
  <div class="exam-info">
    <h2>当前科目: {{ exam.name }}</h2>
    <h2>考试时间: {{ formatDateTime(exam.start) }} ~ {{ formatDateTime(exam.end) }}</h2>
    <h2>考试状态: {{ statusText }}</h2>
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

.exam-info-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.4em;
}
</style>
