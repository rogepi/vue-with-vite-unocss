<script setup lang="ts">

</script>

<template>
  <Suspense>
    <router-view />
    <template #fallback>
      loading...
    </template>
  </Suspense>
</template>

<style>

</style>
