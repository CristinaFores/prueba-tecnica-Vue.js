<template>
  <div class="container mx-auto px-10 py-4">
    <h1 class="text-3xl font-bold text-center mb-6 mt-6 p-4">Imagenes</h1>
    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <li v-for="(imageApi, index) in imagesApi" :key="index">
        <img
          :src="imageApi.download_url"
          :alt="imageApi.author"
          class="w-full h-full"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface ImageApi {
  download_url: string;
  author: string;
}

export default defineComponent({
  name: "ListHome",

  setup() {
    const imagesApi = ref<ImageApi[]>([]);

    const fetchImages = () => {
      fetch("https://picsum.photos/v2/list")
        .then((response) => response.json())
        .then((data) => {
          imagesApi.value = data
            .map((imageApi: ImageApi) => imageApi)
            .reverse();
        })
        .catch((error) => {
          console.error("Error fetching images:", error);
        });
    };

    fetchImages();

    return {
      imagesApi,
    };
  },
});
</script>
