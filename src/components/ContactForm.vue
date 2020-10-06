<template>
    <div class="contactContainer">
        <section class="contact">
            <h2> Get in touch </h2>

            <p class="text"> Do you have any question ? </p>
        </section>
        <section class="about">
            <div class="contentBox">
                <div class="form">
                    <div class="inputBox">
                        <input type="text" name="" placeholder="Full Name" />
                    </div>
                    <div class="inputBox">
                        <input type="text" name="" placeholder="Email Adress" />
                    </div>
                    <div class="inputBox">
                        <textarea
                            type="text"
                            name=""
                            placeholder="Write your message here"
                        ></textarea>
                    </div>
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
<style >
.contactContainer {
    background: #050b0f;
    text-align: center;
    color: #fff !important;
    background: url('../assets/images/contact.png');
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

.form .inputBox textarea {
    width: 30%; /* @TODO - more for mobile and move all to scss. Upgrade backgrounds for mobile... */
    background: transparent;
    box-shadow: none;
    border: none;
    outline: none;
    padding: 10px 0;
    font-size: 18px;
    font-weight: 300;
    color: #fff;
    height: 150px;
    border-bottom: 2px solid #fff;
    resize: none;
}

.form .inputBox textarea::placeholder {
    color: #fff;
}

.form .inputBox input[type='submit'] {
    width: 150px;
    background: #fff;
    color: #111;
    cursor: pointer;
    font-weight: 400;
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
</style>
