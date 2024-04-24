import "../../../style/components/pages/projects/project.scss";
import "../../../style/components/pages/projects/DrLambda.scss";
import FloatingTableOfContents from "../../FloatingTableOfContents";
import ImageScroller from "../../ImageScroller";

function DrLambda() {
  return (
    <div className="project drlambda">
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
            title: "Research",
            id: "research",
          },
          {
            title: "Design Details",
            id: "design-details",
          },
          {
            title: "Design System",
            id: "design-system",
          },
        ]}
      />
      <div className="top-of-page" id="top-of-page">
        <a className="back-button" href="/">
          &larr; back
        </a>
      </div>
      <div className="project-img-container header">
        <img src="/projects/drlambda/images/100.png" alt="" />
      </div>
      <div className="project-img-container spacing--mid">
        <img
          src="/projects/drlambda/images/200.png"
          alt=""
          style={{ width: "45.34%" }}
        />
      </div>
      <div
        className="project-img-container spacing--large"
        id="whats-the-product"
      >
        <img src="/projects/drlambda/images/300.png" alt="" />
      </div>
      <div className="project-img-container spacing--large">
        <img
          src="/projects/drlambda/images/400.png"
          alt=""
          style={{ width: "60.91%" }}
        />
      </div>
      <div className="project-img-container spacing--small" id="research">
        <img src="/projects/drlambda/images/500.png" alt="" />
      </div>
      <div className="project-img-container spacing--mid">
        <img src="/projects/drlambda/images/600.png" alt="" />
      </div>
      <div className="project-img-container spacing--large">
        <img src="/projects/drlambda/images/700.png" alt="" />
      </div>
      <div className="project-img-container spacing--small">
        <img src="/projects/drlambda/images/800.png" alt="" />
      </div>
      <div className="project-img-container spacing--small">
        <img src="/projects/drlambda/images/900.png" alt="" />
      </div>
      <div className="project-img-container spacing--large">
        <img
          src="/projects/drlambda/images/1000.png"
          alt=""
          style={{ width: "45.45%", marginLeft: "auto" }}
        />
      </div>
      <div className="project-img-container spacing--large">
        <img src="/projects/drlambda/images/1100.png" alt="" />
      </div>
      <div className="project-img-container">
        <img src="/projects/drlambda/images/1200.png" alt="" />
      </div>
      <a
        className="project-link spacing--large"
        href="https://www.figma.com/file/JRZAIPSQuCkEEInPpLwdXr/Untitled?type=design&node-id=0%3A11575&mode=design&t=NN5FVw1HHhHo7fWB-1"
        target="_blank"
        rel="noreferrer"
      >
        Click to view figma file &rarr;
      </a>
      <div className="project-img-container spacing--small" id="design-details">
        <img src="/projects/drlambda/images/1300.png" alt="" />
      </div>
      <div className="project-img-container">
        <img src="/projects/drlambda/images/1400.png" alt="" />
      </div>
      <div className="project-img-container spacing--mid">
        <img src="/projects/drlambda/images/1500.png" alt="" />
        <div className="drlambda-1500-nested-container">
          <ImageScroller
            images={[
              "/projects/drlambda/images/1500_1.png",
              "/projects/drlambda/images/1500_2.png",
            ]}
          />
        </div>
      </div>
      <div className="project-img-container spacing--small">
        <img
          src="/projects/drlambda/images/1600.png"
          alt=""
          style={{ width: "45.45%", marginLeft: "auto" }}
        />
      </div>
      <div className="project-img-container">
        <img src="/projects/drlambda/images/1700.png" alt="" />
      </div>
      <div className="project-img-container spacing--mid">
        <img src="/projects/drlambda/images/1800.png" alt="" />
      </div>
      <div className="project-img-container spacing--small">
        <img src="/projects/drlambda/images/1900.png" alt="" />
      </div>
      <div className="project-img-container">
        <img src="/projects/drlambda/images/2000.png" alt="" />
      </div>
      <div className="project-img-container spacing--mid">
        <img src="/projects/drlambda/images/2100.png" alt="" />
      </div>
      <div className="project-img-container spacing--small">
        <img src="/projects/drlambda/images/2200.png" alt="" />
      </div>
      <div className="project-img-container">
        <img src="/projects/drlambda/images/2300.png" alt="" />
      </div>
      <div className="project-img-container spacing--mid">
        <img src="/projects/drlambda/images/2400.png" alt="" />
      </div>
      <div className="project-img-container spacing--small">
        <img
          src="/projects/drlambda/images/2500.png"
          alt=""
          style={{ width: "45.23%", marginLeft: "auto" }}
        />
      </div>
      <div className="project-img-container">
        <img src="/projects/drlambda/images/2600.png" alt="" />
      </div>
      <div className="project-img-container spacing--mid">
        <img src="/projects/drlambda/images/2700.png" alt="" />
      </div>
      <div className="project-img-container spacing--small">
        <img src="/projects/drlambda/images/2800.png" alt="" />
      </div>
      <div className="project-img-container spacing--mid">
        <img src="/projects/drlambda/images/2900.png" alt="" />
      </div>
      <div className="project-img-container spacing--small">
        <img
          src="/projects/drlambda/images/3000.png"
          alt=""
          style={{ width: "45.23%", marginLeft: "auto" }}
        />
      </div>
      <div className="project-img-container spacing--large">
        <img src="/projects/drlambda/images/3100.png" alt="" />
      </div>
      <div className="project-img-container spacing--large">
        <img src="/projects/drlambda/images/3200.png" alt="" />
      </div>
      <div className="project-img-container spacing--xs" id="design-system">
        <img src="/projects/drlambda/images/3300.png" alt="" />
      </div>
      <div className="project-img-container spacing--xs">
        <img src="/projects/drlambda/images/3400.png" alt="" />
      </div>
      <div className="project-img-container spacing--large">
        <img src="/projects/drlambda/images/3500.png" alt="" />
      </div>
      <div className="project-img-container spacing--large">
        <img
          src="/projects/drlambda/images/3600.png"
          alt=""
          style={{ width: "54.20%" }}
        />
      </div>
    </div>
  );
}

export default DrLambda;
