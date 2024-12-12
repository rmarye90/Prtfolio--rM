<script setup lang="ts">
interface Contribution {
  projectName: string
  projectUrl: string
  description: string
  contributionType: 'code' | 'documentation' | 'bug-fix' | 'feature'
  pullRequestUrl?: string
  dateContributed: string
}

interface Props {
  contributions: Contribution[]
}

defineProps<Props>()
</script>

<template>
  <div class="bg-slate-700/50 rounded-xl p-6 backdrop-blur-sm">
    <h2 class="text-2xl font-parkinsans text-purple-400 mb-6">Contributions Open Source</h2>
    <div class="space-y-4">
      <div v-for="contrib in contributions" 
           :key="contrib.projectName"
           class="bg-slate-800/50 rounded-lg p-4 hover:bg-slate-800/70 transition-all duration-300">
        <div class="flex items-center justify-between mb-2">
          <a :href="contrib.projectUrl" 
             target="_blank" 
             rel="noopener noreferrer"
             class="text-lg font-medium text-white hover:text-purple-400 transition-colors">
            {{ contrib.projectName }}
          </a>
          <span class="text-sm text-gray-400">{{ contrib.dateContributed }}</span>
        </div>
        <p class="text-gray-300 mb-3">{{ contrib.description }}</p>
        <div class="flex items-center justify-between">
          <span :class="[
            'text-xs px-2 py-1 rounded-full',
            {
              'bg-green-500/20 text-green-200': contrib.contributionType === 'feature',
              'bg-blue-500/20 text-blue-200': contrib.contributionType === 'code',
              'bg-purple-500/20 text-purple-200': contrib.contributionType === 'documentation',
              'bg-red-500/20 text-red-200': contrib.contributionType === 'bug-fix',
            }
          ]">
            {{ contrib.contributionType }}
          </span>
          <a v-if="contrib.pullRequestUrl" 
             :href="contrib.pullRequestUrl"
             target="_blank" 
             rel="noopener noreferrer"
             class="text-sm text-indigo-400 hover:text-indigo-300 transition-colors flex items-center">
            <Icon name="mdi:git-pull-request" class="w-4 h-4 mr-1" />
            Voir le PR
          </a>
        </div>
      </div>
    </div>
  </div>
</template>