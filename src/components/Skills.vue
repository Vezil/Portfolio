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
                    description: `
                    Bootstrap is a free and open-source CSS framework directed at responsive,
                    mobile-first front-end web development.  (I practiced also other Bootstrap-like frameworks like tailwind,vuetify etc...)`,
                    logoLink: 'bootstrap.png'
                },
                {
                    title: 'Js',
                    description: `JavaScript is a programming language commonly used in web development.
                    It was originally developed by Netscape as a means to add dynamic and interactive 
                    elements to websites. 
                    (I know ES6+ standard and some libraries like jQuery)
                     `,
                    logoLink: 'js.png'
                },
                {
                    title: 'Vue + Vuex',
                    description: `Vue is an open-source model–view–viewmodel front end JavaScript framework
                    for building user interfaces and single-page applications.
                    Vuex is a state management pattern. It serves as a centralized store for all the components
                    in an application.
                     `,
                    logoLink: 'vue.png'
                },
                {
                    title: 'Nuxt',
                    description: `Nuxt.js abstracts away the details of server and client code
                    distribution so you can focus on application development.
                    The goal with Nuxt is for it to be flexible enough for you to use as a main 
                    project base. `,
                    logoLink: 'nuxt.png'
                },
                {
                    title: 'React',
                    description: ` is an open-source, front end, JavaScript library for building user interfaces or UI components.
                    It is maintained by Facebook and a community of individual developers and companies.
                    React can be used as a base in the development of single-page or mobile applications.`,
                    logoLink: 'react.png'
                },
                {
                    title: 'Node',
                    description: `Node.js is an open-source, cross-platform, back-end,
                    JavaScript runtime environment that executes JavaScript code outside a web browser.
                    Node.js lets developers use JavaScript to write command line tools and for
                    server-side scripting—running 
                    scripts server-side to produce dynamic web page content 
                    before the page is sent to the user's web browser.`,
                    logoLink: 'node.png'
                },
                {
                    title: 'Express',
                    description: `Express.js is a back end web application framework for Node.js,
                    released as free and open-source software under the MIT License. It is designed for building web
                    applications and APIs.
                    It has been called the de facto standard server framework for Node.js`,
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
