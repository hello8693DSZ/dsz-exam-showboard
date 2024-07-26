<template>
  <div>
    <h1>测试页面</h1>
    <ExamStatus
      :exam="{
        name: '语文',
        start: '2024-07-25T08:54:52.717Z',
        end: '2024-07-25T08:55:40.428Z'
      }"
    />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
//
</script>
