import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Login from './components/auth/Login';
import List from './components/contact/List';

let routes = [
    {
        path:'/',
        component: Login,
        name:'Login',
        meta: {
            isFull: true
        }
    }, {
        path:'/list',
        component: List,
        name:'List'
    }
];


export default new VueRouter({
    routes,
    mode: 'history'

});
