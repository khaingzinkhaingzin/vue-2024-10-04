<template>
  <div>
    <div v-if="showModal">
      <CustomModal :theme="theme" @close="showModal=false">
        <h1>Login Success</h1>
        <p>Welcome User Ktz</p>
      </CustomModal>      
    </div>
    <div v-if="showDeleteModal">
      <CustomModal :theme="theme" @close="showDeleteModal=false">
        <h1>Are you sure to delete?</h1>
      </CustomModal>
    </div>
    <button @click="showSuccessModalMethod">open modal</button>
    <button @click="showDeleteModalMethod">delete</button>
  </div>
</template>

<script>
import CustomModal from './components/CustomModal.vue'
export default {
  data() {
    return {
      theme: "success",
      showModal: false,
      showDeleteModal: false,
    }
  },
  components: {
    CustomModal,
  },
  methods: {
    clickHandler() {
      this.$refs.name.focus();
      this.$refs.greet.textContent = "How are you?";
    },
    showSuccessModalMethod() {
      this.theme = 'success';
      this.showModal = true;
    },
    showDeleteModalMethod() {
      this.theme = 'delete';
      this.showDeleteModal = true;
    }
  }
}
</script>

<style scoped>

</style>