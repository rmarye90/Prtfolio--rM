<script setup lang="ts">
import { ref, watch } from 'vue'
import type { BookingTime } from '../types/types' // On va ajouter ce type

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  subject: string
  message: string
}

const props = defineProps<{
  selectedBooking: BookingTime | null
}>()

const formData = ref<FormData>({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref<'success' | 'error' | null>(null)

// Réinitialise le statut quand l'utilisateur modifie le formulaire
watch(formData, () => {
  submitStatus.value = null
}, { deep: true })

const handleSubmit = async () => {
  if (!props.selectedBooking) {
    return
  }

  isSubmitting.value = true
  submitStatus.value = null

  try {
    // Simulation d'un appel API (à remplacer par votre véritable API)
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Ici, vous enverriez les données à votre backend
    console.log('Données envoyées:', {
      ...formData.value,
      bookingDate: props.selectedBooking.date,
      bookingTime: props.selectedBooking.time
    })
    
    submitStatus.value = 'success'
    // Réinitialiser le formulaire
    formData.value = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
  } catch (error) {
    submitStatus.value = 'error'
    console.error('Erreur lors de la soumission:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="booking-form">
    <h3 class="text-xl font-parkinsans text-indigo-400 mb-6">
      Informations de contact
    </h3>

    <!-- Date et heure sélectionnées -->
    <div v-if="selectedBooking" class="mb-6 p-4 bg-indigo-500/10 rounded-lg">
      <p class="text-indigo-300">
        Rendez-vous prévu le:
        {{ new Date(selectedBooking.date).toLocaleDateString('fr-FR', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }) }}
        à {{ selectedBooking.time }}
      </p>
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <!-- Nom et Prénom -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label for="firstName" class="block text-sm font-medium text-gray-300 mb-1">
            Prénom
          </label>
          <input
            id="firstName"
            v-model="formData.firstName"
            type="text"
            required
            class="w-full px-4 py-2 bg-slate-700/50 rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-gray-100"
          />
        </div>
        <div>
          <label for="lastName" class="block text-sm font-medium text-gray-300 mb-1">
            Nom
          </label>
          <input
            id="lastName"
            v-model="formData.lastName"
            type="text"
            required
            class="w-full px-4 py-2 bg-slate-700/50 rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-gray-100"
          />
        </div>
      </div>

      <!-- Email et Téléphone -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-300 mb-1">
            Email
          </label>
          <input
            id="email"
            v-model="formData.email"
            type="email"
            required
            class="w-full px-4 py-2 bg-slate-700/50 rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-gray-100"
          />
        </div>
        <div>
          <label for="phone" class="block text-sm font-medium text-gray-300 mb-1">
            Téléphone
          </label>
          <input
            id="phone"
            v-model="formData.phone"
            type="tel"
            required
            class="w-full px-4 py-2 bg-slate-700/50 rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-gray-100"
          />
        </div>
      </div>

      <!-- Sujet -->
      <div>
        <label for="subject" class="block text-sm font-medium text-gray-300 mb-1">
          Sujet
        </label>
        <input
          id="subject"
          v-model="formData.subject"
          type="text"
          required
          class="w-full px-4 py-2 bg-slate-700/50 rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-gray-100"
        />
      </div>

      <!-- Message -->
      <div>
        <label for="message" class="block text-sm font-medium text-gray-300 mb-1">
          Message
        </label>
        <textarea
          id="message"
          v-model="formData.message"
          rows="4"
          required
          class="w-full px-4 py-2 bg-slate-700/50 rounded-lg border border-gray-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-gray-100 resize-none"
        ></textarea>
      </div>

      <!-- Messages de statut -->
      <div v-if="submitStatus" 
           :class="[
             'p-4 rounded-lg',
             submitStatus === 'success' ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200'
           ]">
        {{ submitStatus === 'success' 
           ? 'Votre demande de rendez-vous a été envoyée avec succès !' 
           : 'Une erreur est survenue. Veuillez réessayer.' }}
      </div>

      <!-- Bouton de soumission -->
      <button
        type="submit"
        :disabled="isSubmitting || !selectedBooking"
        class="w-full px-6 py-3 bg-indigo-500 text-white rounded-lg font-medium transition-colors hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {{ isSubmitting ? 'Envoi en cours...' : 'Confirmer le rendez-vous' }}
      </button>
    </form>
  </div>
</template>