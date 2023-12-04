import "../style/CaptionedIcon.css"

function CaptionedIcon({style, content}) {

    return <div className="captioned-icon" style={style}>
        <img src={content.path} alt={content.description}/>
        <p className="captioned-icon-text">{content.caption}</p>
    </div>
}

export default CaptionedIcon;