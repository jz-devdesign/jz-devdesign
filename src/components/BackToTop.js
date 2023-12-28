const BackToTop = () => {

    function scrollToId(event, id) {
        event.preventDefault();

        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    }

    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        width: 'fit-content',
        margin: 'auto',
        cursor: 'pointer',
    }}
        onClick={(e) => scrollToId(e, 'header')}>
        <img style={{width: '20px'}}
            src={'/icons/up_arrow.svg'}
            alt={'back to top'}/>
        <span>Back To Top</span>
    </div>
}

export default BackToTop;