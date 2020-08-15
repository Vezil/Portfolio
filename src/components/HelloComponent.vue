<template>
    <div class="mainContainer">
        <vue-typed-js :loop="true" :showCursor="true" :backSpeed="50" :strings="typingStrings">
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
            ]
        };
    }
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');

.mainContainer {
    background-size: 100%;
    background-image: url('../assets/msi-background.jpg');
    font-family: 'Indie Flower', cursive;
    width: 100%;
    height: 100vh;
    text-align: center;
    color: white;
}

.typing {
    color: green;
    text-shadow: 2px 2px black;
}
.typingText {
    margin-top: 40%;
    margin-left: 10%;
}
</style>
