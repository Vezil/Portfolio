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
            cvFileLink: 'CVSzymonWojaczek.pdf',
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

<style lang="scss">
.footerSection {
    position: relative;
    width: 100%;
    height: 20vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: #111111;
    color: rgb(173, 169, 169);
    font-size: 2em;
    text-transform: capitalize;
    background: url('../assets/images/footerBackground.png') no-repeat left;
    background-size: 100vw 200px;
    // https://www.rawpixel.com/image/580718/black-geometric-modern-background

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }

    .customButton {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Montserrat-Regular';

        .customButtonHref {
            position: relative;
            display: inline-block;
            padding: 15px 30px;
            text-transform: uppercase;
            letter-spacing: 4px;
            text-decoration: none;
            font-size: 24px;
            overflow: hidden;
            transition: 0.2s;
            cursor: url('../assets/images/custom-cursor-pointer.png'), pointer !important;

            span {
                position: absolute;
                display: block;
            }

            &:hover {
                color: #000;
                background: #f6f8fa;
                box-shadow: 0 0 10px #596e80, 0 0 40px #f6f8fa, 0 0 10px #f6f8fa;
                transition-delay: 1s;
            }

            span:nth-child(1) {
                top: 0;
                left: -100%;
                width: 100%;
                height: 2px;
            }

            &:hover span:nth-child(1) {
                left: 100%;
                transition: 1s;
            }

            span:nth-child(2) {
                top: -100%;
                right: 0;
                width: 2px;
                height: 100%;
            }

            &:hover span:nth-child(2) {
                top: 100%;
                transition: 1s;
                transition-delay: 0.25s;
            }

            span:nth-child(3) {
                bottom: 0;
                right: -100%;
                width: 100%;
                height: 2px;
            }

            &:hover span:nth-child(3) {
                right: 100%;
                transition: 1s;
                transition-delay: 0.5s;
            }

            span:nth-child(4) {
                bottom: -100%;
                left: 0;
                width: 2px;
                height: 100%;
            }

            &:hover span:nth-child(4) {
                bottom: 100%;
                transition: 1s;
                transition-delay: 0.75s;
            }
        }
    }

    .github .customButtonHref {
        color: #0004ff;
        span:nth-child(1) {
            background: linear-gradient(90deg, transparent, #4b5a69);
        }

        span:nth-child(2) {
            background: linear-gradient(180deg, transparent, #4b5a69);
        }
        span:nth-child(3) {
            background: linear-gradient(270deg, transparent, #4b5a69);
        }
        span:nth-child(4) {
            background: linear-gradient(360deg, transparent, #4b5a69);
        }

        &:hover {
            color: rgb(255, 255, 255);
            background: #000286;
            box-shadow: 0 0 10px #05345d, 0 0 40px #092d52, 0 0 10px #4b5a69;
            transition-delay: 1s;
        }
    }

    .cv .customButtonHref {
        color: #e2622f;
        span:nth-child(1) {
            background: linear-gradient(90deg, transparent, #ff7b00);
        }

        span:nth-child(2) {
            background: linear-gradient(180deg, transparent, #ff7b00);
        }
        span:nth-child(3) {
            background: linear-gradient(270deg, transparent, #ff7b00);
        }
        span:nth-child(4) {
            background: linear-gradient(360deg, transparent, #ff7b00);
        }

        &:hover {
            color: #000;
            background: #e2622f;
            box-shadow: 0 0 10px #ff5e00, 0 0 40px #ff7b00, 0 0 10px #ff7b00;
            transition-delay: 1s;
        }
    }
}
</style>
