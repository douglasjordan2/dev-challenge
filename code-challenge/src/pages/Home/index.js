import Hero from "../../Sections/Hero";
import CollectionList from "../../Sections/CollectionList";
import ProductSlider from "../../Sections/ProductSlider";

import {
  heroSlideshow,
  collectionList,
  productSlider,
  imageWithText,
} from "./data";

function Home(props) {
  return (
    <main>
      <Hero slides={heroSlideshow} under_header={true} />
      <CollectionList collections={collectionList} />
      <ProductSlider productSlider={productSlider} />
      <Hero hero={imageWithText} isMobile={props.isMobile} />
    </main>
  );
}

export default Home;
