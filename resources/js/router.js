import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Login from './components/auth/Login';
import Dashboard from './components/Dashboard';
// contest route 
import Contests from './components/contest/Index';
import Contest from './components/contest/Show';
import Guard from "./utility/middleware";

let routes = [
    {
        path:'/',
        component: Login,
        name:'Login',
        // beforeEnter: Guard.auth,
        meta: {
            isFull: true
        }
    }, {
        path:'/dashboard',
        component: Dashboard,
        name: 'Dashboard',
        // beforeEnter: Guard.guest,
    }, {
        path:'/contest',
        component: Contests,
        name: 'Contests',
        // beforeEnter: Guard.guest,
    }, {
        path: '/contest/:id',
        component: Contest,
        name: 'Contest',
        // beforeEnter: Guard.guest,
    }
];


export default new VueRouter({
    routes,
    mode: 'history'

});
