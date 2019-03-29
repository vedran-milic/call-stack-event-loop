import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      alias: 'Home',
      component: Home,
    },
    {
      path: '/execution-context',
      name: 'executionContext',
      alias: 'Execution Context',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/ExecutionContext.vue'),
    },
    {
      path: '/call-stack',
      name: 'callStack',
      alias: 'Call Stack',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/CallStack.vue'),
    },
    {
      path: '/heap',
      name: 'heap',
      alias: 'Heap',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Heap.vue'),
    },
    {
      path: '/queue',
      name: 'queue',
      alias: 'Queue',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Queue.vue'),
    },
    {
      path: '/event-loop',
      name: 'eventLoop',
      alias: 'Event Loop',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/EventLoop.vue'),
    },
    {
      path: '/resources',
      name: 'resources',
      alias: 'Resources',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Resources.vue'),
    },
  ]
});
