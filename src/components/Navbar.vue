<template>
    <div class="navbarContainer">
        <header class="main-header">
            <div class="logo">
                <a href="#">LOGO</a>
            </div>

            <input type="checkbox" class="menu-btn" id="menu-btn" />

            <label for="menu-btn" class="menu-icon">
                <span class="menu-icon__line"></span>
            </label>

            <ul class="nav-links">
                <li class="nav-link">
                    <a href="#">About</a>
                </li>
                <li class="nav-link">
                    <a href="#">Projects</a>
                </li>
                <li class="nav-link">
                    <a href="#">Skills</a>
                </li>
                <li class="nav-link">
                    <a href="#">Contact</a>
                </li>
            </ul>
        </header>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    }
};
</script>
