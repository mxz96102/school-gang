<template>
  <div>
    类别：<br>
    <span>{{category.name}}</span>
    /
    <span>
      <router-link :to="`/projects/${subcategory.name}`">{{subcategory.name}}</router-link>
    </span>
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
  span {
    padding: 0 4px;
    display: inline-block;
    color: #59ccfe;
    background: rgba(96, 125, 171, 0.07);
    border-radius: 2px;
    margin: 2px 2px;
    line-height: 1.45em;
  }
</style>
