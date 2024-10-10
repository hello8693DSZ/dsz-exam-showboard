<template>
  <v-app>
    <AppTopBar />
    <v-main class="no-scrollbar">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
//
</script>

<style scoped>
.no-scrollbar {
  overflow: hidden;
}
</style>
