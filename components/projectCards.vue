# Fichier: /components/projectCards.vue

<template>
  <div class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h1 class="text-4xl font-semibold font-parkinsans tracking-tight text-indigo-500 sm:text-5xl">
          My Projects
        </h1>
      </div>
      <div class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article 
          v-for="post in posts" 
          :key="post.id" 
          class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 group transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20"
        >
          <!-- Image avec effet de zoom au hover -->
          <img 
            :src="post.imageUrl" 
            :alt="post.title"
            class="absolute inset-0 -z-10 size-full object-cover transition-transform duration-300 group-hover:scale-110"
          >

          <!-- Dégradé amélioré -->
          <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/60 to-gray-900/20 transition-opacity duration-300 group-hover:opacity-90" />
          
          <!-- Bordure avec effet de brillance -->
          <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-purple-500/20 group-hover:ring-purple-500/40 transition-all duration-300" />

          <div class="flex flex-col gap-2 transition-transform duration-300 group-hover:translate-y-2">
            <!-- Techno utilisées -->
            <div class="flex gap-2 flex-wrap">
              <span 
                v-for="tech in post.technologies" 
                :key="tech"
                class="px-2 py-1 text-xs rounded-full bg-purple-500/20 text-purple-200 backdrop-blur-sm"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Titre -->
            <h2 class="text-xl font-semibold text-white">
              {{ post.title }}
            </h2>

            <!-- Description du projet-->
            <p class="text-sm text-gray-300 line-clamp-2">
              {{ post.description }}
            </p>

            <!-- Lien vers le projet -->
            <a 
              :href="post.href"
              class="mt-4 inline-flex items-center text-purple-400 text-sm hover:text-purple-300 transition-colors duration-300"
            >
              Voir le projet
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Project {
  id: number;
  title: string;
  href: string;
  description: string;
  imageUrl: string;
  technologies: string[];
}

const posts: Project[] = [
  {
    id: 1,
    title: 'My Blog',
    href: '#',
    description: 'Un blog personnel créé avec Vue 3 et Nuxt, utilisant Tailwind CSS pour le style et Markdown pour le contenu.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?q=80&w=3209&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['Vue 3', 'Nuxt', 'Tailwind CSS', 'TypeScript'],
  },
  {
    id: 2,
    title: 'Under construction',
    href: '#',
    description: 'Under construction',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1721830791498-ec809d9d94ec?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['Coming Soon'],
  },
  {
    id: 3,
    title: 'Under construction',
    href: '#',
    description: 'Under construction',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1721830791498-ec809d9d94ec?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['Coming Soon'],
  },
]
</script>