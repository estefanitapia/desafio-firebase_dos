<template>
  <div class="login">
    <LoginUser/>
  </div>
</template>

<script>
import LoginUser from '../components/LoginUser.vue'; 

export default {
  name: "LoginView",
  components: {
    LoginUser
  }
};
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('../assets/daisy.jpeg');
  background-size: contain; 
  background-repeat: no-repeat;
  background-position: center; 
  font-family: 'Arial', sans-serif;
  color: white;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
}
</style>