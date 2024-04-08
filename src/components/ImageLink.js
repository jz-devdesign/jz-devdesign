import "../style/components/ImageLink.scss";

function ImageLink({ img, url, alt = "", title = "" }) {
  return (
    <a className="image-link" href={url}>
      <img src={img} alt={alt} />
      <span className="image-link-title">{title}</span>
    </a>
  );
}

export default ImageLink;
