<template>
  <div class="detail container">
    <h1 class="name">{{product.name}}</h1>
    <img :src="product.imgurl" :alt="product.name">
    <span class="price">{{product.price}}</span>
  </div>
</template>

<script>
import { request } from '../utils'
export default {
  name: 'detail',
  data () {
    return {
      apiUri: this.$store.state.apiUri,
      product: null
    }
  },
  created () {
    request(this.apiUri, 'GET').then((res) => {
      this.$store.state.products = res.data
      res.data.find((val, key) => {
        if (val.id === this.$route.query.id) {
          this.product = val
        }
      })
    })
  }
}
</script>

<style scoped lang="less">
  #app {
    .container {
      &.detail {
        padding-bottom: 70px;
        background-color: #ffffff;
      }
    }
  }
  .detail {
    text-align: center;
    .price {
      border-radius: 100px;
      color: #ffffff;
      font-weight: bold;
      font-size: 20px;
      background-color: #1c69d4;
      padding: 20px 50px;
    }
    img {
      margin: 80px auto;
      max-width: 200px;
      display: block;
      width: 100%;
    }
  }
</style>
