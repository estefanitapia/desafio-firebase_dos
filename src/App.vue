<template>
  <nav>
    <router-link to="/">Login</router-link> |
        <router-link to="/register">Registro</router-link> |
        <router-link to="/home">Home</router-link> 
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: #f8f8f8;
  border-bottom: 1px solid #ddd;
}

nav a {
  margin: 0 15px;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}

nav a:hover {
  color: #42b983;
  text-decoration: underline;
}
</style>
