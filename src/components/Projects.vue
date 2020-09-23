<template>
    <div class="container">
        <h1>Projects</h1>
        <br />

        <Project />
        <!-- <Project />
        <Project />
        <Project /> -->
    </div>
</template>
<script>
import Project from './Project';

export default {
    components: {
        Project
    },

    data() {
        return {};
    }
};
</script>

<style lang="scss" scoped>
.container {
    text-align: center;
    color: white;
    padding: 20px;
    margin: 20px;
}
</style>
