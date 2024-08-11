<template>
  <div class="singUp">
    <NewUser />
  </div>
</template>

<script>
import NewUser from "../components/NewUser.vue";

export default {
  name: "SingUpView",
  components: {
    NewUser,
  },
};
</script>
<style scoped>
.singUp {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('../assets/daisy.jpeg');
  background-size: contain; /* Ajusta el tamaño de la imagen */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  background-position: center; /* Centra la imagen */
  font-family: 'Arial', sans-serif;
  color: white;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}
</style>