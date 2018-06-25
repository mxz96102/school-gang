<template>
  <div>
    {{$route.params.keyword}}
    <router-link to="/" class="black">back</router-link>
  </div>
</template>

<script>
export default {
  name: 'Talents',
  data () {
    return {}
  }
}
</script>

<style scoped>

</style>
