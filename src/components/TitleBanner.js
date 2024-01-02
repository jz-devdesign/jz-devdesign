import Banner from "./Banner";
import "../style/TitleBanner.css"
import MarkdownRenderer from "./MarkdownRenderer";

function TitleBanner({content}) {

    return <Banner>
        {content.preTitle ?
            <h3 className="title-banner-pre-title">{content.preTitle}</h3> : null}
        <h1 className="title-banner-title">
            <MarkdownRenderer markdown={content.title}
                className={"centered-title"}/></h1>
    </Banner>
}

export default TitleBanner;