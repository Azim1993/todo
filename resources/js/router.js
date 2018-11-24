import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Login from './components/auth/Login.vue';

let routes = [
    {
        path:'/',
        component: Login,
        name:'Login',
        meta: {
            isFull: true
        }
    }
];


export default new VueRouter({
    routes,
    mode: 'history'

});
