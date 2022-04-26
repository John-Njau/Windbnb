<template>
  <div class="home">
    <!-- <SearchBar></SearchBar> -->
    <b-navbar>
      <template #end>
        <b-field label="" class="m-3">
          <b-input placeholder="Helsinki, Finland" v-model="location" rounded></b-input>
          <b-input placeholder="Add guests" v-model="guests" rounded></b-input>
          <div class="rounded p-2">
            <font-awesome-icon icon="fa-search" class=""></font-awesome-icon>
          </div>
        </b-field>
      </template>
    </b-navbar>
    <div class="stays">
      <p class="title">Stays in finland</p>
      <p>12+ stays</p>
    </div>
    <div class="columns is-multiline">
      <ApartmentCard
        v-for="(apartment, index) in slicedApartments"
        :key="apartment.id"
        :apartment="apartment"
        :index="index"
      >
      </ApartmentCard>
    </div>
  </div>
</template>

<script>
import ApartmentCard from "@/components/ApartmentCard.vue";
// import SearchBar from "@/components/SearchBar.vue";
import apartmentData from "./../stays.json";

export default {
  name: "HomeView",
  components: {
    ApartmentCard,
    // SearchBar,
  },
  data() {
    return {
      apartments: apartmentData,
      location: "",
      guests: "",
    };
  },
  computed: {
    slicedApartments() {
      return this.apartments
        .slice(0, 6)
        .filter((apartment) => {
          return (
            apartment.city.toLowerCase().match(this.location.toLowerCase()) ||
            apartment.country.toLowerCase().match(this.location.toLowerCase())
          );
        })
        .filter((apartment) => {
          return apartment.maxGuests.toString().match(this.guests);
        });
    },
  },
};
</script>
<style>
.rounded {
  /* margin: 10px; */
  background-color: #ddd;
  border-radius: 0 30% 30% 0;
  /* border-right-style: hidden; */
  /* border-left: 0; */
  /* padding: 10px; */
  color: rgba(245, 34, 27, 0.849);
}
.stays {
  display: flex;
  justify-content: space-between;
}
</style>
