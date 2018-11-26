<template>
    <div class="sidebar">
        <div class="list-group">
            <router-link tag="a" class="list-group-item list-group-item-action"
                :to="{name:'Dashboard'}"
                :class="{'active': current === 'Dashboard'}">Dashboard</router-link>
            <a href="#" class="list-group-item list-group-item-action">Todo</a>
            <router-link tag="a" class="list-group-item list-group-item-action"
                :to="{name:'Contest'}"
                :class="{'active': current === 'Contest'}">Contest</router-link>
            <a href="#" class="list-group-item list-group-item-action">Player</a>
            <a href="#" class="list-group-item list-group-item-action disabled">Teams</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'sidebar',
        computed: {
            current() {
                return this.$router.currentRoute.name;
            }
        }
    }
</script>

