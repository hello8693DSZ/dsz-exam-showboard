<template>
  <v-card class="mx-auto" max-width="600" flat>
    <v-container fluid class="pa-0">
      <v-row justify="center" class="ma-0">
        <v-col cols="12" class="pa-0">
          <v-data-table
            :items="groupedExams"
            :headers="headers"
            item-key="name"
            hide-default-footer
            dense
            class="text-h5"
          >
            <template #item="{ item }">
              <tr :style="{ lineHeight: item.name.includes('/') ? '2.5rem' : '2.0rem' }">
                <td v-if="item.showDate" class="text-h5 date-column" :rowspan="item.rowspan">
                  {{ item.date }}<br />{{ item.period }}
                </td>
                <td class="text-h5 subject-column">
                  <div v-if="item.name.includes('/')">
                    <div>{{ item.name.split('/')[0] }}</div>
                    <div>{{ item.name.split('/')[1] }}</div>
                  </div>
                  <div v-else>{{ item.name }}</div>
                </td>
                <td class="text-h5 time-column">{{ formatTime(item.start) }}</td>
                <td class="text-h5 time-column">{{ formatTime(item.end) }}</td>
                <td class="status-column">
                  <v-chip :color="getStatusColor(item)" dark class="exam-status-chip">
                    {{ getStatusText(item) }}
                  </v-chip>
                </td>
              </tr>
            </template>
            <template #header.date>
              <span class="text-h5 font-weight-bold no-wrap">日期</span>
            </template>
            <template #header.name>
              <span class="text-h5 font-weight-bold no-wrap">科目</span>
            </template>
            <template #header.start>
              <span class="text-h5 font-weight-bold no-wrap">开始</span>
            </template>
            <template #header.end>
              <span class="text-h5 font-weight-bold no-wrap">结束</span>
            </template>
            <template #header.status>
              <span class="text-h5 font-weight-bold no-wrap">状态</span>
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
        .toLocaleDateString('zh-CN', { month: 'numeric', day: 'numeric' })
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
  { text: '结束', value: 'end', sortable: false, align: 'center' },
  { text: '状态', value: 'status', sortable: false, align: 'center' }
];

const formatTime = (isoString: string) => {
  const date = new Date(isoString);
  return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
};

function getStatusColor(item: any): string {
  const now = new Date();
  const startTime = new Date(item.start);
  const endTime = new Date(item.end);
  if (now < startTime) return 'orange';
  else if (now >= startTime && now <= endTime) return 'green';
  else return 'red';
}

function getStatusText(item: any): string {
  const now = new Date();
  const startTime = new Date(item.start);
  const endTime = new Date(item.end);
  if (now < startTime) {
    return '未开始';
  } else if (now >= startTime && now <= endTime) {
    return '进行中';
  } else {
    return '已结束';
  }
}

const sortedExams = computed(() => {
  return state.exams.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
});

onMounted(() => {
  const interval = setInterval(() => {
    state.exams = state.exams.map((exam) => ({
      ...exam,
      status: getStatusText(exam)
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

.exam-status-chip {
  font-size: 1.5rem !important;
  text-align: center;
}

/* 强制标题行文字不换行 */
.no-wrap {
  white-space: nowrap;
}

/* 列样式 */
.date-column,
.subject-column,
.time-column,
.status-column {
  white-space: nowrap;
  text-align: center;
  padding: 5px 2px;
}

.date-column {
  width: 60px;
}

.subject-column {
  width: 50px;
}

.time-column {
  width: 50px;
}

.status-column {
  width: 60px;
}
</style>
