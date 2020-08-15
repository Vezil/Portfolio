<template>
    <div class="loadingContainer">
        <div class="loader"></div>
    </div>
</template>

<style>
* {
    box-sizing: border-box;
}
body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #000;
}
.loader {
    position: relative;
    width: 150px;
    height: 100px;
    border-radius: 50px;
    background: linear;
}
</style>
