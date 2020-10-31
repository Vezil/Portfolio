<template>
    <div class="projectsContainer" id="projectsSection">
        <h1>
            <u>Commercial Projects <i class="fa fa-book"></i></u
        ></h1>
        <div class="projectsSection">
            <Project
                :logoLink="'weloan.png'"
                :title="'Weloan'"
                :content="weloanContent"
                :projectLink="'https://weloan-app.prpl.io'"
            />

            <Project
                :logoLink="'israelbody.png'"
                :title="'Israelbody'"
                :content="israelbodyContent"
                :projectLink="'https://www.israelbody.org'"
            />
        </div>
        <h1>
            <u>My Projects <i class="fa fa-paint-brush"></i> </u>
        </h1>
        <div class="projectsSection">
            <Project
                :logoLink="'store.png'"
                :title="'Store'"
                :content="storeContent"
                :projectLink="'https://vezil-store.netlify.app'"
            />
            <Project
                :logoLink="'chat.png'"
                :title="'Chat'"
                :content="chatContent"
                :projectLink="'https://vezil-nodechat.netlify.app'"
            />
            <Project
                :logoLink="'disney.png'"
                :title="'Disney Plus'"
                :content="disneyContent"
                :projectLink="'https://vezil-disneyplus.netlify.app'"
            />
            <Project
                :logoLink="'platformPig.png'"
                :title="'Platform Pig'"
                :content="platformPigContent"
                :projectLink="
                    'https://vezil.github.io/PlatformPig/PlatformPig.html?07'
                "
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
            weloanContent: `<br/>Project created mainly in Nuxt/Vue/Node(express).
            This website is using for taking loans (private or business)<br/><br/>
             <span style="cursor:no-drop; color:gray; padding:5px;">Source Code</span>`,

            israelbodyContent: `<br/>Project created mainly in Nuxt/Vue/Node(express).There is also
             Elasticsearch for searching content and Tranzilla system for payment.
              In this website we can find a large store with many products and a system of coupons and discounts,
               food recipes and many others things...<br/><br/>
               <span style="cursor:no-drop; color:gray; padding:5px;">Source Code</span>
            `,

            storeContent: `<br/>Small shop created in react.js .We can make payment via Paypal<br/><br/>
            <a style="text-decoration:none; color:gold; padding:5px;" href="https://github.com/Vezil/Store" target="_blank">Source Code</a>`,

            chatContent: `<br/>This chat was created in react.js and node.js + socket.io.
             You can find here some funcionality like emojify.<br/><br/>
               <a style="text-decoration:none; color:gold; padding:5px;" href="https://github.com/Vezil/NodeChat" target="_blank">Source Code</a>`,

            disneyContent: `<br/>This project is reproduce disney plus website (created in vue.js)<br/><br/>
            <a style="text-decoration:none; color:gold; padding:5px;" href="https://github.com/Vezil/disneyplus" target="_blank">Source Code</a>`,

            platformPigContent: `<br/>Experimental Platform Game created in Javascript.<br/><br/> 
                 <a style="text-decoration:none; color:gold; padding:5px;" href="https://github.com/Vezil/PlatformPig" target="_blank">Source Code</a>
                `
        };
    }
};
</script>
