import { createStore } from "vuex";

const store = createStore({
    state: {
      countries: [],
      error: '',
    },
    getters: {
      getCountries(state) {
        return state.countries[0];
      },
      getError(state) {
        return state.error;
      }
    },
    mutations: {
      setLanguages(state, payload) {
        state.countries.push(payload);
      },
      setError(state, payload) {
        state.error = payload;
      }
    },
    actions: {
      async getCountries( { commit } ) {
        fetch("https://restcountries.com/v3.1/all")
          .then((res) => res.json())
          .then((data) => {
            commit('setLanguages', data);
          })
          .catch((err) => {
            commit('setError', err.message);
          });
      
    }
  },
    modules: {  },
  });
  
  export default store;
  