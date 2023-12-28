import "../style/ArrowBullet.css"

function ArrowBullet({content, arrowResource}) {

    return <div className="arrow-bullet">
        <div className="arrow-container">
            <img src={arrowResource || "/arrow_bullet.png"} alt={'·'}/>
        </div>
        <div>
            <h6 className="arrow-bullet-title">{content.title}</h6>
            <p className="arrow-bullet-text">{content.text}</p>
        </div>
    </div>
}

export default ArrowBullet;