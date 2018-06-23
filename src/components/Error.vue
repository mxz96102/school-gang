<template>
  <div>
    <p> Error: {{$route.params.type}} </p>
    <p class="instructions">
    对不起，您今天运气不好，出错了。请明天转运再操作。
    <router-link to="/" class="black">如果您一定要回去</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Error',
  data () {
    return {}
  }
}
</script>

<style scoped>
  p {
    font-weight: bold;
  }
  .instructions {
    font-weight: lighter;
  }
</style>
