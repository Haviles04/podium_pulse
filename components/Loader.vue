<template>
  <div class="custom-loader"></div>
</template>

<style scoped>
.custom-loader {
  width: 50px;
  height: calc(50px * 0.866);
  position: relative;
  background: conic-gradient(from 120deg at 50% 64%, #0000, #84cc16 1deg 120deg, #0000 121deg);
  transform-origin: 50% 50%;
  animation: sp7-0 1.5s infinite cubic-bezier(0.3, 1, 0, 1);
}
.custom-loader:before,
.custom-loader:after {
  content: '';
  position: absolute;
  inset: 0;
  background: inherit;
  transform-origin: 50% 66%;
  animation: sp7-1 1.5s infinite;
}
.custom-loader:after {
  --s: -1;
}

@keyframes sp7-0 {
  0%,
  30% {
    transform: rotate(0);
  }
  70% {
    transform: rotate(120deg);
  }
  70.01%,
  100% {
    transform: rotate(360deg);
  }
}

@keyframes sp7-1 {
  0% {
    transform: rotate(calc(var(--s, 1) * 120deg)) translate(0);
  }
  30%,
  70% {
    transform: rotate(calc(var(--s, 1) * 120deg)) translate(calc(var(--s, 1) * -5px), 10px);
  }
  100% {
    transform: rotate(calc(var(--s, 1) * 120deg)) translate(0);
  }
}
</style>
