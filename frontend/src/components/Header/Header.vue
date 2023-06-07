<template>
  <header class="bg-black p-4">
    <nav class="flex items-center justify-between flex-wrap bg-black p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <router-link
          to="/"
          class="font-semibold text-xl tracking-tight uppercase"
        >
          Holidays
        </router-link>
      </div>
      <div class="block lg:hidden" v-if="isAuthenticated">
        <button
          class="flex items-center px-3 py-2 border rounded text-white border-white hover:text-indigo-500 hover:border-indigo-500"
          @click="open = !open"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path
              :class="{ hidden: open, 'inline-flex': !open }"
              class="inline-flex"
              fill-rule="evenodd"
              d="M2 5h16a1 1 0 010 2H2a1 1 0 010-2zm0 6h16a1 1 0 010 2H2a1 1 0 010-2zm0 6h16a1 1 0 010 2H2a1 1 0 010-2z"
            />
            <path
              :class="{ hidden: !open, 'inline-flex': open }"
              class="hidden"
              fill-rule="evenodd"
              d="M0 0h20v20H0V0zm2 2v16h16V2H2z"
            />
          </svg>
        </button>
      </div>
      <div
        v-if="isAuthenticated"
        :class="{ hidden: !open, block: open }"
        class="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
      >
        <div class="text-sm lg:flex-grow">
          <router-link
            to="/"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-indigo-500 mr-4"
          >
            Inicio
          </router-link>
          <router-link
            to="/about"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-indigo-500 mr-4"
          >
            Sobre nosotros
          </router-link>
          <router-link
            to="/contact"
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-indigo-500 mr-4"
          >
            Contacto
          </router-link>
        </div>
        <div>
          <button
            @click="logout"
            type="submit"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0"
          >
            Salir
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",

  data() {
    return {
      open: false,
    };
  },
  computed: {
    isAuthenticated() {
      return localStorage.getItem("token") !== null;
    },
  },
  methods: {
    logout() {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
  },
});
</script>
