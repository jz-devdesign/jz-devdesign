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
]

function HobbiesPage() {
    return <div className="hobbies-page">
        <h1>Hobbies</h1>
        <div className="section">
            <h2>Painting</h2>
            <ImageGrid images={paintings}/>
        </div>
        <div className="section">
            <h2>Photos</h2>
            <ImageGrid images={photos}/>
        </div>
    </div>
}

export default HobbiesPage;