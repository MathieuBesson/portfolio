import { SecondaryTitle } from "../../components/secondary-title";
import { FooterInfoItem } from "./footer-info-item";
import { FooterSocialNetworkIcon } from "./footer-social-network-icon";

export const FooterSection = () => {

    const footerInfoList = [
        `<a href="mailto:mathieubesson2001@gmail.com">mathieubesson2001@gmail.com</a>`,
        `Rennes`,
        `<a href="tel:+33780379744">07 80 37 97 44</a>`,
        `Développeur Web`,
    ];

    const footerSocialNetworkList = [
        {
            "link": "https://twitter.com/BessonMathieu3",
            "icon": "fab fa-twitter",
        },
        {
            "link": "https://www.linkedin.com/in/mathieubesson/",
            "icon": "fab fa-linkedin-in",
        },
        {
            "link": "https://github.com/MathieuBesson",
            "icon": "fab fa-github",
        }
    ]

    return (
        <footer>
            <article class="footer-contact">
                <SecondaryTitle>
                    Mathieu Besson
                </SecondaryTitle>
                {footerInfoList.map(footerInfoItem =>
                    <FooterInfoItem>
                        {footerInfoItem}
                    </FooterInfoItem>
                )}
            </article>
            <article class="footer-social">
                <p class="footer-social-job">Développeur Web</p>
                <p class="footer-social-devicon-group">
                    {footerSocialNetworkList.map(footerSocialNetworkItem =>
                        <FooterSocialNetworkIcon link={footerSocialNetworkItem.link} iconClass={footerSocialNetworkItem.icon} />
                    )}
                </p>
            </article>
        </footer>
    )
}