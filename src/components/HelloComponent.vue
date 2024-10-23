<template>
    <div class="main-container" id="about-section">
        <vue-typed-js
            v-if="!isLoading"
            :loop="true"
            :showCursor="true"
            :backSpeed="50"
            :strings="typingStrings"
        >
            <h1 class="typing-text">
                Hello! Here Szymon, I'm a
                <br />
                <span class="typing"></span>
            </h1>
        </vue-typed-js>

        <div v-if="!isLoading">
            <h2 class="static-text">
                <div>
                    <p>I have been programming</p>
                    <p>since <b>2016</b>, accumulating </p>
                    <p>
                        over <b>{{ yearsOfPrograming }}</b> years of commercial
                        experience as a
                    </p>
                    <p>Software Engineer.</p>
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
                'Software Engineer.',
                'Full-Stack Engineer.',
                'Front-End Engineer.',
                'Back-End Engineer.'
            ],
            isLoading: true
        };
    },
    computed: {
        yearsOfPrograming() {
            return new Date().getFullYear() - 2020;
        }
    },
    mounted() {
        setTimeout(() => {
            this.isLoading = false;
        }, 1000);
    }
};
</script>
