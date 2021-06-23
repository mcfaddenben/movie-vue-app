<template>

  <div class="home">
    <h1>{{ Movies }}</h1>
    <h2>Create a new movie</h2>
    Title:
    <input type="text" v-model="newTitle" />
    Plot:
    <input type="text" v-model="newPlot" />
    Year:
    <input type="text" v-model="newyYear" />
    Director:
    <input type="text" v-model="newDirector" />
    <div v-for:="movie in movies" v-bind:key="movie.id">
      <h3>{{ movie.title }} {{ movie.year }}</h3>
      <button v-on:click="showInfo(movie)">More Info</button>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      movie: [],
      newTitle: "",
      newPlot: "",
      newYear: "",
      newDirector: "",
      currentMovie: {},
    };
  },
  created: function () {
    this.listMovies();
  },
  methods: {
    listMovies: function () {
      axios.get("http://localhost:3000/movies").then((response) => {
        this.movies = response.data;
        console.log(response.data);
      });
    },
  },
};
</script>
