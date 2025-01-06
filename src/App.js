import "./App.css";
import Thumbnails from "./data/thumbnails.json";
import Posters from "./data/posters.json";
import Logos from "./data/logos.json";
import Links from "./data/links.json";
import Icons from "./data/icons.json";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import About from "./components/About.js";
import Arrows from "./components/Arrows";
import { WideCarousel, TallCarousel } from "./components/Carousel";

function App() {
  return (
    <div className="flex flex-col justify-between ">
      <section className="min-h-screen flex flex-col">
        <Header />
        <About icons={Icons} />
        <Arrows />
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
      <Footer links={Links} />
    </div>
  );
}


export default App;
