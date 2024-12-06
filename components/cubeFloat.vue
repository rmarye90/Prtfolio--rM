<template>
  <div class="absolute h-12 w-12 animate-float rounded-xl hover:animate-float-fast cursor-pointer transition-all duration-300 smooth-float" aria-hidden="true" />
</template>

<style scoped>
.smooth-float {
  animation: smoothFloat 6s ease-in-out infinite;
  transition: animation-duration 0.3s ease-in-out;
}

.smooth-float:hover {
  animation-duration: 4s;
}

@keyframes smoothFloat {
  0%, 100% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  50% {
    transform: translateY(-20px);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
}
</style>
