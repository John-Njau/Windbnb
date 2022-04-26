<template>
  <div>
      <div class="navbar-main">
        <img alt="Vue logo" src="./../assets/logo.svg" />
        <div class="m-3" id="navt">
          <router-link to="/">Home</router-link> |
          <router-link to="/apartments">Apartments</router-link>
        </div>
      </div>
      <router-view :key="$route.name" />
  </div>
</template>
<style>
#navt{
  color: black;
}
.navbar-main{
  display:flex;
  justify-content: space-between;
  margin:2rem 4rem;
  /* color:white; */
}
router-link{
  color: black ;
  /* outline:1px solid black; */
  /* background-color: #fd1212; */
}
</style>