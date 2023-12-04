import '../style/App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./HomePage";
import HobbiesPage from "./HobbiesPage";
import Modal from "./Modal";
import React, {useState} from "react";
import projects from "../projects";
import ProjectPage from "./project/ProjectPage";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const ModalContext = React.createContext({
    isOpen: false,
    openModal: (content) => {
    },
    closeModal: () => {
    }
});

function App() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const modalContextValue = {
        isOpen: modalOpen,
        openModal: (content) => {
            setModalContent(content)
            setModalOpen(true)
        },
        closeModal: (content) => {
            setModalOpen(false)
        }
    }

    return (
        <BrowserRouter>
            <div className="App">
                <ModalContext.Provider value={modalContextValue}>
                    <Modal isOpen={modalOpen}
                           closeModal={() => setModalOpen(false)}>
                        {modalContent}
                    </Modal>
                    <Navbar/>
                    <Routes>
                        <Route path={"/"} element={HomePage()}/>
                        <Route path={"/hobbies"} element={HobbiesPage()}/>
                        {projects.map(project => <Route
                            path={'/project/' + project.slug}
                            element={<ProjectPage sections={project.sections}/>}
                        />)}
                    </Routes>
                    <div style={{height: '0.01px'}}/>
                    {/* clear element */}
                    <Footer/>
                </ModalContext.Provider>
            </div>
        </BrowserRouter>
    );
}

export default App;