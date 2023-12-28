import "../style/PreviewGrid.css"

function PreviewGrid({previews}) {

    return <div className="preview-grid">
        {previews.map((preview, i) =>
            <div className={"preview-container"}>
                {preview.link ?
                    <a key={i} href={preview.link}
                        className="preview preview-link zoom-effect">
                        <img src={preview.path}
                            alt={preview.description}/>
                        <div
                            className="preview-button cube-effect cube-effect-hover">
                            <div
                                className="preview-button-face cube-effect-face cube-effect-front">View
                                More
                            </div>
                            <div
                                className="preview-button-face cube-effect-face cube-effect-bottom">View
                                More
                            </div>
                        </div>
                    </a>
                    : <div key={i} className="preview zoom-effect">
                        <img src={preview.path}
                            alt={preview.description}/>
                    </div>
                }
                {preview.caption &&
                    <caption className={"preview-caption"}>{preview.caption}</caption>}
            </div>
        )}
    </div>
}

export default PreviewGrid;