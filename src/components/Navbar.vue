<template>
    <div class="navbar-container">
        <header class="main-header">
            <a href="#about-section" aria-label="Szymon Wojaczek — home">
                <div class="logo">
                    <svg
                        class="logo__svg"
                        viewBox="0 0 64 64"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-label="S"
                    >
                        <defs>
                            <linearGradient
                                id="logoGradient"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="100%"
                            >
                                <stop offset="0%" stop-color="#143a64" />
                                <stop offset="100%" stop-color="#2b7de0" />
                            </linearGradient>
                            <linearGradient
                                id="logoHighlight"
                                x1="50%"
                                y1="0%"
                                x2="50%"
                                y2="100%"
                            >
                                <stop
                                    offset="0%"
                                    stop-color="#ffffff"
                                    stop-opacity="0.18"
                                />
                                <stop
                                    offset="60%"
                                    stop-color="#ffffff"
                                    stop-opacity="0"
                                />
                            </linearGradient>
                        </defs>
                        <rect
                            class="logo__tile"
                            x="2"
                            y="2"
                            width="60"
                            height="60"
                            rx="14"
                            ry="14"
                            fill="url(#logoGradient)"
                        />
                        <rect
                            class="logo__sheen"
                            x="2"
                            y="2"
                            width="60"
                            height="60"
                            rx="14"
                            ry="14"
                            fill="url(#logoHighlight)"
                        />
                        <text
                            class="logo__letter"
                            x="50%"
                            y="54%"
                            text-anchor="middle"
                            dominant-baseline="middle"
                            fill="#ffffff"
                        >S</text>
                    </svg>
                </div>
            </a>

            <input type="checkbox" class="menu-btn" id="menu-btn" />

            <label for="menu-btn" class="menu-icon">
                <span class="menu-icon__line" id="menuIconLine"></span>
            </label>
            <ul class="nav-links">
                <li
                    class="nav-link"
                    :class="
                        showMenuAbout
                            ? 'about-option-visible'
                            : 'about-option-invisible'
                    "
                >
                    <a
                        href="#about-section"
                        data-text="About"
                        @click="closeMobileMenu"
                        >About

                        <i class="fa fa-user-circle" aria-hidden="true"></i>
                    </a>
                </li>
                <li class="nav-link">
                    <a
                        href="#projects-section"
                        data-text="Projects"
                        @click="closeMobileMenu"
                        >Projects <i class="fa fa-book"> </i>
                    </a>
                </li>
                <li class="nav-link">
                    <a
                        href="#skills-section"
                        data-text="Skills"
                        @click="closeMobileMenu"
                        >Skills
                        <i class="fa fa-cog" aria-hidden="true"></i>
                    </a>
                </li>
                <li class="nav-link">
                    <a
                        href="#contact-section"
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
        return {
            showMenuAbout: false
        };
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

                this.showMenuAbout = scrollPosition > 720;
            });
        },
        closeMobileMenu() {
            document.getElementById('menuIconLine').click();
        }
    }
};
</script>
