<template>
    <div class="row">
        <div class="col-sm-7">
            <div class="login-image">
                <img src="/images/login.jpeg" alt="" class="img-fluid">
            </div>
        </div>
        <div class="col-sm-5">
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
</template>

<script>
    import api from '../../utility/api';
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
                this.loading = true
                api.request('POST','/api/login', this.loginInfo)
                .then(response => {
                    if(response.status === 200) {
                        this.loading = false;
                        console.log(response);
                    }
                })
            }
        }
    }
</script>

