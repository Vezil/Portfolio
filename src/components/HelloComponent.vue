<template>
    <div class="mainContainer" id="aboutSection">
        <vue-typed-js
            v-if="!loading"
            :loop="true"
            :showCursor="true"
            :backSpeed="50"
            :strings="typingStrings"
        >
            <h1 class="typingText">
                Hello! Here Szymon, I'm
                <br />
                <span class="typing"></span>
            </h1>
        </vue-typed-js>

        <vue-typed-js v-if="!loading" :showCursor="true" a>
            <h2 class="staticText">
                <p>
                    I have been programming since <b>2016</b> and I have
                    <b>1</b> year of commercial experience as FullStack
                    Developer
                </p>
            </h2>
        </vue-typed-js>
    </div>
</template>
<script>
export default {
    data() {
        return {
            typingStrings: [
                'FullStack Developer.',
                'FrontEnd Developer.',
                'BackendEnd Developer.'
            ],
            loading: true
        };
    },

    mounted() {
        setTimeout(() => {
            this.loading = false;
        }, 1500);
    }
};
</script>
