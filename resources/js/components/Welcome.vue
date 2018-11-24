<template>
<div class="container-fluid">
    <template v-if="isFullRoute">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </template>
    <template v-else>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </template>
</div>
</template>

<script>
    export default {
        name: 'welcome',
        computed: {
		    isFullRoute() {
				return (this.$route.meta && this.$route.meta.isFull === true);
			}
        }
    }
</script>

