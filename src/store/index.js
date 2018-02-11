import Vue from 'vue';
import Vuex from 'vuex';
import api from '../api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  	//todos chargés sans BDD 
    todos: [
      {
        id: 1,
        label: `Mon todo numero 1`,
      },
      {
        id: 2,
        label: `Mon todo numero 2`,
      },
    ],
  },
  getters: {
    count(state) {
      return state.todos.length;
    },
    todos(state) {
      return state.todos;
    },
  },
  mutations: {
    POPULATE_TODOS(state, todos) {
      state.todos = todos;
    },
  },
  // todos chargé avec api laravel sur la BDD
  actions: {
    getTodos(context) {
      api.get(`/todos`)
        .then((response) => {
          context.commit(`POPULATE_TODOS`, response.data);
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
});
