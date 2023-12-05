import '../../style/project/ProjectPage.css'
import SectionContent from "../SectionContent";
import {useEffect} from "react";

function ProjectPage({colors, sections}) {

    useEffect(() => {
        document.documentElement.style.setProperty(
            '--background-color',
            colors.backgroundColor
        );

        document.documentElement.style.setProperty(
            '--highlight-color',
            colors.highlightColor
        );

        document.documentElement.style.setProperty(
            '--highlight-color-bright',
            colors.highlightColorBright
        );

        document.documentElement.style.setProperty(
            '--text-color',
            colors.textColor
        );

        document.documentElement.style.setProperty(
            '--text-color-alt',
            colors.textColorAlt
        );

        document.documentElement.style.setProperty(
            '--banner-color',
            colors.bannerColor
        );

        document.documentElement.style.setProperty(
            '--border-color',
            colors.borderColor
        );
    }, []);

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
    return !['header', 'titleBanner', 'comingSoon'].includes(sectionType);
}

function shouldHaveSpaceBelow(sectionType) {
    return sectionType !== 'header'
}

export default ProjectPage;