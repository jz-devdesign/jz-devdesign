import ImageGrid from "./ImageGrid";

function MiscProjects() {
    
    return <div className="hobbies-page">
        <section className="hobbies-header">
            <div className="hobbies-header-text-container">
                <h4 className="hobbies-intro-text">A bit about me...</h4>
                <h2 className="hobbies-title">A few of my favorite hobbies</h2>
            </div>
        </section>
        <div className="section first-hobbies-section">
            <h4>&middot; Painting</h4>
            <ImageGrid images={paintings}/>
        </div>
        <div className="section">
            <h4>&middot; Photography</h4>
            <ImageGrid images={photos}/>
        </div>
        <div className="section">
            <h4>&middot; Phone painting</h4>
            <ImageGrid images={fingerPaintings}
                       style={{
                           height: '70vh',
                           width: 'auto'
                       }}/>
        </div>
    </div>
}

export default MiscProjects;