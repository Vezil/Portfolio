<template>
    <div class="contactContainer" id="contactSection">
        <section class="contact">
            <h2> Get in touch </h2>

            <p class="text"> Do you have any question ? </p>
        </section>
        <section class="about">
            <div class="contentBox">
                <form class="form" @submit.prevent="submit">
                    <label class="formGroup">
                        <input
                            name="userName"
                            v-model="formData.name"
                            type="text"
                            class="formControl"
                            :class="
                                $v.formData.name.$anyError ? 'errorInput' : ''
                            "
                            required
                        />
                        <span>
                            <i class="fa fa-user-circle"></i> Your Name
                        </span>
                        <div v-if="nameError">
                            <div class="error" v-if="!$v.formData.name.required"
                                >Name is required</div
                            >
                            <div
                                class="error"
                                v-if="!$v.formData.name.minLength"
                            >
                                Name must have at least
                                {{ $v.formData.name.$params.minLength.min }}
                                letters.
                            </div>
                        </div>
                        <span class="border"></span>
                    </label>
                    <label
                        class="formGroup"
                        :class="{
                            'form-group--error': $v.formData.email.$error
                        }"
                    >
                        <input
                            name="userEmail"
                            v-model="formData.email"
                            type="text"
                            class="formControl"
                            :class="
                                $v.formData.email.$anyError ? 'errorInput' : ''
                            "
                            required
                        />

                        <span for="">
                            <i class="fa fa-envelope-open-o"> Your Mail </i>
                        </span>
                        <div v-if="emailError">
                            <div
                                class="error"
                                v-if="!$v.formData.email.required"
                                >Email is required</div
                            >
                            <div
                                class="error"
                                v-if="!$v.formData.email.minLength"
                                >Email must have at least
                                {{ $v.formData.email.$params.minLength.min }}
                                letters.</div
                            >
                            <div class="error" v-else>Incorrect email</div>
                        </div>
                        <span class="border"></span>
                    </label>
                    <label
                        class="formGroup"
                        :class="{
                            'form-group--error': $v.formData.message.$error
                        }"
                    >
                        <textarea
                            name="userMessage"
                            v-model="formData.message"
                            class="formControl"
                            :class="
                                $v.formData.message.$anyError
                                    ? 'errorInput'
                                    : ''
                            "
                            required
                        ></textarea>
                        <span for="">
                            <i class="fa fa-quora"> Your Message </i>
                        </span>

                        <div v-if="messageError">
                            <div
                                class="error"
                                v-if="!$v.formData.message.required"
                            >
                                Message is required
                            </div>

                            <div
                                class="error"
                                v-if="!$v.formData.message.minLength"
                                >Message must have at least
                                {{ $v.formData.message.$params.minLength.min }}
                                letters.</div
                            >
                        </div>
                        <span class="border"></span>
                    </label>

                    <div class="inputBox sendButton">
                        <button type="submit">
                            <a class="sendButtonHref">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Send
                                <i class="fa fa-send"></i>
                            </a>
                        </button>
                    </div>

                    <p class="typo__p" v-if="submitStatus === STATUS_OK">
                        <span style="margin-right:6px;"
                            >Thanks for your submission!</span
                        >
                        <i style="color:green" class="fa fa-check"></i>
                    </p>
                    <p class="typo__p" v-if="submitStatus === STATUS_ERROR">
                        <span style="margin-right:6px;">Error!</span>
                        <i style="color:red" class="fa fa-times"></i>
                    </p>
                    <p class="typo__p" v-if="submitStatus === STATUS_PENDING">
                        <Loading />
                    </p>
                </form>
            </div>
        </section>
    </div>
</template>
<script>
import emailjs from 'emailjs-com';
import { validationMixin } from 'vuelidate';
import {
    required,
    minLength,
    maxLength,
    email
} from 'vuelidate/lib/validators';
import Loading from './Loading.vue';

