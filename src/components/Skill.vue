<template>
    <div
        class="card"
        :data-content="`${title}`"
        @mouseover="showDescrption = true"
        @mouseleave="showDescrption = false"
    >
        <div class="img-box">
            <img :src="require(`@/assets/images/${logoLink}`)" alt="" />
        </div>
        <div class="content-box">
            <h3>{{ title }}</h3>
            <h2 v-if="showDescrption" class="description">{{ description }}</h2>
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
    },

    data() {
        return {
            showDescrption: false
        };
    }
};
</script>
