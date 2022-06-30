<script setup lang="ts">
import { useCounterStore } from '@/store/counter'

const counter = useCounterStore()
</script>

<template>
  <div class="h-screen bg-gradient-to-r from-green-400 to-blue-500 flex flex-col justify-center items-center">
    <header class="text-5xl font-bold tracking-wide inline-flex text-white">
      <span class="inline-flex "><div class="i-logos-vue" />Vue</span>
      <span class="mx-5 text-slate-100">with</span>
      <span class="inline-flex "><div class="i-logos-vitejs" />vite</span>
      &
      <span class="inline-flex "><div class="i-logos-unocss" />unocss</span>
    </header>
    <main class="mt-10">
      <button btn @click="counter.decrement">
        -
      </button>
      <span class="mx-4 font-bold text-white">{{ counter.count }}</span>
      <button btn @click="counter.increment">
        +
      </button>
    </main>
    <div />
  </div>
</template>
