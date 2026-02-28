import { Thumbnails, Posters, Logos, Links, Icons, Websites } from "data";
import {
  Header,
  Footer,
  About,
  Arrows,
  WideCarousel,
  TallCarousel,
  Projects,
} from "components";

function App() {
  return (
    <div className="flex flex-col justify-between ">
      <section className="min-h-screen flex flex-col">
        <Header />
        <About icons={Icons} />
        <Arrows />
      </section>
      <section
        className="flex flex-col justify-center items-center"
        id="projects"
      >
        <Projects projects={Websites} title="Websites" />
      </section>
      <section id="artwork">
        <TallCarousel cards={Posters} title="Posters" direction="forward" />
        <WideCarousel
          cards={Thumbnails}
          title="YouTube Thumbnails"
          direction="backward"
        />
        <WideCarousel cards={Logos} title="Logos" direction="forward" />
      </section>
      <h1 className="flex text-center justify-center text-2xl font-bold rounded-lg p-2 text-primary">
        Websites, videos, job and volunteer experience,
        <br />
        and other projects will be added soon...
      </h1>

      <Footer links={Links} />
    </div>
  );
}

export default App;
