<template>
  <v-img :src="logo" max-height="32" max-width="32"/>
</template>

<script>
import logo from "../assets/logo.png";

export default {
  name: "Logo",
  data() {
    return {
      logo,
    };
  },
};
</script>

<style scoped></style>
