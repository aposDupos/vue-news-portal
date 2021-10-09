<template>
  <v-card
      class="mt-4"
      max-width="400"
  >
    <v-img
        :src="article.urlToImage"
        height="200"
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
    <v-card-title>
      {{ article.title | truncate(70) }}
    </v-card-title>
    <v-card-subtitle v-show="article.source.name">
      Источник: <a :href="article.url">{{ article.source.name }}</a>
    </v-card-subtitle>
    <v-card-actions>
      <v-btn
          color="orange lighten-2"
          text
          @click="routingHandler"
      >
        Узнать больше
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "NewsItem",
  data() {
    return {}
  },
  props: {
    article: Object,
    id: Number
  },
  methods: {
    routingHandler() {
      const id = this.id + ''
      this.$router.push({
        name: "NewsCard",
        params: {id}
      })
    }
  }
}
</script>

<style scoped>

</style>