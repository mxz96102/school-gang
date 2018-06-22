<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import "../node_modules/vue-material/dist/vue-material.min.css";

  html, body {
    padding: 0;
    margin: 0;
    background: #e6ecf0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .flex {
    flex: 1;
  }

  img.logo {
    height: 50px;
    width: auto;
  }

  a {
    text-decoration: none;
    color: #060c7a;
    margin: 0 10px;
  }

  .md-button.md-active {
    color: #7d7d7d;
  }

  .md-button {
    font-weight: bold;
    color: #aaaaaa;
  }
</style>
