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
                <p>
                    I have been programming since <b>2016</b> and in summary I have almost
                    <b>3</b> years of commercial experience as a FullStack
                    Developer / FrontEnd Developer
                </p>
            </h2>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            typingStrings: [
                'FullStack Developer.',
                'FrontEnd Developer.',
                'BackEnd Developer.'
            ],
            isLoading: true
        };
    },

    mounted() {
        setTimeout(() => {
            this.isLoading = false;
        }, 1000);
    }
};
</script>
