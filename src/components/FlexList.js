import TaggedCard from "./TaggedCard";
import "../style/FlexList.css"
import CaptionedIcon from "./CaptionedIcon";

function FlexList({style, items, center}) {

    return <ul
        className={"flex-list " + (
            center ? 'centered-small' : ''
        )}
        style={style}>

        {items.map(item => {
            let content;
            switch (item.type) {
                case 'taggedCard':
                    content = <TaggedCard content={item.content}/>
                    break;
                case 'captionedIcon':
                    content = <CaptionedIcon content={item.content}/>
                    break;
            }

            return <li>
                {content}
            </li>;
        })}
    </ul>
}

export default FlexList;

/**
 * {
 *                                 type: 'taggedCard',
 *                                 content: {
 *                                     title: 'Community platform',
 *                                     text: 'Add a community platform so
 * people can post and interact with each other.'
 *                                 }
 *                             },
 *                             {
 *                                 type: 'taggedCard',
 *                                 content: {
 *                                     title: 'Offer rewards',
 *                                     text: 'Offer rewards upon completion of
 * a deal or inviting friends.',
 *                                 }
 *                             },
 */