<script setup lang="ts">
import { ref } from 'vue'
import Calendar from '../components/Calendar.vue'
import BookingForm from '../components/BookingForm.vue'

interface BookingTime {
  date: Date;
  time: string;
}

const selectedBooking = ref<BookingTime | null>(null)

const handleDateSelect = (booking: BookingTime) => {
  selectedBooking.value = booking
}
</script>

<template>
  <section id="contact" class="scroll-mt-24 min-h-screen">
    <div class="container mx-auto px-4 py-16">
      <!-- Titre -->
      <div class="mx-auto max-w-2xl text-center mb-16">
        <h1 class="text-4xl font-semibold font-parkinsans tracking-tight text-indigo-500 sm:text-5xl">
          Prenons contact
        </h1>
        <p class="mt-4 text-lg text-gray-300">
          Réservez un créneau pour discuter de votre projet
        </p>
      </div>

      <!-- Background elements -->
      <div class="relative">
        <div class="absolute right-10 top-0 h-[400px] w-[400px] rounded-full bg-indigo-600/10" 
             aria-hidden="true" />
        <div class="absolute left-5 bottom-0 h-[400px] w-[400px] rounded-full bg-purple-600/10" 
             aria-hidden="true" />
             
        <!-- Cubes flottants -->
        <CubeFloat class="left-20 top-10 bg-purple-400/20 hover:bg-purple-400/30" />
        <CubeFloat class="right-40 bottom-20 bg-indigo-400/20 hover:bg-indigo-400/30" />

        <!-- Contenu principal -->
        <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Calendrier -->
          <div class="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
            <Calendar @date-selected="handleDateSelect" />
          </div>

          <!-- Formulaire -->
          <div class="bg-slate-700/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
            <BookingForm :selected-booking="selectedBooking" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
