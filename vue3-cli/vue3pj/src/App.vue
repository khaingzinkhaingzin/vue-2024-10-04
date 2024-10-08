<template>
  <div>
    <div v-if="showModal">
      <CustomModal :theme="theme" @close="showModal=false">
        <h1>Login Success</h1>
        <p>Welcome User Ktz</p>

        <!-- slot with name  -->
        <template v-slot:links>
          <a href="">Sign Up</a>
          <a href="">Register</a>
        </template>
      </CustomModal>
    </div>
    <button @click="showModal=true">open modal</button>
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
      showModal: false,
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