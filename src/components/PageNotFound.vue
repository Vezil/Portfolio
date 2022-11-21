<template>
    <div class="page-not-found">
        <div class="text-wrapper">
            <div class="title first-part" data-title="Error 404"></div>
            <div class="title second-part" data-title="Oya,"></div>
            <div class="title third-part" data-title="are you lost?"></div>

            <div class="redirect" @click="redirectToLandingPage">
                Go back to the Landing Page
            </div>
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
