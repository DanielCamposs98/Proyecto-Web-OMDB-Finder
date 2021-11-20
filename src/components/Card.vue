<template>
  <div id="contenedor">
    <div class="card mb-3">
      <div class="row g-0" id="Tarjeta">
        <div class="col-md-4">
          <img
            v-bind:src="poster"
            class="img-fluid rounded-start"
            alt="Cartel de Pelicula"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ id }}</h5>
            <p class="card-text">{{ titulo }}</p>
            <p class="card-text">{{ tipo }}</p>
            <p class="card-text">{{ anio }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    id: String,
    titulo: String,
    tipo: String,
    anio: String,
    poster: String,
  },
};
</script>

<style>
#contenedor {
  border: 3px solid black;
  margin-top: 10px;
    width: 700px;
}

*{
  justify-content: center;
  align-items: center;
  display: flexbox;
}
</style>