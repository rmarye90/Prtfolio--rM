# Fichier: /components/projectCards.vue

<template>
  <div class="py-12 sm:py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h1
          class="!text-8xl font-semibold font-parkinsans tracking-tight text-indigo-500 sm:text-5xl"
        >
          My Projects
        </h1>
      </div>
      <div
        class="mx-auto mt-8 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <article
          v-for="post in posts"
          :key="post.id"
          class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 group transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20"
        >
          <!-- Badge de statut -->
          <div class="absolute top-4 left-4 z-10">
            <span
              :class="[
                'px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm',
                {
                  'bg-emerald-500/20 text-emerald-200':
                    post.status === 'completed',
                  'bg-amber-500/20 text-amber-200':
                    post.status === 'in-progress',
                  'bg-blue-500/20 text-blue-200': post.status === 'maintenance',
                },
              ]"
            >
              {{ getStatusText(post.status) }}
            </span>
          </div>
          <!-- Image avec effet de zoom au hover -->
          <img
            :src="post.imageUrl"
            :alt="post.title"
            class="absolute inset-0 -z-10 size-full object-cover transition-transform duration-300 group-hover:scale-110"
          />

          <!-- Dégradé amélioré -->
          <div
            class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/60 to-gray-900/20 transition-opacity duration-300 group-hover:opacity-90"
          />

          <!-- Bordure avec effet de brillance -->
          <div
            class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-purple-500/20 group-hover:ring-purple-500/40 transition-all duration-300"
          />

          <div
            class="flex flex-col gap-2 transition-transform duration-300 group-hover:translate-y-2"
          >
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

            <!-- Liens -->
            <div class="mt-4 flex items-center gap-4">
              <a
                :href="post.href"
                class="inline-flex items-center text-purple-400 text-sm hover:text-purple-300 transition-colors duration-300"
              >
                Voir le projet
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
              <!-- Lien GitHub -->
              <a
                v-if="post.githubUrl"
                :href="post.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center text-gray-400 text-sm hover:text-gray-300 transition-colors duration-300"
              >
                <svg
                  class="h-5 w-5 mr-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  />
                </svg>
                Code source
              </a>
            </div>
          </div>
          <div class="mt-4 flex items-center gap-4">
            <!-- Ajoutez ce bouton -->
            <button
              @click="openModal(post)"
              class="inline-flex items-center text-blue-400 text-sm hover:text-blue-300 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              Aperçu
            </button>
            <!-- ... autres liens existants ... -->
          </div>
        </article>

        <!-- Ajoutez la modale -->
        <ProjectModal
          v-if="selectedProject"
          :is-open="isModalOpen"
          :project="selectedProject"
          @close="isModalOpen = false"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Project } from "../types/types";
import ProjectModal from "./projectModal.vue";

const selectedProject = ref<Project | null>(null);
const isModalOpen = ref(false);

const openModal = (project: Project) => {
  selectedProject.value = project;
  isModalOpen.value = true;
};

const getStatusText = (status: string) => {
  switch (status) {
    case "completed":
      return "Terminé";
    case "in-progress":
      return "En cours";
    case "maintenance":
      return "En maintenance";
    default:
      return status;
  }
};

const posts: Project[] = [
  {
    id: 1,
    title: "My Blog",
    href: "#",
    description:
      "Un blog personnel créé avec Vue 3 et Nuxt, utilisant Tailwind CSS pour le style et Markdown pour le contenu.",
    longDescription:
      "Une plateforme de blog moderne construite avec Vue 3 et Nuxt 3. Ce projet utilise Tailwind CSS pour un design responsive et élégant, et TypeScript pour une meilleure maintenabilité du code.",
    features: [
      "Édition de contenu en Markdown",
      "Thème sombre/clair",
      "Recherche full-text",
      "Commentaires en temps réel",
    ],
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?q=80&w=3209&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Vue 3", "Nuxt", "Tailwind CSS", "TypeScript"],
    status: "in-progress",
    githubUrl: "https://github.com/rmarye90/myBlog",
  },
  {
    id: 2,
    title: "Under construction",
    href: "#",
    description: "Under construction",
    longDescription: "Under construction",
    features: ["Under construction"],
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1721830791498-ec809d9d94ec?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Coming Soon"],
    status: "in-progress",
    githubUrl: "https://github.com/maryem/under-construction",
  },
  {
    id: 3,
    title: "Under construction",
    href: "#",
    description: "Under construction",
    longDescription: "Under construction",
    features: ["Under construction"],
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1721830791498-ec809d9d94ec?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["Coming Soon"],
    status: "in-progress",
    githubUrl: "https://github.com/maryem/under-construction",
  },
];
</script>
