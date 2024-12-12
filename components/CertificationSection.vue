<script setup lang="ts">
interface Certification {
  title: string
  platform: string
  date: string
  imageUrl: string
  verificationUrl: string
  skills: string[]
}

interface Props {
  certifications: Certification[]
}

defineProps<Props>()
</script>

<template>
  <div class="bg-slate-700/50 rounded-xl p-6 backdrop-blur-sm">
    <h2 class="text-2xl font-parkinsans text-purple-400 mb-6">Certifications</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div v-for="cert in certifications" 
           :key="cert.title"
           class="bg-slate-800/50 rounded-lg p-4 hover:bg-slate-800/70 transition-all duration-300">
        <div class="flex items-start gap-4">
          <img :src="cert.imageUrl" 
               :alt="cert.platform" 
               class="w-12 h-12 object-contain">
          <div class="flex-1">
            <h3 class="text-lg font-medium text-white">{{ cert.title }}</h3>
            <p class="text-purple-400">{{ cert.platform }}</p>
            <p class="text-sm text-gray-400">{{ cert.date }}</p>
            <div class="mt-2 flex flex-wrap gap-2">
              <span v-for="skill in cert.skills" 
                    :key="skill"
                    class="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-200">
                {{ skill }}
              </span>
            </div>
            <a :href="cert.verificationUrl" 
               target="_blank" 
               rel="noopener noreferrer"
               class="inline-flex items-center mt-3 text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
              <Icon name="heroicons:badge-check" class="w-4 h-4 mr-1" />
              Vérifier la certification
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>