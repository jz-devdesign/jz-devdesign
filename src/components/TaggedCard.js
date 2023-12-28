import "../style/TaggedCard.css"
import MarkdownRenderer from "./MarkdownRenderer";

function TaggedCard({content}) {

    return <div className="tagged-card"
                style={content.style || {}}>
        <span className="tagged-card-tag">{content.tag}</span>
        <div className="tagged-card-content">
            <h4 className="tagged-card-title">{content.title}</h4>
            <MarkdownRenderer
                className="tagged-card-text"
                markdown={content.text}/>
        </div>
    </div>
}

export default TaggedCard;