<template>
    <div v-if="!showPageNotFound" class="main-app">
        <Navbar />
        <Hello-Component />
        <Projects />
        <Skills />
        <ContactForm />
        <Footer />
    </div>
    <div v-else>
        <PageNotFound />
    </div>
</template>

<script>
const HelloComponent = () => import('./components/HelloComponent');
const Projects = () => import('./components/Projects');
const Navbar = () => import('./components/Navbar');
const Skills = () => import('./components/Skills');
const ContactForm = () => import('./components/ContactForm');
const Footer = () => import('./components/Footer');
const PageNotFound = () => import('./components/PageNotFound');

export default {
    name: 'App',
    components: {
        HelloComponent,
        Navbar,
        Projects,
        Skills,
        ContactForm,
        Footer,
        PageNotFound
    },
    computed: {
        showPageNotFound() {
            return (
                window.location.pathname !== '/' &&
                window.location.pathname.trim() !== '' &&
                !window.location.pathname.startsWith('#')
            );
        }
    }
};
</script>

<style lang="scss">
@import './assets/styles/main.scss';
</style>
