import {marked} from "marked";
import '../style/MarkdownRenderer.css'

function MarkdownRenderer({className, markdown}) {
    const getMarkdownText = () => {
        const rawMarkup = marked(markdown);
        return {__html: rawMarkup};
    };

    return <div className={"markdown-renderer " + (
        className || ""
    )}
                dangerouslySetInnerHTML={getMarkdownText()}/>;
}

export default MarkdownRenderer;