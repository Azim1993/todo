<template>
    <div class="col-sm-6">
        <div class="card">
            <div class="card-body">
                <h4>{{ contest.name }}</h4>
                <p>{{ contest.detail }}</p>
                <div class="teams" v-if="contest.teams.length > 0">
                    <span class="badge badge-secondary"
                        v-for="(team, index) in contest.teams"
                        :key="index">{{ team.name }}</span>
                </div>

                <router-link tag="a" :to="{name:'Contest', params: {id:contest.id}}"
                    class="card-link">Detail</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'single-contest',
        props: {
            contest: {
                type: Object,
                required: true,
            }
        }
    }
</script>

