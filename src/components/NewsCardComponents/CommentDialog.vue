<template>
  <v-dialog
      transition="dialog-bottom-transition"
      max-width="300"
      v-model="dialog"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          color="primary"
          v-bind="attrs"
          v-on="on"
      >Оставить отзыв
      </v-btn>
    </template>
    <v-card>
      <v-card-title>Оставьте ваш отзыв</v-card-title>
      <v-card-text>
        <v-container>
          <v-row justify="center">
            <v-col
                cols="12"
            >
              <v-text-field
                  label="Автор"
                  required
                  v-model="author"
                  autofocus
              />
            </v-col>


            <v-col
                cols="12"
            >
              <v-textarea
                  label="Комментарий"
                  required
                  v-model="text"
              />
            </v-col>
            <v-col
                cols="12"
            >
              <v-rating
                  empty-icon="mdi-star-outline"
                  full-icon="mdi-star"
                  half-icon="mdi-star-half-full"
                  half-increments
                  hover
                  length="5"
                  size="16"
                  color="purple"
                  v-model="rating"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="formHandler">Добавить</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "Comment",
  props: {
    id: Number,
  },
  data() {
    return {
      rating: 0,
      author: "",
      text: "",
      dialog: false,
    }
  },
  methods: {
    formHandler() {
      const comment = {
        id: this.id + 1,
        rate: this.rating,
        author: this.author,
        text: this.text
      }
      this.$emit("addComment", comment)
      this.dialog = false
      this.rate = 0
      this.author = ""
      this.text = ""
    }
  }

}
</script>

<style scoped>

</style>