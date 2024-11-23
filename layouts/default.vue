<template>
  <div class="bg-slate-800 h-screen text-stone-100">
    <header>
      <nav class="flex items-center pt-6">
        <div class="w-48 mx-32">
          <NuxtLink to="/" class="font-poppins text-3xl font-bold">-RM *</NuxtLink>
        </div>
        <div class="flex gap-20 font-parkinsans">
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink to="/projects">Projects</NuxtLink>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </div>
      </nav>
    </header>
    <main>
      <slot />
    </main>
    <footer class="font-parkinsans">
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </footer>
  </div>
</template>

