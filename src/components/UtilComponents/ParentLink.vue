<template>
  <div>
    <span>{{category.name}}</span>
    >
    <router-link :to="`/projects/${subcategory.name}`">{{subcategory.name}}</router-link>
  </div>
</template>

<script>
export default {
  name: 'ParentLink',
  props: {
    category: Object,
    subcategory: Object
  },
  data () {
    return {}
  }
}
</script>

<style scoped>

</style>
