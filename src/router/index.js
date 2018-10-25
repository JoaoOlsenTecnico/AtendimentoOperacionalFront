import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Home from '@/components/Home';
import Status from '@/components/Status';
import Detalhe from '@/components/Detalhe';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/', 
      name: 'Login',
      component: Login,
    },
    {
      path: '/home', 
      name: 'Home',
      component: Home,
    },       

    {
      path: '/status',
      name: 'Status',
      component: Status,
    },
    
    {
      path: '/detalhe',
      name: 'Detalhe',
      component: Detalhe,
    }             

  ],

});