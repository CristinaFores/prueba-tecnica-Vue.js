//crear el componetne home con el header // Path: frontend\src\views\Home.vue
<template>
  <div>
    <Header></Header>
    <Carousel></Carousel>
    <ListHome></ListHome>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "../components/Header/Header.vue";
import Carousel from "../components/Carousel/Carousel.vue";
import ListHome from "../components/ListHome/ListHome.vue";

export default defineComponent({
  name: "Home",
  components: {
    Header,
    Carousel,
    ListHome,
  },
});
</script>
