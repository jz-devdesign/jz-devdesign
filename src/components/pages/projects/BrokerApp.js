import "../../../style/components/pages/projects/project.scss";
import "../../../style/components/pages/projects/BrokerApp.scss";
import FloatingTableOfContents from "../../FloatingTableOfContents";

function BrokerApp() {
  return (
    <div className="project brokerapp">
      <FloatingTableOfContents
        sections={[
          {
            title: "Top of Page",
            id: "top-of-page",
          },
          {
            title: "What's the Product?",
            id: "whats-the-product",
          },
          {
            title: "What the Broker Says",
            id: "what-the-broker-says",
          },
          {
            title: "Feature Ideation",
            id: "feature-ideation",
          },
          {
            title: "Design Details",
            id: "design-details",
          },
          {
            title: "Second Stage",
            id: "second-stage",
          },
          {
            title: "Design Iteration",
            id: "design-iteration",
          },
          {
            title: "Impact",
            id: "impact",
          },
        ]}
      />
      <div className="top-of-page" id="top-of-page">
        <a className="back-button" href="/">
          &larr; back
        </a>
      </div>
      <div className="project-img-container header">
        <img src="/projects/brokerapp/images/100.png" alt="" />
      </div>
      <div className="project-img-container spacing--mid">
        <img
          src="/projects/brokerapp/images/200.png"
          alt=""
          style={{ width: "44.66%" }}
        />
      </div>
      <div
        className="project-img-container spacing--small"
        id="whats-the-product"
      >
        <img src="/projects/brokerapp/images/300.png" alt="" />
      </div>
      <div className="project-img-container spacing--small">
        <img src="/projects/brokerapp/images/400.png" alt="" />
      </div>
      <div className="project-img-container spacing--large">
        <img
          src="/projects/brokerapp/images/500.png"
          alt=""
          style={{ width: "45.11%", marginLeft: "auto" }}
        />
      </div>
      <div
        className="project-img-container spacing--small"
        id="what-the-broker-says"
      >
        <img src="/projects/brokerapp/images/600.png" alt="" />
      </div>
      <div className="project-img-container spacing--large">
        <img src="/projects/brokerapp/images/700.png" alt="" />
      </div>
      <div
        className="project-img-container spacing--large"
        id="feature-ideation"
      >
        <img
          src="/projects/brokerapp/images/800.png"
          alt=""
          style={{ width: "44.89%" }}
        />
      </div>
      <div className="project-img-container spacing--small">
        <img src="/projects/brokerapp/images/900.png" alt="" />
      </div>
      <div className="project-img-container spacing--large">
        <img src="/projects/brokerapp/images/1000.png" alt="" />
      </div>
      <div className="project-img-container spacing--large" id="design-details">
        <img
          src="/projects/brokerapp/images/1100.png"
          alt=""
          style={{ width: "44.77%" }}
        />
      </div>
      <div className="project-img-container spacing--xl">
        <img src="/projects/brokerapp/images/1300.png" alt="" />
      </div>
      <div className="project-img-container spacing--xl">
        <img src="/projects/brokerapp/images/1400.png" alt="" />
      </div>
      <div className="project-img-container spacing--xl">
        <img src="/projects/brokerapp/images/1500.png" alt="" />
      </div>
      <div className="project-img-container spacing--large">
        <img src="/projects/brokerapp/images/1600.png" alt="" />
      </div>
      <div className="project-img-container spacing--xl">
        <img src="/projects/brokerapp/images/1700.png" alt="" />
      </div>
      <div className="project-img-container spacing--small" id="second-stage">
        <img src="/projects/brokerapp/images/1800.png" alt="" />
      </div>
      <div className="project-img-container spacing--small">
        <img src="/projects/brokerapp/images/1900.png" alt="" />
      </div>
      <div className="project-img-container spacing--xl">
        <img src="/projects/brokerapp/images/2000.png" alt="" />
      </div>
      <div className="project-img-container spacing--small">
        <img src="/projects/brokerapp/images/2100.png" alt="" />
      </div>
      <div className="project-img-container full-size-image spacing--mid">
        <img src="/projects/brokerapp/images/2200.png" alt="" />
      </div>
      <div className="project-img-container spacing--small">
        <img
          src="/projects/brokerapp/images/2300.png"
          alt=""
          style={{ width: "45%", marginLeft: "auto" }}
        />
      </div>
      <div className="project-img-container full-size-image spacing--mid">
        <img src="/projects/brokerapp/images/2400.png" alt="" />
      </div>
      <div className="project-img-container spacing--small">
        <img src="/projects/brokerapp/images/2500.png" alt="" />
      </div>
      <div className="project-img-container spacing--large">
        <img src="/projects/brokerapp/images/2600.png" alt="" />
      </div>
      <div
        className="project-img-container spacing--small"
        id="design-iteration"
      >
        <img src="/projects/brokerapp/images/2700.png" alt="" />
      </div>
      <div className="project-img-container spacing--mid">
        <img src="/projects/brokerapp/images/2800.png" alt="" />
      </div>
      <div className="project-img-container spacing--large">
        <img src="/projects/brokerapp/images/2900.png" alt="" />
      </div>
      <div className="project-img-container spacing--large">
        <img src="/projects/brokerapp/images/3000.png" alt="" />
      </div>
      <div className="project-img-container spacing--large" id="impact">
        <img src="/projects/brokerapp/images/3100.png" alt="" />
      </div>
      <div className="project-img-container spacing--small">
        <img src="/projects/brokerapp/images/3200.png" alt="" />
      </div>
      <div className="project-img-container spacing--small">
        <img
          src="/projects/brokerapp/images/3300.png"
          alt=""
          style={{ width: "44.77%" }}
        />
      </div>
      <div className="project-img-container spacing--large">
        <img
          src="/projects/brokerapp/images/3400.png"
          alt=""
          style={{ width: "44.77%" }}
        />
      </div>
    </div>
  );
}

export default BrokerApp;
