<template>
  <div class="container mx-auto px-4 py-12">
    <!-- Section principale avec l'image -->
    <div
      class="flex min-h-[calc(100vh-200px)] items-center justify-between gap-8"
    >
      <!-- Conteneur de gauche pour le texte -->
      <div class="w-1/2 space-y-6">
        <h1 class="font-afterSmile text-9xl">Developpeuse Web</h1>
        <p class="font-parkinsans text-xl text-gray-300">
          Frontend passionné par la création d'expériences numériques
          uniques
        </p>

        <!-- boutons -->
        <div class="flex gap-4 pt-6">
          <NuxtLink
            to="/projects"
            class="rounded-lg bg-indigo-600 px-6 py-3 font-parkinsans transition-colors hover:bg-indigo-700"
          >
            Voir mes projets
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="flex items-center gap-2 rounded-lg border border-gray-600 px-6 py-3 font-parkinsans transition-colors hover:border-gray-500"
          >
            Me contacter
          </NuxtLink>
        </div>
      </div>

      <div class="relative w-1/2">
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
          class="relative z-10 mx-auto h-auto w-full max-w-lg object-contain"
        >

        <!-- Carré flottant -->
        <div
          class="absolute -right-4 top-20 h-12 w-12 animate-float rounded-xl bg-purple-400/20"
          aria-hidden="true"
        />
        <div
          class="absolute -left-20 top-40 h-12 w-12 animate-float rounded-xl bg-indigo-400/20"
          aria-hidden="true"
        />
        <div
          class="absolute right-20 top-100 h-12 w-12 animate-float rounded-xl bg-fuchsia-400/20"
          aria-hidden="true"
        />
      </div>
    </div>
  </div>
</template>
