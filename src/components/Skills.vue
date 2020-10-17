<template>
    <div class="skillsContainer">
        <Skill
            :title="vueTitle"
            :description="vueDescription"
            :logoLink="vueLogoLink"
        />
        <Skill
            :title="nodeTitle"
            :description="nodeDescription"
            :logoLink="nodeLogoLink"
        />
    </div>
</template>
<script>
import Skill from './Skill';

export default {
    components: {
        Skill
    },

    data() {
        return {
            vueTitle: 'Vue',
            vueDescription: 'Description',
            vueLogoLink: 'vue.png',
            nodeTitle: 'Node',
            nodeDescription: 'Description',
            nodeLogoLink: 'node.png'
        };
    }
};
</script>
<style>
.skillsContainer {
    width: 100%;
}
</style>
