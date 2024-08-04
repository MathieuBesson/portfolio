"use client"

import { TypeAnimation } from "react-type-animation";

export const BannerTypeTitleClient: React.FC = () => {
    return (
        <TypeAnimation
            aria-hidden="true"
            sequence={[
                'Développeur Back-end',
                1000,
                'À votre service',
                1000
            ]}
            repeat={Infinity}
            wrapper="h2"
            className="bagnere-block-text-typing-title"
        />
    )
}

