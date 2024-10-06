<template>
  <div>
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

<style>
h1 {
  color: violet;
}
</style>