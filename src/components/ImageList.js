function ImageList({images}) {
    const responsiveImageListFlex = (container) => {
        let hasWrapped = false;
        const flexContainer = document.querySelector(container);
        const lastItem = flexContainer.lastElementChild;
        if (lastItem && flexContainer) {
            hasWrapped = lastItem.offsetTop > flexContainer.offsetTop;
        }

        if (hasWrapped) {
            flexContainer.style.justifyContent = 'flex-start';
        } else {
            flexContainer.style.justifyContent = 'space-between';
        }
    }

    const imageLoaded = () => {
        responsiveImageListFlex('.image-list')
    }

    window.addEventListener(
        'resize',
        () => responsiveImageListFlex('.image-list')
    );

    return <div
        className="image-list">
        {images.map(image => (
            <div className="image-list-image-container"
                 style={{
                     height: '45vh',
                     minHeight: '300px',
                     maxHeight: '600px',
                     maxWidth: '100%',
                 }}>
                <img src={image.path}
                     alt={image.description}
                     onLoad={imageLoaded}
                />
            </div>
        ))
        }
    </div>
}

export default ImageList;