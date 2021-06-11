<template>
  <div class="movie-show">
    <h2>{{ movie.title }}</h2>
    <img :src="movie.image" alt="" />
    <p>{{ movie.body }}</p>
    <router-link :to="`movies/${movie.id}/edit`">Edit movie</router-link>
    <button v-on:click="destroyPost()">Delete movie</button>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      movie: {},
    };
  },
  created: function () {
    axios.get(`/movies/${this.$route.params.id}`).then((response) => {
      console.log("Post", response.data);
      this.movie = response.data;
    });
  },
  methods: {
    destroyPost: function () {
      if (confirm("are you sure you want to delete this movie?")) {
        axios.delete(`/movies/${this.$route.params.id}`).then((response) => {
          console.log(response.data);
          this.$router.push("movies");
        });
      }
    },
  },
};
</script>
