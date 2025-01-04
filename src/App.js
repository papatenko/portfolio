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
        <TallCarousel cards={Posters} title="My Posters" direction="forward" />
        <WideCarousel
          cards={Thumbnails}
          title="My YouTube Thumbnails"
          direction="backward"
        />
        <WideCarousel cards={Logos} title="My Logos" direction="forward" />
      </section>
      <section className="md:min-h-screen"></section>
      <Footer links={Links} />
    </div>
  );
}

export default App;
