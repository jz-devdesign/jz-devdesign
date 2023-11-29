import ArrowBullet from "./ArrowBullet";
import "../style/ArrowBulletList.css"

function ArrowBulletList({items}) {

    return <ul className="arrow-bullet-list">
        {items.map(item =>
            <ArrowBullet content={item}/>
        )}
    </ul>
}

export default ArrowBulletList;