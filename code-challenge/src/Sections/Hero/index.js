import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import "./styles.scss";

function Hero(props) {
  let heroSrc;
  if (props.hero) {
    if (props.isMobile) {
      heroSrc = props.hero.mobile_src;
    } else {
      heroSrc = props.hero.desktop_src;
    }
  }

  return (
    <section>
      {props.slides && props.slides.length > 1 ? (
        <Splide
          options={{
            rewind: true,
            arrows: false,
            autoplay: true,
            interval: 4000,
          }}
          className={
            props.under_header ? "slideshow" : "slideshow slideshow--margin-top"
          }
        >
          {props.slides.map((slide, index) => (
            <SplideSlide key={slide.src} className="slide">
              <div className="slide__image-wrapper">
                <div
                  className="image"
                  style={{
                    backgroundImage: "url(" + slide.src + ")",
                  }}
                ></div>
              </div>
              <div
                className={
                  index === 0
                    ? "slide__info-wrapper green-text"
                    : "slide__info-wrapper"
                }
              >
                <h2 className="title">{slide.title}</h2>
                <p className="description">{slide.description}</p>
                <button className="button button--primary">SHOP NOW</button>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      ) : (
        <div
          className={
            props.under_header
              ? "banner-container"
              : "banner-container banner-container--margin-top"
          }
        >
          <div className="banner">
            <div className="banner__image-wrapper">
              <div
                className="image"
                style={{
                  backgroundImage: "url(" + heroSrc + ")",
                }}
              ></div>
            </div>
            <div
              className={
                props.isMobile
                  ? "banner__info-wrapper green-text"
                  : "banner__info-wrapper banner__info-wrapper--info-right white-text"
              }
            >
              <h2 className="title">{props.hero.title}</h2>
              <p className="description">{props.hero.description}</p>
              <button
                className={
                  props.isMobile
                    ? "button button--primary"
                    : "button button--secondary"
                }
              >
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;
