<script setup lang="ts">
interface Props {
  title: string
  company: string
  period: string
  description: string
}

defineProps<Props>()
</script>

<template>
  <div class="border-l-2 border-purple-500 pl-4 py-2">
    <h3 class="text-xl text-white">{{ title }}</h3>
    <p class="text-purple-400">{{ company }}</p>
    <p class="text-sm text-gray-400">{{ period }}</p>
    <p class="text-gray-300 mt-2">{{ description }}</p>
  </div>
</template>