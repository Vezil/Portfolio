<template>
    <div class="skillsContainer">
        <h1>My Skills</h1>

        <Skill
            v-for="item in skills"
            :key="item.title"
            :title="item.title"
            :description="item.description"
            :logoLink="item.logoLink"
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
            skills: [
                {
                    title: 'Html',
                    description: `Hypertext Markup Language (HTML)
                     is the standard markup language for documents
                      designed to be displayed in a web browser + HTML5 ( the fifth and 
                      latest major version of HTML that is a  
                      (W3C) recommendation).`,
                    logoLink: 'html.png'
                },

                {
                    title: 'Css',
                    description: `Cascading Style Sheets (CSS) is a style sheet language used
                     for describing the presentation of a document written in a markup language
                      such as HTML.`,
                    logoLink: 'css.png'
                },
                {
                    title: 'Scss',
                    description: `Sass (short for syntactically awesome style sheets) is a preprocessor scripting language that
                      is interpreted or compiled into Cascading Style Sheets (CSS).
                      SassScript is the scripting language itself.`,
                    logoLink: 'scss.png'
                },
                {
                    title: 'Bootstrap',
                    description: 'Bootstrap Description',
                    logoLink: 'bootstrap.png'
                },
                {
                    title: 'Js',
                    description: 'Js Description',
                    logoLink: 'js.png'
                },
                {
                    title: 'Vue',
                    description: 'Vue Description',
                    logoLink: 'vue.png'
                },
                {
                    title: 'Nuxt',
                    description: 'Nuxt Description',
                    logoLink: 'nuxt.png'
                },
                {
                    title: 'React',
                    description: 'React Description',
                    logoLink: 'react.png'
                },
                {
                    title: 'Node',
                    description: 'Node Description',
                    logoLink: 'node.png'
                },
                {
                    title: 'Express',
                    description: 'Express Description',
                    logoLink: 'express.png'
                },
                {
                    title: 'Hapi',
                    description: 'Hapi Description',
                    logoLink: 'hapi.png'
                },
                {
                    title: 'Sequelize',
                    description: 'Sequelize Description',
                    logoLink: 'sequelize.png'
                },
                {
                    title: 'Redis',
                    description: 'Redis Description',
                    logoLink: 'redis.png'
                },
                {
                    title: 'Docker',
                    description: 'Docker Description',
                    logoLink: 'docker.png'
                },
                {
                    title: 'Php',
                    description: 'Php Description',
                    logoLink: 'php.png'
                },
                {
                    title: 'Laravel',
                    description: 'Laravel Description',
                    logoLink: 'laravel.png'
                },
                {
                    title: 'MySQL',
                    description: 'MySQL Description',
                    logoLink: 'mysql.png'
                },
                {
                    title: 'Git',
                    description: 'Git Description',
                    logoLink: 'git.png'
                },
                {
                    title: 'C++',
                    description: 'C++ Description',
                    logoLink: 'cplusplus.png'
                },
                {
                    title: 'Others',
                    description: 'Others Description',
                    logoLink: 'others.png'
                }
            ]
        };
    }
};
</script>
<style>
.skillsContainer {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    min-height: 45vh;
    flex-wrap: wrap;
}

.skillsContainer h1 {
    font-size: 40px;
    padding: 40px;
    flex-basis: 100%;
    color: #fff;
    text-shadow: 0 0 50px #f06292;
    font-family: 'Montserrat', sans-serif;
}
</style>
