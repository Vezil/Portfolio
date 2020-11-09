<template>
    <div v-if="loading" class="mainApp">
        <Loading />
    </div>
    <div v-else class="mainApp">
        <Navbar />
        <Hello-Component />
        <Projects />
        <Skills />
        <ContactForm />
        <Footer />
    </div>
</template>

<script>
import Loading from './components/Loading';
import HelloComponent from './components/HelloComponent';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default {
    name: 'App',
    components: {
        HelloComponent,
        Loading,
        Navbar,
        Projects,
        Skills,
        ContactForm,
        Footer
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
