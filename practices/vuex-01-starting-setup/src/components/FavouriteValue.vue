<template>
     <h3>{{ finalCounter }}</h3>
     <p>We do More...</p>
</template>

<script>

import { mapGetters } from 'vuex';
export default {
    computed:{
    // counter(){
    //   return this.$store.getters.finalCounter;
    // }
    ...mapGetters(['finalCounter'])
  },
};
</script>