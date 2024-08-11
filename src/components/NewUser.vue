<template>
  <div class="registerClass">
    <h2>Registro</h2>
    <div class="input-group">
      <label for="">Email</label>
      <input v-model="email" type="email" placeholder="Ingrese su correo electronico" />
    </div>
    <div class="input-group">
      <label for="">Contraseña</label>
      <input
        v-model="password"
        type="password"
        placeholder="Ingrese su contraseña"
      />
    </div>
    <button @click="register">Registrarse</button>
  </div>
</template>

<script>
import {
  auth,
  createUserWithEmailAndPassword,
} from "../config/firebaseConfig.js";

export default {
  name: "NewUser",
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    async register() {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );
        console.log("Credenciales", userCredential);
        const user = userCredential.user;

        console.log("Usuario registrado", user);
      } catch (error) {
        console.log("Error en el registro", error);
      }
    },
  },
};
</script>

<style scoped>
.registerClass {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
  color: #333;
  margin: auto;
}

h2 {
  color: #333;
  margin-bottom: 20px;
}

.input-group {
  width: 100%;
  margin-bottom: 15px;
}

label {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #333;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #555;
}

</style>