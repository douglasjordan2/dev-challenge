import "./styles.scss";

function ProductCard(props) {
  const { src, title, collection, product_type, price, link } = props.product;

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(price / 100);

  return (
    <a className="product-card" href={link}>
      <img alt={title} className="product-card__image" src={src} />
      <div className="product-card__info">
        <span className="title">{title}</span>
        <span className="description">
          {collection} {product_type}
        </span>
        <span className="price">{formattedPrice}</span>
      </div>
    </a>
  );
}

export default ProductCard;
