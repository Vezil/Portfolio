<template>
    <div v-if="loading" class="mainApp">
        <Loading />
    </div>
    <div v-else class="mainApp">
        <Hello-Component />
    </div>
</template>

<script>
import Loading from './components/Loading';
import HelloComponent from './components/HelloComponent';

export default {
    name: 'App',
    components: {
        HelloComponent,
        Loading
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

<style>
@import url('https://fonts.googleapis.com/css?family=Popins:100,200,300,400,500,600,700,800,900');
/* body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: black;
} */

* {
    margin: 0;
    padding: 0;
}
</style>

