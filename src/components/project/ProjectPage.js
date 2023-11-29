import '../../style/project/ProjectPage.css'
import SectionContent from "../SectionContent";

function ProjectPage({sections}) {

    return <div className="project-page">
        {sections.map((section, i) => {
            return (
                <div key={i}
                     className={(
                         shouldHaveSpaceBelow(section.type) ? "project-page-spaced-section " : ""
                     ) + (
                         shouldRestrictWidth(section.type) ? "project-page-restricted-width" : ""
                     )}>
                    {<SectionContent section={section}/>}
                </div>
            )
        })}
    </div>
}

function shouldRestrictWidth(sectionType) {
    return !['header', 'titleBanner'].includes(sectionType);
}

function shouldHaveSpaceBelow(sectionType) {
    return sectionType !== 'header'
}

export default ProjectPage;