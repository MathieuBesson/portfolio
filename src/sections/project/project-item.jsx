export const ProjectItem = ({ title, onlineLink, repositoryLink }) => {
    return (
        <section class="projects-item">
            <div class="projects-item-block">
                <div class="projects-item-block-img-10"></div>
            </div>
            <div class="projects-item-content">
                <h3>{title}</h3>
                <p class="projects-item-content-group">
                    {onlineLink &&
                        <a class="projects-item-content-group-link"
                            href={onlineLink} target="_blank">
                            <i class="far fa-caret-square-right"></i>
                        </a>
                    }
                    {repositoryLink &&
                        <a class="projects-item-content-group-link"
                            href={repositoryLink} target="_blank">
                            <i class="fab fa-github"></i>
                        </a>
                    }
                </p>
            </div>
        </section>
    )
}