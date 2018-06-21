<template>
  <div class="contents">
    <h2>{{this.title}}</h2>
    <a>{{this.more}}</a>
  </div>
</template>

<script>
export default {
  name: 'Contents',
  props: ['contents', 'type'],
  data () {
    const {title, catogories, more} = this.contents || {}

    return {
      title,
      catogories,
      more
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
