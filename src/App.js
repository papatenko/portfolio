import "./App.css";
import Thumbnails from "./data/thumbnails.json";
import Posters from "./data/posters.json";
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
      <section className="">
        <TallCarousel posters={Posters} />
        <WideCarousel thumbnails={Thumbnails} />
      </section>
      <Footer links={Links} />
    </div>
  );
}

export default App;
