<template>
  <div v-if="content" class="project">
    <img :src="img">
    <h3>{{name}}</h3>
    <p>{{detail}}</p>
  </div>
  <div v-else>LOADING~</div>
</template>

<script>
export default {
  name: 'Project',
  props: ['content'],
  data () {
    return {}
  },
  computed: {
    img () {
      return this.content.img
    },
    name () {
      return this.content.name
    },
    detail () {
      return this.content.detail
    }
  }
}
</script>

<style scoped>

</style>
