<script setup lang="ts">
import ProjectCards from "../components/projectCards.vue";
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
      <div
        class="absolute -right-3 top-36 h-[150px] w-[150px] -translate-y-1/2 rounded-full bg-fuchsia-600/10"
        aria-hidden="true"
      />
      <div
        class="absolute -bottom-1 left-80 h-[250px] w-[250px] -translate-y-1/4 rounded-full bg-pink-600/10"
        aria-hidden="true"
      />
      <ProjectCards />
    </div>
  </section>
</template>

<style scoped>
.h-screen-custom {
  height: calc(100vh - 5rem);
}
</style>
