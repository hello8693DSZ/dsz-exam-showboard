<template>
  <v-card class="exam-status">
    <v-card-text class="exam-info-bar">
      <div class="d-flex flex-row">
        <div class="flex-grow-1">
          <strong>{{ exam?.name || '未知名称' }}</strong>
        </div>
        &nbsp;
        <div>{{ formatDateTime(exam?.start) }} ~ {{ formatDateTime(exam?.end) }}</div>
      </div>

      <div class="status-text-large" :class="statusColor">{{ statusText }}</div>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import moment from 'moment';

const props = defineProps({
  exam: {
    type: Object,
    default: () => null
  }
});

const formatDateTime = (isoString) => moment(isoString).format('HH:mm');

const statusColor = computed(() => {
  const now = moment();
  const start = moment(props.exam.start);
  const end = moment(props.exam.end);

  if (now.isBefore(start)) return 'warning--text';
  if (now.isBetween(start, end)) return 'success--text';
  if (now.isAfter(end)) return 'error--text';
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
  margin-bottom: 10px;
}

.exam-info-bar {
  font-size: 1.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.small-screen .exam-info-bar {
  flex-direction: column;
  align-items: flex-start;
}

.status-text-large {
  font-size: 1.05em;
}

.warning--text {
  color: orange;
}

.success--text {
  color: green;
}

.error--text {
  color: red;
}
</style>
