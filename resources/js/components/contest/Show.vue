<template>
    <div class="content">
        <h3 class="page-title">{{ contest.name }}</h3>
        <p>{{ contest.detail }}</p>
        <div class="teams">

            <div v-if="contest.teams instanceof Array && contest.teams.length > 0" class="row">
                <div class="col-sm-4">
                    <ul class="list-group list-group-flush">
                        <li v-for="(team, index) in contest.teams"
                            :key="index"
                            @click="teamPreview = team">{{ team.name }}</li>
                    </ul>
                </div>

                <div class="col-sm-8">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">{{ teamPreview.name }}</h3>
                            <p class="card-subtitle mb-2 text-muted">{{ teamPreview.detail }}</p>
                            <div v-if="teamPreview.players !== 'undefined' || teamPreview.players instanceof Array && teamPreview.players.length > 0" class="card-text">
                                <p v-for="(player, index) in teamPreview.players"
                                    :key="index"> {{ player.name }}</p>
                            </div>
                            <div v-else class="alert alert-info">No team player</div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div v-else class="alert alert-warning">No Team</div>
        </div>
    </div>
</template>

<script>
    import api      from '../../utility/api';
    export default {
        name: 'contest',
        data() {
            return {
                contest: {},
                teamPreview: {}
            }
        },
        mounted() {
            this.fetchContest();
        },
        methods: {
            fetchContest() {
                let self = this
                api.authRequest('get','/api/contest/'+ this.$route.params.id)
                .then(response => {
                    if(response.status === 200) {
                        this.contest = response.data.contest
                    }
                });
            }
        }
    }
</script>

