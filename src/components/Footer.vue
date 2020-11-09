<template>
    <div class="footerSection">
        © {{ new Date().getFullYear() }} Szymon Wojaczek. All rights reserved
    </div>
</template>

<script>
export default {};
</script>

<style>
.footerSection {
    position: relative;
    width: 100%;
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #111111;
    color: rgb(168, 167, 167);
    font-size: 2em;
    text-transform: uppercase;
}
</style>
