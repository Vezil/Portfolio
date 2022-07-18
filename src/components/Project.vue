<template>
    <div class="card">
        <a :href="project - link" target="_blank">
            <div class="box">
                <div class="img-box">
                    <img
                        :src="require(`@/assets/images/${logoLink}`)"
                        alt="link"
                    />
                </div>
                <div class="content-box">
                    <div>
                        <h2>{{ title }}</h2>
                        <p v-html="content"> </p>
                    </div>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        logoLink: {
            type: String,
            required: true,
            default: ''
        },
        title: {
            type: String,
            required: true,
            default: ''
        },
        content: {
            type: String,
            required: true,
            default: ''
        },
        projectLink: {
            type: String,
            required: true,
            default: ''
        }
    }
};
</script>
