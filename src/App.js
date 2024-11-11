import "./App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Thumbnails from "./data/thumbnails.json";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import { ThumbnailCard, PosterCard } from "./components/Cards";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div className="App">
      <Header />
      <Slider {...settings}>
        {Thumbnails.map((thumbnail) => {
          return (
            <ThumbnailCard
              key={thumbnail.id}
              url={process.env.PUBLIC_URL + thumbnail.url}
              title={thumbnail.title}
              alt={thumbnail.alt}
              desc={thumbnail.desc}
            />
          );
        })}
      </Slider>
      <Footer />
    </div>
  );
}

export default App;
