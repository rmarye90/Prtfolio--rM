<script setup lang="ts">
import SkillsSection from "../components/skills/SkillsSection.vue";
import ExperienceCard from "../components/experience/ExperienceCard.vue";
import  type { Experience, SkillsData } from "../types/types";


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
      </div>
    </div>
  </section>
</template>
