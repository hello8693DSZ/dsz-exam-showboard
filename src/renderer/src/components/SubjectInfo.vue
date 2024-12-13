<template>
  <v-card v-if="exam" class="mx-auto pa-4 subject-info-card" max-width="600" elevation="12">
    <v-card-text>
      <div class="text-h5 line-item">
        当前科目:<span class="text-h5 ml-2">{{ exam.name }}</span>
      </div>
      <div class="text-h5 line-item">
        考试时间: {{ formatDateTime(exam.start) }} ～ {{ formatDateTime(exam.end) }}
      </div>
      <div class="text-h5 line-item">
        考试状态: <span :class="statusColor">{{ statusText }}</span>
      </div>
      <div v-if="showCountdown" class="text-h5 text--info line-item">
        开考倒计时: {{ countdown }}
      </div>
      <div v-if="showRemainingTime" :class="['text-h5', remainingTimeColorClass, 'line-item']">
        剩余时间: {{ remainingTime }}
      </div>
    </v-card-text>
  </v-card>

  <v-card v-else class="mx-auto pa-4 subject-info-card" max-width="600" elevation="12">
    <v-card-title class="headline grey lighten-2 text-center text--ended">考试已结束</v-card-title>
  </v-card>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

// Define props
const props = defineProps({
  exam: {
    type: Object as () => { name: string; start: string; end: string },
    default: null
  }
});

// Computed properties
const formatDateTime = (isoString: string) =>
  new Date(isoString).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });
const now = ref(new Date());

const statusColor = computed(() => {
  if (!props.exam) return '';

  const start = new Date(props.exam.start);
  const end = new Date(props.exam.end);

  if (now.value < start) return 'status-before';
  if (now.value >= start && now.value < end) return 'status-middle';
  if (now.value >= end) return 'status-after';
});

const statusText = computed(() => {
  if (!props.exam) return '全部考试均已结束';

  const start = new Date(props.exam.start);
  const end = new Date(props.exam.end);

  if (now.value < start) return '未开始';
  if (now.value >= start && now.value < end) return '进行中';
  if (now.value >= end) return '已结束';
});

const showRemainingTime = computed(() => {
  if (!props.exam) return false;

  const start = new Date(props.exam.start);
  const end = new Date(props.exam.end);

  return now.value >= start && now.value < end;
});

const showCountdown = computed(() => {
  if (!props.exam) return false;

  const start = new Date(props.exam.start);
  const fifteenMinutesBeforeStart = new Date(start.getTime() - 15 * 60 * 1000);

  return now.value >= fifteenMinutesBeforeStart && now.value < start;
});

const remainingTime = computed(() => {
  if (!props.exam) return '';

  const end = new Date(props.exam.end);
  const timeDiff = end.getTime() - now.value.getTime();
  const minutes = Math.floor(timeDiff / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  return `${minutes}分${seconds}秒`;
});

const countdown = computed(() => {
  if (!props.exam) return '';

  const start = new Date(props.exam.start);
  const timeDiff = start.getTime() - now.value.getTime();
  const minutes = Math.floor(timeDiff / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  return `${minutes}分${seconds}秒`;
});

// 动态颜色样式
const remainingTimeColorClass = computed(() => {
  if (!props.exam) return 'text--default';

  const end = new Date(props.exam.end);
  const fifteenMinutesBeforeEnd = new Date(end.getTime() - 15 * 60 * 1000);

  return now.value >= fifteenMinutesBeforeEnd && now.value < end
    ? 'text--warning'
    : 'text--default';
});

// Update the current time every second
const updateNow = () => {
  now.value = new Date();
};
setInterval(updateNow, 1000);
updateNow();
</script>

<style scoped>
.text-h5 {
  font-size: 2.5rem !important;
}

.line-item {
  margin-bottom: 16px;
}

.text--default {
  color: white !important;
}

.text--warning {
  color: #ff0000 !important;
}

.text--info {
  color: #ffff00 !important;
}

.text--ended {
  font-size: 2.5rem !important;
  color: #666;
}

.status-before {
  color: orange;
}

.status-middle {
  color: rgb(0, 255, 0);
}

.status-after {
  color: red;
}

.subject-info-card {
  margin-top: 20px;
}

.text-center {
  text-align: center;
}
</style>
