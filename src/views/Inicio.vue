<template>
  <div class="home">
    <div class="form-floating mb-3" id="divComp">
      <input
        v-model="palabra"
        type="text"
        class="form-control"
        id="txtNombre"
        placeholder="Escribe el nombre aqui"
      />
      <label for="txtNombre" id="lblNombre">Nombre de Serie o Pelicula a buscar</label>
    </div>

    <div id="divBut">
      <button
        type="button"
        id="btnBuscar"
        class="btn btn-outline-secondary"
        @click="getPosts({palabra})"
      >
        Buscar
      </button>
    </div>

    <div id="compCard">
      <div v-for="p in posts" :key="p.imdbID">
      <router-link :to="`/Detalle/${p.imdbID}`">
        <Card
          :id="p.imdbID"
          :poster="p.Poster"
          :tipo="p.Type"
          :anio="p.Year"
          :titulo="p.Title"
        />
      </router-link>
    </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src

import { mapState, mapActions, mapMutations } from "vuex";

import Card from "@/components/Card.vue";

export default {
  name: "Inicio",
  components: {
    Card,
  },
  computed: {
    ...mapState(["posts"]),
  },
  methods: {
    ...mapActions(["getPosts"]),
    ...mapMutations("SET_POSTS")
},
}

</script>

<style>
#txtNombre {
  width: 700px;
  padding-left: 25%;
  height: 40px;
  margin-top: 20px;
}
#lblNombre {
  padding-left: 30%;
  text-align: center;
}

#btnBuscar {
  height: 40px;
  width: 500px;

}

#divComp {
  width: 100%;
  padding-left: 25%;
}

#divBut {
  width: 100%;
}

#compCard{
  padding-left: 25%;
  text-align: center;
  justify-items: center;
  justify-content: center;
}

</style>
