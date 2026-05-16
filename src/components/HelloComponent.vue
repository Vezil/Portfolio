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
        this._spanPool = [];

        setTimeout(() => {
            if (this._destroyed) return;
            this.isLoading = false;
            this.$nextTick(() => this.startScramble());
        }, 1000);
    },
    beforeDestroy() {
        this._destroyed = true;

        if (this._frameId) {
          cancelAnimationFrame(this._frameId);
        }

        if (this._holdTimeout) {
          clearTimeout(this._holdTimeout);
        }

        if (this._mouseFrameId) {
          cancelAnimationFrame(this._mouseFrameId);
        }
    },
    methods: {
        onMouseMove(e) {
            this._pendingMouse = {
                clientX: e.clientX,
                clientY: e.clientY,
                rect: e.currentTarget.getBoundingClientRect()
            };

            if (this._mouseFrameId) {
              return;
            }

            this._mouseFrameId = requestAnimationFrame(() => {
                this._mouseFrameId = null;

                if (this._destroyed || !this._pendingMouse) {
                  return;
                }
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
            }, 2400);
        },
        randomScrambleChar() {
            return SCRAMBLE_CHARS[
                Math.floor(Math.random() * SCRAMBLE_CHARS.length)
            ];
        },
        syncSpanPool(roleEl, length) {
            while (this._spanPool.length < length) {
                this._spanPool.push(document.createElement('span'));
            }
            for (let i = 0; i < this._spanPool.length; i++) {
                const span = this._spanPool[i];

                if (i < length) {
                    if (span.parentNode !== roleEl) {
                        roleEl.appendChild(span);
                    }
                } else if (span.parentNode === roleEl) {
                    roleEl.removeChild(span);
                }
            }
        },
        applyDud(item, char, opacity) {
            const span = item.span;
            if (item.state !== 'dud') {
                span.className = 'scramble-dud';
                item.state = 'dud';
            }
            if (char !== null && span.firstChild) {
                if (span.firstChild.nodeValue !== char) {
                    span.firstChild.nodeValue = char;
                }
            } else if (char !== null) {
                span.textContent = char;
            }
            if (span.style.opacity !== opacity) {
                span.style.opacity = opacity;
            }
        },
        applyLock(item, lock, r, g) {
            const span = item.span;

            if (item.state !== 'lock') {
                span.className = 'scramble-lock';
                item.state = 'lock';
            }

            if (span.firstChild) {
                if (span.firstChild.nodeValue !== item.to) {
                    span.firstChild.nodeValue = item.to;
                }
            } else {
                span.textContent = item.to;
            }
            span.style.setProperty('--lock', lock);
            span.style.color = `rgb(${r},${g},255)`;
        },
        applyPlain(item, text) {
            const span = item.span;

            if (item.state !== 'plain') {
                span.className = '';
                span.style.cssText = '';
                item.state = 'plain';
            }

            if (span.firstChild) {
                if (span.firstChild.nodeValue !== text) {
                    span.firstChild.nodeValue = text;
                }
            } else if (text) {
                span.textContent = text;
            }
        },
        applyEmpty(item) {
            const span = item.span;

            if (item.state !== 'empty') {
                span.className = '';
                span.style.cssText = '';
                span.textContent = '';
                item.state = 'empty';
            }
        },
        scrambleTo(target) {
            if (this._destroyed) return;

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

            const STAGGER = 42;
            const JITTER = 90;
            const MIN_DURATION = 460;
            const MAX_DURATION = 720;

            this.syncSpanPool(roleEl, length);

            this._queue = [];

            for (let i = 0; i < length; i++) {
                const from = oldText[i] || '';
                const to = target[i] || '';
                const start = Math.max(
                    0,
                    i * STAGGER + (Math.random() - 0.5) * JITTER
                );
                const duration = to
                    ? MIN_DURATION +
                      Math.random() * (MAX_DURATION - MIN_DURATION)
                    : MIN_DURATION * 0.55;
                this._queue.push({
                    from,
                    to,
                    start,
                    duration,
                    char: this.randomScrambleChar(),
                    lastChange: -Infinity,
                    baseCycle: 38 + Math.random() * 28,
                    span: this._spanPool[i],
                    state: ''
                });
            }

            this._lockFade = 540;
            this._fadeOutMs = 240;
            this._lastEnd = this._queue.reduce(
                (m, q) => Math.max(m, q.start + q.duration),
                0
            );
            this._scrambleStart = performance.now();
            this._scrambleTarget = target;
            this.scrambleFrame();
        },
        scrambleFrame() {
            if (this._destroyed) {
              return;
            }

            const elapsed = performance.now() - this._scrambleStart;
            const LOCK_FADE = this._lockFade;
            const FADE_OUT = this._fadeOutMs;

            let complete = 0;

            for (let i = 0; i < this._queue.length; i++) {
                const item = this._queue[i];
                const localElapsed = elapsed - item.start;

                if (localElapsed >= item.duration) {
                    complete++;
                    const sinceLock = localElapsed - item.duration;

                    if (!item.to) {
                        if (sinceLock < FADE_OUT) {
                            const t = 1 - sinceLock / FADE_OUT;
                            this.applyDud(
                                item,
                                item.char,
                                (t * 0.55).toFixed(2)
                            );
                        } else {
                            this.applyEmpty(item);
                        }
                        continue;
                    }

                    if (sinceLock < LOCK_FADE) {
                        const tn = sinceLock / LOCK_FADE;
                        const lock = Math.cos((tn * Math.PI) / 2);
                        const r = Math.round(214 + (255 - 214) * lock);
                        const g = Math.round(168 + (255 - 168) * lock);
                        this.applyLock(item, lock.toFixed(3), r, g);
                    } else {
                        this.applyPlain(item, item.to);
                    }
                } else if (localElapsed >= 0) {
                    const progress = localElapsed / item.duration;
                    const cycleMs =
                        item.baseCycle * (1 + progress * progress * 2.6);

                    if (localElapsed - item.lastChange >= cycleMs) {
                        item.char = this.randomScrambleChar();
                        item.lastChange = localElapsed;
                    }

                    const fadeIn = Math.min(1, localElapsed / 90);
                    const opacity = (0.42 + fadeIn * 0.4).toFixed(2);
                    this.applyDud(item, item.char, opacity);
                } else if (item.from) {
                    this.applyPlain(item, item.from);
                } else {
                    this.applyEmpty(item);
                }
            }

            if (
                complete === this._queue.length &&
                elapsed - this._lastEnd > LOCK_FADE + 40
            ) {
                this._currentText = this._scrambleTarget;
                this.scheduleNext();
            } else {
                this._frameId = requestAnimationFrame(this.scrambleFrame);
            }
        }
    }
};
</script>
