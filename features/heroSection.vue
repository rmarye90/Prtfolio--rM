<template>
  <div class="container py-12">
    <!-- Section principale avec l'image -->
    <div
      class="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center gap-8"
    >
      <div class="flex h-[720px] items-center gap-8">
        <!-- Conteneur de gauche pour le texte -->
        <div class="w-1/2 space-y-6">
          <h1 class="font-parkinsans text-8xl font-semibold">
            <span
              class="animate-gradient bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              Developpeuse Web
            </span>
          </h1>
          <p class="font-parkinsans text-xl text-gray-300">
            Frontend passionné par la création d'expériences numériques uniques
          </p>

          <!-- boutons -->
          <div class="flex gap-4 pt-6">
            <NuxtLink
              to="/projects"
              class="rounded-xl border-2 border-fuchsia-500 px-6 py-3 font-parkinsans shadow-md transition-colors hover:border-white"
            >
              Voir mes projets
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="flex items-center gap-2 rounded-xl bg-fuchsia-500 px-6 py-3 font-parkinsans transition-colors hover:border-2 hover:border-white hover:bg-transparent"
            >
              Me contacter
            </NuxtLink>
          </div>
        </div>

        <div class="relative h-full w-1/2">
          <!-- Cercle bg image -->
          <div
            class="absolute right-10 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-indigo-600/10"
            aria-hidden="true"
          />
          <div
            class="absolute bottom-0 left-5 h-[400px] w-[400px] -translate-y-1/4 rounded-full bg-purple-600/10"
            aria-hidden="true"
          />
          <!-- Iamge perso -->
          <img
            src="../assets/meTwo.png"
            alt="Photo de profil"
            class="relative z-10 mx-auto h-full w-full max-w-lg object-contain"
          />

          <!-- Cube flottant -->
          <CubeFloat
            class="w-12rounded-xl -right-4 top-20 h-12 bg-purple-400/20"
            aria-hidden="true"
          />
          <CubeFloat
            class="-left-10 top-40 h-12 w-12 rounded-xl bg-indigo-400/20"
            aria-hidden="true"
          />
          <CubeFloat
            class="top-100 right-20 h-12 w-12 rounded-xl bg-fuchsia-400/20"
            aria-hidden="true"
          />
        </div>
      </div>
      <!-- flèche -->
      <div
        class="absolute bottom-4 flex w-full justify-center transition-opacity duration-300"
        :style="{ opacity: arrowOpacity }"
      >
        <NuxtLink to="#projects">
          <Icon
            name="memory:arrow-down-bold"
            class="h-16 w-16 animate-bounce text-purple-400"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core";
import { computed } from "vue";
import CubeFloat from "../components/cubeFloat.vue";

// Récupère la position du scroll
const { y } = useWindowScroll();

// Calcule l'opacité de la flèche en fonction du scroll
const arrowOpacity = computed(() => {
  // On commence à faire disparaître la flèche après 100px de scroll
  const scrollThreshold = 100;
  // La flèche disparaît complètement après 300px de scroll
  const fadeOutDistance = 300;

  // Si le scroll est inférieur au seuil, l'opacité reste à 1
  if (y.value < scrollThreshold) return 1;

  // Si le scroll dépasse la distance de fadeOut, l'opacité est à 0
  if (y.value > fadeOutDistance) return 0;

  // Entre les deux, on calcule une opacité progressive
  return 1 - (y.value - scrollThreshold) / (fadeOutDistance - scrollThreshold);
});
</script>

<style>
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-gradient {
  background-size: 200% auto;
  animation: gradient 4s linear infinite;
}

.h-screen-custom {
  height: calc(100vh - 5rem);
}
</style>
