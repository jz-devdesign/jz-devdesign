import {marked} from "marked";
import '../style/MarkdownRenderer.css'

function MarkdownRenderer({style, className, markdown}) {
    const getMarkdownText = () => {
        const rawMarkup = marked(markdown);
        return {__html: rawMarkup};
    };

    return <div style={style} className={"markdown-renderer " + (
        className || ""
    )}
                dangerouslySetInnerHTML={getMarkdownText()}/>;
}

export default MarkdownRenderer;