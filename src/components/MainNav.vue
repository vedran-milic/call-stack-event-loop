<template>
  <aside id="nav" class="main-nav" :class="{ active: menuOpen }">
    <button class="open-menu" @click="toggleMenu(true)">open menu</button>
    <nav class="nav-wrapper">
      <button class="close-menu" @click="toggleMenu(false)">close menu</button>
      <ul class="nav">
        <li v-for="route in $router.options.routes"><router-link :to="route.path" @click.native="toggleMenu(false)">{{route.alias}}</router-link></li>
      </ul>
    </nav>
  </aside>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  export default {
    name: "MainNav",
    computed: {
      ...mapState(['menuOpen'])
    },
    methods: {
      ...mapActions(['toggleMenu'])
    }
  }
</script>
