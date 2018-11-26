<template>
    <div class="content">
        <h3 class="page-title">Contest</h3>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam alias velit laudantium inventore voluptatem culpa, in dignissimos, eaque, natus aliquam a amet saepe. Repellendus consectetur accusantium atque nisi doloremque dignissimos!
    </div>
</template>

<script>
    import api              from '../../utility/api';
    export default {
        name: 'contest',
        mounted() {
            this.fetchContest();
        },
        methods: {
            fetchContest() {
                let self = this
                api.authRequest('get','/api/contest')
                .then(response => {
                    if(response.status === 200) {
                        console.log(response)
                    }
                });
            }
        }
    }
</script>

