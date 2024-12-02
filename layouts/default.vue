<template>
  <!-- Container principal -->
  <div class="bg-slate-800 h-screen text-stone-100">
    <!-- Header -->
    <header class="fixed top-0 w-full bg-slate-800/95 backdrop-blur-sm z-50">
      <nav class="flex h-20 items-center justify-between px-12">
        <div class="relative w-1/4">
          <NuxtLink to="/" class="group relative flex items-center w-full">
            <NuxtImg
              src="/logo.png"
              alt="logo"
              width="150px"
              class="relative z-10 transition-transform hover:scale-105"
            />
          </NuxtLink>
          <span class="absolute -bottom-1 left-0 h-3 w-0 bg-indigo-500/20 transition-all duration-300 group-hover:w-full" />
        </div>
        <div class="flex-1 flex justify-center font-parkinsans">
          <div class="flex gap-20">
            <NuxtLink
              v-for="link in navigationLinks"
              :key="link.path"
              :to="link.path"
              class="group relative overflow-hidden"
            >
              <span class="relative z-10">{{ link.name }}</span>
              <span
                class="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full"
              />
            </NuxtLink>
          </div>
        </div>
        <!--réseaux sociaux -->
        <div class="w-1/4 flex justify-end gap-6">
          <a
            href="https://github.com/rmarye90"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-purple-400"
          >
            <Icon name="lucide:github" size="24" />
          </a>
          <a
            href="https://linkedin.com/in/maryline-renaud"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-purple-400"
          >
            <Icon name="lucide:linkedin" size="24" />
          </a>
          <a
            href="https://twitter.com/Maryline_R412"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-purple-400"
          >
            <Icon name="lucide:twitter" size="24" />
          </a>
        </div>
      </nav>
    </header>
    <main class="bg-slate-800">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
const navigationLinks = [
  { name: "Projects", path: "#projects" },
  { name: "About", path: "#about" },
  { name: "Contact", path: "#contact" },
];

</script>
