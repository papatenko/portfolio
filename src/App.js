import "./App.css";

import Thumbnails from "./data/thumbnails.json";
import Posters from "./data/posters.json";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import { ThumbnailCarousel, PosterCarousel } from "./components/Carousel";


function App() {

  return (
    <div className="App">
      <Header />
      <ThumbnailCarousel thumbnails={Thumbnails} />
      <PosterCarousel posters={Posters} />
      <Footer />
    </div>
  );
}

export default App;
