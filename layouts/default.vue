<template>
  <section>
    <header>
      <nav class="flex items-center">
        <div class="w-48 ml-32">
          <NuxtLink to="/" class="font-poppins text-3xl">-RM *</NuxtLink>
        </div>
        <div class="flex gap-8">
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </div>
      </nav>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </footer>
  </section>
</template>

