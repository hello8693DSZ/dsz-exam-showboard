<template>
  <v-card class="mx-auto" max-width="600">
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12">
          <v-data-table
            :items="groupedExams"
            :headers="headers"
            item-key="name"
            hide-default-footer
            dense
            class="text-h5"
          >
            <template #item="{ item, index }">
              <tr :style="{ lineHeight: '2.5rem' }">
                <td v-if="item.showDate" class="text-h5 date-column" :rowspan="item.rowspan">
                  {{ item.date }}<br />{{ item.period }}
                </td>
                <td :class="['text-h5', 'subject-column', getStatusClass(item)]">
                  {{ item.name }}
                </td>
                <td class="text-h5 time-column">{{ formatTime(item.start) }}</td>
                <td class="text-h5 time-column">{{ formatTime(item.end) }}</td>
              </tr>
            </template>
            <template #header.date>
              <span class="text-h5 font-weight-bold">日期</span>
            </template>
            <template #header.name>
              <span class="text-h5 font-weight-bold">科目</span>
            </template>
            <template #header.start>
              <span class="text-h5 font-weight-bold">开始</span>
            </template>
            <template #header.end>
              <span class="text-h5 font-weight-bold">结束</span>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup lang="ts">
import { reactive, computed, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  exam: {
    type: Array as () => any[],
    default: () => []
  }
});

const state = reactive({
  exams: props.exam
});

function formatPeriod(isoString: string): string {
  const hour = new Date(isoString).getHours();
  if (hour < 12) return '上午';
  else if (hour < 18) return '下午';
  else return '晚上';
}

const groupedExams = computed(() => {
  const grouped = [];
  let currentDate = '';
  let currentPeriod = '';

  sortedExams.value.forEach((exam, index) => {
    const examDate =
      new Date(exam.start)
        .toLocaleDateString('zh-CN', {
          month: 'numeric',
          day: 'numeric'
        })
        .replace('/', '月') + '日';
    const period = formatPeriod(exam.start);

    const showDate = examDate !== currentDate || period !== currentPeriod;

    if (showDate) {
      currentDate = examDate;
      currentPeriod = period;

      const rowspan = sortedExams.value.filter(
        (e) =>
          new Date(e.start)
            .toLocaleDateString('zh-CN', { month: 'numeric', day: 'numeric' })
            .replace('/', '月') +
            '日' ===
            currentDate && formatPeriod(e.start) === currentPeriod
      ).length;

      grouped.push({ ...exam, date: examDate, period, showDate, rowspan });
    } else {
      grouped.push({ ...exam, date: examDate, period, showDate: false });
    }
  });

  return grouped;
});

const headers = [
  { text: '日期', value: 'date', sortable: false, align: 'center' },
  { text: '科目', value: 'name', align: 'center' },
  { text: '开始', value: 'start', sortable: false, align: 'center' },
  { text: '结束', value: 'end', sortable: false, align: 'center' }
];

const formatTime = (isoString: string) => {
  const date = new Date(isoString);
  return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
};

function getStatusClass(item: any): string {
  const now = new Date();
  const startTime = new Date(item.start);
  const endTime = new Date(item.end);

  if (now < startTime) return 'status-upcoming';
  else if (now >= startTime && now <= endTime) return 'status-ongoing';
  else return 'status-ended';
}

const sortedExams = computed(() => {
  return state.exams.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
});

onMounted(() => {
  const interval = setInterval(() => {
    state.exams = state.exams.map((exam) => ({
      ...exam,
      status: getStatusClass(exam)
    }));
  }, 1000);

  onUnmounted(() => {
    clearInterval(interval);
  });
});
</script>

<style scoped>
.text-h5 {
  font-size: 1.8rem !important;
  text-align: center;
}

.font-weight-bold {
  font-weight: bold;
}

.v-card {
  overflow-x: auto;
  max-width: 100%; /* 防止表格超出边界 */
  padding-right: 8px; /* 调整右边距 */
}

/* 列样式 */
.date-column,
.subject-column,
.time-column {
  white-space: nowrap;
  text-align: center;
  padding-left: 4px;
  padding-right: 4px;
}

.date-column {
  width: 100px;
}

.subject-column {
  width: 140px;
}

.time-column {
  width: 80px;
}

/* 状态样式 */
.status-upcoming {
  color: orange;
}

.status-ongoing {
  color: #00ff00;
}

.status-ended {
  color: red;
}
</style>
