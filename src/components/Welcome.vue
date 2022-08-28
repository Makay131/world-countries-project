<template>
  <div id="menu">
    <div id="menu-items">
      <div class="menu-item">Home</div>
      <div class="menu-item"><router-link :to="{name: 'Learning'}">Learn</router-link></div>
      <div class="menu-item">About</div>
      <div class="menu-item">Contact Us</div>
    </div>
    <div id="menu-background-pattern"></div>
    <div id="menu-background-image"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {
    const menu = document.getElementById("menu");

    Array.from(document.getElementsByClassName("menu-item")).forEach(
      (item, index) => {
        item.onmouseover = () => {
          menu.dataset.activeIndex = index;
        };
      }
    );
  },
};
</script>

<style></style>
