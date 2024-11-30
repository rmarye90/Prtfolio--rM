<template>
    <div id="contact" class="container mx-auto px-4 py-12">
        <h1 class="font-parkinsans text-8xl">
            <span
                class="animate-gradient bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
                Contactez-moi
            </span>
        </h1>
        <p class="font-parkinsans text-xl text-gray-300">
            Je suis disponible pour des questions et des conseils
        </p>

        <!-- boutons -->
        <div class="flex gap-4 pt-6">
            <NuxtLink
                to="/projects"
                class="rounded-xl border-fuchsia-500 border-2 px-6 py-3 font-parkinsans transition-colors hover:border-white shadow-md"
            >
                Voir mes projets
            </NuxtLink>
            <NuxtLink
                to="/contact"
                class="flex items-center gap-2 rounded-xl px-6 py-3 font-parkinsans transition-colors hover:bg-transparent hover:border-white hover:border-2 bg-fuchsia-500"
            >
                Me contacter
            </NuxtLink>
        </div>
    </div>
</template>