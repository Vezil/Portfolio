<template>
    <div class="main-app">
        <Navbar />
        <Hello-Component />
        <Projects />
        <Skills />
        <ContactForm />
        <Footer />
    </div>
</template>

<script>
const HelloComponent = () => import('./components/HelloComponent');
const Projects = () => import('./components/Projects');
const Navbar = () => import('./components/Navbar');
const Skills = () => import('./components/Skills');
const ContactForm = () => import('./components/ContactForm');
const Footer = () => import('./components/Footer');

export default {
    name: 'App',
    components: {
        HelloComponent,
        Navbar,
        Projects,
        Skills,
        ContactForm,
        Footer
    }
};
</script>

<style lang="scss">
@import './assets/styles/main.scss';
</style>
