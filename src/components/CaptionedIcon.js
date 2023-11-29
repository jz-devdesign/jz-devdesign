import "../style/CaptionedIcon.css"

function CaptionedIcon({content}) {

    return <div className="captioned-icon">
        <img src={content.path} alt={content.description}/>
        <p className="captioned-icon-text">{content.caption}</p>
    </div>
}

export default CaptionedIcon;