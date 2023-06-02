# Cv avec Astro 

# Installation du projet



## Commandes utiles

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `docker exec astro-cv npm install`             | Installs dependencies                            |
| `docker exec astro-cv npm run dev`             | Starts local dev server at `localhost:3100`      |
| `docker exec astro-cv npm run build`           | Build your production site to `./dist/`          |
| `docker exec astro-cv npm run preview`         | Preview your build locally, before deploying     |
| `docker exec astro-cv npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `docker exec astro-cv npm run astro -- --help` | Get help using the Astro CLI                     |

## Liens utiles

Astro : 
- [Documentation](https://docs.astro.build)
- [Github repository](https://github.com/withastro/astro)



# Arbre de composant : 

- WelcomeSection 
    - NavBar
        - LogoPresentation
            - Logo
            - PrimaryTitle
        - Nav
            - NavItem
    - Presentation
        - PresentationContent
            - SecondaryTitle
            - PresentationText
            - ContactDownloadCTABlock
        - PresentationAnimation

- CompetenceSection
    - PrimaryTitle
    - CompetenceList
        - CompetenceBlock
            - CompetenceBlockTitle
            - CompetenceBlockItemList
                - CompetenceItem
                    - CompetenceItemPicture
                    - CompetenceItemLabel


- ProjectSection
    - PrimaryTitle
    - ProjectList
        - ProjectItem
            - ProjectItemLabel
            - ProjectItemOnlineLink
            - ProjectItemRepositoryLink

- ExperienceSection
    - PrimaryTitle
    - ExperienceList
        - ExperienceItem
            - ExperienceItemDate
            - ExperienceItemContent
                - ExperienceItemContentTitle
                - ExperienceItemContentSubtitle
                - ExperienceItemContentDetailList
                    - ExperienceItemContentDetailItem
                - ExperienceItemContentIconList
                    - ExperienceItemContentIconItem

- ContactSection
    - PrimaryTitle
    - ContactForm

- FooterSection
    - PrimaryTitle
    - FooterInfoList
        - FooterInfoItem
    - SocialNetworkIconList
        - SocialNetworkIconItem


        