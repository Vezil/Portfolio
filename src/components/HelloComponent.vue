<template>
    <div class="main-container" id="about-section">
        <vue-typed-js v-if="!isLoading" :loop="true" :showCursor="true" :backSpeed="50" :strings="typingStrings">
            <h1 class="typing-text">
                Hi! Szymon here, I'm a
                <br />
                <span class="typing"></span>
            </h1>
        </vue-typed-js>

        <div v-if="!isLoading">
            <h2 class="static-text">
                <div>
                    <p>
                        Software Engineer with
                        <b>{{ yearsOfPrograming }}</b> years of
                    </p>
                    <p>
                        experience, focused on designing scalable backend systems.
                        I work primarily with Node.js and TypeScript, with a growing focus on system architecture and
                        AI-powered solutions.
                    </p>
                </div>
            </h2>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            typingStrings: [
                'Software Architect.',
                'Software Engineer.',
                'Full-Stack Engineer.',
                'AI Engineer.',
            ],
            isLoading: true
        };
    },
    computed: {
        yearsOfPrograming() {
            return `${new Date().getFullYear() - 2020}+`;
        }
    },
    mounted() {
        setTimeout(() => {
            this.isLoading = false;
        }, 1000);
    }
};
</script>
