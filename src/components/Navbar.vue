<template>
    <div class="navbarContainer">
        <header class="main-header">
            <div class="logo">
                <a href="#"></a>
            </div>

            <input type="checkbox" class="menu-btn" id="menu-btn" />

            <label for="menu-btn" class="menu-icon">
                <span class="menu-icon__line" id="menuIconLine"></span>
            </label>

            <ul class="nav-links">
                <li class="nav-link">
                    <a
                        href="#aboutSection"
                        data-text="About"
                        @click="closeMobileMenu"
                        >About

                        <i class="fa fa-user-circle" aria-hidden="true"></i>
                    </a>
                </li>
                <li class="nav-link">
                    <a
                        href="#projectsSection"
                        data-text="Projects"
                        @click="closeMobileMenu"
                        >Projects <i class="fa fa-book"> </i>
                    </a>
                </li>
                <li class="nav-link">
                    <a
                        href="#skillsSection"
                        data-text="Skills"
                        @click="closeMobileMenu"
                        >Skills
                        <i class="fa fa-cog" aria-hidden="true"></i>
                    </a>
                </li>
                <li class="nav-link">
                    <a
                        href="#contactSection"
                        data-text="Contact"
                        @click="closeMobileMenu"
                        >Contact

                        <i class="fa fa-envelope-open" aria-hidden="true"></i>
                    </a>
                </li>
            </ul>
        </header>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },

    mounted() {
        this.initMenuScrolled();
    },

    methods: {
        initMenuScrolled() {
            const header = document.querySelector('.main-header');

            window.addEventListener('scroll', () => {
                const scrollPosition = window.scrollY;

                if (scrollPosition > 10) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
        },

        closeMobileMenu() {
            document.getElementById('menuIconLine').click();
        }
    }
};
</script>
