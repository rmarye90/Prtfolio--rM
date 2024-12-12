<script setup lang="ts">
import SkillsSection from "../components/skills/SkillsSection.vue";
import ExperienceCard from "../components/experience/ExperienceCard.vue";
import CertificationSection from "../components/CertificationSection.vue";
import OpenSourceSection from "../components/OpenSourceSection.vue";
import type { Experience, SkillsData } from "../types/types";

const certifications = [
  {
    title: "Vue.js 3 Advanced",
    platform: "Vue School",
    date: "Décembre 2023",
    imageUrl:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+PHBhdGggZmlsbD0ibm9uZSIgZD0ibTAgOC45MzRsNDkuODU0LjE1OGwxNC4xNjcgMjQuNDdsMTQuNDMyLTI0LjQ3TDEyOCA4LjkzNWwtNjMuODM0IDExMC4xNHptMTI2Ljk4LjYzN2wtMjQuMzYuMDJsLTM4LjQ3NiA2Ni4wNTNMMjUuNjkxIDkuNTkyTC45NDIgOS41NzJsNjMuMjExIDEwNy44OXptLTI1LjE0OS0uMDA4bC0yMi43NDUuMTY4bC0xNS4wNTMgMjQuNjQ3TDQ5LjIxNiA5LjczbC0yMi43OTQtLjE2OGwzNy43MzEgNjQuNDc2em0tNzUuODM0LS4xN2wyMy4wMDIuMDA5bS0yMy4wMDItLjAxbDIzLjAwMi4wMSIvPjxwYXRoIGZpbGw9IiMzNTQ5NWUiIGQ9Im0yNS45OTcgOS4zOTNsMjMuMDAyLjAwOUw2NC4wMzUgMzQuMzZMNzkuMDE4IDkuNDA0TDEwMiA5LjM5OEw2NC4xNSA3NS4wNTN6Ii8+PHBhdGggZmlsbD0iIzQxYjg4MyIgZD0ibS45MSA5LjU2OWwyNS4wNjctLjE3MmwzOC4xNSA2NS42NTlMMTAxLjk4IDkuNDAxbDI1LjExLjAyNmwtNjIuOTY2IDEwOC4wNnoiLz48L3N2Zz4=",
    verificationUrl: "https://vueschool.io/certificates/...",
    skills: ["Vue.js", "Composition API", "TypeScript"],
  },
  // Ajoutez vos autres certifications
];

const contributions = [
  {
    projectName: "Nuxt.js",
    projectUrl: "https://github.com/nuxt/nuxt",
    description: "Amélioration de la documentation française du framework",
    contributionType: "documentation",
    pullRequestUrl: "https://github.com/nuxt/nuxt/pull/...",
    dateContributed: "Janvier 2024",
  },
  // Ajoutez vos autres contributions
];

const skillsData: SkillsData = {
  frontend: [
    {
      name: "HTML5",
      icon: "vscode-icons:file-type-html",
      category: "frontend",
    },
    { name: "CSS3", icon: "vscode-icons:file-type-css", category: "frontend" },
    {
      name: "Nuxt.js",
      icon: "vscode-icons:file-type-nuxt",
      category: "frontend",
    },
    {
      name: "Vue.js",
      icon: "vscode-icons:file-type-vue",
      category: "frontend",
    },
    {
      name: "TypeScript",
      icon: "vscode-icons:file-type-typescript-official",
      category: "frontend",
    },
    {
      name: "Tailwind CSS",
      icon: "vscode-icons:file-type-tailwind",
      category: "frontend",
    },
  ],
  tools: [
    { name: "Git", icon: "mdi:git", category: "tools" },
    {
      name: "VS Code",
      icon: "vscode-icons:file-type-vscode",
      category: "tools",
    },
    { name: "pnpm", icon: "vscode-icons:file-type-pnpm", category: "tools" },
  ],
};

// Data qui pourrait être déplacée dans un composable useExperiences
const experiences: Experience[] = [
  {
    title: "Développeuse Frontend",
    company: "Nom de l'entreprise",
    period: "2023 - Présent",
    description: "Description de votre rôle et responsabilités",
  },
];
</script>

<template>
  <section id="about" class="min-h-screen scroll-mt-24 py-24">
    <div class="container mx-auto px-6">
      <!-- En-tête -->
      <div class="mx-auto mb-16 max-w-2xl text-center">
        <h1
          class="font-parkinsans text-4xl font-semibold tracking-tight text-indigo-500 sm:text-5xl"
        >
          À propos de moi
        </h1>
        <p class="mt-4 text-lg text-gray-300">
          Passionnée par le développement web et la création d'expériences
          numériques
        </p>
      </div>
      <!-- Cercle bg image -->
      <div class="relative">
        <div
          class="absolute right-[30rem] top-[26rem] h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-indigo-600/10"
          aria-hidden="true"
        />
        <div
          class="bottom-30 absolute -left-16 h-[400px] w-[400px] -translate-y-1/4 rounded-full bg-purple-600/10"
          aria-hidden="true"
        />
        <div
          class="absolute right-[27rem] top-[35rem] h-[150px] w-[150px] -translate-y-1/2 rounded-full bg-fuchsia-600/10"
          aria-hidden="true"
        />
        <div
          class="absolute -bottom-32 left-56 h-[250px] w-[250px] -translate-y-1/4 rounded-full bg-pink-600/10"
          aria-hidden="true"
        />
      </div>
      <!-- Contenu principal -->
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <!-- Colonne gauche -->
        <div class="space-y-6">
          <div class="rounded-xl bg-slate-700/50 p-6 backdrop-blur-sm">
            <h2 class="mb-4 font-parkinsans text-2xl text-purple-400">
              Mon parcours
            </h2>
            <p class="leading-relaxed text-gray-300">
              Votre histoire, votre passion pour le développement web, et ce qui
              vous motive.
            </p>
          </div>

          <div class="rounded-xl bg-slate-700/50 p-6 backdrop-blur-sm">
            <h2 class="mb-4 font-parkinsans text-2xl text-purple-400">
              Expérience
            </h2>
            <div class="space-y-4">
              <ExperienceCard
                v-for="exp in experiences"
                :key="exp.title"
                v-bind="exp"
              />
            </div>
          </div>
          <!-- Competences -->
          <div class="mt-12 space-y-12">
            <CertificationSection :certifications="certifications" />
            <OpenSourceSection :contributions="contributions" />
          </div>
        </div>

        <!-- Colonne droite -->
        <div class="space-y-6">
          <SkillsSection
            title="Technologies Frontend"
            :skills="skillsData.frontend"
          />
          <SkillsSection title="Outils" :skills="skillsData.tools" />
        </div>
      </div>

      <!-- Éléments décoratifs -->
      <div class="relative">
        <CubeFloat class="absolute -top-10 left-20 bg-purple-400/20" />
        <CubeFloat class="absolute -top-36 left-96 bg-indigo-400/20" />
        <CubeFloat
          class="absolute bottom-[43rem] right-[10rem] bg-fuchsia-400/20"
        />
      </div>
    </div>
  </section>
</template>
