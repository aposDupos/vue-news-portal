<template>
  <v-container>
    <v-row justify="center" class="mt-4" dense>
      <v-col cols="4" v-for="(article, i) in articles"
             :key="i">
        <NewsItem

            :article="article"
            :id="i"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import NewsItem from "../components/NewsComponents/NewsItem";

export default {
  name: "News",
  components: {NewsItem},
  data() {
    return {
      articles: [],
      isLoaded: false
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
};
</script>

<style scoped></style>
