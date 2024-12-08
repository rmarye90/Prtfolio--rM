<script setup lang="ts">
interface Props {
  name: string
  icon: string
}

defineProps<Props>()
</script>

<template>
  <div class="group flex flex-col items-center justify-center p-4 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300">
    <Icon 
      :name="icon" 
      class="w-12 h-12 mb-2 transition-transform duration-300 group-hover:scale-110"
    />
    <span class="text-sm text-gray-300 text-center">{{ name }}</span>
  </div>
</template>