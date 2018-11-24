import axios from 'axios'
import { AUTH_TOKEN } from './variables.js'
const accessToken = localStorage.getItem(AUTH_TOKEN);

export const client = axios.create({
    json: true,
})

export default {
    async executeWithoutAuth(method, resource, data) {
        // inject the accessToken for each request
        // let accessToken = await Vue.prototype.$auth.getAccessToken()
        return client({
            method,
            url: resource,
            data,
            headers: {
                Accept: 'application/json',
            }
        }).then(response => {
            return response
        }).catch(err => {
            return err.response
        })
    },
    async execute(method, resource, data) {
        // inject the accessToken for each request
        // let accessToken = await Vue.prototype.$auth.getAccessToken()
        return client({
            method,
            url: resource,
            data,
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${accessToken}`
            }
        }).then(response => {
            return response
        }).catch(err => {
            return err.response
        })
    },
    request(method, url, data = null) {
        return this.executeWithoutAuth(method, url, data)
    },
    authRequest(method, url, data) {
        return this.execute(method, url, data)
    },
}