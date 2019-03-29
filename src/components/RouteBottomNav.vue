<template>
  <ul class="routes-bottom-nav" v-if="path">
    <!--<li v-for="route in $router.options.routes"><router-link :to="route.path">{{route.alias}}</router-link></li>-->
    <li class="prev" v-if="prevRoute">
      <router-link :to="prevRoute.path"><-- {{prevRoute.alias}}</router-link>
    </li>
    <li class="next" v-if="nextRoute">
      <router-link :to="nextRoute.path">{{nextRoute.alias}} --></router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "RouteBottomNav",
    computed: {
      path() {
        return this.$route.path;
      },
      currentRouteIndex() {
        return this.$router.options.routes.findIndex(route => route.path === this.path);
      },
      nextRoute() {
        if(this.currentRouteIndex !== this.$router.options.routes.length - 1) {
          return {
            alias: this.$router.options.routes[this.currentRouteIndex + 1].alias,
            path: this.$router.options.routes[this.currentRouteIndex + 1].path
          }
        }
        return null;
      },
      prevRoute() {
        if(this.currentRouteIndex) {
          return {
            alias: this.$router.options.routes[this.currentRouteIndex - 1].alias,
            path: this.$router.options.routes[this.currentRouteIndex - 1].path
          }
        }
        return null;
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../assets/scss/util/settings";
  
  .routes-bottom-nav {
    align-items: center;
    display: flex;
    justify-content: flex-start;
    list-style: none;
    max-width: 100%;
    margin: 0 auto 2em;
    padding: 0 2em;
    width: 32em;

    .next {
      margin-left: auto;
    }
  }

  a {
    color: $primary-color;
    font-weight: 700;
    text-decoration: none;

    &:hover {
      color: $highlight-color;
    }
  }
</style>
