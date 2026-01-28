<template>
    <div class="projects-container" id="projects-section">
        <h1>
            <u>Commercial Projects <i class="fa fa-book"></i></u>
        </h1>
        <div class="projects-section">
            <Project
                v-for="project in commercialProjects"
                :key="project.projectLink"
                :logoLink="project.logoLink"
                :title="project.title"
                :content="project.content"
                :project-link="project.projectLink"
            />
        </div>
        <h1>
            <u>My Projects <i class="fa fa-paint-brush"></i> </u>
        </h1>
        <div class="projects-section">
            <Project
                v-for="project in myProjects"
                :key="project.projectLink"
                :logoLink="project.logoLink"
                :title="project.title"
                :content="project.content"
                :project-link="project.projectLink"
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
                    content: `<br/>The project was primarily developed using Nuxt, Vue, and Node.js (Express).
                    The platform is designed to facilitate private and business loan applications.<br/><br/>
                    <span style="cursor:no-drop; color:gray; padding:5px;">Source Code</span>`,
                    title: 'Weloan'
                },
                {
                    logoLink: 'israelbody.webp',
                    content: `<br/>The project was primarily developed using Nuxt, Vue, and Node.js (Express).
                    It also integrates Elasticsearch for content search and the Tranzilla payment system.
                    The platform features a large online store with a wide range of products, a coupon and discount system, food recipes,
                    and additional content.<br/><br/>
                    <span style="cursor:no-drop; color:gray; padding:5px;">Source Code</span>
                     `,
                    title: 'Israelbody'
                },
                {
                    logoLink: 'takeaway-storekit.webp',
                    content: `<br/>The project was primarily developed using Vue, Node.js (Hapi), and PostgreSQL.
                    The platform integrates multiple payment systems, including Adyen, PayPal, and POS solutions such as Deliverect.
                    Users can order food for pickup, delivery, or direct-to-table service.<br/><br/>
                    <span style="cursor:no-drop; color:gray; padding:5px;">Source Code</span>
                     `,
                    title: 'Takeaway-Order Storekit'
                },
                {
                    logoLink: 'oferteo.webp',
                    content: `<br/>The project was developed using Vue and Java, with my contribution focused exclusively on the frontend.
                    The platform allows users to request specific services from companies matched to their inquiry (RFP)<br/><br/>
                    <span style="cursor:no-drop; color:gray; padding:5px;">Source Code</span>
                     `,
                    title: 'Oferteo'
                },
                {
                    logoLink: 'linked-client.webp',
                    content: `<br/>The project was primarily developed using Vue, Express.js, Typescript and MongoDB.
                    LinkedClient provides an AI-powered sales assistant designed to increase efficiency and close rates while reducing operational costs and administrative workload.<br/><br/>
                    <span style="cursor:no-drop; color:gray; padding:5px;">Source Code</span>
                     `,
                    title: 'LinkedClient'
                }
            ],

            myProjects: [
                {
                    logoLink: 'store.png',
                    content: `<br/>Small shop created in react.js .We can make payment
                    via Paypal<br/><br/>
                    <a class="project-link" 
                    href="https://github.com/Vezil/Store" target="_blank">Source Code</a>`,
                    title: 'Store',
                    projectLink: 'https://vezil-store.netlify.app'
                },
                {
                    logoLink: 'chat.png',
                    content: `<br/>This chat was created in react.js and node.js + socket.io.
                    You can find here some funcionality like emojify.<br/><br/>
                    <a class="project-link"
                    href="https://github.com/Vezil/NodeChat" target="_blank">Source Code</a>`,
                    title: 'Chat',
                    projectLink: 'https://vezil-nodechat.netlify.app'
                },
                {
                    logoLink: 'disney.png',
                    content: `<br/>This project is reproduce disney plus website
                    (created in vue.js)<br/><br/>
                    <a class="project-link" 
                    href="https://github.com/Vezil/disneyplus" target="_blank">Source Code</a>`,
                    title: 'Disney Plus',
                    projectLink: 'https://vezil-disneyplus.netlify.app'
                },
                {
                    logoLink: 'platformPig.png',
                    content: `<br/>Experimental Platform Game created
                    in Javascript.<br/><br/> 
                    <a class="project-link"
                    href="https://github.com/Vezil/PlatformPig" target="_blank">Source Code</a>
                `,
                    title: 'Platform Pig',
                    projectLink:
                        'https://vezil.github.io/PlatformPig/PlatformPig.html?07'
                },
                {
                    logoLink: 'erp-system.png',
                    content: `<br/>Project created mainly in Vue/Node(express)/Sequelize/MySql. In this project, there are two roles.
                    Admin (Employer) and User (Employee). As a Employee, you can request holidays, and change your password. As an Employer
                    you can add Employees, add contracts, accept or deny vacations and reset password. Test credentials for a user and admin are available on github project description :)<br/>
                    <a class="project-link"
                    href="https://github.com/Vezil/ERP-Employee-server" target="_blank">Source Code (backend)</a><br/>
                    <a class="project-link" href="https://github.com/Vezil/ERP-Employee-frontend" target="_blank">Source Code (frontend)</a>
                     `,
                    title: 'ERP System',
                    projectLink: 'https://vezil-erp-system.netlify.app'
                },
                {
                    logoLink: '2048-game.png',
                    content: `<br/>A project based on the game "2048". Project created with javascript + p5.js library,
                     there are also some unit tests. Special thanks for the Coding Traing channel for inspiration :)<br/><br/>
                    <a class="project-link"
                    href="https://github.com/Vezil/2048-game" target="_blank">Source Code</a><br/>
                     `,
                    title: '2048 Game',
                    projectLink: 'https://vezil.github.io/2048-game'
                },
                {
                    logoLink: 'twitter-clone.png',
                    content: `<br/>Project created mainly in React/Node/Prisma/Typescript/Postgres. Create your account and try it!
                    In the app you can add your bio, add your tweets, you can follow someone, comment someone other tweet...<br/><br/>
                    <a class="project-link"
                    href="https://github.com/Vezil/twitter-clone-backend" target="_blank">Source Code (backend)</a><br/>
                    <a class="project-link" href="https://github.com/Vezil/twitter-clone-frontend" target="_blank">Source Code (frontend)</a>`,
                    title: 'Twitter Clone',
                    projectLink: 'https://vezil-twitter-clone.netlify.app/'
                }
            ]
        };
    }
};
</script>
