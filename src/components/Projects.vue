<template>
    <div class="projects-container" id="projects-section">
        <h1>
            <u>Commercial Projects <i class="fa fa-book"></i></u>
        </h1>
        <div class="projects-section">
            <Project
                v-for="project in commercialProjects"
                :key="project.title"
                :logoLink="project.logoLink"
                :title="project.title"
                :content="project.content"
                :project-link="project.projectLink"
                :source-code="project.sourceCode"
            />
        </div>
        <h1>
            <u>My Projects <i class="fa fa-paint-brush"></i> </u>
        </h1>
        <div class="projects-section">
            <Project
                v-for="project in myProjects"
                :key="project.title"
                :logoLink="project.logoLink"
                :title="project.title"
                :content="project.content"
                :project-link="project.projectLink"
                :source-code="project.sourceCode"
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
            commercialProjects: [
                {
                    logoLink: 'weloan.webp',
                    content: `The project was primarily developed using Nuxt, Vue, and Node.js (Express).
                    The platform is designed to facilitate private and business loan applications.`,
                    title: 'Weloan',
                    // sourceCode: [{ label: 'Source Code', link: null }]
                },
                {
                    logoLink: 'israelbody.webp',
                    content: `The project was primarily developed using Nuxt, Vue, and Node.js (Express).
                    It also integrates Elasticsearch for content search and the Tranzilla payment system.
                    The platform features a large online store with a wide range of products, a coupon and discount system, food recipes,
                    and additional content.`,
                    title: 'Israelbody',
                    // sourceCode: [{ label: 'Source Code', link: null }]
                },
                {
                    logoLink: 'takeaway-storekit.webp',
                    content: `The project was primarily developed using Vue, Node.js (Hapi), and PostgreSQL.
                    The platform integrates multiple payment systems, including Adyen, PayPal, and POS solutions such as Deliverect.
                    Users can order food for pickup, delivery, or direct-to-table service.`,
                    title: 'Takeaway-Order Storekit',
                    // sourceCode: [{ label: 'Source Code', link: null }]
                },
                {
                    logoLink: 'oferteo.webp',
                    content: `The project was developed using Vue and Java, with my contribution focused exclusively on the frontend.
                    The platform allows users to request specific services from companies matched to their inquiry (RFP).`,
                    title: 'Oferteo',
                    // sourceCode: [{ label: 'Source Code', link: null }]
                },
                {
                    logoLink: 'linked-client.webp',
                    content: `The project was primarily developed using Vue, Express.js, Typescript and MongoDB.
                    LinkedClient provides an AI-powered sales assistant designed to increase efficiency and close rates while reducing operational costs and administrative workload.`,
                    title: 'LinkedClient',
                    // sourceCode: [{ label: 'Source Code', link: null }]
                }
            ],

            myProjects: [
                {
                    logoLink: 'store.webp',
                    content: `A fully responsive e-commerce web application built with React.js,
                    featuring a product catalog, pricing display, and an integrated PayPal payment system.`,
                    title: 'Store',
                    projectLink: 'https://vezil-store.netlify.app',
                    sourceCode: [
                        {
                            label: 'Source Code',
                            link: 'https://github.com/Vezil/Store'
                        }
                    ]
                },
                {
                    logoLink: 'chat.webp',
                    content: `A real-time chat application built with React.js and Node.js,
                    using Socket.io for live, bidirectional communication.
                    The app supports instant messaging, emoji integration, and real-time updates without page refresh.
                    This project demonstrates handling WebSocket connections, real-time data flow, and building interactive user experiences.`,
                    title: 'Chat',
                    projectLink: 'https://vezil-nodechat.netlify.app',
                    sourceCode: [
                        {
                            label: 'Source Code',
                            link: 'https://github.com/Vezil/NodeChat'
                        }
                    ]
                },
                {
                    logoLink: 'disney.webp',
                    content: `A front-end recreation of the Disney+ streaming platform interface built with Vue.js.
                    The project focuses on layout accuracy. It demonstrates practical use of Vue.js for building modern, scalable user interfaces.`,
                    title: 'Disney Plus',
                    projectLink: 'https://vezil-disneyplus.netlify.app',
                    sourceCode: [
                        {
                            label: 'Source Code',
                            link: 'https://github.com/Vezil/disneyplus'
                        }
                    ]
                },
                {
                    logoLink: 'platform-pig.webp',
                    content: `An experimental 2D platform game built in pure JavaScript, featuring pixel-art levels, collectibles,
                    and a simple scoring system. The project focuses on core gameplay systems such as player movement,
                    collision detection, basic physics, and responsive input handling.`,
                    title: 'Platform Pig',
                    projectLink:
                        'https://vezil.github.io/PlatformPig/PlatformPig.html?07',
                    sourceCode: [
                        {
                            label: 'Source Code',
                            link: 'https://github.com/Vezil/PlatformPig'
                        }
                    ]
                },
                {
                    logoLink: 'erp.webp',
                    content: `Employee Management System.
                    A role-based HR web application built with Vue.js on the front end and a Node.js/Express API backed by MySQL via Sequelize.
                    The system supports two roles: Employer (Admin) and Employee (User).
                    Employees can submit leave requests, track their status, and manage their account (including password changes).`,
                    title: 'ERP System',
                    projectLink: 'https://vezil-erp-system.netlify.app',
                    sourceCode: [
                        {
                            label: 'Backend',
                            link: 'https://github.com/Vezil/ERP-Employee-server'
                        },
                        {
                            label: 'Frontend',
                            link: 'https://github.com/Vezil/ERP-Employee-frontend'
                        }
                    ]
                },
                {
                    logoLink: '2048-game.webp',
                    content: `2048 Game (JavaScript, p5.js)
                    A browser-based implementation of the classic 2048 puzzle game built with JavaScript and the p5.js library.
                    The project includes core game mechanics such as tile merging, score tracking, and game-over detection,
                    along with basic unit tests to verify game logic.
                    It demonstrates structured game state management, algorithmic problem-solving, and testable front-end code.`,
                    title: '2048 Game',
                    projectLink: 'https://vezil.github.io/2048-game',
                    sourceCode: [
                        {
                            label: 'Source Code',
                            link: 'https://github.com/Vezil/2048-game'
                        }
                    ]
                },
                {
                    logoLink: 'twitter.webp',
                    content: `Social Media Platform - "Twitter clone"
                    A full-stack social media application built with React and a Node.js API using TypeScript, Prisma, and PostgreSQL.
                    The platform allows users to create accounts, manage personal profiles, publish posts, follow other users,
                    and interact through comments.`,
                    title: 'Twitter Clone',
                    projectLink: 'https://vezil-twitter-clone.netlify.app/',
                    sourceCode: [
                        {
                            label: 'Backend',
                            link: 'https://github.com/Vezil/twitter-clone-backend'
                        },
                        {
                            label: 'Frontend',
                            link: 'https://github.com/Vezil/twitter-clone-frontend'
                        }
                    ]
                }
            ]
        };
    }
};
</script>
