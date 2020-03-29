<template>
<div to='/'>
  <b-card-group deck>
    <b-card
    :title="`${product.name}`"
    :img-src="`${product.img}`"
    :img-alt="`${product.name}`"
    img-width = 1rem
    img-height = 200rem
    img-top
    to='/'
    tag="article"
    style="max-width: 15rem; max-height: 30rem"
    class="mb-2"
    
  >
    <b-card-text>
      {{product.price}}
    </b-card-text>

    <b-button
       variant="danger"
       :to="`/product/${product.id}-${product.name.replace(/[' ']+/g,'-').toLowerCase()}`"
       >
       Buy now
       </b-button>
  </b-card>
  </b-card-group>

  
</div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  components: {
  }
}
</script>