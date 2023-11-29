import Banner from "./Banner";
import "../style/TitleBanner.css"

function TitleBanner({title}) {

    return <Banner>
        <h1 className="title-banner-title">{title}</h1>
    </Banner>
}

export default TitleBanner;