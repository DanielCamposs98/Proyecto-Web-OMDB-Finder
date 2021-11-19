<template>
  <div>
    <img
      v-bind:src="post.Poster"
      class="img-fluid rounded-start"
      alt="Cartel de Pelicula"
    />
    <h1>{{ post.Title }}</h1>
    <h2>{{ post.Type }}</h2>
    <h2>{{ post.Year }}</h2>
    <h2>{{ post.Genre }}</h2>
    <h2>{{ post.Director }}</h2>
    <h2>{{ post.Language }}</h2>
    <h2>{{ post.Actors }}</h2>
    <h2 :style="colorRating">{{ post.imdbRating }}</h2>
    <h2>{{ post.Released }}</h2>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Detalle",
  computed: {
    ...mapState(["post"]),

    colorRating(){
        if(parseFloat(this.post.imdbRating) >= 8 ){
            return "color: green";
        }
        else if (parseFloat(this.post.imdbRating) < 8  && parseFloat(this.post.imdbRating)  >= 5 ){
            return "color: yellow";
        } else if (parseFloat(this.post.imdbRating) < 5  ){
            return "color: red";
        }else{
            return "color: gray";
        }
  },
  },
  methods: {
    ...mapActions(["getPost"]),
  },
  created() {
    this.getPost({ id: this.$route.params.id });
  },
};
</script>

<style>
</style>