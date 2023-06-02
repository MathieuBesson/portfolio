// import React from "react";
import { SecondaryTitle } from "../../components/secondary-title"
import { ContactDownloadCTABlock } from "./contact-download-cta-block"
import { PresentationText } from "./presentation-text"

export const PresentationContent = () => {
    return <article class="presentation-block">
        <SecondaryTitle />
        <PresentationText />
        <ContactDownloadCTABlock />
    </article>
}   