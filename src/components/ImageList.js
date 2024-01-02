import {useContext} from "react";
import {ModalContext} from "./App";

function ImageList({images}) {
    const {openModal} = useContext(ModalContext)

    const responsiveImageListFlex = (container) => {
        let hasWrapped = false;
        const flexContainer = document.querySelector(container);
        const lastItem = flexContainer.lastElementChild;
        if (lastItem && flexContainer) {
            hasWrapped = lastItem.offsetTop > flexContainer.offsetTop;
        }

        if (hasWrapped) {
            flexContainer.style.justifyContent = 'flex-start';
        } else {
            flexContainer.style.justifyContent = 'space-between';
        }
    }

    const imageLoaded = () => {
        responsiveImageListFlex('.image-list')
    }

    window.addEventListener(
        'resize',
        () => responsiveImageListFlex('.image-list')
    );

    return <div
        className="image-list">
        {images.map((image, i) => (
            <div key={i} className="image-list-image-container"
                style={{
                    height: '60vh',
                    minHeight: '300px',
                    maxHeight: '600px',
                    maxWidth: '100%',
                }}>
                <img src={image.path}
                    alt={image.description}
                    onLoad={imageLoaded}
                    onClick={() =>
                        openModal(
                            <img src={image.path}
                                alt={image.description}
                                className={"modal-image"}/>,
                        )
                    }
                />
            </div>
        ))
        }
    </div>
}

export default ImageList;