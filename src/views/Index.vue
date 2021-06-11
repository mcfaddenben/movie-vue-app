<template>
  <div class="movies-index">
    <h1>{{ message }}</h1>
    <div v-for="movie in movies" v-bind:key="movie.id">
      <h2>{{ movie.title }}</h2>
      <router-link :to="`movies/${movie.id}`">Show movie</router-link>
      <p>{{ movie.plot }}</p>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "List of Movies",
      movies: [],
    };
  },
  created: function () {
    axios.get("/movies").then((response) => {
      console.log("movie List", response.data);
      this.movies = response.data;
    });
  },
};
</script>
