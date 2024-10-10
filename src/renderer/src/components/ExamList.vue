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
            <template #item="{ item }">
              <template v-if="item.isDate">
                <tr>
                  <td colspan="4" class="text-h5">{{ item.date }}</td>
                </tr>
              </template>
              <template v-else>
                <tr>
                  <td class="text-h5">{{ item.name }}</td>
                  <td class="text-h5">{{ formatTime(item.start) }}</td>
                  <td class="text-h5">{{ formatTime(item.end) }}</td>
                  <td>
                    <v-chip :color="getStatusColor(item)" dark class="exam-status-chip">
                      {{ getStatusText(item) }}
                    </v-chip>
                  </td>
                </tr>
              </template>
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
            <template #header.status>
              <span class="text-h5 font-weight-bold">状态</span>
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

// Computed properties and methods
const sortedExams = computed(() => {
  return state.exams.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
});

const groupedExams = computed(() => {
  const grouped = [];
  let currentDate = '';

  sortedExams.value.forEach((exam) => {
    const examDate = new Date(exam.start).toLocaleDateString('zh-CN', {
      month: 'numeric',
      day: 'numeric'
    });

    if (examDate !== currentDate) {
      currentDate = examDate;
      grouped.push({ isDate: true, date: `${currentDate}日` });
    }

    grouped.push({ ...exam, isDate: false });
  });

  return grouped;
});

const headers = [
  { text: '科目', value: 'name' },
  { text: '开始', value: 'start', sortable: false },
  { text: '结束', value: 'end', sortable: false },
  { text: '状态', value: 'status', sortable: false }
];

const formatTime = (isoString: string) => {
  const date = new Date(isoString);
  date.setSeconds(date.getSeconds() + 1); // 加1秒
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

// Update exams every minute
onMounted(() => {
  const interval = setInterval(() => {
    state.exams = state.exams.map((exam) => ({
      ...exam,
      status: getStatusText(exam)
    }));
  }, 1000); // 1000 ms = 1 second

  onUnmounted(() => {
    clearInterval(interval);
  });
});
</script>

<style scoped>
.text-h5 {
  font-size: 1.8rem !important;
}

.font-weight-bold {
  font-weight: bold;
}

.exam-status-chip {
  font-size: 1.5rem !important;
}
</style>
