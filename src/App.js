import "./App.css";
import Thumbnails from "./data/thumbnails.json";
import Posters from "./data/posters.json";
import Logos from "./data/logos.json";
import Links from "./data/links.json";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import About from "./components/About.js";
import { WideCarousel, TallCarousel } from "./components/Carousel";

function App() {
  return (
    <div className="flex flex-col justify-between ">
      <Header />
      <section className="md:min-h-screen">
        <About />
      </section>
      <section className="md:min-h-screen">
        <TallCarousel cards={Posters} title="Posters" direction="forward" />
        <WideCarousel cards={Thumbnails} title="YouTube Thumbnails" direction="backward" />
        <WideCarousel cards={Logos} title="Logos" direction="forward" />
      </section>
      <Footer links={Links} />
    </div>
  );
}

export default App;
