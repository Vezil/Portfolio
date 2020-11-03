<template>
    <div class="contactContainer" id="contactSection">
        <section class="contact">
            <h2> Get in touch </h2>

            <p class="text"> Do you have any question ? </p>
        </section>
        <section class="about">
            <div class="contentBox">
                <div class="form">
                    <label class="formGroup">
                        <input type="text" class="formControl" required />
                        <span>Your Name</span>
                        <span class="border"></span>
                    </label>
                    <label class="formGroup">
                        <input type="email" class="formControl" required />
                        <span for="">Your Mail</span>
                        <span class="border"></span>
                    </label>
                    <label class="formGroup">
                        <textarea
                            name=""
                            id=""
                            class="formControl"
                            required
                        ></textarea>
                        <span for="">Your Message</span>
                        <span class="border"></span>
                    </label>

                    <div class="inputBox sendButton">
                        <a class="sendButtonHref" href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Send
                            <i class="fa fa-send"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.contactContainer {
    background: #050b0f;
    text-align: center;
    color: #fff !important;
    background: url('../assets/images/contact.png');

    padding: 50px;

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

    h3 {
        text-transform: uppercase;
        font-size: 45px;
        font-family: 'Montserrat-Bold';
        text-align: center;
        margin-bottom: 12px;
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
    select,
    button {
        font-family: 'Montserrat-Regular';
        color: #fff;
        font-size: 15px;
    }

    textarea.formControl {
        padding-top: 10px;
        padding-bottom: 10px;
    }
}
</style>
