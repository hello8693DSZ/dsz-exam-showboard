<template>
  <main>
    <router-view />
  </main>
</template>

<script setup>
const router = useRouter();
console.log(router.options.routes);
</script>
