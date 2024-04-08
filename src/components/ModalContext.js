import Modal from "./Modal";
import React, { useState } from "react";

export const ModalContext = React.createContext({
  isOpen: false,
  openModal: (content, options) => {},
  closeModal: () => {},
});

function ModalContextProvider({ children }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalOptions, setModalOptions] = useState(undefined);
  const modalContextValue = {
    isOpen: modalOpen,
    openModal: (content, options) => {
      setModalContent(content);
      setModalOptions(options);
      setModalOpen(true);
    },
    closeModal: () => {
      setModalOpen(false);
    },
  };

  return (
    <ModalContext.Provider value={modalContextValue}>
      <Modal
        isOpen={modalOpen}
        closeModal={() => setModalOpen(false)}
        options={modalOptions}
      >
        {modalContent}
      </Modal>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalContextProvider;
