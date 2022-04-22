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
    <div class="apartmentPage">
      <h1 class="m-5 p-3 title">Apartments</h1>
      <div class="columns is-multiline">
        <ApartmentCard
          v-for="(apartment, index) in filteredApartments"
          :key="apartment.id"
          class="card"
          :apartment="apartment"
          :index="index"
        >
        </ApartmentCard>
      </div>
    </div>
  </section>
</template>
<script>
import ApartmentCard from "@/components/ApartmentCard.vue";
import apartmentData from "./../stays.json";

export default {
  name: "ApartmentView",
  components: {
    ApartmentCard,
  },
  data() {
    return {
      apartments: apartmentData,
      location: "",
      guests: "",
    };
  },
  computed: {
    filteredApartments() {
      return this.apartments
        .filter((apartment) => {
          return (
            apartment.city
              .toLowerCase()
              .includes(this.location.toLowerCase()) ||
            apartment.country
              .toLowerCase()
              .includes(this.location.toLowerCase())
          );
        })
        .filter((apartment) => {
          console.log(this.guests);
          return apartment.maxGuests.toString().includes(this.guests);
        });
    },
  },
};
</script>
<style scoped>
.apartmentPage {
  margin: 2rem;
}
h1 {
  margin: auto auto;
}
</style>