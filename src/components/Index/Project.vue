<template>
  <div class="project">
    <img src={{this.img}}>
    <h3>{{this.name}}</h3>
    <p>{{this.detail}}</p>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: ['project'],
  data () {
    const {img, name, detail} = this.project
    return {
      img,
      name,
      detail
    }
  }
}
</script>

<style scoped>

</style>
