import "../style/HomePage.css"
import PreviewGrid from "./PreviewGrid";
import {useContext} from "react";
import {ModalContext} from "./App";

function HomePage() {
    const {openModal} = useContext(ModalContext)

    return <div className="home-page">
        <section className="home-page-header">
            <div className="home-page-header-content">
                <div className="home-page-first-content">
                    <ul className="home-page-icon-list">
                        <li>
                            <a className="home-page-icon-container"
                                href="https://www.linkedin.com/in/jinping-zhang-66887924b/"
                                target="_blank">
                                <img src="/icons/linkedin.svg" alt="linkedin"/>
                            </a>
                        </li>
                        <li>
                            <a className="home-page-icon-container"
                                href="https://github.com/Jinping4038"
                                target="_blank">
                                <img src="/icons/github.svg" alt="github"/>
                            </a>
                        </li>
                        <li>
                            <a className="home-page-icon-container"
                                href="https://jinpingdezuopin.zcool.com.cn/"
                                target="_blank">
                                <img src="/icons/zk.svg" alt="zk"/>
                            </a>
                        </li>
                        <li>
                            <a className="home-page-icon-container"
                                href="https://dribbble.com/jinping4038"
                                target="_blank">
                                <img src="/icons/dribbble.svg" alt="dribbble"/>
                            </a>
                        </li>
                    </ul>
                    <h1 className="home-page-title">
                        <span>UI/UX</span>
                        <br/>
                        <div className="cube-effect home-page-title-effect">
                            <span
                                className="alt home-page-title-face home-page-title-face-front cube-effect-face cube-effect-front">
                                Designer
                            </span>
                            <span
                                className="alt home-page-title-face home-page-title-face-bottom cube-effect-face cube-effect-bottom">Specialist</span>
                        </div>
                    </h1>
                </div>
                <div className="home-page-second-content">
                    <div>
                        <a href="mailto: jinping4038@gmail.com"
                            className="home-page-contact-button">
                            <img src="/get_in_touch.svg" alt="Contact"/>
                            <span
                                className="home-page-contact-button-text">Get in touch</span>
                        </a>
                    </div>
                    <div className="home-page-bio-container">
                        <p>... I'm an enthusiastic designer at the intersection
                            of
                            creativity and practicality. <span
                                className="alt">Driven by an unending quest to shape meaningful experiences, I delve passionately into product design, blending art with functionality.</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="home-page-project-previews">
            <PreviewGrid previews={
                [
                    {
                        path: '/home_page_1.png',
                        description: 'Project image 1',
                        link: '/#/project/dr-lambda',
                        caption: 'Generative AI Tool',
                    },
                    {
                        path: '/home_page_2.png',
                        description: 'Project image 2',
                        link: '/#/project/broker-app',
                        caption: 'App for Real Estate Agents',
                    },
                    {
                        path: '/home_page_3.png',
                        description: 'Project image 3',
                        link: '/#/designs',
                        caption: 'My Digital Designs',
                    },
                ]
            }/>
            <div className={"older-projects-section"}>
                <h3 style={{marginBottom: '50px'}}>Older Projects (2016-2019,
                    Mandarin)</h3>
                <PreviewGrid previews={[
                    {
                        path: '/home_page_extras_1.png',
                        description: 'Older projects 1',
                        caption: 'Finance • Music • Education',
                        onClick: () => openModal(
                            <img className={"modal-image-scrollable"}
                                src={"/old_project_1.png"}
                                alt={"Could not load image"}/>,
                            {
                                transparentBackground: true,
                            }
                        )
                    },
                    {
                        path: '/home_page_extras_2.png',
                        description: 'Older projects 2',
                        caption: 'Graphic Design',
                        onClick: () => openModal(
                            <img className={"modal-image-scrollable"}
                                src={"/old_project_2.png"}
                                alt={"Could not load image"}/>,
                            {
                                transparentBackground: true,
                            }
                        )
                    }
                ]}/>
            </div>
        </section>
        <section className="home-page-bottom">
            <h1 className="home-page-call-to-action">
                Let's build
                <span className="home-page-photo"/>
                <span
                    className="alt">something extraordinary!</span>
            </h1>
        </section>
    </div>
}

export default HomePage;