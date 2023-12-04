import "../style/PreviewGrid.css"

function PreviewGrid({previews}) {

    return <div className="preview-grid">
        {previews.map(preview =>
            <a href={preview.link} className="preview zoom-effect">
                <img src={preview.path}
                     alt={preview.description}/>
                <div className="preview-button cube-effect cube-effect-hover">
                    <div
                        className="preview-button-face cube-effect-face cube-effect-front">View
                        More
                    </div>
                    <div
                        className="preview-button-face cube-effect-face cube-effect-bottom">View
                        More
                    </div>
                </div>
            </a>)}
    </div>
}

export default PreviewGrid;