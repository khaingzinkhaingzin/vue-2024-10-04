<template>
  <div>
    <CustomModal :header="header" :content="content" :theme="theme" />
  </div>
</template>

<script>
import CustomModal from './components/CustomModal.vue'
export default {
  data() {
    return {
      header: "Login Success",
      content: "Welcome user Ktz",
      theme: "success",
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

</style>