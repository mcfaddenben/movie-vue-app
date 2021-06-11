<template>
  <div class="update-movie">
    <form v-on:submit.prevent="submit()">
      <h1>Edit Post</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>Title:</label>
        <input type="text" class="form-control" v-model="editMovieParams.title" />
      </div>
      <div class="form-group">
        <label>plot:</label>
        <input type="text" class="form-control" v-model="editMovieParams.plot" />
      </div>
      <div class="form-group">
        <label>year:</label>
        <input type="text" class="form-control" v-model="editMovieParams.year" />
      </div>
      <div class="form-group">
        <label>director:</label>
        <input type="text" class="form-control" v-model="editMovieParams.director" />
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
      editMovieParams: {},
      errors: [],
    };
  },
  created: function () {
    axios.get(`/movies/${this.$route.params.id}`).then((response) => {
      console.log("Movie", response.data);
      this.editMovieParams = response.data;
    });
  },
  methods: {
    submit: function () {
      axios
        .patch("/movies", this.editMovieParams)
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
