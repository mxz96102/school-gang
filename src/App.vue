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
  @import '../node_modules/vue-material/dist/theme/default.css';

  html, body {
    padding: 0;
    margin: 0;
  }

  #app {
    font: 12px/1.5 tahoma,arial,'Hiragino Sans GB','\5b8b\4f53',sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .flex {
    flex: 1;
  }

  img.logo {
    height: auto;
    width: 120px;
  }

  a {
    text-decoration: none;
    color: #060c7a;
  }

  .md-button.md-active {
    color: #7d7d7d;
  }

  .md-button {
    font-weight: bold;
    color: #aaaaaa;
  }

  .black {
    background-color: #252525;
    color: #252525;
  }

  .black:hover {
    transition: color .13s linear;
    color: white;
  }
</style>
