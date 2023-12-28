import ImageGrid from "./ImageGrid";
import "../style/HobbiesPage.css"

const paintings = [
    {
        path: 'paintings/butterfly.jpg',
        description: 'painting of a butterfly'
    },
    {
        path: 'paintings/flower.jpg',
        description: 'painting of a flower'
    },
    {
        path: 'paintings/forest.jpg',
        description: 'painting of a forest in autumn'
    },
    {
        path: 'paintings/gray_field.png',
        description: 'painting of a field on a cloudy day'
    },
    {
        path: 'paintings/green_field.jpg',
        description: 'painting of a green field'
    },
    {
        path: 'paintings/leaf.jpg',
        description: 'painting of a leaf'
    },
    {
        path: 'paintings/pink_cloud.png',
        description: 'painting of a pink cloud'
    },
    {
        path: 'paintings/sunset.jpg',
        description: 'painting of a sunset'
    },
    {
        path: 'paintings/vase.jpg',
        description: 'painting of a vase'
    },
    {
        path: 'paintings/boat_dock.jpg',
        description: 'painting of a boat dock'
    },
    {
        path: 'paintings/pomagranate.jpg',
        description: 'painting of a pomagranate'
    },
    {
        path: 'paintings/pig.jpg',
        description: 'painting of a little piggy'
    },
    {
        path: 'paintings/forest.png',
        description: 'painting of a forest'
    },
    {
        path: 'paintings/sea.jpg',
        description: 'painting of a sea with flowers in front'
    },
    {
        path: 'paintings/bunny.jpg',
        description: 'painting of a bunny'
    },
    {
        path: 'paintings/flower_vase.png',
        description: 'painting of a vase with flowers'
    },
]

const photos = [
    {
        path: 'photos/beach.jpg',
        description: 'photo of a beach'
    },
    {
        path: 'photos/dark_room.jpg',
        description: 'photo of a dark room'
    },
    {
        path: 'photos/grandmother.jpg',
        description: 'photo of a woman in China'
    },
    {
        path: 'photos/shanghai_building.png',
        description: 'photo of a building in Shanghai'
    },
    {
        path: 'photos/window_sunset.jpg',
        description: 'photo of a sunset through a window'
    },
    {
        path: 'photos/shanghai.jpg',
        description: 'photo of a neighborhood in Shanghai'
    },
]

const fingerPaintings = [
    {
        path: 'finger_paintings/chocolate.jpg',
        description: 'phone painting of a chocolate bar'
    },
    {
        path: 'finger_paintings/shrimp.jpg',
        description: 'phone painting of a shrimp'
    },
    {
        path: 'finger_paintings/snack.png',
        description: 'phone painting of a snack'
    },
    {
        path: 'finger_paintings/sunset.jpg',
        description: 'phone painting of a sunset'
    },
]

function HobbiesPage() {
    return <div className="content-page">
        <section className="content-page-header">
            <div className="content-page-header-text-container">
                <h4 className="content-page-header-intro-text">A bit about
                    me...</h4>
                <h2>A few of my favorite hobbies</h2>
            </div>
        </section>
        <div className="section content-page-first-section">
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

export default HobbiesPage;