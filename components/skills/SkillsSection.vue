<script setup lang="ts">
import SkillCard from './SkillCard.vue'

interface Skill {
  name: string
  icon: string
  category: 'frontend' | 'backend' | 'tools' | 'other'
}

interface Props {
  title: string
  skills: Skill[]
}

defineProps<Props>()
</script>

<template>
  <div class="bg-slate-700/50 rounded-xl p-6 backdrop-blur-sm">
    <h2 class="text-2xl font-parkinsans text-purple-400 mb-6">{{ title }}</h2>
    <div class="grid grid-cols-3 sm:grid-cols-4 gap-6">
      <SkillCard 
        v-for="skill in skills" 
        :key="skill.name"
        :name="skill.name"
        :icon="skill.icon"
      />
    </div>
  </div>
</template>