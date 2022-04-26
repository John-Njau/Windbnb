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
#app {
  /* background-color: #f5f5f5; */
   width: 90%;
  /* text-align: center; */
  /* display:flex; */
  /* flex-direction:column; */
  justify-content: center;
  /* align-items: center;  */
  margin: 0 auto;
}
</style>
