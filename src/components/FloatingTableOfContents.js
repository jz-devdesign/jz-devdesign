import {useEffect, useRef, useState} from "react";
import "../style/FloatingTableOfContent.css"

const FloatingTableOfContents = ({content}) => {

    const [selectedSection, setSelectedSection] = useState(content.sections[0])
    const ref = useRef(null);
    const ulRef = useRef(null);

    function scrollToId(event, id) {
        event.preventDefault();

        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    }

    useEffect(() => {
        const listener = () => {
            let currentSection = '';

            for (const sect of content.sections) {
                const section = document.getElementById(sect.id);
                const rect = section.getBoundingClientRect();

                if (rect.top <= 50) {
                    currentSection = sect;
                }
            }

            if (currentSection) {
                setSelectedSection(currentSection)
            }

            const stickyElement = ref.current;
            const windowHeight = window.innerHeight;
            const elementTop = stickyElement?.getBoundingClientRect().top;

            if (stickyElement === null) return;

            let opacity = 0.5;
            if (elementTop < windowHeight) {
                opacity = 1 - (
                    elementTop
                ) / (
                    elementTop + window.scrollY
                );
            }

            stickyElement.style.opacity = '' + opacity;
        }

        window.addEventListener('scroll', listener);

        return () => {
            window.removeEventListener('scroll', listener);
        }
    }, []);

    const toggleMenu = () => {
        if (!ulRef.current) return;
        if (ulRef.current.classList.contains("hidden")) {
            ulRef.current.classList.remove("hidden");
        } else {
            ulRef.current.classList.add("hidden");
        }
    }

    return <div className={"floating-table-of-contents-container"}>
        <div className={"floating-table-of-contents"} ref={ref}>
            <span className={"menu-toggle"} onClick={toggleMenu}>Jump to</span>
            <ul className={"hidden"} ref={ulRef}>
                {content.sections.map((section, i) => (
                    <li key={i} className={'content-section ' + (
                        selectedSection?.id === section.id ? 'selected' : ''
                    )}
                        onClick={(e) => scrollToId(e, section.id)}>
                        <span>{section.title}</span>
                        <span className={"circle " + (
                            selectedSection?.id === section.id ? 'selected' : ''
                        )}/>
                    </li>
                ))}
            </ul>
        </div>
    </div>
}

export default FloatingTableOfContents;