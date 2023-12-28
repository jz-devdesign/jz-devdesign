import '../style/TitledSection.css'
import SectionContent from "./SectionContent";

function TitledSection({vertical, content, unformatted}) {

    return <div className={"titled-section " + (
        vertical ? "vertical" : ""
    )}>
        <h3 className={"titled-section-title " + (
            unformatted ? "unformatted-title" : "formatted-title"
        )}>
            {content.title}
        </h3>
        <div className="titled-section-content">
            {content.body.map((part, i) =>
                <div key={i} className="titled-section-content-part">
                    {<SectionContent section={part}/>}
                </div>
            )}
        </div>
    </div>
}

export default TitledSection;