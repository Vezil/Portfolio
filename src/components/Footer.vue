<template>
    <div class="footerSection">
        <div>
            &copy; {{ new Date().getFullYear() }} Szymon Wojaczek. All rights
            reserved
        </div>
        <div>
            <div class="customButton github">
                <a class="customButtonHref" :href="githubLink" target="_blank">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    GitHub
                    <i class="fa fa-github-alt" aria-hidden="true"></i>
                </a>
            </div>
        </div>
        <div>
            <div class="customButton cv">
                <a class="customButtonHref" @click="downloadCV">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Get CV
                    <i class="fa fa-download" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            githubLink: 'https://github.com/Vezil',
            cvFileLink: `Szymon'sResumeWithRodo.pdf`,
            cvFileName: 'SzymonWojaczekCV.pdf'
        };
    },

    methods: {
        downloadCV() {
            const element = document.createElement('a');
            element.href = this.cvFileLink;
            element.target = '_blank';
            element.download = this.cvFileName;
            element.click();
            document.body.removeChild(element);
        }
    }
};
</script>
