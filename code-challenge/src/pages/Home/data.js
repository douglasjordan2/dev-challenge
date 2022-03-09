import slideshow1 from "./assets/Slideshow/slideshow-1.png";
import slideshow2 from "./assets/Slideshow/slideshow-2.png";
import slideshow3 from "./assets/Slideshow/slideshow-3.png";

import accessories from "./assets/CollectionList/Accessories.png";
import mens from "./assets/CollectionList/Mens.png";
import womens from "./assets/CollectionList/Womens.png";

import prodimage1 from "./assets/ProductSlider/prodimage1.png";
import prodimage2 from "./assets/ProductSlider/prodimage2.png";
import prodimage3 from "./assets/ProductSlider/prodimage3.png";
import prodimage4 from "./assets/ProductSlider/prodimage4.png";

import hero from "./assets/Banner/Hero.png";
import heroMobile from "./assets/Banner/Hero-mobile.png";

const heroSlideshow = [
  {
    src: slideshow1,
    title: "Shop New Arrivals",
    description: "Our coolest new items are waiting for you!",
    link: "#",
  },
  {
    src: slideshow2,
    title: "Our Fave Tees",
    description: "Shop all of our favorites.",
    link: "#",
  },
  {
    src: slideshow3,
    title: "Shop New Arrivals",
    description: "Find the perfect shirt.",
    link: "#",
  },
];

const collectionList = [
  {
    src: womens,
    title: "Women's",
    link: "#",
  },
  {
    src: mens,
    title: "Men's",
    link: "#",
  },
  {
    src: accessories,
    title: "Accessories",
    link: "#",
  },
];

const productSlider = {
  title: "Shop New Arrivals",
  products: [
    {
      src: prodimage1,
      title: "Product Title",
      collection: "Women's",
      product_type: "t-shirt",
      price: "1999",
      link: "#",
    },
    {
      src: prodimage2,
      title: "Product Title",
      collection: "Women's",
      product_type: "t-shirt",
      price: "1999",
      link: "#",
    },
    {
      src: prodimage3,
      title: "Product Title",
      collection: "Women's",
      product_type: "t-shirt",
      price: "1999",
      link: "#",
    },
    {
      src: prodimage4,
      title: "Product Title",
      collection: "Women's",
      product_type: "t-shirt",
      price: "1999",
      link: "#",
    },
  ],
};

const imageWithText = {
  desktop_src: hero,
  mobile_src: heroMobile,
  title: "Our Favorite Tees",
  description: "Everyday tees you need!",
};

export { heroSlideshow, collectionList, productSlider, imageWithText };
