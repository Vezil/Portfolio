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
                    content: `Built primarily with Nuxt, Vue, and Node.js (Express).
                    The platform handles private and business loan applications end-to-end.`,
                    title: 'Weloan',
                    // sourceCode: [{ label: 'Source Code', link: null }]
                },
                {
                    logoLink: 'israelbody.webp',
                    content: `Built primarily with Nuxt, Vue, and Node.js (Express),
                    with Elasticsearch powering content search and Tranzilla handling payments.
                    The platform includes a large online store with a wide product range,
                    a coupon and discount system, food recipes, and additional content.`,
                    title: 'Israelbody',
                    // sourceCode: [{ label: 'Source Code', link: null }]
                },
                {
                    logoLink: 'takeaway-storekit.webp',
                    content: `Built primarily with Vue, Node.js (Hapi), and PostgreSQL.
                    The platform integrates multiple payment systems including Adyen and PayPal,
                    as well as POS solutions such as Deliverect.
                    Users can order food for pickup, delivery, or direct-to-table service.`,
                    title: 'Takeaway-Order Storekit',
                    // sourceCode: [{ label: 'Source Code', link: null }]
                },
                {
                    logoLink: 'oferteo.webp',
                    content: `Built with Vue and Java, where I worked exclusively on the frontend.
                    The platform allows users to request specific services from companies matched to their inquiry (RFP).`,
                    title: 'Oferteo',
                    // sourceCode: [{ label: 'Source Code', link: null }]
                },
                {
                    logoLink: 'linked-client.webp',
                    content: `Built primarily with Vue, Express.js, TypeScript, and MongoDB.
                    LinkedClient provides an AI-powered sales assistant designed to improve efficiency
                    and close rates while reducing operational costs and administrative workload.`,
                    title: 'LinkedClient',
                    // sourceCode: [{ label: 'Source Code', link: null }]
                }
            ],

            myProjects: [
                {
                    logoLink: 'store.webp',
                    content: `A fully responsive e-commerce web application built with React.js,
                    featuring a product catalog, pricing display, and integrated PayPal payments.`,
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
                    The app supports instant messaging, emoji integration, and live updates with no page refresh.
                    Demonstrates WebSocket connection handling, real-time data flow, and interactive UX patterns.`,
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
                    Focused on layout accuracy and demonstrating practical use of Vue.js for building modern,
                    scalable user interfaces.`,
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
                    content: `An experimental 2D platform game built in pure JavaScript, featuring pixel-art levels,
                    collectibles, and a simple scoring system. Focuses on core gameplay systems such as player movement,
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
                    content: `A role-based HR web application built with Vue.js on the frontend
                    and a Node.js/Express API backed by MySQL via Sequelize.
                    The system supports two roles: Employer (Admin) and Employee (User).
                    Employees can submit leave requests, track their status, and manage their account,
                    including password changes.`,
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
                    content: `A browser-based implementation of the classic 2048 puzzle game built with JavaScript
                    and the p5.js library. Includes core game mechanics such as tile merging, score tracking,
                    and game-over detection, along with basic unit tests covering the game logic.
                    Demonstrates structured game state management, algorithmic problem-solving,
                    and testable front-end code.`,
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
                    content: `A full-stack social media application built with React on the frontend
                    and a Node.js API using TypeScript, Prisma, and PostgreSQL.
                    Users can create accounts, manage personal profiles, publish posts, follow other users,
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
