<template>
    <div v-if="loading" class="mainApp">
        <Loading />
    </div>
    <div v-else class="mainApp">
        <Navbar />
        <Hello-Component />

        <div style="color:white" class="test">
            <div v-for="(item, index) in 40" :key="index">
                {{ item }}
                {{ text }}
            </div>
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
            loading: true,
            text: `Lorem ipsum dolor sit amet consectetu r adipisicing elit. Mo
                lestias excepturi ipsa imped it magni cupiditate, voluptas commo
                di unde autem, exercitationem odio ipsum pariatur! U llam porro
                quis suscipit inventore consequuntur repellat numquam?`
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
