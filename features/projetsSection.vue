<script setup lang="ts">
import CubeFloat from "../components/cubeFloat.vue";
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
      <!-- cube flottant -->
      <CubeFloat
        class="left-96 top-36 bg-purple-400/20 hover:bg-purple-400/30"
        aria-hidden="true"
      />
      <CubeFloat
        class="left-60 top-10 bg-indigo-400/20 hover:bg-indigo-400/30"
        aria-hidden="true"
      />
      <CubeFloat
        class="right-20 -bottom-10 bg-fuchsia-400/20 hover:bg-fuchsia-400/30"
        aria-hidden="true"
      />
      <CubeFloat
        class="right-96 bottom-10 bg-pink-400/20 hover:bg-pink-400/30"
        aria-hidden="true"
      />
      <CubeFloat
        class="right-80 top-8 bg-fuchsia-800/20 hover:bg-fuchsia-800/30"
        aria-hidden="true"
      />
      <!--component cards projects-->
      <ProjectCards />
    </div>
  </section>
</template>

<style scoped>
.h-screen-custom {
  height: calc(100vh - 5rem);
}
</style>
