import { BannerAnimation } from "./BannerAnimation"
import { BannerTypeTitle } from "./BannerTypeTitle";
import portfolioData from "@/data.json"

export const Banner: React.FC = () => {

  const { banner: data } = portfolioData.header;

  return <div className="bagnere">
    <article className="bagnere-block">
      <div className="bagnere-block-text-typing">
        <BannerTypeTitle />
      </div>
      <div>
        {data.presentationList.map((presentation, id) => (
          <p key={id} className="bagnere-block-content" dangerouslySetInnerHTML={{ __html: presentation }} />
        ))}
      </div>
      <div>
        <a href="/docs/CV_MATHIEU_BESSON_DEVELOPPEUR_BACK_END_2024.pdf" download target="_blank"><button className="btn-effect btn-second">Télécharger mon CV</button></a>
        <a href="https://doc.mathieu-besson.fr" download target="_blank"><button className="btn-effect btn-first">Voir mon wiki</button></a>
      </div>
    </article>
    <div className="bagnere-block">
      <BannerAnimation />
    </div>
  </div>
}