<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{success: theme === 'success', delete: theme === 'delete'}">
        <slot>
          default slot 
          <!-- default slot will show when there is not passing html element for lot  -->
        </slot>

        <!-- show named slot  -->
        <slot name="links" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['theme', 'showmodal'],
  methods: {
    closeModal() {
      this.$emit("close");
    }
  }
}
</script>

<style scoped>
.backdrop {
    position: fixed;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
}
.modal {
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background-color: white;
    border-radius: 10px;
}
.success {
  background-color: rgb(100, 144, 35);
  color: white;
}
.delete {
  background-color: rgb(206, 96, 81);
  color: white;
}
</style>