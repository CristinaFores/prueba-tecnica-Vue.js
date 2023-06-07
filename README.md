📱 App

Este proyecto está dividido en dos partes, una para el frontend y otra para el backend. El frontend se desarrolla utilizando Vue 3, TypeScript y Tailwind CSS, mientras que el backend utiliza Express.js con TypeScript, MongoDB, Mongoose y JWT para la autenticación.

## 🚀 Instalación

- Clona el repositorio:

  ```
  https://github.com/CristinaFores/prueba-tecnica-Vuejs
  ```

<br/>

### ⚙️ Backend

<br/>

- Configuración del archivo .env

  ```
  PORT=4000
  MONGODB_URL=
  DEBUG=app:*
  JWT_SECRET=
  ```

<br/>

1. Ir a la carpeta backend:

   ```
   cd backend
   ```

2. Instala las dependencias

   ```
   npm install
   ```

3. Compila el proyecto

   ```
   npm run build
   ```

4. Ejecuta el servidor

   ```
   npm start
   ```

<br/>

### 🎨 Frontend

1.  Ir a la carpetafrontend:

    ```
    cd frontend
    ```

2.  Instala las dependencias

    ```
    npm install
    ```

3.  Compila el proyecto

    ```
    npm run build
    ```

4.  Ejecuta el servidor

    ```
    npm start
    ```

<br/>

### 🔑 Login Credentials

<br/>

```
- Usuario: admin1
- Contraseña: admin1
```

<br/>

## 📂 Estructura de Carpetas

<br/>

```
📦NombreDelProyecto
┣ 📂backend
┃ ┗ 📂src
┃ ┣ 📜app.ts (Archivo principal de Express)
┃ ┗ ...
┣ 📂frontend
┃ ┗ 📂src
┃   📂components
┃   ┣ 📜LoginForm.vue
┃   ┣ 📜Header.vue
┃   ┣ 📜Carousel.vue
┃   ┣ 📜HomeList.vue
┃   ┗ ...
┣   📂views
┃   ┣ 📜Home.vue
┃   ┣ 📜LoginPage.vue
┃   ┗ ...
┗   📜main.ts (Archivo principal de Vue)

```
