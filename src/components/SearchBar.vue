<template>
  <section>
    <b-navbar>
      <template #end>
        <b-field label="" class="m-3">
          <b-input placeholder="LOCATION" v-model="location" rounded></b-input>
          <b-input placeholder="Add guests" v-model="guests" rounded></b-input>
          <div class="rounded p-2">
            <font-awesome-icon icon="fa-search" class=""></font-awesome-icon>
            Search
          </div>
        </b-field>
      </template>
    </b-navbar>
  </section>
</template>
<script>
export default {
  // props: ["location", "guests"],

  data() {
    return {
      location: this.location,
      guests: this.guests,
    };
  },
};
</script>
<style scoped>
.rounded {
  /* margin: 10px; */
  background-color: #ddd;
  border-radius: 0 30% 30% 0;
  /* border-right-style: hidden; */
  /* border-left: 0; */
  /* padding: 10px; */
  color: rgba(245, 34, 27, 0.849);
}
</style>