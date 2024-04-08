import "../../style/components/pages/HomePage.scss";
import ImageLink from "../ImageLink";

function HomePage() {
  return (
    <div className="home-page">
      <section className="home-page-header">
        <div className="home-page-header-content">
          <a
            href="mailto: jinping4038@gmail.com"
            className="home-page-contact-button"
          >
            <span className="home-page-contact-button-decorator"></span>
            <span className="home-page-contact-button-text">Get in touch</span>
          </a>
          <p className="home-page-header-text">
            I'm a product designer at the intersection of creativity and
            practicality. Driven by an unending quest to shape meaningful
            experiences.
          </p>
          <ul className="home-page-icon-list">
            <li>
              <a
                className="home-page-icon-container"
                href="https://www.linkedin.com/in/jinping-zhang-66887924b/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/icons/linkedin.svg" alt="linkedin" />
              </a>
            </li>
            <li>
              <a
                className="home-page-icon-container"
                href="https://jinpingdezuopin.zcool.com.cn/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/icons/zk.svg" alt="zk" />
              </a>
            </li>
            <li>
              <a
                className="home-page-icon-container"
                href="https://github.com/Jinping4038"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/icons/github.svg" alt="github" />
              </a>
            </li>
            <li>
              <a
                className="home-page-icon-container"
                href="https://dribbble.com/jinping4038"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/icons/dribbble.svg" alt="dribbble" />
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="home-page-projects">
        <h1 className="title">Selected Work</h1>
        <div className="grid">
          <ImageLink
            img={"/projects/thumbnails/real-estate.png"}
            title="App for Real Estate Agents"
          ></ImageLink>
          <ImageLink
            img={"/projects/thumbnails/dr-lambda.png"}
            title="Generative AI Productivity Tool"
          ></ImageLink>
          <ImageLink
            img={"/projects/thumbnails/illustration-design.png"}
            title="Illustration Design"
          ></ImageLink>
        </div>
      </section>

      <section className="home-page-bottom">
        <h1 className="home-page-bottom-text">
          Let's build something extraordinary!
        </h1>
      </section>
    </div>
  );
}

export default HomePage;
