<template>
    <div class="skillsContainer">
        <Skill :title="vueTitle" :description="vueDescription" />
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
            vueDescription: 'Description'
        };
    }
};
</script>
