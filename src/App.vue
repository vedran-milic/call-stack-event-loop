<template>
  <div>
    <main id="app" :class="{ active: menuOpen }">
      <main-nav></main-nav>
      <section class="content">
        <router-view/>
      </section>
    </main>
    <route-bottom-nav></route-bottom-nav>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import mainNav from './components/MainNav';
  import routeBottomNav from './components/RouteBottomNav';
  export default {
    name: 'app',
    computed: {
      ...mapState(['menuOpen'])
    },
    components: {
      mainNav,
      routeBottomNav
    }
  }
</script>
