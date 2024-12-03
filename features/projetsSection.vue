<script setup lang="ts">
import ProjectCards from '../components/projectCards.vue';
</script>

<template>
  <section id="projects" class="scroll-mt-24 h-screen-custom">
    <ProjectCards/>
  </section>
</template>

<style scoped>
.h-screen-custom {
    height: calc(100vh - 5rem);
    }
</style>