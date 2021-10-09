<template>
  <v-container>
    <v-row>
      <v-col
          class="d-flex child-flex"
          cols="4"
          v-for="(article, i) in articles"
          :key="i"
      >
        <v-img
            :src="article.urlToImage"
            class="grey lighten-2"
        >
          <template v-slot:placeholder>
            <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
            >
              <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "Gallery",
  data() {
    return {
      articles: []
    };
  },
  mounted() {
    this.getArticles()
  },
  methods: {
    getArticles() {
      axios.get("https://newsapi.org/v2/everything?q=apple&from=2021-10-03&to=2021-10-03&sortBy=popularity&apiKey=bf48cfbb8ae9490695f83f62c499502d")
          .then((res) => {
            this.articles = res.data.articles
          });
    },
  }
}
</script>

<style scoped>

</style>