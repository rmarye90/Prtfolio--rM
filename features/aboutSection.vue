<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/20/solid";
import SkillsSection from "../components/skills/SkillsSection.vue";
import ExperienceCard from "../components/experience/ExperienceCard.vue";
import CertificationSection from "../components/CertificationSection.vue";
import OpenSourceSection from "../components/OpenSourceSection.vue";
import type { Experience, SkillsData, Contribution } from "../types/types";

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
];

const contributions: Contribution[] = [
  {
    projectName: "Nuxt.js",
    projectUrl: "https://github.com/nuxt/nuxt",
    description: "Amélioration de la documentation française du framework",
    contributionType: "documentation",
    pullRequestUrl: "https://github.com/nuxt/nuxt/pull/...",
    dateContributed: "Janvier 2024",
  },
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
          class="absolute right-[220px] top-[26rem] h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-indigo-600/10"
          aria-hidden="true"
        />
        <div
          class="bottom-30 absolute -left-[64px] h-[400px] w-[400px] -translate-y-1/4 rounded-full bg-purple-600/10"
          aria-hidden="true"
        />
        <div
          class="absolute right-[10rem] top-[35rem] h-[150px] w-[150px] -translate-y-1/2 rounded-full bg-fuchsia-600/10"
          aria-hidden="true"
        />
        <div
          class="absolute -bottom-[128px] left-[224px] h-[250px] w-[250px] -translate-y-1/4 rounded-full bg-pink-600/10"
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
          class="-bottom-20 right-20 bg-fuchsia-400/20 hover:bg-fuchsia-400/30"
          aria-hidden="true"
        />
        <CubeFloat
          class="-bottom-5 right-96 bg-pink-400/20 hover:bg-pink-400/30"
          aria-hidden="true"
        />
        <CubeFloat
          class="right-80 top-8 bg-fuchsia-800/20 hover:bg-fuchsia-800/30"
          aria-hidden="true"
        />
      </div>
      <!-- Contenu principal -->
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <!-- Colonne gauche -->
        <div class="space-y-6">
          <Disclosure
            v-slot="{ open }"
            as="div"
            class="rounded-xl bg-slate-700/50"
            defaultOpen
          >
            <DisclosureButton
              class="flex w-full justify-between rounded-lg px-6 py-4 text-left"
            >
              <h2 class="font-parkinsans text-2xl text-purple-400">
                Mon parcours
              </h2>
              <ChevronUpIcon
                :class="[
                  open ? 'rotate-180 transform' : '',
                  'h-6 w-6 text-purple-400',
                ]"
              />
            </DisclosureButton>
            <DisclosurePanel class="px-6 pb-6">
              <p class="leading-relaxed text-gray-300">
                Votre histoire, votre passion pour le développement web, et ce
                qui vous motive.
              </p>
            </DisclosurePanel>
          </Disclosure>

          <Disclosure
            v-slot="{ open }"
            as="div"
            class="rounded-xl bg-slate-700/50"
          >
            <DisclosureButton
              class="flex w-full justify-between rounded-lg px-6 py-4 text-left"
            >
              <h2 class="font-parkinsans text-2xl text-purple-400">
                Expérience
              </h2>
              <ChevronUpIcon
                :class="[
                  open ? 'rotate-180 transform' : '',
                  'h-6 w-6 text-purple-400',
                ]"
              />
            </DisclosureButton>
            <DisclosurePanel class="px-6 pb-6">
              <div class="space-y-4">
                <ExperienceCard
                  v-for="exp in experiences"
                  :key="exp.title"
                  v-bind="exp"
                />
              </div>
            </DisclosurePanel>
          </Disclosure>
          <!-- Competences -->

          <Disclosure
            v-slot="{ open }"
            as="div"
            class="rounded-xl bg-slate-700/50"
          >
            <DisclosureButton
              class="flex w-full justify-between rounded-lg px-6 py-4 text-left"
            >
              <h2 class="font-parkinsans text-2xl text-purple-400">
                Certifications
              </h2>

              <ChevronUpIcon
                :class="[
                  open ? 'rotate-180 transform' : '',
                  'h-6 w-6 text-purple-400',
                ]"
              />
            </DisclosureButton>
            <DisclosurePanel class="px-6 pb-6">
              <CertificationSection :certifications="certifications" />
            </DisclosurePanel>
          </Disclosure>
          <OpenSourceSection :contributions="contributions" />
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
    </div>
  </section>
</template>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
