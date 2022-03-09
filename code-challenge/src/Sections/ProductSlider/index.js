import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import "./styles.scss";

import ProductCard from "../../Snippets/ProductCard";

function ProductSlider(props) {
  return (
    <section class="product-slider">
      <h2 className="title">{props.productSlider.title}</h2>
      <Splide
        options={{
          perPage: 4,
          arrows: true,
          pagination: false,
          rewind: true,
          breakpoints: {
            750: {
              perPage: 2,
            },
          },
        }}
      >
        {props.productSlider.products &&
          props.productSlider.products.map((product) => (
            <SplideSlide>
              <ProductCard product={product} />
            </SplideSlide>
          ))}
      </Splide>
    </section>
  );
}

export default ProductSlider;
