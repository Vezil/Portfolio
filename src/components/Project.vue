<template>
    <div class="card-wrapper">
        <div class="card">
            <div @click="goToProject">
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
            </div>
        </div>

        <div
            v-if="sourceCode && sourceCode.length"
            class="source-code-actions"
            @click.stop
        >
            <a
                v-for="item in sourceCode"
                :key="item.label"
                :class="['source-code-button', { disabled: !item.link }]"
                :href="item.link || undefined"
                :target="item.link ? '_blank' : undefined"
                :rel="item.link ? 'noopener noreferrer' : undefined"
                @click="onSourceClick($event, item)"
            >
                <i class="fa fa-code" aria-hidden="true"></i>
                <span>{{ item.label }}</span>
            </a>
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
        },
        projectLink: {
            type: String,
            required: false,
            default: ''
        },
        sourceCode: {
            type: Array,
            required: false,
            default: () => []
        }
    },
    methods: {
        goToProject(event) {
            const link = event.srcElement.href ?? this.projectLink ?? '';

            if (link) {
                window.open(link, '_blank');
            }
        },
        onSourceClick(event, item) {
            event.stopPropagation();

            if (!item.link) {
                event.preventDefault();
            }
        }
    }
};
</script>
