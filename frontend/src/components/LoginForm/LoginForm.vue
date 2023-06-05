<template>
  <div class="container mx-auto max-w-xs p-4 bg-white rounded-lg drop-shadow">
    <h1 class="text-center mb-6">Inicio de sesión</h1>
    <div class="mb-4">
      <label for="username" class="font-bold">Nombre</label>
      <input
        type="text"
        id="username"
        class="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
        required
      />
    </div>
    <div class="mb-4">
      <label for="password" class="font-bold">Contraseña</label>
      <input
        type="password"
        id="password"
        class="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
        required
      />
    </div>
    <button
      type="submit"
      class="block w-full p-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600"
    >
      Enviar
    </button>
    <div class="mt-4">
      <a href="#" class="text-blue-800">¿Olvidaste tu contraseña?</a>
    </div>
    <div class="mt-6">
      <span class="text-gray-600">¿No tienes una cuenta? </span>
      <a href="#" class="text-blue-800">Regístrate</a>
    </div>
  </div>
</template>
