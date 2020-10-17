<template>
    <div class="card" :data-content="`${title}`">
        <div class="imgBox">
            <img :src="require(`@/assets/images/${logoLink}`)" alt="" />
        </div>
        <div class="contentBox">
            <h3>{{ title }}</h3>
            <h2 class="description">{{ description }}</h2>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
            default: ''
        },
        description: {
            type: String,
            required: true,
            default: ''
        },
        logoLink: {
            type: String,
            required: true,
            default: ''
        }
    }
};
</script>
<style scoped>
.card {
    position: relative;
    width: 220px;
    height: 320px;
    background: #09161d;
    border-radius: 20px;
    overflow: hidden;
}

.card:before {
    content: '';
    position: absolute;
    top: -50%;
    width: 100%;
    height: 100%;
    background: #2196f3;
    transform: skewY(345deg);
    transition: 0.5s;
}

.card:hover::before {
    top: -70%;
    transform: skewY(390deg);
}

.card::after {
    content: attr(data-content);
    position: absolute;
    bottom: 0;
    left: 0;
    font-weight: 600;
    font-size: 8em;
    color: rgba(0, 0, 0, 0.1);
}
.card .imgBox {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    z-index: 1;
}
.card .imgBox img {
    max-width: 100%;
    transition: 0.5s;
}

.card:hover .imgBox img {
    max-width: 50%;
}

.card .contentBox {
    position: relative;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1;
}

.card .contentBox h3 {
    font-size: 24px;
    color: #fff;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.card .contentBox .description {
    font-size: 18px;
    color: #fff;
    font-weight: 400;
    letter-spacing: 1px;
}
</style>
