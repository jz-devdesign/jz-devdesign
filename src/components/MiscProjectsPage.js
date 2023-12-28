import ImageGrid from "./ImageGrid";

const weather = [
    {
        path: 'designs/weather/boat.gif',
        description: 'Boat weather gif'
    },
    {
        path: 'designs/weather/night.gif',
        description: 'Night weather gif'
    },
    {
        path: 'designs/weather/raining.gif',
        description: 'Rainy weather gif'
    },
    {
        path: 'designs/weather/snow.gif',
        description: 'Snowy weather gif'
    },
    {
        path: 'designs/weather/sunset.gif',
        description: 'Sunset weather gif'
    },
]

const tutorial = [
    {
        path: 'designs/tutorial/guide1.png',
        description: 'Tutorial image 1'
    },
    {
        path: 'designs/tutorial/guide2.png',
        description: 'Tutorial image 2'
    },
    {
        path: 'designs/tutorial/guide3.png',
        description: 'Tutorial image 3'
    },
    {
        path: 'designs/tutorial/guide3.png',
        description: 'Tutorial image 4'
    },
]

const caishen = [
    {
        path: 'designs/money_god/money_god1.png',
        description: 'Sketch of Caishen step 1'
    },
    {
        path: 'designs/money_god/money_god2.png',
        description: 'Sketch of Caishen step 2'
    },
    {
        path: 'designs/money_god/money_god3.png',
        description: 'Sketch of Caishen step 3'
    },
    {
        path: 'designs/money_god/money_god4.png',
        description: 'Sketch of Caishen final step'
    },
]

const miscellaneous = [
    {
        path: 'designs/misc/animals.png',
        description: 'Animal logo designs'
    },
    {
        path: 'designs/misc/icons.png',
        description: 'Phone icons design'
    },
]

function MiscProjectsPage() {

    return <div className="content-page">
        <section className="content-page-header">
            <div className="content-page-header-text-container">
                <h2>Some of my designs 🎨</h2>
            </div>
        </section>
        <div className="section content-page-first-section">
            <h4>&middot; Weather animations</h4>
            <ImageGrid images={weather}/>
        </div>
        <div className="section">
            <h4>&middot; Finance app startup page</h4>
            <ImageGrid images={tutorial}/>
        </div>
        <div className="section">
            <h4>&middot; Caishen (Chinese god of wealth)</h4>
            <ImageGrid images={caishen}/>
        </div>
        <div className="section">
            <h4>&middot; Miscellaneous</h4>
            <ImageGrid images={miscellaneous}/>
        </div>
    </div>
}

export default MiscProjectsPage;