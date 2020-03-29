<template>
<div class='cat'>
<router-link :to="`/${category.toLowerCase()}`">
{{ category }}
</router-link>
</div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: ['category'],
  components: {
  }
}
</script>

<style scoped>
.cat {
  background-color: #f8f4f4
}

</style>