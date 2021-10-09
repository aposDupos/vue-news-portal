<template>
  <v-card
      width="100%"
      elevation="4"
      class="deep-purple lighten-5 mt-4"
  >
    <v-card-title>#{{ comment.id }}</v-card-title>
    <v-card-text>
      <div class="black--text">{{ comment.text }}</div>
    </v-card-text>
    <v-card-subtitle>
      <v-row justify="space-between" class="px-4">
        <div>Автор: {{ comment.author }}</div>
        <v-rating
            empty-icon="mdi-star-outline"
            full-icon="mdi-star"
            half-icon="mdi-star-half-full"
            half-increments
            readonly
            length="5"
            size="16"
            :value="comment.rate"
            color="purple"
        />
      </v-row>
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: "CommentCard",
  props:{
    comment: Object
  }
}
</script>

<style scoped>

</style>