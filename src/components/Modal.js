import ReactModal from 'react-modal';
import '../style/Modal.css'

ReactModal.setAppElement('#root');

function Modal({isOpen, closeModal, children}) {

    return <div className="modal">
        <ReactModal isOpen={isOpen} onRequestClose={closeModal} style={{
            overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.85)'
            },
        }}>
            {children}
        </ReactModal>
    </div>
}

export default Modal;