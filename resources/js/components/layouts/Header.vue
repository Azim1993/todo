<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">ToDo</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse inline-pull-right" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a @click.prevent="logout" class="dropdown-item" href="#">Logout</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    import api              from '../../utility/api';
    import { AUTH_TOKEN }   from '../../utility/variables.js'
    export default {
        name: 'appHeader',
        mounted() {
            $('.dropdown').dropdown();
        },
        methods: {

            logout() {
                let self = this
                this.loading = true
                api.authRequest('POST','/api/logout')
                .then(response => {
                    if(response.status === 200) {
                        self.loading = false;
                        
                        let promise = new Promise(function(resolve, reject) {
                            resolve(response);
                        });
                        promise.then((response)=> {
                            localStorage.removeItem(AUTH_TOKEN);
                        })
                        promise.then((response) => {
                            self.$router.push({name:'Login'})
                        })
                    }
                })
            }
        }
    }
</script>
