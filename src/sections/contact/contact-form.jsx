export const ContactForm = () => {
    return (
        <form action="https://formspree.io/f/mzbkrjjk" method="POST">
            <div class="contact-personnal-info">
                <div class="contact-personnal-info-group">
                    <label for="name">
                        Nom
                    </label>
                    <input id="name" type="text" name="name" />
                </div>
                <div class="contact-personnal-info-group">
                    <label for="mail">
                        E-mail
                    </label>
                    <input id="mail" type="email" name="mail" />
                </div>
            </div>
            <div class="contact-message">
                <label for="message">
                    Message
                </label>
                <textarea rows="7" id="message" name="message"></textarea>
            </div>
            <div class="contact-btn">
                <button class="btn-effect btn-first" type="submit">Envoyer !</button>
            </div>
        </form>
    )
}