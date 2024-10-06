<template>
  <div class="backdrop">
    <div class="modal">
        <h1>Custom Modal h1</h1>
        <p>Custom Modal p</p>
    </div>
  </div>
</template>

<script>
export default {

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
p {
  color: rgb(82, 123, 182);
}
</style>