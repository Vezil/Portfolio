<template>
    <div class="footer-section">
        <div class="all-rights-reserved">
            &copy; {{ new Date().getFullYear() }} Szymon Wojaczek. All rights
            reserved
        </div>
        <div>
            <div class="custom-button github">
                <a
                    class="custom-button-href"
                    :href="githubLink"
                    target="_blank"
                >
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
            <div class="custom-button cv">
                <a class="custom-button-href" @click="downloadCV">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Get CV
                    <i class="fa fa-download" aria-hidden="true"></i>
                </a>
            </div>
        </div>
        <div>
            <div class="custom-button linkedin">
                <a
                    class="custom-button-href"
                    :href="linkedinLink"
                    target="_blank"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Linkedin
                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
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
            linkedinLink:
                'https://www.linkedin.com/in/szymon-wojaczek-1b0b0317b',
            cvFileLink: `SzymonWojaczekCV.pdf`,
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
