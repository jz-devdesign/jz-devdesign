import ImageList from "../../ImageList";
import "../../../style/components/pages/projects/project.scss";
import "../../../style/components/pages/projects/Illustrations.scss";

function Illustrations() {
  return (
    <div className="project illustrations">
      <div className="top-of-page" id="top-of-page">
        <a className="back-button" href="/">
          &larr; back
        </a>
      </div>
      <div className="images-container">
        <ImageList
          images={[
            {
              src: "designs/weather/boat.gif",
              alt: "Boat weather gif",
            },
            {
              src: "designs/weather/night.gif",
              alt: "Night weather gif",
            },
            {
              src: "designs/weather/raining.gif",
              alt: "Rainy weather gif",
            },
            {
              src: "designs/weather/snow.gif",
              alt: "Snowy weather gif",
            },
            {
              src: "designs/weather/sunset.gif",
              alt: "Sunset weather gif",
            },
            {
              src: "designs/tutorial/guide1.png",
              alt: "Tutorial image 1",
            },
            {
              src: "designs/tutorial/guide2.png",
              alt: "Tutorial image 2",
            },
            {
              src: "designs/tutorial/guide3.png",
              alt: "Tutorial image 3",
            },
            {
              src: "designs/money_god/money_god4.png",
              alt: "Sketch of Caishen final step",
            },
            {
              src: "designs/misc/animals.png",
              alt: "Animal logo designs",
            },
            {
              src: "designs/misc/icons.png",
              alt: "Phone icons design",
            },
            {
              src: "designs/misc/girl.png",
              alt: "Drawing of a girl",
            },
            {
              src: "designs/misc/room.png",
              alt: "3D sketch of a bedroom",
            },
            {
              src: "designs/misc/skyline.png",
              alt: "Drawing of a skyline",
            },
            {
              src: "designs/paintings/butterfly.jpg",
              alt: "Painting of a butterfly",
            },
            {
              src: "designs/paintings/forest.jpg",
              alt: "Painting of a forest in autumn",
            },
            {
              src: "designs/paintings/boat_dock.jpg",
              alt: "Painting of a boat dock",
            },
            {
              src: "designs/paintings/flower_vase.png",
              alt: "Painting of a vase with flowers",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Illustrations;
