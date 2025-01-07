import { Thumbnails, Posters, Logos, Links, Icons } from "data";
import { Header, Footer, About, Arrows, WideCarousel, TallCarousel } from "components";

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
