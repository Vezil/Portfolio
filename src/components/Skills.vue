<template>
    <div class="skills-container" id="skills-section">
        <h1>
            <u>My Skills <i class="fa fa-cog" aria-hidden="true"></i> </u
        ></h1>

        <Skill
            v-for="skill in skills"
            :key="skill.logoLink"
            :title="skill.title"
            :description="skill.description"
            :logoLink="skill.logoLink"
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
                    title: 'Javascript',
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
                    description: `Hapi is a rich framework (Node.js) for building applications and services.
                     It enables developers to focus on writing reusable application logic instead 
                     of spending time building infrastructure.`,
                    logoLink: 'hapi.png'
                },
                {
                    title: 'Sequelize',
                    description: `
                    Sequelize is a powerful library in Javascript that makes it
                    easy to manage a SQL database. Sequelize can layer over different protocols,
                    but here we'll use PostgreSQL. At its core, Sequelize is an Object-Relational Mapper.
                    `,
                    logoLink: 'sequelize.png'
                },
                {
                    title: 'Redis',
                    description: `Redis is an open source (BSD licensed),
                    in-memory data structure store, used as a database,
                    cache and message broker. It supports data structures 
                    such as strings, hashes, lists, sets. We can use redis for queue also.`,
                    logoLink: 'redis.png'
                },
                {
                    title: 'Docker',
                    description: `Docker is a tool designed to make it easier to create,
                    deploy, and run applications by using containers. Containers allow a 
                    developer to package up an application with all of the parts it needs,
                    such as libraries and other dependencies, and deploy it as one package.`,
                    logoLink: 'docker.png'
                },
                {
                    title: 'Php',
                    description: `PHP (recursive acronym for PHP: Hypertext Preprocessor)
                    is a widely-used open source general-purpose scripting language that
                    is especially suited for web development and can be embedded into HTML.`,
                    logoLink: 'php.png'
                },
                {
                    title: 'Laravel',
                    description: `Laravel is a free, open-source PHP web framework,
                    intended for the development of web applications following the model–view–controller (MVC)
                    architectural pattern and based on Symfony.
                    `,
                    logoLink: 'laravel.png'
                },
                {
                    title: 'MySQL',
                    description: `A relational database organizes data into one or more data tables
                    in which data types may be related to each other; these relations help structure
                    the data. SQL is a language programmers use to create, modify and extract data 
                    from the relational database, as well as control user access to the database.`,
                    logoLink: 'mysql.png'
                },
                {
                    title: 'Git',
                    description: `Git is a distributed version-control system for tracking
                    changes in source code during software development.
                    It is designed for coordinating work among programmers,
                    but it can be used to track changes in any set of files.
                    `,
                    logoLink: 'git.png'
                },
                {
                    title: 'C++',
                    description: `The language has expanded significantly over time,
                    and modern C++ now has object-oriented, generic, and functional.
                    Based on this language later was created popular programming language like
                    Javascript, Php and others...
                     `,
                    logoLink: 'cplusplus.png'
                },
                {
                    title: 'Typescript',
                    description: `TypeScript is an open-source language which builds on JavaScript,
                    one of the world’s most used tools, by adding static type definitions. All valid JavaScript code is also TypeScript code.
                     `,
                    logoLink: 'Typescript_logo_2020.png'
                },
                {
                    title: 'Others',
                    description: `I know also others stuff who can be usefull
                    during the programing like:
                    Photoshop (graphic editor), Camtasia Studio (video editor),
                    Postman (for testing API), SEO (Search Engine Optimization), Facebook Pixel (Advertisements for facebook),
                     Jest (for testing), OAuth 2.0 protocol (authorizing via e.g Google) ...
                   `,
                    logoLink: 'others.png'
                }
            ]
        };
    }
};
</script>
