import "../style/ImageGrid.css"
import {useContext} from "react";
import {ModalContext} from "./App";

function ImageGrid({style, images}) {
    const {openModal} = useContext(ModalContext)

    return <div className={"image-grid"}>
        {images.map((image, i) =>
            <div key={i} className={"image-container zoom-effect"}
                 style={style}>
                <img src={image.path} alt={image.description}
                     onClick={() => openModal(
                         <img src={image.path} alt={image.description}
                              className={"modal-image"}/>,
                         {
                             transparentBackground: true,
                         }
                     )}/>
            </div>)}
    </div>
}

export default ImageGrid;