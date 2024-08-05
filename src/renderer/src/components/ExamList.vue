<template>
  <v-card class="mx-auto" max-width="600">
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12">
          <v-data-table
            :items="sortedExams"
            :headers="headers"
            item-key="name"
            hide-default-footer
            dense
            class="text-h5"
          >

            <template #header.name>
              <span class="text-h5">科目</span>
            </template>
            <template #header.start>
              <span class="text-h5">开始</span>
            </template>
            <template #header.end>
              <span class="text-h5">结束</span>
            </template>
            <template #header.status>
              <span class="text-h5">状态</span>
            </template>

            <template #item.name="{ item }">
              <div class="text-h5">{{ item.name }}</div>
            </template>
            <template #item.start="{ item }">
              <div class="text-h5">{{ formatTime(item.start) }}</div>
            </template>
            <template #item.end="{ item }">
              <div class="text-h5">{{ formatTime(item.end) }}</div>
            </template>
            <template #item.status="{ item }">
              <v-chip :color="getStatusColor(item)" dark class="exam-status-chip">
                {{ getStatusText(item) }}
              </v-chip>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </v-card>

</template>

<script setup lang="ts">
import { reacive, computed } from 'vue';

const props = defineProps({
  exam: {
    type: Array as () => any[],
    default: () => []
  }
});

// Computed properties and methods
const sortedExams = computed(() => {
  return props.exam.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());
});

const headers = [
  { text: '科目', value: 'name' },
  { text: '开始', value: 'start', sortable: false },
  { text: '结束', value: 'end', sortable: false },
  { text: '状态', value: 'status', sortable: false }
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

  if (now < startTime) return '未开始';
  else if (now >= startTime && now <= endTime) return '进行中';
  else return '已结束';
}
</script>

<style scoped>
.text-h5 {
  font-size: 1.8rem !important;
}

.exam-status-chip {
  font-size: 1.5rem !important;
}
</style>
