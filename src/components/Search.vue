<template>
	<div id="searchUser" class="container-search">
		<input @keyup="searchProduct" type="text" v-model="key" placeholder="Search Product" class="form-control">
		<span class="icon-search fa fa-search"></span>
	</div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      key: ''
    }
  },
  methods: {
    searchProduct () {
      this.$store.state.isFound = false
      this.$store.state.results.length = 0
      if (/\S/.test(this.key) && this.key !== '') {
        let products = this.$store.state.products
        products.find((val, key) => {
          let keys = new RegExp(this.key, 'i')
          if (keys.test(val.name)) {
            this.$store.state.isFound = true
            val.html = val.name.replace(keys, '<span style="color:#1c69d4">$&</span>')
            this.$store.dispatch('actResults', val)
          }
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
