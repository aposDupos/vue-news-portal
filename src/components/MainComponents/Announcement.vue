<template>
  <v-card
      min-width="300"
      max-width="60%"
      max-height="400"
      class="mx-auto"
      elevation="24"
  >
    <v-system-bar lights-out></v-system-bar>

    <v-skeleton-loader v-if="!isLoaded" type="article, list-item-avatar-two-line"/>
    <v-carousel
        v-else
        cycle="cycle"
        hide-delimiters
        show-arrows-on-hover
    >
      <v-carousel-item
          v-for="(article,i) in articles"
          :key="i"
      >
        <v-sheet
            :color="getColor(i)"
            height="75%"
        >
          <v-row
              class="fill-height pa-5"
          >
            <div class="text-h3">Новость {{ i + 1 }}</div>
            <div class="text-h5">{{ article.title }}</div>
          </v-row>
        </v-sheet>
        <v-list two-line>
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ article.author }}</v-list-item-title>
              <v-list-item-subtitle>Автор</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  name: "Announcement",
  data() {
    return {
      articles: [],
      isLoaded: false,
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
      ]
    };
  },
  mounted() {
    this.isLoaded = false
    this.getArticles()
  },
  computed: {},
  methods: {
    getArticles() {
      axios.get("https://newsapi.org/v2/everything?q=apple&from=2021-10-03&to=2021-10-03&sortBy=popularity&apiKey=bf48cfbb8ae9490695f83f62c499502d")
          .then((res) => {
            this.articles = res.data.articles
          })
          .then(() => {
            this.isLoaded = true
          });
    },
    getColor(i) {
      const index = i > 10 ? (i - Math.floor(i / 10) * 10) : i
      return this.colors[index]
    },
  },

};
</script>

<style scoped></style>
