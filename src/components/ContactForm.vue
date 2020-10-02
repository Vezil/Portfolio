<template>
    <div class="contactContainer">
        <section class="contact">
            <h2> Get in touch </h2>

            <p class="text"
                >Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Magni, error. Repellendus repellat voluptatibus impedit autem
                dignissimos? Iste mollitia non quam illo incidunt, ratione
                explicabo repellat delectus, repellendus quo, necessitatibus
                perferendis!
            </p>
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
                    <div class="inputBox">
                        <input type="submit" name="" value="Send" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {};
</script>
<style>
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
    width: 50%;
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
    width: 50%;
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
</style>