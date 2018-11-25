<template>
<div class="container-fluid">
    <template v-if="isFullRoute">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </template>
    <template v-else>
        <app-header></app-header>
        <div class="row">
            <div class="col-sm-3">
                <sidebar></sidebar>
            </div>
            <div class="col-sm-9">
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </template>
</div>
</template>

<script>
    import Header from './layouts/Header'
    export default {
        name: 'welcome',
        components: {
            Header
        },
        computed: {
		    isFullRoute() {
				return (this.$route.meta && this.$route.meta.isFull === true);
			}
        }
    }
</script>

