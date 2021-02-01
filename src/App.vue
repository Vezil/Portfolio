<template>
    <div class="mainApp">
        <Navbar />
        <Hello-Component />
        <Projects />
        <Skills />
        <ContactForm />
        <Footer />
    </div>
</template>

<script>
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
