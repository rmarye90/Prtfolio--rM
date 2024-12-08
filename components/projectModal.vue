<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import type { Project } from "../types/types";

defineProps<{
  isOpen: boolean;
  project: Project;
}>();

const emit = defineEmits<{
  close: [];
}>();
</script>

<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" class="relative z-50" @close="emit('close')">
      <!-- Fond assombri -->
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-900/75 backdrop-blur-sm" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-gray-800 p-6 shadow-xl transition-all"
            >
              <div class="relative">
                <!-- Image du projet -->
                <img
                  :src="project.imageUrl"
                  :alt="project.title"
                  class="mb-6 h-64 w-full rounded-xl object-cover"
                />

                <!-- Badge de statut -->
                <span
                  :class="[
                    'absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm',
                    {
                      'bg-emerald-500/20 text-emerald-200':
                        project.status === 'completed',
                      'bg-amber-500/20 text-amber-200':
                        project.status === 'in-progress',
                      'bg-blue-500/20 text-blue-200':
                        project.status === 'maintenance',
                    },
                  ]"
                >
                  {{ project.status }}
                </span>
              </div>
              <!-- Contenu -->
              <div class="space-y-4">
                <DialogTitle as="h3" class="text-2xl font-semibold text-white">
                  {{ project.title }}
                </DialogTitle>

                <!-- Technologies -->
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in project.technologies"
                    :key="tech"
                    class="rounded-full bg-purple-500/20 px-3 py-1 text-sm text-purple-200"
                  >
                    {{ tech }}
                  </span>
                </div>

                <!-- Description détaillée -->
                <p class="text-gray-300">
                  {{ project.longDescription || project.description }}
                </p>
                <!-- Fonctionnalités si disponibles -->
                <div v-if="project.features?.length" class="space-y-2">
                  <h4 class="text-lg font-medium text-white">
                    Fonctionnalités
                  </h4>
                  <ul class="list-inside list-disc space-y-1 text-gray-300">
                    <li v-for="feature in project.features" :key="feature">
                      {{ feature }}
                    </li>
                  </ul>
                </div>

                <!-- Liens -->
                <div class="mt-6 flex gap-4">
                  <a
                    v-if="project.githubUrl"
                    :href="project.githubUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center rounded-lg bg-purple-500/20 px-4 py-2 text-purple-200 transition-colors duration-300 hover:bg-purple-500/30"
                  >
                    <svg
                      class="mr-2 h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Voir le code
                  </a>
                  <button
                    @click="emit('close')"
                    class="rounded-lg bg-gray-700 px-4 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-600"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
