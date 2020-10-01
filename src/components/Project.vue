<template>
    <div class="card">
        <a :href="projectLink" target="_blank">
            <div class="box">
                <div class="imgBox">
                    <img
                        :src="require(`@/assets/images/${logoLink}`)"
                        alt="link"
                    />
                </div>
                <div class="contentBox">
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

