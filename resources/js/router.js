import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Login from './components/auth/Login';
import Dashboard from './components/Dashboard';

let routes = [
    {
        path:'/',
        component: Login,
        name:'Login',
        meta: {
            isFull: true
        }
    }, {
        path:'/dashboard',
        component: Dashboard,
        name:'Dashboard'
    }
];


export default new VueRouter({
    routes,
    mode: 'history'

});
