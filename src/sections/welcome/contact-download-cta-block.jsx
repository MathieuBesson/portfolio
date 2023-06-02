import { Button } from "../../components/button"

export const ContactDownloadCTABlock = () => {
    return <>
        <Button link="#contact" type="first" label="Contactez - moi !" />
        <Button link="/CV-Mathieu-Besson-Developpeur-Web.pdf" type="second" label="Télécharger mon CV" />
    </>
}