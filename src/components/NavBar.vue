<template>
  <div>
      <div class="navbar-main">
        <img alt="Vue logo" src="./../assets/logo.svg" />
        <div class="m-3 title is-5">
          <router-link to="/">Home</router-link> |
          <router-link to="/apartments">Apartments</router-link>
        </div>
      </div>
      <router-view :key="$route.name" />
  </div>
</template>
<style>
.navbar-main{
  display:flex;
  justify-content: space-between;
  margin:2rem 4rem;
}
nav>router-link{
  color: black !important;;
  /* outline:1px solid black; */
  /* background-color: #fd1212; */
}
</style>