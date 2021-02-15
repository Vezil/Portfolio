<template>
    <div class="projectsContainer" id="projectsSection">
        <h1>
            <u>Commercial Projects <i class="fa fa-book"></i></u
        ></h1>
        <div class="projectsSection">
            <Project
                v-for="project in commercialProjects"
                :key="project.projectlink"
                :logoLink="project.logoLink"
                :title="project.title"
                :content="project.content"
                :projectLink="project.projectLink"
            />
        </div>
        <h1>
            <u>My Projects <i class="fa fa-paint-brush"></i> </u>
        </h1>
        <div class="projectsSection">
            <Project
                v-for="project in myProjects"
                :key="project.projectlink"
                :logoLink="project.logoLink"
                :title="project.title"
                :content="project.content"
                :projectLink="project.projectLink"
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
                    logoLink: 'weloan.png',
                    content: `<br/>Project created mainly in Nuxt/Vue/Node(express). 
                    This website is using for taking loans (private or business)<br/><br/>
                    <span style="cursor:no-drop; color:gray; padding:5px;">Source Code</span>`,
                    title: 'Weloan',
                    projectLink: 'https://weloan-app.prpl.io'
                },
                {
                    logoLink: 'israelbody.png',
                    content: `<br/>Project created mainly in Nuxt/Vue/Node(express). There is also
                    Elasticsearch for searching content and Tranzilla system for payment.
                    In this website we can find a large store with many products and a system 
                    of coupons and discounts,
                    food recipes and many others things...<br/><br/>
                    <span style="cursor:no-drop; color:gray; padding:5px;">Source Code</span>
                     `,
                    title: 'Israelbody',
                    projectLink: 'https://www.israelbody.org'
                },
                {
                    logoLink: 'order.png',
                    content: `<br/>Project created mainly in Vue/Node(hapi). On this page is a lot
                    of integrations with the POS system (like orderlord). We can buy food via pickup,
                    delivery or order direct to the table.<br/><br/>
                    <span style="cursor:no-drop; color:gray; padding:5px;">Source Code</span>
                     `,
                    title: 'Takeaway-Order',
                    projectLink: 'https://order.storekit.com/quarantinos/menu'
                }
            ],

            myProjects: [
                {
                    logoLink: 'store.png',
                    content: `<br/>Small shop created in react.js .We can make payment
                    via Paypal<br/><br/>
                    <a style="text-decoration:none; color:gold; padding:5px;" 
                    href="https://github.com/Vezil/Store" target="_blank">Source Code</a>`,
                    title: 'Store',
                    projectLink: 'https://vezil-store.netlify.app'
                },
                {
                    logoLink: 'chat.png',
                    content: `<br/>This chat was created in react.js and node.js + socket.io.
                    You can find here some funcionality like emojify.<br/><br/>
                    <a style="text-decoration:none; color:gold; padding:5px;" 
                    href="https://github.com/Vezil/NodeChat" target="_blank">Source Code</a>`,
                    title: 'Chat',
                    projectLink: 'https://vezil-nodechat.netlify.app'
                },
                {
                    logoLink: 'disney.png',
                    content: `<br/>This project is reproduce disney plus website
                    (created in vue.js)<br/><br/>
                    <a style="text-decoration:none; color:gold; padding:5px;" 
                    href="https://github.com/Vezil/disneyplus" target="_blank">Source Code</a>`,
                    title: 'Disney Plus',
                    projectLink: 'https://vezil-disneyplus.netlify.app'
                },
                {
                    logoLink: 'platformPig.png',
                    content: `<br/>Experimental Platform Game created
                    in Javascript.<br/><br/> 
                    <a style="text-decoration:none; color:gold; padding:5px;"
                    href="https://github.com/Vezil/PlatformPig" target="_blank">Source Code</a>
                `,
                    title: 'Platform Pig',
                    projectLink:
                        'https://vezil.github.io/PlatformPig/PlatformPig.html?07'
                }
            ]
        };
    }
};
</script>
