<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
const router = useRouter();
console.log(router.options.routes);
</script>