export default {
    mixins: [validationMixin],
    components: { Loading },

    validations: {
        formData: {
            name: {
                required,
                minLength: minLength(4),
                maxLength: maxLength(30)
            },
            email: {
                required,
                email,
                minLength: minLength(10),
                maxLength: maxLength(40)
            },
            message: {
                required,
                minLength: minLength(10),
                maxLength: maxLength(250)
            }
        }
    },

    computed: {
        nameError() {
            return this.isSubmited && this.$v.formData.name.$error;
        },
        emailError() {
            return this.isSubmited && this.$v.formData.email.$error;
        },
        messageError() {
            return this.isSubmited && this.$v.formData.message.$error;
        }
    },

    mounted() {
        emailjs.init(process.env.VUE_APP_EMAILJS_USER_ID);
    },

    data() {
        return {
            isSubmited: false,
            submitStatus: null,
            formData: {
                name: '',
                email: '',
                message: ''
            },
            STATUS_OK: 'OK',
            STATUS_PENDING: 'PENDING',
            STATUS_ERROR: 'ERROR'
        };
    },

    methods: {
        async submit(e) {
            this.$v.$touch();

            this.isSubmited = true;

            if (this.$v.$invalid) {
                this.submitStatus = this.STATUS_ERROR;
                return;
            } else {
                this.submitStatus = this.STATUS_PENDING;
                try {
                    await emailjs.sendForm(
                        process.env.VUE_APP_EMAILJS_SERVICE_ID,
                        process.env.VUE_APP_EMAILJS_TEMPLATE_ID,
                        e.target,
                        process.env.VUE_APP_EMAILJS_USER_ID
                    );

                    this.$v.$reset();

                    this.formData = {
                        name: '',
                        email: '',
                        message: ''
                    };

                    this.submitStatus = this.STATUS_OK;
                } catch (error) {
                    this.submitStatus = this.STATUS_ERROR;
                    console.error(error);
                }
            }
        }
    }
};
</script>
<style lang="scss">
.contactContainer {
    background: #050b0f;
    text-align: center;
    color: #fff !important;
    background: url('../assets/images/contact.png');
    height: 80vh;
    padding: 3rem;

    @media screen and (max-width: 850px) {
        margin-left: 30px;
    }

    @media screen and (max-width: 768px) {
        background: url('../assets/images/contact-mobile.png') no-repeat bottom
            center;
        background-size: cover;
    }

    .contact {
        position: relative;
        margin-top: 2%;
        right: 20%;

        h2 {
            font-size: 5rem;

            @media screen and (max-width: 850px) {
                font-size: 3rem;
            }
        }
    }

    .about {
        position: relative;
        right: 20%;
    }

    .contactContainer h2 {
        padding: 20px;
        font-size: 2rem;
    }

    .contactContainer .contact {
        padding: 30px;
        font-size: 1rem;
    }

    .contentBox {
        background-size: cover;
        background-position: center;
        text-align: center;
    }

    .form .inputBox {
        margin-bottom: 40px;
    }

    .form .inputBox input {
        width: 30%;
        background: transparent;
        box-shadow: none;
        border: none;
        outline: none;
        padding: 10px 0;
        font-size: 18px;
        font-weight: 300;
        color: #fff;
        border-bottom: 2px solid #fff;
    }

    .form .inputBox input::placeholder {
        color: #fff;
    }

    .form textarea {
        /* @TODO - more for mobile and move all to scss. Upgrade backgrounds for mobile... */

        resize: none;
    }

    .form .inputBox textarea::placeholder {
        color: #fff;
    }

    .form .inputBox input[type='submit'] {
        width: 150px;
        background: #fff;
        color: #111;
        font-weight: 400;
    }

    :focus {
        outline: none;
    }

    .sendButton {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: consolas;
        button {
            background: black;
            border: none;
        }
    }
    .sendButtonHref {
        position: relative;
        display: inline-block;
        padding: 15px 30px;
        color: #2196f3;
        text-transform: uppercase;
        letter-spacing: 4px;
        text-decoration: none;
        font-size: 24px;
        overflow: hidden;
        transition: 0.2s;
        cursor: url('../assets/images/custom-cursor-pointer.png'), pointer !important;
    }

    .sendButtonHref:hover {
        color: #000;
        background: #2196f3;
        box-shadow: 0 0 10px #596e80, 0 0 40px #2196f3, 0 0 10px #2196f3;
        transition-delay: 1s;
    }

    .sendButtonHref span {
        position: absolute;
        display: block;
    }

    .sendButtonHref span:nth-child(1) {
        top: 0;
        left: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, #2196f3);
    }

    .sendButtonHref:hover span:nth-child(1) {
        left: 100%;
        transition: 1s;
    }

    .sendButtonHref span:nth-child(2) {
        top: -100%;
        right: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(180deg, transparent, #2196f3);
    }

    .sendButtonHref:hover span:nth-child(2) {
        top: 100%;
        transition: 1s;
        transition-delay: 0.25s;
    }

    .sendButtonHref span:nth-child(3) {
        bottom: 0;
        right: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(270deg, transparent, #2196f3);
    }

    .sendButtonHref:hover span:nth-child(3) {
        right: 100%;
        transition: 1s;
        transition-delay: 0.5s;
    }

    .sendButtonHref span:nth-child(4) {
        bottom: -100%;
        left: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(360deg, transparent, #2196f3);
    }

    .sendButtonHref:hover span:nth-child(4) {
        bottom: 100%;
        transition: 1s;
        transition-delay: 0.75s;
    }

    .inner {
        max-width: 758px;
        margin: auto;
        background: #39459b;
        border: 10px solid #0d99d7;
        padding: 77px 99px 87px;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
        -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
        -ms-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
        -o-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    }

    p {
        text-align: center;
        padding: 0 10px;
        margin-bottom: 55px;
        line-height: 1.8;
    }
    .formGroup {
        position: relative;
        display: block;
        margin-bottom: 48px;

        .error {
            color: red;
            margin-top: 20px;
        }

        span {
            font-size: 15px;
            color: #00ade6;
            position: absolute;
            left: 31%;
            top: 11px;
            transition: all 0.2s ease;
            transform-origin: 0 0;
            cursor: text; //TODO CUSTOM CURSOR

            @media screen and (max-width: 550px) {
                left: 10%;
            }
        }
        span.border {
            height: 2px;
            display: block;
            position: relative;
            width: 40%;
            margin: auto;
            left: 0;
            top: 0px;
            transform: scaleX(0);
            transition: all 0.15s ease;
        }
    }
    .formControl {
        border: none;
        border-bottom: 2px solid #00ade6;
        display: block;
        width: 40%;
        margin: auto;
        height: 43px;
        font-size: 15px;
        background: none;
        font-family: 'Montserrat-SemiBold';
        &:focus,
        &:valid {
            border: none;
            border-bottom: 2px solid #fff;
            & + span {
                transform: translateY(-22px) scale(0.8);
                & + .border {
                    transform: scaleX(1);
                }
            }
        }

        @media screen and (max-width: 550px) {
            width: 90%;
        }
    }

    input,
    textarea,
    select {
        font-family: 'Montserrat-Regular';
        color: #fff;
        font-size: 15px;
    }

    textarea.formControl {
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .errorInput {
        border-bottom: 2px solid rgb(255, 72, 72) !important;
    }

    @media screen and (max-height: 500px) {
        margin-bottom: 20%;
    }

    @media screen and (max-height: 900px) {
        margin-bottom: 8%;
    }

    .typo__p {
        position: relative;
        top: -18px;
        padding-bottom: 30px;
    }
}
</style>
