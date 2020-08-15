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
<style >
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');
body {
    background: black;
}
.mainContainer {
    background-size: 100%;
    background-image: url('../assets/msi-background.jpg');
    font-family: 'Indie Flower', cursive;
    width: 100%;
    height: 100vh;
    text-align: center;
    color: white;
    animation: animate 2s linear;
}

.typing {
    color: green;
    text-shadow: 2px 2px black;
}
.typingText {
    margin-top: 40%;
    margin-left: 10%;
}

@keyframes animate {
    0% {
        filter: grayscale(100%);
        filter: blur(4px);
        height: 100px;
    }
    100% {
        filter: grayscale(0%);
        filter: blur(0);
    }
}
</style>
