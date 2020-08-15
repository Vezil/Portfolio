<template>
    <v-app>
        <v-main>
            <Hello-Component></Hello-Component>
        </v-main>
    </v-app>
</template>

<script>
import HelloComponent from './components/HelloComponent';

export default {
    name: 'App',

    components: {
        HelloComponent
    },

    data: () => ({
        //
    })
};
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Popins:100,200,300,400,500,600,700,800,900');
body {
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
}
</style>
