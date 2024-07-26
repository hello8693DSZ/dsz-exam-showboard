<template>
  <p>跳转首页中</p>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

const router = useRouter();

onMounted(() => {
  // 当组件挂载完成后，自动跳转到'/mainWindow'
  router.push('/mainWindow');
});
</script>
