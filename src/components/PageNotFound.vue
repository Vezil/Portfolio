<template>
    <div class="page-not-found">
        <div class="text-wrapper">
            <span class="title">Oya, are you lost?</span>

            <span class="redirect" @click="redirectToLandingPage">
                Go back to the main page
            </span>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        redirectToLandingPage() {
            window.location.pathname = '';
        }
    }
};
</script>
