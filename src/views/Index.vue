<template>
  <div class="movies-index">
    <h3>Movie List</h3>
    Search by title:
    <input type="text" v-model="titleFilter" />
    <div class="movie" v-for="movie in filterBy(movies, titleFilter, 'title')" v-bind:key="movie.id">
      <router-link :to="`/movies/${movie.id}`">
        <p>{{ movie.title }} ({{ movie.year }})</p>
      </router-link>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      message: "List of Movies",
      movies: [],
      titleFilter: "",
    };
  },
  created: function () {
    axios.get("http://localhost:3000/movies").then((response) => {
      this.movies = response.data;
      console.log(response.data);
    });
  },
};
</script>
