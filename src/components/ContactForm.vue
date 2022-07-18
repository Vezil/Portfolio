<template>
    <div class="contact-container" id="contact-section">
        <div class="contactContent">
            <section class="contact">
                <h2> Get in touch </h2>

                <p class="text"> Do you have any question ? </p>
            </section>

            <section class="about">
                <div class="content-box">
                    <form class="form" @submit.prevent="submit">
                        <label class="form-group">
                            <input
                                name="userName"
                                v-model="formData.name"
                                type="text"
                                class="form-control"
                                :class="
                                    $v.formData.name.$anyError
                                        ? 'errorInput'
                                        : ''
                                "
                                required
                            />
                            <span>
                                <i class="fa fa-user-circle"></i> Your Name
                            </span>
                            <div v-if="nameError">
                                <div
                                    class="error"
                                    v-if="!$v.formData.name.required"
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
                            class="form-group"
                            :class="{
                                'form-group--error': $v.formData.email.$error
                            }"
                        >
                            <input
                                name="userEmail"
                                v-model="formData.email"
                                type="text"
                                class="form-control"
                                :class="
                                    $v.formData.email.$anyError
                                        ? 'errorInput'
                                        : ''
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
                                    {{
                                        $v.formData.email.$params.minLength.min
                                    }}
                                    letters.</div
                                >
                                <div class="error" v-else>Incorrect email</div>
                            </div>
                            <span class="border"></span>
                        </label>
                        <label
                            class="form-group"
                            :class="{
                                'form-group--error': $v.formData.message.$error
                            }"
                        >
                            <textarea
                                name="userMessage"
                                v-model="formData.message"
                                class="form-control"
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
                                    {{
                                        $v.formData.message.$params.minLength
                                            .min
                                    }}
                                    letters.</div
                                >
                            </div>
                            <span class="border"></span>
                        </label>

                        <div class="inputBox sendButton">
                            <button type="submit">
                                <a class="send-button-href">
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
                            <span style="margin-right:6px;">
                                Something went wrong! Check if your email is
                                correct or try again later
                            </span>
                            <i style="color:red" class="fa fa-times"></i>
                        </p>
                        <p
                            class="typo__p"
                            v-if="submitStatus === STATUS_PENDING"
                        >
                            <Loading />
                        </p>
                    </form>
                </div>
            </section>
        </div>
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
