import { useEffect, useRef, useState } from "react";
import "../style/components/FloatingTableOfContents.scss";

const FloatingTableOfContents = ({ sections }) => {
  const [selectedSection, setSelectedSection] = useState(sections[0]);
  const ref = useRef(null);
  const ulRef = useRef(null);

  function scrollToId(event, id) {
    event.preventDefault();

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  useEffect(() => {
    const listener = () => {
      let currentSection = "";

      for (const sect of sections) {
        const section = document.getElementById(sect.id);
        const rect = section.getBoundingClientRect();

        if (rect.top <= 150) {
          currentSection = sect;
        }
      }

      if (currentSection) {
        setSelectedSection(currentSection);
      }
    };

    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, [sections]);

  return (
    <div className={"floating-table-of-contents-container"}>
      <div className={"floating-table-of-contents"} ref={ref}>
        <ul ref={ulRef}>
          {sections.map((section, i) => (
            <li
              key={i}
              className={
                "content-section " +
                (selectedSection?.id === section.id ? "selected" : "")
              }
              onClick={(e) => scrollToId(e, section.id)}
            >
              <span>{section.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FloatingTableOfContents;
