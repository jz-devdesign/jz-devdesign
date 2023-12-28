import ArrowBullet from "./ArrowBullet";
import "../style/ArrowBulletList.css"

function ArrowBulletList({items, arrowResource, style}) {

    return <ul className="arrow-bullet-list" style={style}>
        {items.map((item, i) =>
            <ArrowBullet key={i} content={item} arrowResource={arrowResource}/>
        )}
    </ul>
}

export default ArrowBulletList;