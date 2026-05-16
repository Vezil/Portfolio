<template>
    <div class="skills-container" id="skills-section">
        <h1>
            <u>My Skills <i class="fa fa-cog" aria-hidden="true"></i></u>
        </h1>

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
                // --- Markup & styling ---
                {
                    title: 'Html',
                    description: `Hypertext Markup Language (HTML) is the standard
                    markup language for documents designed to be displayed in a web browser.
                    I work with HTML5, the latest major version and a W3C recommendation.`,
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
                    description: `Bootstrap is a free and open-source CSS framework directed
                    at responsive, mobile-first front-end web development.
                    I have also worked with similar frameworks like Tailwind and Vuetify.`,
                    logoLink: 'bootstrap.png'
                },

                // --- JS / TS languages ---
                {
                    title: 'Javascript',
                    description: `JavaScript is a programming language commonly used in web development.
                    It was originally developed by Netscape to add dynamic and interactive elements to websites.
                    I know the ES6+ standard and libraries like jQuery.`,
                    logoLink: 'js.png'
                },
                {
                    title: 'Typescript',
                    description: `TypeScript is an open-source language which builds on JavaScript,
                    one of the world’s most used tools, by adding static type definitions. All valid JavaScript code is also TypeScript code.
                     `,
                    logoLink: 'Typescript_logo_2020.png'
                },

                // --- Frontend frameworks ---
                {
                    title: 'Vue + Vuex',
                    description: `Vue is an open-source, model-view-viewmodel JavaScript framework
                    for building user interfaces and single-page applications.
                    Vuex is a state management pattern that serves as a centralized store
                    for all components in an application.`,
                    logoLink: 'vue.png'
                },
                {
                    title: 'Nuxt',
                    description: `Nuxt.js abstracts away the details of server and client code distribution,
                    so you can focus on application development.
                    Its goal is to be flexible enough to serve as the main project base.`,
                    logoLink: 'nuxt.png'
                },
                {
                    title: 'React',
                    description: `React is an open-source, front-end JavaScript library for building user interfaces
                    and UI components. It is maintained by Facebook and a community of individual developers
                    and companies. React can be used as a base for single-page or mobile applications.`,
                    logoLink: 'react.png'
                },

                // --- Node backend stack ---
                {
                    title: 'Node',
                    description: `Node.js is an open-source, cross-platform, back-end JavaScript runtime environment
                    that executes JavaScript code outside a web browser. It lets developers use JavaScript
                    to write command line tools and run server-side scripts that produce dynamic web page content.`,
                    logoLink: 'node.png'
                },
                {
                    title: 'Express',
                    description: `Express.js is a back-end web application framework for Node.js,
                    released as free and open-source software under the MIT License.
                    It is designed for building web applications and APIs, and has been called
                    the de facto standard server framework for Node.js.`,
                    logoLink: 'express.png'
                },
                {
                    title: 'Hapi',
                    description: `Hapi is a rich Node.js framework for building applications and services.
                    It lets developers focus on writing reusable application logic instead of
                    spending time building infrastructure.`,
                    logoLink: 'hapi.png'
                },
                {
                    title: 'Sequelize',
                    description: `Sequelize is a powerful JavaScript library that makes it easy
                    to manage SQL databases like PostgreSQL, MySQL, and SQLite.
                    At its core, Sequelize is an Object-Relational Mapper.`,
                    logoLink: 'sequelize.png'
                },

                // --- PHP stack ---
                {
                    title: 'Php',
                    description: `PHP (recursive acronym for PHP: Hypertext Preprocessor)
                    is a widely-used open source general-purpose scripting language that
                    is especially suited for web development and can be embedded into HTML.`,
                    logoLink: 'php.png'
                },
                {
                    title: 'Laravel',
                    description: `Laravel is a free, open-source PHP web framework intended
                    for the development of web applications following the model-view-controller (MVC)
                    architectural pattern, based on Symfony.`,
                    logoLink: 'laravel.png'
                },

                // --- Databases ---
                {
                    title: 'MySQL',
                    description: `MySQL is a relational database that organizes data into tables
                    with relations between them. SQL is the language used to create, modify, and extract data
                    from the database, as well as control user access.`,
                    logoLink: 'mysql.png'
                },
                {
                    title: 'Redis',
                    description: `Redis is an open-source (BSD-licensed), in-memory data structure store
                    used as a database, cache, and message broker. It supports data structures
                    such as strings, hashes, lists, and sets, and can also be used as a queue.`,
                    logoLink: 'redis.png'
                },

                // --- DevOps / tooling ---
                {
                    title: 'Docker',
                    description: `Docker is a tool designed to make it easier to create,
                    deploy, and run applications by using containers. Containers allow a
                    developer to package up an application with all of the parts it needs,
                    such as libraries and other dependencies, and deploy it as one package.`,
                    logoLink: 'docker.png'
                },
                {
                    title: 'Git',
                    description: `Git is a distributed version-control system for tracking
                    changes in source code during software development.
                    It is designed for coordinating work among programmers, but it can be used
                    to track changes in any set of files.`,
                    logoLink: 'git.png'
                },

                // --- Other languages & misc ---
                {
                    title: 'C++',
                    description: `C++ has expanded significantly over time, and modern C++ now supports
                    object-oriented, generic, and functional programming.
                    Many popular languages like JavaScript and PHP were later inspired by it.`,
                    logoLink: 'cplusplus.png'
                },
                {
                    title: 'Others',
                    description: `I also know other tools that come in handy while programming, like
                    Photoshop (graphic editor), Camtasia Studio (video editor),
                    Postman (for testing APIs), SEO (Search Engine Optimization),
                    Facebook Pixel (Facebook advertisements), Jest (for testing),
                    and the OAuth 2.0 protocol (authorization via Google etc.).`,
                    logoLink: 'others.png'
                }
            ]
        };
    }
};
</script>
