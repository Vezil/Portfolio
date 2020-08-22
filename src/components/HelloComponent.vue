<template>
    <div class="mainContainer">
        <vue-typed-js
            v-if="!loading"
            :loop="true"
            :showCursor="true"
            :backSpeed="50"
            :strings="typingStrings"
        >
            <h1 class="typingText">
                Hello! Here Szymon, I'm
                <span class="typing"></span>
            </h1>
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

