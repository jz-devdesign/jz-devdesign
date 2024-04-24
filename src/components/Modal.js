import ReactModal from "react-modal";
import "../style/components/Modal.scss";

ReactModal.setAppElement("#root");

function Modal({ isOpen, closeModal, options, children }) {
  return (
    <div className="modal">
      <ReactModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            zIndex: 100,
          },
          content: options?.transparentBackground
            ? {
                padding: "0",
                background: "transparent",
              }
            : {},
        }}
      >
        {children}
      </ReactModal>
    </div>
  );
}

export default Modal;
