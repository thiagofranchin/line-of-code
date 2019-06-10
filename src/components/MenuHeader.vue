<template>
  <div>
    <b-navbar variant="secondary" type="dark" class="fixed-top pb-0">
      <b-navbar-nav>
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="/about">Sobre</router-link>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<style lang="scss" >
  @import '../scss/global/colors';
  .navbar {
    .nav-link {
      padding-bottom: 0.875rem;

      &:hover {
        border-bottom: 2px solid $primary;
      }
    }

    .router-link-exact-active {
      color: $primary !important;
      border-bottom: 2px solid $primary;
    }
  }


</style>