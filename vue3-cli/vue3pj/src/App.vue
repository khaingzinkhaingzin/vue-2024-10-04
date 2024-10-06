<template>
  <div>
    <h1>App.vue h1</h1>
    <p>App.vue p</p>
    <CustomModal />
  </div>
</template>

<script>
import CustomModal from './components/CustomModal.vue'
export default {
  data() {
    return {
      title: "Hello World!",
    }
  },
  components: {
    CustomModal,
  },
  methods: {
    clickHandler() {
      this.$refs.name.focus();
      this.$refs.greet.textContent = "How are you?";
    }
  }
}
</script>

<style scoped>
h1 {
  color: violet;
}
</style>