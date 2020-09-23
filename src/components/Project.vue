<template>
    <div class="container">
        <div class="box">
            <div class="content">
                <h2>YERBA PROJECT</h2>
                <p> This project is fine </p>
            </div>
        </div>
        <svg>
            <filter id="wavy">
                <feTurbulence
                    x="0"
                    y="0"
                    baseFrequency="0.02"
                    numOctaves="5"
                    seed="2"
                >
                    <animate
                        attributeName="baseFrequency"
                        dur="60s"
                        values="0.02;0.05;0.02"
                        repeatCount="indefinite"
                    ></animate>
                </feTurbulence>

                <feDisplacementMap in="SourceGraphic" scale="30" />
            </filter>
        </svg>
    </div>
</template>

<script>
export default {
    methods: {}
};
</script>
<style>
.container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
}

.v-application--wrap {
    background-color: black;
}

.container .box {
    position: relative;
    width: 300px;
    height: 400px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-box-reflect: below 15px
        linear-gradient(transparent, transparent, rgba(0, 0, 0, 0.2));
}

.container .box:before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    width: 100%;
    height: 100%;
    border: 4px solid #fff;
    background: #000;
    filter: url(#wavy);
}

.container .box:hover {
    color: #000;
}

.container .box:hover:before {
    background: url('../assets/images/project1.png') no-repeat bottom center;
    background-size: cover;
    transition: 0.5s;
}

.container .box .content {
    position: absolute;
    padding: 20px;
    text-align: center;
    transition: 0.5s;
}

.container .box:after {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    width: 50%;
    height: 100%;
    border: 4px solid #fff;
    border-right: none;
    filter: url(#wavy);
    background: rgba(255, 255, 255, 0.1);
}
svg {
    width: 0;
    height: 0;
}
</style>
