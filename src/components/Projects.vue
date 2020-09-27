<template>
    <div class="projectsContainer">
        <h1>My Projects</h1>
        <div class="projectsSection">
            <Project
                :logoLink="'store.png'"
                :title="'Store'"
                :content="'Store Content'"
            />
            <Project
                :logoLink="'chat.png'"
                :title="'Chat'"
                :content="'Chat Content'"
            />
            <Project
                :logoLink="'disney.png'"
                :title="'Disney'"
                :content="'Disney Content'"
            />
            <Project
                :logoLink="'platformPig.png'"
                :title="'Platform Pig'"
                :content="'Platform Pig Content'"
            />
        </div>
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
