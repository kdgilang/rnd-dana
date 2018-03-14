<template>
  <p>
    highlight text component
  </p>
</template>

<script>
export default {
  name: 'highlightText'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  span {
    display:inline-block;
  }

  span.highlight {
    color: #108EE9;
  }
</style>
