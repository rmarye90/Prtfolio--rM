<template>
    <div class="py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h1 class="text-balance text-4xl font-semibold font-parkinsans tracking-tight text-indigo-500 sm:text-5xl">My Projects</h1>
        </div>
        <div class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <article v-for="post in posts" :key="post.id" class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
            <img :src="post.imageUrl" alt="" class="absolute inset-0 -z-10 size-full object-cover">
            <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
            <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            <h2 class="mt-3 text-lg/6 font-semibold text-white">
              <a :href="post.href">
                <span class="absolute inset-0" />
              </a>
            </h2>
          </article>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const posts = [
    {
      id: 1,
      title: 'My Blog',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      imageUrl:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
      },
    {
        id: 2,
        title: 'Under construction',
        href: '#',
        description:'Under construction',
        imageUrl:
            'https://plus.unsplash.com/premium_photo-1721830791498-ec809d9d94ec?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id: 3,
        title: 'Under construction',
        href: '#',
        description:'Under construction',
        imageUrl:
            'https://plus.unsplash.com/premium_photo-1721830791498-ec809d9d94ec?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },  
  ]
  </script>