<template>
  <div class="container mx-auto px-10 py-4">
    <h1 class="text-3xl font-bold text-center mb-6 mt-6 p-4">Imagenes</h1>

    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <li v-for="(imageApi, index) in imagesApi" :key="index">
        <img
          :src="imageApi.download_url"
          :alt="imageApi.author"
          class="w-full h-full"
          @load="handleImageLoad(index)"
          :class="{ hidden: !imageLoaded[index], block: imageLoaded[index] }"
        />
        <div
          v-if="!imageLoaded[index]"
          class="w-full h-64 bg-gray-200 animate-pulse"
        ></div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

interface ImageApi {
  download_url: string;
  author: string;
}

export default defineComponent({
  name: "ListHome",

  setup() {
    const imagesApi = reactive<ImageApi[]>([]);
    const imageLoaded = reactive<Record<number, boolean>>({});

    const fetchImages = () => {
      fetch("https://picsum.photos/v2/list")
        .then((response) => response.json())
        .then((data) => {
          const imageList = data
            .map((imageApi: ImageApi) => imageApi)
            .reverse();
          imagesApi.splice(0, imagesApi.length, ...imageList);

          // Initialize imageLoaded with false for each image
          for (let i = 0; i < imageList.length; i++) {
            imageLoaded[i] = false;
          }
        })
        .catch((error) => {
          console.error("Error fetching images:", error);
        });
    };

    const handleImageLoad = (index: number) => {
      imageLoaded[index] = true;
    };

    fetchImages();

    return {
      imagesApi,
      handleImageLoad,
      imageLoaded,
    };
  },
});
</script>
