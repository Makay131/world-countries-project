import { createStore } from "vuex";

const store = createStore({
    state: {
      users: [
        { name: "Mahmut Akay", email: "mahmut@gmail.com", active: true, score: 0, },
        { name: "Emrullah Tastan", email: "emrullah@gmail.com", active: false, score: 0 },
        { name: "John Smith", email: "john@gmail.com", active: true, score: 0 },
        { name: "Mary Boore", email: "mary@gmail.com", active: true, score: 0 },
      ],
    },
    getters: {
    },
    mutations: {
      
    },
    actions: {
      
    },
    modules: {  },
  });
  
  export default store;
  