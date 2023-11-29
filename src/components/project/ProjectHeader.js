import '../../style/project/ProjectHeader.css'

function ProjectHeader({content}) {
    return <div className="project-header">
        <div className="project-header-text">
            <ul className="tags">
                {content.tags.map(tag =>
                    <li className="header-tag">
                        {tag}
                    </li>)
                }
            </ul>
            <h1 className="project-title">{content.title}</h1>
            <h3 className="project-subtitle">{content.subtitle}</h3>
        </div>
        <div className="header-image-container">
            <img src={content.imageUrl} alt={"image for " + content.title}/>
        </div>
    </div>
}

export default ProjectHeader;