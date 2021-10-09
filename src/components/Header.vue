<template>
  <header>
    <v-toolbar>
      <Logo/>
      <v-toolbar-title>
        <h3>Проект на Vue.js</h3>
      </v-toolbar-title>
      <v-spacer/>
      <v-col cols="4">
        <v-fade-transition>
          <v-autocomplete
              autofocus
              v-show="shouldExpand"
              @blur="shouldExpand = !shouldExpand"
              hide-no-data
          >
            <template v-slot:append>
              <v-icon></v-icon>
            </template>
          </v-autocomplete>
        </v-fade-transition>
      </v-col>
      <v-expand-x-transition>
        <v-btn
            icon
            v-show="!shouldExpand"
            @click="shouldExpand = !shouldExpand"
        >
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-expand-x-transition>
      <template v-slot:extension>
        <v-tabs centered>
          <v-tab v-for="(link, i) in links" :key="i" :to="link.to">{{ link.name }}</v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
  </header>
</template>

<script>
import Logo from "./Logo";

export default {
  name: "Header",
  components: {Logo},
  data() {
    return {
      shouldExpand: false,
      links: [
        {
          name: "Главная",
          to: "/"
        },
        {
          name: "Новости",
          to: "/news"
        },
        {
          name: "Галерея",
          to: "/gallery"
        },
      ]
    };
  },
  mounted() {
  },
  methods: {},
};
</script>

<style module>
</style>
