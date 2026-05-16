<template>
    <div
        class="main-container"
        id="about-section"
        @mousemove="onMouseMove"
        @mouseleave="resetMouse"
    >
        <h1 v-if="!isLoading" ref="typingCard" class="typing-text">
            Hi! Szymon here, I'm a
            <br />
            <span class="typing-slot">
                <span class="typing-slot__ghost" aria-hidden="true">{{
                    longestRole
                }}</span>
                <span ref="roleEl" class="typing"></span>
            </span>
        </h1>

        <h2 v-if="!isLoading" ref="staticCard" class="static-text">
            <div>
                <p>
                    Software Engineer with
                    <b>{{ yearsOfPrograming }}</b> years of experience, focused
                    on designing scalable backend systems. I work primarily with
                    Node.js and TypeScript, with a growing focus on system
                    architecture and AI-powered solutions.
                </p>
            </div>
        </h2>
    </div>
</template>
<script>
const SCRAMBLE_CHARS = '!<>-_\\/[]{}—=+*^?#$%&@';
const MAX_TILT_DEG = 4.5;

export default {
    data() {
        return {
            typingStrings: [
                'Software Architect.',
                'Full-Stack Engineer.',
                'Software Engineer.',
                'AI Engineer.'
            ],
            isLoading: true
        };
    },
    computed: {
        yearsOfPrograming() {
            return `${new Date().getFullYear() - 2020}+`;
        },
        longestRole() {
            return this.typingStrings.reduce(
                (a, b) => (b.length > a.length ? b : a),
                ''
            );
        }
    },
    mounted() {
        this._destroyed = false;
        this._reducedMotion =
            typeof window !== 'undefined' &&
            window.matchMedia &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        setTimeout(() => {
            if (this._destroyed) return;
            this.isLoading = false;
            this.$nextTick(() => this.startScramble());
        }, 1000);
    },
    beforeDestroy() {
        this._destroyed = true;
        if (this._frameId) cancelAnimationFrame(this._frameId);
        if (this._holdTimeout) clearTimeout(this._holdTimeout);
        if (this._mouseFrameId) cancelAnimationFrame(this._mouseFrameId);
    },
    methods: {
        onMouseMove(e) {
            this._pendingMouse = {
                clientX: e.clientX,
                clientY: e.clientY,
                rect: e.currentTarget.getBoundingClientRect()
            };
            if (this._mouseFrameId) return;
            this._mouseFrameId = requestAnimationFrame(() => {
                this._mouseFrameId = null;
                if (this._destroyed || !this._pendingMouse) return;
                this.applyMouse(this._pendingMouse);
            });
        },
        resetMouse() {
            if (this._mouseFrameId) {
                cancelAnimationFrame(this._mouseFrameId);
                this._mouseFrameId = null;
            }
            this._pendingMouse = null;
            this.writeCardVars(null, 0, 0);
        },
        applyMouse({ clientX, clientY, rect }) {
            const px = (clientX - rect.left) / rect.width;
            const py = (clientY - rect.top) / rect.height;
            const tiltY = (px - 0.5) * 2 * MAX_TILT_DEG;
            const tiltX = -(py - 0.5) * 2 * MAX_TILT_DEG;
            this.writeCardVars({ clientX, clientY }, tiltX, tiltY);
        },
        writeCardVars(cursor, tiltX, tiltY) {
            const cards = [this.$refs.typingCard, this.$refs.staticCard];

            cards.forEach((card) => {
                if (!card) {
                  return;
                }

                card.style.setProperty('--tilt-x', `${tiltX}deg`);
                card.style.setProperty('--tilt-y', `${tiltY}deg`);

                if (cursor) {
                    const rect = card.getBoundingClientRect();
                    card.style.setProperty(
                        '--mx',
                        `${cursor.clientX - rect.left}px`
                    );
                    card.style.setProperty(
                        '--my',
                        `${cursor.clientY - rect.top}px`
                    );
                    card.style.setProperty('--glow', '1');
                } else {
                    card.style.setProperty('--glow', '0');
                }
            });
        },
        startScramble() {
            this._stringIndex = 0;
            this._currentText = '';
            this.scrambleTo(this.typingStrings[0]);
        },
        scheduleNext() {
            this._holdTimeout = setTimeout(() => {
                if (this._destroyed) return;
                this._stringIndex =
                    (this._stringIndex + 1) % this.typingStrings.length;
                this.scrambleTo(this.typingStrings[this._stringIndex]);
            }, 2800);
        },
        scrambleTo(target) {
            if (this._destroyed) {
              return;
            }

            const roleEl = this.$refs.roleEl;

            if (!roleEl) {
              return;
            }

            if (this._reducedMotion) {
              roleEl.textContent = target;
                this._currentText = target;
                this.scheduleNext();
                return;
            }

            const oldText = this._currentText;
            const length = Math.max(oldText.length, target.length);
            this._queue = [];

            for (let i = 0; i < length; i++) {
                const from = oldText[i] || '';
                const to = target[i] || '';
                const start = Math.floor(Math.random() * 60);
                const end = start + 50 + Math.floor(Math.random() * 50);
                this._queue.push({ from, to, start, end, char: '' });
            }

            this._frame = 0;
            this._scrambleTarget = target;
            this.scrambleFrame();
        },
        scrambleFrame() {
            if (this._destroyed) {
              return;
            }

            const roleEl = this.$refs.roleEl;

            if (!roleEl) {
              return;
            }

            let output = '';
            let complete = 0;
            for (let i = 0; i < this._queue.length; i++) {
                const queueElement = this._queue[i];

                if (this._frame >= queueElement.end) {
                    complete++;
                    output += queueElement.to;
                } else if (this._frame >= queueElement.start) {
                    if (!queueElement.char || Math.random() < 0.12) {
                      queueElement.char =
                            SCRAMBLE_CHARS[
                                Math.floor(
                                    Math.random() * SCRAMBLE_CHARS.length
                                )
                            ];
                    }
                    output += `<span class="scramble-dud">${queueElement.char}</span>`;
                } else {
                    output += queueElement.from;
                }
            }

          roleEl.innerHTML = output;

            if (complete === this._queue.length) {
                this._currentText = this._scrambleTarget;
                this.scheduleNext();
            } else {
                this._frame++;
                this._frameId = requestAnimationFrame(this.scrambleFrame);
            }
        }
    }
};
</script>
