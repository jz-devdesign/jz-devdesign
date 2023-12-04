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

function SectionContent({section}) {
    const {openModal} = useContext(ModalContext)


    switch (section.type) {
        case 'header':
            return <ProjectHeader content={section.content}/>
        case 'projectSpecs':
            return <ProjectSpec specs={section.content.specs}/>
        case 'titledSection':
            return <TitledSection content={section.content}/>
        case 'titleBanner':
            return <TitleBanner title={section.content}/>
        case 'image':
            return <img src={section.content.path}
                        alt={section.content.description}
                        className={"image-section "
                            + (
                                section.content.fullWidth ? "full-width-image " : ""
                            ) + (
                                section.content.border ? "image-section-bordered" : ""
                            )}
                        onClick={() =>
                            openModal(
                                <img src={section.content.path}
                                     alt={section.content.description}
                                     className={"modal-image"}/>)
                        }/>
        case 'text':
        case 'markdown':
            return <MarkdownRenderer markdown={section.content}/>
        case 'flexList':
            return <FlexList items={section.content} style={section.style}
                             center={section.centerInColumn}
                             maxPerRow={section.maxPerRow}/>
        case 'imageList':
            return <ImageList images={section.content.images}/>
        case 'arrowBulletList':
            return <ArrowBulletList items={section.content}/>
        case 'group':
            return <div>
                {section.content.map(part => <SectionContent section={part}/>)}
            </div>
        case 'spacer':
            return <div style={{height: section.content.size}}></div>
        case 'taggedCard':
            return <TaggedCard content={section.content}/>
        case 'captionedIcon':
            return <CaptionedIcon content={section.content}
                                  style={section.style}/>
        default:
            return null
    }
}

export default SectionContent;