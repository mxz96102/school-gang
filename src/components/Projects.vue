<template>
  <div>
    {{$route.params.cateID}}
    {{$route.params.subcateID}}
    <router-link to="/" class="black">back</router-link>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data () {
    return {}
  }
}
</script>

<style scoped>

</style>
