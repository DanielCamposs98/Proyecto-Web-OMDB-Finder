<template>
  <div id="app">
    <div id="nav">
      <H1 id="txtHeader">OMDB Finder</H1>
      <router-link to="/"></router-link> 
      <router-link to="/about"></router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
 background: linear-gradient(to top, #2E4053 ,#85929E , #AEB6BF, #85929E, #2E4053);

}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


#txtHeader{
  color: whitesmoke;
  background-color : transparent;
}


</style>
