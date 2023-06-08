<template>
  <div class="px-0 py-4 sm:px-10">
    <h1 class="text-3xl font-bold text-center mb-6 mt-6 p-4">Imagenes</h1>

    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 sm:gap-6">
      <li v-for="(imageApi, index) in imagesApi" :key="index" class="mt-4 mb-4">
        <img
          :src="imageApi.download_url"
          :alt="imageApi.author"
          class="w-full h-64 object-cover"
          @load="handleImageLoad(index)"
          :class="{ hidden: !imageLoaded[index], block: imageLoaded[index] }"
        />
        <p v-if="imageLoaded[index]" class="mt-5 font-bold text-xl text-center">
          {{ imageApi.author }}
        </p>
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
            .reverse()
            .slice(0, 9);
          imagesApi.splice(0, imagesApi.length, ...imageList);
          imageList.map((_: ImageApi, index: number) => {
            imageLoaded[index] = false;
          });
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
