<template>
    <div class="projectsContainer">
        <h1>Commercial Projects</h1>
        <div class="projectsSection">
            <Project
                :logoLink="'weloan.png'"
                :title="'Weloan'"
                :content="'Weloan Content'"
                :projectLink="'https://weloan-app.prpl.io'"
            />

            <Project
                :logoLink="'israelbody.png'"
                :title="'Israelbody'"
                :content="'Israelbody Content'"
                :projectLink="'https://www.israelbody.org'"
            />
        </div>
        <h1>My Projects</h1>
        <div class="projectsSection">
            <Project
                :logoLink="'store.png'"
                :title="'Store'"
                :content="'Store Content'"
                :projectLink="'https://vezil-store.netlify.app'"
            />
            <Project
                :logoLink="'chat.png'"
                :title="'Chat'"
                :content="'Chat Content'"
                :projectLink="'https://vezil-nodechat.netlify.app'"
            />
            <Project
                :logoLink="'disney.png'"
                :title="'Disney'"
                :content="'Disney Content'"
                :projectLink="'https://vezil-disneyplus.netlify.app'"
            />
            <Project
                :logoLink="'platformPig.png'"
                :title="'Platform Pig'"
                :content="platformPigContent"
                :projectLink="'https://vezil.github.io/PlatformPig/PlatformPig.html?07'"
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
        return {
            platformPigContent: `<br/>Experimental Platform Game created in Javascript.<br/><br/> 
                 <a style="text-decoration:none; color:gold; padding:5px;" href="https://github.com/Vezil/PlatformPig" target="_blank">Source Code</a>
                `
        };
    }
};
</script>
