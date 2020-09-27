<template>
    <div class="card">
        <div class="box">
            <div class="imgBox">
                <img :src="require(`@/assets/images/${logoLink}`)" alt="link" />
            </div>
            <div class="contentBox">
                <div>
                    <h2>{{ title }}</h2>
                    <p>
                        {{ content }}
                    </p>
                </div>
            </div>
        </div>
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
        }
    }
};
</script>

