<template>
<div class="login">
    <div class="row">
        <div class="col-sm-8">
            <div class="login-image">
                <img src="/images/login.jpeg" alt="" class="img-fluid">
            </div>
        </div>
        <div class="col-sm-4">
            <div class="login-form">
                <h3>Todo Login</h3>
                <form @submit.prevent="loginSubmit" method="post">
                    <div class="form-group">
                        <label for="phone">Phone number : </label>
                        <input type="text" v-model="loginInfo.phone" class="form-control" placeholder="Phone number">
                    </div>
                    <div class="form-group">
                        <label for="phone">Password : </label>
                        <input type="password" v-model="loginInfo.password" class="form-control" placeholder="Password">
                    </div>
                    <div class="form-group">
                        <button type="submit" :disabled="loading" class="btn btn-primary"><i class="fa fa-plus"></i> Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    import api              from '../../utility/api';
    import { client, AUTH_TOKEN }   from '../../utility/variables.js'
    import axios from 'axios'
    export default {
        name: 'login',
        data() {
            return {
                loading: false, 
                loginInfo: {
                    phone: '',
                    password: ''
                }
            }
        },
        methods: {
            loginSubmit() {
                let self = this
                this.loading = true
                api.request('POST','/api/login', this.loginInfo)
                .then(response => {
                    if(response.status === 200) {
                        self.loading = false;
                        
                        let promise = new Promise(function(resolve, reject) {
                            resolve(response);
                            reject(()=> {
                                alert('we could not set axios auth header');
                            });
                        });

                        promise.then((response)=> {
                            Object.assign(client.defaults, {
                                headers: {
                                    Accept: 'application/json',
                                    authorization: `Bearer ${response.data.access_token}`
                                }
                            }); 
                        })
                        promise.then((response) => {
                            localStorage.setItem(AUTH_TOKEN, JSON.stringify({
                                token   : response.data.access_token,
                                current : new Date().getTime(),
                                expires : response.data.expires_in
                            }));
                        })    
                      
                        self.$router.push({ name: 'Dashboard'});
                    }
                })
            }
        }
    }
</script>

