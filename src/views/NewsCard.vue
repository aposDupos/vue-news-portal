<template>
  <v-container>
    <v-row justify="center">
      <v-col
          cols="6"
          md="4"
      >
        <v-img
            :src="article.urlToImage"
            max-height="400"
            max-width="400"
            contain

        />
      </v-col>
      <v-col cols="6">
        <v-card min-height="350" max-width="400">
          <v-card-title>
            <div>{{ article.title }}</div>
            <v-chip
                color="purple"
                outlined
            >
              {{ article.publishedAt | dateFormat }}
            </v-chip>
          </v-card-title>
          <v-card-text>
            <div>{{ article.description }}</div>
          </v-card-text>
          <v-divider class="mx-6"></v-divider>
          <v-card-text>
            <v-chip-group column>
              <v-chip>
                <v-icon left>
                  mdi-account
                </v-icon>
                Автор: {{ article.author }}
              </v-chip>
              <v-chip>
                <v-icon left>
                  mdi-account
                </v-icon>
                Источник: {{ article.name }}
              </v-chip>
            </v-chip-group>
          </v-card-text>
          <v-card-actions>
            <v-btn
                target="_blank"
                :href="article.url"
                color="deep-purple lighten-2"
                outlined
            >
              Перейти на сайт
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" class="mt-8">
      <v-col cols="12">
        <div class="text-h4 mb-4">Комментарии</div>
        <CommentDialog :id="this.comments[this.comments.length - 1].id" @addComment="addCommentHandler"/>
      </v-col>
      <v-col cols="12">
        <CommentCard
            v-for="comment in comments"
            :key="comment.id"
            :comment="comment"
        />
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import moment from "moment";
import CommentDialog from "../components/NewsCardComponents/CommentDialog";
import CommentCard from "../components/NewsCardComponents/CommentCard";

export default {
  name: "CurrentNews",
  components: {CommentCard, CommentDialog},
  props: {},
  data() {
    return {
      article: {},
      comments: [
        {
          id: 1,
          rate: 2,
          author: "James",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at ex pretium, aliquet nunc non, vulputate augue. Donec posuere dui non tortor vehicula posuere. Donec nec pharetra justo, vel efficitur tortor. Pellentesque finibus felis sit amet leo fringilla, quis pellentesque neque commodo. Morbi convallis ex sit amet orci tincidunt, vel fermentum ex blandit. Etiam et tempor nulla. Aenean ex dolor, egestas vel sodales vitae, fringilla et mauris. Morbi eleifend sapien et accumsan tincidunt. Sed vulputate nibh non purus eleifend aliquam. Aliquam finibus mi in erat tempor, vitae tincidunt metus egestas. Maecenas placerat mattis mi, dapibus semper turpis congue vel. "
        }, {
          id: 2,
          rate: 5,
          author: "James",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at ex pretium, aliquet nunc non, vulputate augue. Donec posuere dui non tortor vehicula posuere. Donec nec pharetra justo, vel efficitur tortor. Pellentesque finibus felis sit amet leo fringilla, quis pellentesque neque commodo. Morbi convallis ex sit amet orci tincidunt, vel fermentum ex blandit. Etiam et tempor nulla. Aenean ex dolor, egestas vel sodales vitae, fringilla et mauris. Morbi eleifend sapien et accumsan tincidunt. Sed vulputate nibh non purus eleifend aliquam. Aliquam finibus mi in erat tempor, vitae tincidunt metus egestas. Maecenas placerat mattis mi, dapibus semper turpis congue vel. "
        }, {
          id: 3,
          rate: 1,
          author: "James",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at ex pretium, aliquet nunc non, vulputate augue. Donec posuere dui non tortor vehicula posuere. Donec nec pharetra justo, vel efficitur tortor. Pellentesque finibus felis sit amet leo fringilla, quis pellentesque neque commodo. Morbi convallis ex sit amet orci tincidunt, vel fermentum ex blandit. Etiam et tempor nulla. Aenean ex dolor, egestas vel sodales vitae, fringilla et mauris. Morbi eleifend sapien et accumsan tincidunt. Sed vulputate nibh non purus eleifend aliquam. Aliquam finibus mi in erat tempor, vitae tincidunt metus egestas. Maecenas placerat mattis mi, dapibus semper turpis congue vel. "
        }, {
          id: 4,
          rate: 4,
          author: "James",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at ex pretium, aliquet nunc non, vulputate augue. Donec posuere dui non tortor vehicula posuere. Donec nec pharetra justo, vel efficitur tortor. Pellentesque finibus felis sit amet leo fringilla, quis pellentesque neque commodo. Morbi convallis ex sit amet orci tincidunt, vel fermentum ex blandit. Etiam et tempor nulla. Aenean ex dolor, egestas vel sodales vitae, fringilla et mauris. Morbi eleifend sapien et accumsan tincidunt. Sed vulputate nibh non purus eleifend aliquam. Aliquam finibus mi in erat tempor, vitae tincidunt metus egestas. Maecenas placerat mattis mi, dapibus semper turpis congue vel. "
        },
      ]
    }
  },
  mounted() {
    this.getArticles()
  },
  methods: {
    getArticles() {
      axios.get("https://newsapi.org/v2/everything?q=apple&from=2021-10-03&to=2021-10-03&sortBy=popularity&apiKey=bf48cfbb8ae9490695f83f62c499502d")
          .then((res) => {
            const data = res.data.articles
            this.article = data.find((_, i) => i.toString() === this.$route.params.id)
            this.article.name = this.article.source.name
          });
    },
    addCommentHandler(comment) {
      this.comments.push(comment)
    }
  },
  filters: {
    dateFormat(val) {
      if (val) {
        return moment(String(val)).format('DD/MM/YYYY hh:mm')
      }
    }
  }
}
</script>

<style scoped>

</style>