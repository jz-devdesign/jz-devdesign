import { useContext } from "react";
import "../style/components/ImageList.scss";
import { ModalContext } from "./ModalContext";

function ImageList({ images }) {
  const { openModal } = useContext(ModalContext);

  return (
    <div className="image-list">
      {images.map((image) => (
        <div
          className="image-container"
          key={image.src}
          onClick={() =>
            openModal(
              <img src={image.src} alt={image.alt} className={"modal-image"} />,
              {
                transparentBackground: true,
              }
            )
          }
        >
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
}

export default ImageList;
