import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts : [],
    post : {}
  },
  mutations: {
    SET_POSTS : (state, pos) => {
      state.posts = pos.Search;
    },
    
    SET_POST(state, post){
      state.post= post;
    }
  },
  actions: {
    getPosts( {commit}, { palabra }){
      axios.get(`http://www.omdbapi.com/?s=${palabra}&apikey=31fa0edc&`)
      .then((res) => {
        commit("SET_POSTS" , res.data);
      })
      .catch((error) => console.log(error));
    },

    getPost({commit}, {id}){
      axios.get(`http://www.omdbapi.com/?i=${id}&apikey=31fa0edc&`)
      .then(Response => {
        commit('SET_POST', Response.data);
      })
      .catch(error => console.log(error));
    },

  },
})

