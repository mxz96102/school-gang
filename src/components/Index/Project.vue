<template>
  <md-card v-if="content" class="project">
    <img :src="img">
    <h3>{{name}}</h3>
    <p>{{detail}}</p>
  </md-card>
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
  .md-card {
    width: 225px;
    margin: 10px;
    height: 400px;
    display: inline-block;
    vertical-align: top;
    background: white;
    text-align: left;
  }

  .md-card img {
    width: 225px;
    height: 225px;
  }

  .md-card p, .md-card h3 {
    padding: 0 1rem;
  }
</style>
