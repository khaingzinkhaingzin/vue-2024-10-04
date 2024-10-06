<template>
  <div>
    <div v-if="showModal">
      <CustomModal :header="header" :content="content" :theme="theme" @close="showModal=false" />
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