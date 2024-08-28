import { BannerTypeTitleClient } from "./BannerTypeTitleClient";

export const BannerTypeTitle: React.FC = () => {
    return (
        <div style={{ position: 'relative' }}>
            <h2
                style={{
                    clip: 'rect(1px, 1px, 1px, 1px)',
                    clipPath: 'inset(50%)',
                    height: '1px',
                    width: '1px',
                    margin: '-1px',
                    overflow: 'hidden',
                    padding: '0',
                    position: 'absolute',
                }}
            >
                Développeur Back-end de solutions évolutives
            </h2>
            <BannerTypeTitleClient />
        </div>
    )
}


