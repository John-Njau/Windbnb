<template>
<!-- <div class="container"> -->
  <div class="column is-one-third">
    <div class="" id="card-bg">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="apartment.photo" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <div class="is-6 media-left">
               <b-button rounded
              v-if="apartment.superHost === true"
              class="button is-small is-6 media-right"
              id="superhostBtn"
            >
              SUPER HOST
            </b-button>
            <span
              v-else-if="apartment.superHost === false"
              class="button subtitle"
              style="display: none"
            ></span>
              <!-- <div class="" value=""> -->
                {{ apartment.type }}
               <span v-if="apartment.beds === null" style="display: none" ></span> 
               <span v-else class="m-2">
                .   {{ apartment.beds }} beds
               </span>
              
              <!-- </div> -->
            </div>
          </div>
          <div class="media-content">
          </div>
          <div class="media-right">
            
            <p><font-awesome-icon icon="fa-star" class="" style="color: rgb(245, 34, 27, 0.849)"></font-awesome-icon>
            {{apartment.rating}}</p>
          </div>
        </div>
        <div class="title is-6 content mt-3">
          {{ apartment.title }}
        </div>
      </div>
      <!-- <div class="m-5">
        {{ apartment.country }}, {{ apartment.city }}
      </div> -->
    </div>
  </div>
<!-- </div> -->
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
  /* border-radius:15%; */
  border: 1px solid rgb(0, 0, 0);
  font-weight: 500;
  color: #000000;
  margin-right: 10px;
}
img{
  padding: 5px;
  border-radius: 10%;
}
 #card-bg{
  /* background-color:none; */
  /* border-radius: 5%; */
  /* border: 1px solid rgb(0, 0, 0); */
  margin-bottom: 10px;
} 
.cmedia{
  /* margin: 0 0rem; */
  display: flex
  /* width: 90vw; */
}

@media screen and (min-width: 768px) {
  .column{
   width: 30vw;
}
  
}

</style>
