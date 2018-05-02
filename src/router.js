import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Campaign from './views/Campaign.vue';
import CampaignAdmin from './views/CampaignAdmin.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/campaign/:slug',
      name: 'campaign',
      component: Campaign,
      props: (route) => ({
        slug: route.params.slug,
      }),
    },
    {
      path: '/admin/:slug',
      name: 'campaign-admin',
      component: CampaignAdmin,
      props: (route) => ({
        slug: route.params.slug,
      }),
    },
  ],
});
