<template>
  <div class="bg-slate-800 h-screen text-stone-100">
    <header class="fixed top-0 w-full bg-slate-800/95 backdrop-blur-sm z-50">
      <nav class="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
      <div class="relative">
        <NuxtLink 
          to="/" 
          class="group relative font-poppins text-3xl font-bold"
        >
          <span class="relative z-10">-RM *</span>
          <span 
            class="absolute -bottom-1 left-0 h-3 w-0 bg-indigo-500/20 
            transition-all duration-300 group-hover:w-full"
          />
        </NuxtLink>
        
      </div>
        <div class="flex gap-20 font-parkinsans">
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink to="/projects">Projects</NuxtLink>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </div>
        <!--réseaux sociaux -->
        <div class="flex gap-6">
          <a href="https://github.com/rmarye90" target="_blank" rel="noopener noreferrer" class="hover:text-purple-400">
            <Icon name="lucide:github" size="24" />
          </a>
          <a href="https://linkedin.com/in/maryline-renaud" target="_blank" rel="noopener noreferrer" class="hover:text-purple-400">
            <Icon name="lucide:linkedin" size="24" />
          </a>
          <a href="https://twitter.com/Maryline_R412" target="_blank" rel="noopener noreferrer" class="hover:text-purple-400">
            <Icon name="lucide:twitter" size="24" />
          </a>
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