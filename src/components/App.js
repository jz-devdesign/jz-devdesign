import '../style/App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import Modal from "./Modal";
import React, {useState} from "react";
import projects from "../projects";
import ProjectPage from "./project/ProjectPage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import HobbiesPage from "./HobbiesPage";
import HomePage from "./HomePage";
import MiscProjectsPage from "./MiscProjectsPage";

export const ModalContext = React.createContext({
    isOpen: false,
    openModal: (content, options) => {
    },
    closeModal: () => {
    }
});

function App() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [modalOptions, setModalOptions] = useState(undefined);
    const modalContextValue = {
        isOpen: modalOpen,
        openModal: (content, options) => {
            setModalContent(content)
            setModalOptions(options)
            setModalOpen(true)
        },
        closeModal: () => {
            setModalOpen(false)
        }
    }

    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
            <ScrollToTop/>
            <div className="App">
                <ModalContext.Provider value={modalContextValue}>
                    <Modal isOpen={modalOpen}
                           closeModal={() => setModalOpen(false)}
                           options={modalOptions}>
                        {modalContent}
                    </Modal>
                    <Navbar/>

                    <Routes>
                        <Route path={"/"} element={<div
                            className="app-content"><HomePage/></div>}/>
                        <Route path={"/hobbies"} element={<div
                            className="app-content"><HobbiesPage/></div>}/>
                        <Route path={"/designs"}
                               element={<div
                                   className="app-content"><MiscProjectsPage/>
                               </div>}/>
                        {projects.map((project, i) => (
                            <Route key={i}
                                   path={'/project/' + project.slug}
                                   element={
                                       <ProjectPage
                                           colors={project.colors}
                                           sections={project.sections}/>}
                            />
                        ))}
                    </Routes>
                    <div style={{height: '0.01px'}}/>
                    <Footer/>
                </ModalContext.Provider>
            </div>
        </HashRouter>
    );
}

export default App;