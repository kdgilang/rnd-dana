<template>
  <div class="products">
    <div class="product">
      <ul :class="cs" v-show="isFound">
        <li v-for="product in products">
          <router-link :to="{name:'Detail', query:{id:product.id}}">
            <span class="text" v-html="product.html"></span>
            <span class="price"> {{product.price}} </span>
          </router-link>
        </li>
        <li v-show="!isFound">
          <span>Not Found.</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import HighlightText from './HighlightText'

export default {
  name: 'product',
  props: ['cs'],
  data () {
    return {
      products: this.$store.state.results
    }
  },
  computed: {
    isFound () {
      return this.$store.state.isFound
    }
  },
  components: {
    HighlightText
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
