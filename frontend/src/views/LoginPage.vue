<template>
  <div>
    <Header></Header>
    <LoginForm></LoginForm>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Header from "../components/Header/Header.vue";
import LoginForm from "../components/LoginForm/LoginForm.vue";

export default defineComponent({
  name: "Home",
  components: {
    Header,

    LoginForm,
  },
});
</script>
