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
      },
      getCountriesAtoZ(state) {
        return state.countries[0]?.sort(function (a, b) {
          if (a.name.common < b.name.common) {
            return -1;
          }
          if (a.name.common > b.name.common) {
            return 1;
          }
          return 0;
        });
      },
      getCountriesZtoA(state) {
        return state.countries[0]?.sort(function (a, b) {
          if (a.name.common < b.name.common) {
            return 1;
          }
          if (a.name.common > b.name.common) {
            return -1;
          }
          return 0;
        });
      },
    },
    mutations: {
      setLanguages(state, payload) {
        state.countries.push(payload);
      },
      setError(state, payload) {
        state.error = payload;
      },
      setData(state, payload) {
        state.option = payload;
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
      
    },
  },
    modules: {  },
  });
  
  export default store;
  