import "../style/TableOfContents.css"

// sections: {title: string, id: string}[]
const TableOfContents = ({content}) => {

    function scrollToId(event, id) {
        event.preventDefault();

        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    }

    return <ul className={'table-of-contents'}>
        {content.sections.map((section, i) => <li key={i}>
            <span className={'content-link'} onClick={(e) => scrollToId(
                e,
                section.id
            )}>{section.title}</span>
        </li>)}
    </ul>
}

export default TableOfContents;