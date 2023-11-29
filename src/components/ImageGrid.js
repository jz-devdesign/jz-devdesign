import "../style/ImageGrid.css"
import {useContext} from "react";
import {ModalContext} from "./App";

function ImageGrid({images}) {
    const {openModal} = useContext(ModalContext)

    return <div className={"image-grid"}>
        {images.map(image =>
            <div className={"image-container"}>
                <img src={image.path} alt={image.description}
                     onClick={() => openModal(
                         <img src={image.path} alt={image.description}
                              className={"modal-image"}/>
                     )}/>
            </div>)}
    </div>
}

export default ImageGrid;