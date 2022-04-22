<template>
  <div class="column is-one-third">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="apartment.photo" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <div class="is-6 media-left">
              <div class="button" value="">
                {{ apartment.type }}
              </div>
            </div>
          </div>
          <div class="media-content">
            <p
              v-if="apartment.superHost === true"
              class="button is-6 media-right"
              id="superhostBtn"
            >
              Super Host
            </p>
            <p
              v-else-if="apartment.superHost === false"
              class="button subtitle"
              style="display: none"
            ></p>
          </div>
          <div class="media-right">
            <p class="button">Max Guests: {{ apartment.maxGuests }}</p>
          </div>
        </div>
        <div class="title content is-5">
          {{ apartment.title }}
        </div>
      </div>
      <!-- <div class="m-5">
        {{ apartment.country }}, {{ apartment.city }}
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "ApartmentCard",
  props: ["apartment"],
};
</script>
<style>
#superhostBtn{
  /* background-color: #ffd700; */
  border-radius:10%;
  border: 1px solid rgb(0, 0, 0, 0.5);
  font-weight: 500;

}

img{
  padding: 5px;
  border-radius: 5%;
}
</style>
