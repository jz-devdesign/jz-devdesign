import Banner from "./Banner";
import "../style/TitleBanner.css"

function TitleBanner({content}) {

    return <Banner>
        {content.preTitle ?
            <h3 className="title-banner-pre-title">{content.preTitle}</h3> : null}
        <h1 className="title-banner-title">{content.title}</h1>
    </Banner>
}

export default TitleBanner;