<template>
  <div id="app" class="bg-light">
    <Navbar></Navbar>
    <Pagefooter></Pagefooter>
  </div>
</template>

<script>
import Navbar from "@/components/NavBar.vue";
import Pagefooter from "@/components/pageFooter.vue";

export default {
  name: "App",
  components: { Navbar, Pagefooter },
  data() {
    return {
    };
  },
};
</script>

<style>
</style>
