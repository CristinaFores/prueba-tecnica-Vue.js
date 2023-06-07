<template>
  <div class="flex overflow-hidden w-full items-center justify-center">
    <div class="absolute z-50">
      <h1 class="text-5xl font-bold uppercase text-black opacity-70">
        Bienvenido
      </h1>
    </div>
    <div class="flex-0 w-full h-300px imagen-container">
      <img :src="images[images.length - 1]" alt="" class="imagen" />
    </div>
    <div
      class="flex-0 w-full h-300px imagen-container"
      v-for="(image, index) in images"
      :key="index"
    >
      <img :src="image" alt="" class="imagen" />
    </div>
    <div class="flex-0 w-full h-300px imagen-container">
      <img :src="images[0]" alt="" class="imagen" />
    </div>
  </div>
</template>

<style scoped>
.imagen-container {
  flex: 0 0 auto;
  width: 100%;
  height: 300px;
  animation: slideIn 20s linear infinite;
  opacity: 0.7;
}

.imagen {
  width: 100%;
  height: 100%;
  object-position: center;
  object-fit: cover;
}

@keyframes slideIn {
  0% {
    transform: translateX(0%);
  }
  20% {
    transform: translateX(0%);
  }
  30% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(-100%);
  }
  60% {
    transform: translateX(-200%);
  }
  100% {
    transform: translateX(-200%);
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.jpg";
import image4 from "../../assets/image4.jpg";

export default defineComponent({
  name: "Carousel",

  data() {
    return {
      images: [image1, image2, image4],
    };
  },
});
</script>
