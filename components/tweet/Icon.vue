<template>
  <div class="icon-container">
    <img :src="iconUrl" />
  </div>
</template>

<script>
export default {
  props: {
    iconUrl: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.icon-container {
  width: 50px;
  height: 50px;
  margin: auto;
}

.icon-container img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
</style>
