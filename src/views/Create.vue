<template>
  <div class="create-movie">
    <form v-on:submit.prevent="submit()">
      <h1>Create Post</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>Title:</label>
        <input type="text" class="form-control" v-model="newMovieParams.title" placeholder="Title"/>
      </div>
      <div class="form-group">
        <label>Plot:</label>
        <input type="text" class="form-control" v-model="newMovieParams.plot" placeholder="Plot"/>
        <small v-if="newMovieParams.plot.length <= 300">{{ 300 - newMovieParams.plot.length }} characters left</small>
        <small v-else-if="newMovieParams.plot.lemgth > 300">
          Too many characters entered! Plot cannot be more than 300 characters
        </small>
      </div>
      <div class="form-group">
        <label>year:</label>
        <input type="text" class="form-control" v-model="newMovieParams.year" placeholder="Year"/>
      </div>
      <div class="form-group">
        <label>director:</label>
        <input type="text" class="form-control" v-model="newMovieParams.director" placeholder="Director" />
      </div>
      <div class="form-group">
        <label>director:</label>
        <input type="checkbox" v-model="newMovieParams.english" />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newMovieParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .movie("/movies", this.newMovieParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
