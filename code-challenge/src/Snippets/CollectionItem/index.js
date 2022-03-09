import "./styles.scss";

function CollectionItem(props) {
  const { collection, full_width } = props;
  const { src, title, link } = collection;

  return (
    <a
      href={link}
      className={
        full_width
          ? "collection-item collection-item--full-width"
          : "collection-item"
      }
    >
      <div
        className="collection-item__image"
        style={{
          backgroundImage: "url(" + src + ")",
        }}
        alt={title}
      />

      <div className="collection-item__btn">{title}</div>
    </a>
  );
}

export default CollectionItem;
