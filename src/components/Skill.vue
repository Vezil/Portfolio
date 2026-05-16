<template>
    <div class="card" :data-content="title">
        <div class="img-box">
            <img :src="require(`@/assets/images/${logoLink}`)" :alt="title" />
        </div>
        <div class="content-box">
            <h3>{{ title }}</h3>
            <p class="description">{{ description }}</p>
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
