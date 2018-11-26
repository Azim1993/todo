<template>
    <div class="content">
        <h3 class="page-title">Contest</h3>
        <div v-if="contests.length > 0" class="row">
            <single-contest v-for="(contest, index) in contests"
                :contest="contest"
                :key="index"></single-contest>
        </div>
        <div v-else class="alert alert-info"> <b>Opps !!</b> No contest</div>
    </div>
</template>

<script>
    import api              from '../../utility/api';
    import SingleContest    from "./Contest";
    export default {
        name: 'contests',
        components: {
            SingleContest
        },
        data() {
            return {
                contests: []
            }
        },
        mounted() {
            this.fetchContest();
        },
        methods: {
            fetchContest() {
                let self = this
                api.authRequest('get','/api/contest')
                .then(response => {
                    if(response.status === 200) {
                        this.contests = response.data.contests.data;
                    }
                });
            }
        }
    }
</script>

