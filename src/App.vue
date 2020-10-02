<template>
    <div v-if="loading" class="mainApp">
        <Loading />
    </div>
    <div v-else class="mainApp">
        <Navbar />
        <Hello-Component />
        <Projects />
        <ContactForm />
    </div>
</template>

<script>
import Loading from './components/Loading';
import HelloComponent from './components/HelloComponent';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';

export default {
    name: 'App',
    components: {
        HelloComponent,
        Loading,
        Navbar,
        Projects,
        ContactForm
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
