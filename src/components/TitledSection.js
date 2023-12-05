import '../style/TitledSection.css'
import SectionContent from "./SectionContent";

function TitledSection({vertical, content}) {

    return <div className={"titled-section " + (
        vertical ? "vertical" : ""
    )}>
        <h3 className="titled-section-title">{content.title}</h3>
        <div className="titled-section-content">
            {content.body.map(part =>
                <div className="titled-section-content-part">
                    {<SectionContent section={part}/>}
                </div>
            )}
        </div>
    </div>
}

export default TitledSection;