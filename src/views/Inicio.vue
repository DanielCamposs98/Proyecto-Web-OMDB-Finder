<template>
  <div class="home">
    <div class="form-floating mb-3" id="divComp">
      <input
        type="text"
        class="form-control"
        id="txtNombre"
        placeholder="Escribe el nombre aqui"
      />
      <label for="txtNombre">Nombre de Serie o Pelicula a buscar</label>
    </div>

    <div id="divBut">
      <button type="button" id="btnBuscar" class="btn btn-outline-secondary" @click="evBuscar">
        Buscar
      </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


import {mapState, mapActions} from 'vuex'

import Card from "../components/Card.vue"

export default {
  name: "Inicio",
  components: {
    Card,
  },
computed: {
  ...mapState(['posts'])
},
methods: {
  ...mapActions(['getPosts'])
},

}
</script>

<style>
#txtNombre {
  width: 700px;
  height: 40px;
}

#btnBuscar {
  height: 40px;
  width: 700px;
}

#divComp {
  width: 100%;
  margin-left: 25%;
}

#divBut {
  width: 100%;
}
</style>
