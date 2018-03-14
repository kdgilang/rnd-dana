<template>
  <div class="container">
    <search></search>
    <product :cs="cs"></product>
  </div>
</template>

<script>
import Product from '../components/Product'
import Search from '../components/Search'
import { request } from '../utils'
export default {
  name: 'list',
  data () {
    return {
      show: false,
      cs: 'list',
      apiUri: this.$store.state.apiUri
    }
  },
  components: {
    Product,
    Search
  },
  created () {
    request(this.apiUri, 'GET').then((res) => {
      this.$store.state.products = res.data
    })
  }
}
</script>

<style>

</style>
