<template>
    <button @click="addTwo">Add 2</button>
</template>

<script>
export default {
    methods: {
    addTwo(){
      return this.$store.dispatch('increment');
    }
  }
}
</script>