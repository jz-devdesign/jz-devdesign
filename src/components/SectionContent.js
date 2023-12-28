import ProjectHeader from "./project/ProjectHeader";
import ProjectSpec from "./project/ProjectSpec";
import TitledSection from "./TitledSection";
import TitleBanner from "./TitleBanner";
import ImageList from "./ImageList";
import ArrowBulletList from "./ArrowBulletList";
import FlexList from "./FlexList";
import MarkdownRenderer from "./MarkdownRenderer";
import TaggedCard from "./TaggedCard";
import CaptionedIcon from "./CaptionedIcon";
import {useContext} from "react";
import {ModalContext} from "./App";
import ComingSoon from "../ComingSoon";
import TableOfContents from "./TableOfContents";
import BackToTop from "./BackToTop";

function SectionContent({section}) {
    const {openModal} = useContext(ModalContext)

    switch (section.type) {
        case 'header':
            return <ProjectHeader style={section.style}
                content={section.content}/>
        case 'projectSpecs':
            return <ProjectSpec specs={section.content.specs}/>
        case 'titledSection':
            return <TitledSection unformatted={section.unformatted}
                content={section.content}
                vertical={section.vertical}/>
        case 'titleBanner':
            return <TitleBanner content={section.content}/>
        case 'image':
            return <figure onClick={() =>
                openModal(
                    <figure>
                        <img src={section.content.path}
                            alt={section.content.description}
                            className={"modal-image"}/>
                        {section.content.caption ?
                            <figcaption>{section.content.caption}</figcaption> : null}
                    </figure>)
            }>
                <img src={section.content.path}
                    style={section.style}
                    alt={section.content.description}
                    className={"image-section "
                        + (
                            section.content.fullWidth ? "full-width-image " : ""
                        ) + (
                            section.content.border ? "image-section-bordered" : ""
                        )}/>
                {section.content.caption ?
                    <figcaption>{section.content.caption}</figcaption> : null}
            </figure>
        case 'text':
        case 'markdown':
            return <MarkdownRenderer markdown={section.content}
                style={section.style}/>
        case 'flexList':
            return <FlexList items={section.content} style={section.style}
                center={section.centerInColumn}
                maxPerRow={section.maxPerRow}
                equalWidth={section.equalWidth}/>
        case 'imageList':
            return <ImageList images={section.content.images}/>
        case 'arrowBulletList':
            return <ArrowBulletList items={section.content}
                arrowResource={section.arrowResource}
                style={section.style}/>
        case 'group':
            return <div style={section.style}
                className={section.border ? "border" : ""}>
                {section.content.map((part, i) => <SectionContent key={i}
                    section={part}/>)}
            </div>
        case 'spacer':
            return <div style={{height: section.content.size}}></div>
        case 'taggedCard':
            return <TaggedCard content={section.content}/>
        case 'captionedIcon':
            return <CaptionedIcon content={section.content}
                style={section.style}/>
        case 'tableOfContents':
            return <TableOfContents content={section.content}/>
        case 'backToTop':
            return <BackToTop/>
        case 'comingSoon':
            return <ComingSoon/>
        default:
            return null
    }
}

export default SectionContent;