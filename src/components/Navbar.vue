<template>
  <nav class="p-5 shadow bg-slate-600 md:flex md:items-center md:justify-between sticky">
    <div class="flex justify-between items-center">
        <span class="text-2xl text-white font-medium cursor-pointer ml-2">WorldCountries</span>

        <span class="mx-2 block md:hidden text-3xl cursor-pointer text-white">
        <svg v-show="icon === true" @click="menu()" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <svg v-show="icon === false" @click="menu()" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

        

    </span>
    </div>

    <ul class="text-left md:flex md:items-center md:z-auto md:static absolute bg-slate-600 w-full left-0 md:w-auto py-4 pl-7 md:py-0 md:pl-0 opacity-0 md:opacity-100 top-[-400px] transition-all ease-in duration-500" :class="{'top-[72px]': icon === false, 'opacity-100': icon === false}">
        <li class="mx-4 my-6 md:my-0"><router-link :to="{ name: 'Home' }" class="text-xl px-2 py-2 rounded text-white hover:text-slate-700 hover:bg-slate-300 hover:text-slate-100 uppercase transition-all duration-300 ease">Home</router-link></li>
        <li class="mx-4 my-6 md:my-0"><router-link to="/" class="text-xl px-2 py-2 rounded text-white hover:text-slate-700 hover:bg-slate-300 hover:text-slate-100 uppercase transition-all duration-300 ease">About</router-link></li>
        <li class="mx-4 my-6 md:my-0"><router-link to="/" class="text-xl px-2 py-2 rounded text-white hover:text-slate-700 hover:bg-slate-300 hover:text-slate-100 uppercase transition-all duration-300 ease">Shop</router-link></li>
        <li class="mx-4 my-6 md:my-0"><router-link to="/" class="text-xl px-2 py-2 rounded text-white hover:text-slate-700 hover:bg-slate-300 hover:text-slate-100 uppercase transition-all duration-300 ease">Content</router-link></li>
    </ul>

    
  </nav>
</template>

<script>
export default {
    data() {
        return {
            icon: true,
        }
    },
    methods: {
        menu(e) {
            this.icon = !this.icon;
        },
}
}
</script>

<style>
 
</style>