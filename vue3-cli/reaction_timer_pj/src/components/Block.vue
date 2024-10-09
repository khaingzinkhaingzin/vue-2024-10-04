<template>
  <div class="block" v-if="showBlock">Click here {{ delay }}</div>
</template>

<script>
export default {
    props: ['delay'],
    data() {
      return {
        showBlock: false,
      }
    },
    mounted() { // when component has been injected into index.html
      setTimeout(() => {
        this.showBlock = true;
      }, this.delay);
    },
    updated() { // when some data has updated
      console.log('data updated');
    },
    unmounted() { // when component has been removed
      console.log("component unmounted");
      
    }
}
</script>

<style>
.block {
    width: 400px;
    height: 300px;
    margin: 20px auto;
    padding-top: 30px;
    background-color: aquamarine;
}
</style>