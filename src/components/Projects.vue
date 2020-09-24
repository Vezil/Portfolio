<template>
    <div class="projectsContainer">
        <div class="projectsSection">
            <!-- <h1>Projects</h1> -->
            <div class="card">
                <div class="box">
                    <div class="imgBox">
                        <img src="../assets/images/project1.png" alt="" />
                    </div>
                    <div class="contentBox">
                        <div>
                            <h2>Title</h2>
                            <p
                                >Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Asperiores optio quas labore
                                vitae eaque dolorem su nt quasi eos doloremque
                                ea ani mi molestias perspiciatis nam exp licabo
                                blanditiis, quo, voluptate e xercitationem hic!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="box">
                    <div class="imgBox">
                        <img src="../assets/images/project1.png" alt="" />
                    </div>
                    <div class="contentBox">
                        <div>
                            <h2>Title2</h2>
                            <p
                                >Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Asperiores optio quas labore
                                vitae eaque dolorem su nt quasi eos doloremque
                                ea ani mi molestias perspiciatis nam exp licabo
                                blanditiis, quo, voluptate e xercitationem hic!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="box">
                    <div class="imgBox">
                        <img src="../assets/images/project1.png" alt="" />
                    </div>
                    <div class="contentBox">
                        <div>
                            <h2>Title3</h2>
                            <p
                                >Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Asperiores optio quas labore
                                vitae eaque dolorem su nt quasi eos doloremque
                                ea ani mi molestias perspiciatis nam exp licabo
                                blanditiis, quo, voluptate e xercitationem hic!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="box">
                    <div class="imgBox">
                        <img src="../assets/images/project1.png" alt="" />
                    </div>
                    <div class="contentBox">
                        <div>
                            <h2>Title4</h2>
                            <p
                                >Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Asperiores optio quas labore
                                vitae eaque dolorem su nt quasi eos doloremque
                                ea ani mi molestias perspiciatis nam exp licabo
                                blanditiis, quo, voluptate e xercitationem hic!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="box">
                    <div class="imgBox">
                        <img src="../assets/images/project1.png" alt="" />
                    </div>
                    <div class="contentBox">
                        <div>
                            <h2>Title5</h2>
                            <p
                                >Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Asperiores optio quas labore
                                vitae eaque dolorem su nt quasi eos doloremque
                                ea ani mi molestias perspiciatis nam exp licabo
                                blanditiis, quo, voluptate e xercitationem hic!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="box">
                    <div class="imgBox">
                        <img src="../assets/images/project1.png" alt="" />
                    </div>
                    <div class="contentBox">
                        <div>
                            <h2>Title6</h2>
                            <p
                                >Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Asperiores optio quas labore
                                vitae eaque dolorem su nt quasi eos doloremque
                                ea ani mi molestias perspiciatis nam exp licabo
                                blanditiis, quo, voluptate e xercitationem hic!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    }
};
</script>

<style lang="scss" scoped>
.projectsContainer {
    background-color: #000000;
    background-image: linear-gradient(147deg, #000000 0%, #04619f 74%);
    border-top-right-radius: 50px;
    border-width: 3px;
    border-top-style: groove;
    border-top-color: black;
}
.projectsSection {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    flex-wrap: wrap;
    transform-style: preserve-3d;
}

.projectsSection .card {
    position: relative;
    width: 320px;
    height: 320px;
    margin: 20px;
    transform-style: preserve-3d;
    perspective: 1000px;
}

.projectsSection .card .box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: 1s ease;
}

.projectsSection .card:hover .box {
    transform: rotateY(180deg);
}

.projectsSection .card .box .imgBox {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.projectsSection .card .box .imgBox img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.projectsSection .card .box .contentBox {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #333;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    transform: rotateY(180deg);
}

.projectsSection .card .box .contentBox div {
    transform-style: preserve-3d;
    padding: 20px;
    background: linear-gradient(45deg, #fe0061, #ffeb3b);
    transform: translateZ(100px);
}

.projectsSection .card .box .contentBox div h2 {
    color: #fff;
    font-size: 20px;
    letter-spacing: 1px;
}

.projectsSection .card .box .contentBox div p {
    color: #fff;
    font-size: 16px;
}
</style>
