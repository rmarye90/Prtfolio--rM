<script setup lang="ts">
import ProjectCards from '../components/projectCards.vue';
</script>

<template>
  <!--components projectsCards-->
  <section id="projects" class="scroll-mt-24 h-screen-custom">
  <!-- Cercle bg image -->
    <div class="relative">
        <div
          class="absolute right-10 top-72 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-indigo-600/10"
          aria-hidden="true"
        />
        <div
          class="absolute -bottom-32 left-5 h-[400px] w-[400px] -translate-y-1/4 rounded-full bg-purple-600/10"
          aria-hidden="true"
        />
    <ProjectCards/>
    </div>
  </section>
</template>

<style scoped>
.h-screen-custom {
    height: calc(100vh - 5rem);
    }
</style>