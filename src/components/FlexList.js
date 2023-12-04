import "../style/FlexList.css"
import SectionContent from "./SectionContent";

function FlexList({style, items, center, maxPerRow}) {

    return <ul
        className={'flex-list ' + (
            center ? 'centered-small ' : ''
        ) + (
            maxPerRow ? 'max-per-row-' + maxPerRow : ''
        )}
        style={style}>

        {items.map(item => {
            return <li>
                <SectionContent section={item}/>
            </li>;
        })}
    </ul>
}

export default FlexList;