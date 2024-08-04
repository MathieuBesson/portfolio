export const Contact: React.FC = () => {
  return  <section id="contact">
  <h2>Contactez-moi ! </h2>
  <form action="https://formspree.io/f/mzbkrjjk" method="POST">
      <div className="contact-personnal-info">
          <div className="contact-personnal-info-group">
              <label htmlFor="name">
                  Nom
              </label>
              <input id="name" type="text" name="name" />
          </div>
          <div className="contact-personnal-info-group">
              <label htmlFor="mail">
                  E-mail
              </label>
              <input id="mail" type="email" name="mail" />
          </div>
      </div>
      <div className="contact-message">
          <label htmlFor="message">
              Message
          </label>
          <textarea rows={7} id="message" name="message"></textarea>
      </div>
      <div className="contact-btn">
          <button className="btn-effect btn-first" type="submit">Envoyer !</button>
      </div>
  </form>
</section>
}