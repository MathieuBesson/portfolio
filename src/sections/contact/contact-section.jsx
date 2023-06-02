import { SecondaryTitle } from "../../components/secondary-title"
import { ContactForm } from "./contact-form"

export const ContactSection = () => {
    return (
        <section id="contact">
            <SecondaryTitle>Contactez-moi ! </SecondaryTitle>
            <ContactForm />
        </section>
    )
}