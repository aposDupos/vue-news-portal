<template>
  <v-app>
    <Header/>
    <v-container fluid>
      <router-view/>
    </v-container>
  </v-app>
</template>

<style lang="scss"></style>
<script>
import Header from "./components/Header";

export default {
  components: {Header},
};
</script>
