<script setup lang="ts">
import { ref, computed } from 'vue'

const emit = defineEmits<{
  (e: 'dateSelected', booking: { date: Date; time: string }): void
}>()

const currentDate = ref(new Date())
const selectedDate = ref<Date | null>(null)
const selectedTime = ref<string | null>(null)

// Heures disponibles (vous pouvez les adapter selon vos besoins)
const availableHours = [
  '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'
]

// Calcul des jours du mois
const daysInMonth = computed(() => {
  const year = currentDate.value.getFullYear()
  const month = currentDate.value.getMonth()
  return new Date(year, month + 1, 0).getDate()
})

// Calcul du premier jour du mois (0 = Dimanche, 1 = Lundi, etc.)
const firstDayOfMonth = computed(() => {
  const year = currentDate.value.getFullYear()
  const month = currentDate.value.getMonth()
  return new Date(year, month, 1).getDay()
})

// Navigation dans le calendrier
const previousMonth = () => {
  currentDate.value = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth() - 1
  )
}

const nextMonth = () => {
  currentDate.value = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth() + 1
  )
}

const selectDate = (day: number) => {
  const date = new Date(
    currentDate.value.getFullYear(),
    currentDate.value.getMonth(),
    day
  )
  selectedDate.value = date
  selectedTime.value = null
}

const selectTime = (time: string) => {
  if (selectedDate.value) {
    selectedTime.value = time
    emit('dateSelected', {
      date: selectedDate.value,
      time
    })
  }
}
</script>

<template>
    <div class="calendar-container">
      <!-- En-tête du calendrier -->
      <div class="flex justify-between items-center mb-6">
        <button @click="previousMonth" 
                class="p-2 hover:bg-indigo-500/20 rounded-lg transition-colors">
          <Icon name="lucide:chevron-left" class="w-6 h-6"/>
        </button>
        <h2 class="text-xl font-parkinsans text-indigo-400">
          {{ currentDate.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' }) }}
        </h2>
        <button @click="nextMonth" 
                class="p-2 hover:bg-indigo-500/20 rounded-lg transition-colors">
          <Icon name="lucide:chevron-right" class="w-6 h-6"/>
        </button>
      </div>
  
      <!-- Grille des jours -->
      <div class="grid grid-cols-7 gap-1 mb-4">
        <!-- Jours de la semaine -->
        <template v-for="day in ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']">
          <div class="text-center text-sm font-medium text-gray-400 py-2">
            {{ day }}
          </div>
        </template>
  
        <!-- Cases vides pour l'alignement -->
        <div v-for="_ in firstDayOfMonth" 
             class="aspect-square"></div>
  
        <!-- Jours du mois -->
        <button v-for="day in daysInMonth" 
                :key="day"
                @click="selectDate(day)"
                :class="[
                  'aspect-square rounded-lg flex items-center justify-center transition-colors',
                  selectedDate && day === selectedDate.getDate() 
                    ? 'bg-indigo-500 text-white' 
                    : 'hover:bg-indigo-500/20'
                ]">
          {{ day }}
        </button>
      </div>
  
      <!-- Sélection de l'heure -->
      <div v-if="selectedDate" class="mt-6">
        <h3 class="text-lg font-parkinsans text-indigo-400 mb-4">
          Créneaux disponibles
        </h3>
        <div class="grid grid-cols-3 gap-2">
          <button v-for="time in availableHours" 
                  :key="time"
                  @click="selectTime(time)"
                  :class="[
                    'py-2 px-4 rounded-lg text-sm transition-colors',
                    selectedTime === time 
                      ? 'bg-indigo-500 text-white'
                      : 'hover:bg-indigo-500/20'
                  ]">
            {{ time }}
          </button>
        </div>
      </div>
    </div>
  </template>