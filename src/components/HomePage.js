import "../style/HomePage.css"
import PreviewGrid from "./PreviewGrid";

function HomePage() {
    return <div className="home-page">
        <section className="home-page-header">
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
                            className="alt home-page-title-face home-page-title-face-front cube-effect-face cube-effect-front">Designer</span>
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
                    <p>... I'm a passionate designer who thrives on the dance
                        between creativity and functionality. <span
                            className="alt">With a boundless
                    curiosity to create meaningful experiences, I dive headfirst
                        into the field of product design</span>.</p>
                </div>
            </div>
        </section>
        <section className="home-page-project-previews">
            <PreviewGrid previews={
                [
                    {
                        path: 'home_page_1.png',
                        description: 'Project image 1',
                        link: '/#/project/broker-app',
                    },
                    {
                        path: 'home_page_2.png',
                        description: 'Project image 2',
                        link: '/#/project/dr-lambda',
                    },
                    {
                        path: 'home_page_3.png',
                        description: 'Project image 3',
                        link: '',
                    },
                    {
                        path: 'home_page_4.png',
                        description: 'Project image 4',
                        link: '',
                    },
                ]
            }/>
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