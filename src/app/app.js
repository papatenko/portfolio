import {
  Thumbnails,
  Posters,
  Logos,
  Links,
  Icons,
  Websites,
  Experience,
} from "data";
import {
  Header,
  Footer,
  About,
  Arrows,
  WideCarousel,
  TallCarousel,
  Projects,
  Timeline,
} from "components";

function App() {
  return (
    <div className="flex flex-col justify-between ">
      <section className="md:min-h-screen flex flex-col">
        <header className="fixed top-0 left-0 right-0 z-50">
          <Header />
        </header>
        <About icons={Icons} />
        <Arrows />
      </section>
      <section
        id="experience"
        className="flex flex-col justify-center items-center"
      >
        <Timeline experience={Experience} title="Experience" />
      </section>
      <section
        className="flex flex-col justify-center items-center"
        id="websites"
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
      <section id="contact">
        <Footer links={Links} title="Contact" />
      </section>
    </div>
  );
}

export default App;
