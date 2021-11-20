<template>
  
  <div class="divDetalle">
<button value="" :to="`/Inicio`">Regresar</button>

    <section class="imagen">
      <img
        v-bind:src="post.Poster"
        class="img-fluid rounded-start"
        alt="Cartel de Pelicula"
      />
    </section>

    <section class="divCuerpo">
      <h1>Titulo: {{ post.Title }}</h1>
      <h2>Tipo: {{ post.Type }}</h2>
      <h2>Año: {{ post.Year }}</h2>
      <h2>Genero: {{ post.Genre }}</h2>
      <h2>Director: {{ post.Director }}</h2>
      <h2>Lenguaje: {{ post.Language }}</h2>
      <h2>Actores: {{ post.Actors }}</h2>
      <h2 :style="colorRating" id="rating">
        Rating IMDB:{{ post.imdbRating }}
      </h2>
      <h2>Publicacion: {{ post.Released }}</h2>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Detalle",
  computed: {
    ...mapState(["post"]),

    colorRating() {
      if (parseFloat(this.post.imdbRating) >= 8) {
        return "color: green";
      } else if (
        parseFloat(this.post.imdbRating) < 8 &&
        parseFloat(this.post.imdbRating) >= 5
      ) {
        return "color: #F4D03F ";
      } else if (parseFloat(this.post.imdbRating) < 5) {
        return "color: red";
      } else {
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
#divDetalle {
  display: inline;
}

.imagen {
  width: 30%;
  border: 3px solid rgb(45, 45, 45);
}

.divCuerpo {
  width: 50%;
  display: inline-block;
  margin: 50px;
  border-block: 1px solid black;
}

.divDetalle {
  display: inline-flex;
  margin-top: 100px;
}
h1 {
  color: pink;
  font: Helvetica;
}

#rating {
  font-family: Georgia, "Times New Roman", Times, serif;
}
</style>