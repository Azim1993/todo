import { AUTH_TOKEN, TOKEN } from "./variables";
export default {
    guest (to, from, next) {
        console.log('gust', TOKEN)
        if (!TOKEN) 
            next({
                path: '/',
                query: {
                    redirect: to.name
                }
            });
        next();
    },
    auth(to, from, next) {
        console.log('auth', TOKEN)
        if (TOKEN) 
            next({
                path: '/dashboard',
                query: {
                    redirect: to.name
                }
            })
        next();
    }
}