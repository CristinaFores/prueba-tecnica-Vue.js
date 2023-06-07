<template>
  <div
    class="container mx-auto max-w-xs p-4 bg-white rounded-lg drop-shadow m-8"
  >
    <form @submit="handleSubmit">
      <div
        v-if="errorMessage"
        class="text-red-500 text-center mb-4 text-sm font-semibold border border-red-600 rounded-md p-2 bg-red-50 w-full"
      >
        * {{ errorMessage }}
      </div>
      <h1 class="text-center mb-4 font-bold text-lg">Inicio de sesión</h1>

      <div class="mb-4">
        <label for="username" class="font-bold">Nombre</label>
        <input
          autocomplete="off"
          type="text"
          id="username"
          v-model="username"
          class="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
        />
      </div>
      <div class="mb-4">
        <label for="password" class="font-bold">Contraseña</label>
        <input
          autocomplete="off"
          type="password"
          id="password"
          v-model="password"
          class="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
        />
      </div>
      <button
        type="submit"
        class="block w-full p-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600"
      >
        Enviar
      </button>
      <div class="mt-4 text-center">
        <a href="#" class="text-blue-800">¿Olvidaste tu contraseña?</a>
      </div>
      <div class="mt-6 text-center">
        <span class="text-gray-600">¿No tienes una cuenta? </span>
        <a href="#" class="text-blue-800">Regístrate</a>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import jwtDecode from "jwt-decode";
import { Router, useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router: Router = useRouter();
    const username = ref("");
    const password = ref("");
    const errorMessage = ref("");

    const handleSubmit = async (event: Event) => {
      event.preventDefault();
      errorMessage.value = "";

      try {
        const response = await fetch("http://localhost:4000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username.value,
            password: password.value,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          errorMessage.value = data.error;
          return;
        }

        const jwtPayload: any = jwtDecode(data.token);

        const user = {
          id: jwtPayload.id,
          username: jwtPayload.username,
          token: data.token,
        };

        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(user));

        router.push("/home");
      } catch (error) {
        console.log("Ocurrió un error al enviar la solicitud:", error);
      }
    };

    return {
      username,
      password,
      handleSubmit,
      errorMessage,
    };
  },
});
</script>
