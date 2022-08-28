<template>
  <Navbar />
  <div class="flex items-center justify-center gap-4 mt-5">
    <label for="order" class="text-sm font-medium text-slate-500">Order</label>
    <div>
      <select
        name="order"
        v-model="option"
        class="w-half border border-slate-700 px-4 py-2 rounded-lg shadow-md focus:outline-none focus:border-slate-700 focus:ring-2"
      >
        <option value="az">A-Z</option>
        <option value="za">Z-A</option>
        <option value="random">Random</option>
      </select>
    </div>
  </div>

  <div></div>

  <div class="grid grid-auto-fit gap-4 py-8 px-3" v-if="!getError">
    <div
      v-for="c in filterCountryList"
      :key="c"
      class="card p-5 flex flex-col items-center"
    >
      <img
        class="w-max object-cover mb-3"
        :src="getCodeForFlag(c.cca2)"
        width="224"
        height="168"
        :alt="c.name.common"
      />

      <p class="text-md font-semibold">{{ c.name.common }}</p>
      <p>{{ c.capital ? c.capital[0] : "No Capital" }}</p>
      <p>
        {{
          c.currencies
            ? Object.keys(c.currencies)[0] +
              " " +
              Object.values(c.currencies)[0].name
            : "No currency"
        }}
      </p>
      <p>
        {{
          c.languages
            ? Object.values(c.languages).reduce((l, acc) => l + " - " + acc, "")
            : "No Languages"
        }}
      </p>
      <a
        :href="c.maps.googleMaps"
        target="_blank"
        class="mt-2 py-2 px-4 bg-slate-800 rounded-full text-slate-100 hover:bg-slate-100 hover:text-slate-800 transition-all duration-500"
        >See on map</a
      >
    </div>
  </div>
  <div v-else>
    There was something wrong when trying to connect to the Earth
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';
import Navbar from '../components/Navbar.vue';

export default {
  data() {
    return {
      lists: {},
      option: "az",
    };
  },
  components: {
    Navbar
  },
  computed: {
    ...mapGetters({
      getCountry: 'getCountries',
      getError: 'getError',
      getCountriesAtoZ: 'getCountriesAtoZ',
      getCountriesZtoA: 'getCountriesZtoA'
    }),
    filterCountryList() {
      switch (this.option) {
        case 'az':
          return this.getCountriesAtoZ;
          break;
        case "za":
          return this.getCountriesZtoA;
          break;
        case 'random':
          return this.shuffleCountryList(this.getCountry);
          break;
        default:
      return this.getCountry;
      
    }
    },
  },
  methods: {
    shuffleCountryList(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      },
    getCodeForFlag(code) {
      return `https://flagcdn.com/224x168/${code.toLowerCase()}.png`;
    },
  },
  async created() {
    await this.$store.dispatch('getCountries');
  },
};
</script>

<style></style>
