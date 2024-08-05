<template>
  <v-card v-if="exam" class="mx-auto pa-4 subject-info-card" max-width="600" elevation="12">
    <v-card-text>
      <div class="text-h5">
        当前科目:<span class="text-h5 ml-2">{{ exam.name }}</span>
      </div>
      <div class="text-h5">
        考试时间: {{ formatDateTime(exam.start) }} ~ {{ formatDateTime(exam.end) }}
      </div>
      <div class="text-h5 mt-4">
        考试状态: <span :class="statusColor">{{ statusText }}</span>
      </div>
      <div v-if="isWarning" class="text-h5 text--warning">考试即将结束</div>
    </v-card-text>
  </v-card>

  <v-card v-else class="mx-auto pa-4 subject-info-card" max-width="600" elevation="12">
    <v-card-title class="headline grey lighten-2"> 考试已结束 </v-card-title>
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
  if (!props.exam) return '考试已结束';

  const start = new Date(props.exam.start);
  const end = new Date(props.exam.end);

  if (now.value < start) return '未开始';
  if (now.value >= start && now.value < end) return '进行中';
  if (now.value >= end) return '已结束';
});

const isWarning = computed(() => {
  if (!props.exam) return false;

  const end = new Date(props.exam.end);
  const fifteenMinutesBeforeEnd = new Date(end.getTime() - 15 * 60 * 1000);

  return now.value >= fifteenMinutesBeforeEnd && now.value < end;
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

.text--warning {
  color: #ffc107 !important; /* Vuetify's default warning color */
}

.status-before {
  color: orange;
}

.status-middle {
  color: green;
}

.status-after {
  color: red;
}

.subject-info-card {
  margin-top: 20px;
}
</style>
