<template>
    <div v-if="loading" class="mainApp">
        <Loading />
    </div>
    <div v-else class="mainApp">
        <Navbar />
        <Hello-Component />
        <div>
            <h1 style="color:white; padding:5%;">
                PROJECTS
            </h1>
        </div>
    </div>
</template>

<script>
import Loading from './components/Loading';
import HelloComponent from './components/HelloComponent';
import Navbar from './components/Navbar';

export default {
    name: 'App',
    components: {
        HelloComponent,
        Loading,
        Navbar
    },

    data() {
        return {
            loading: true
        };
    },

    mounted() {
        setTimeout(() => {
            this.loading = false;
        }, 1000);
    }
};
</script>

<style lang="scss">
@import './assets/styles/main.scss';
</style>
