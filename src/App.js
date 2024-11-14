import "./App.css";
import Thumbnails from "./data/thumbnails.json";
import Posters from "./data/posters.json";
import Links from "./data/links.json";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import { ThumbnailCarousel, PosterCarousel } from "./components/Carousel";

function App() {
  return (
    <div className="dark flex flex-col justify-between min-h-screen">
      <Header links={Links} />
      <ThumbnailCarousel thumbnails={Thumbnails} />
      <PosterCarousel posters={Posters} />
      <Footer />
    </div>
  );
}

export default App;
