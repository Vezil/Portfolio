<template>
    <div class="mainContainer">
        <vue-typed-js
            :loop="true"
            :showCursor="true"
            :backSpeed="50"
            :strings="typingStrings"
        >
            <h1>Hello! Here Szymon, I'm <span class="typing"></span></h1>
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
            ]
        };
    }
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');

.mainContainer {
    font-family: 'Indie Flower', cursive;

    width: 100%;
    height: 100vh;
    text-align: center;
    color: white;
    margin-top: 40%;
    margin-left: 10%;
}

.typing {
    color: green;
    text-shadow: 2px 2px black;
}
</style>
