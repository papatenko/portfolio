import "./App.css";
import { Posters, Thumbnails } from "./components/Images";
import DropdownMenu from "./components/DropdownMenu";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ThumbnailCard, PosterCard } from "./components/Cards";

function App() {
  return (
    <div className="App">
      <Header />
      <ThumbnailCollection />
      <Footer />
    </div>
  );
}

function ThumbnailCollection() {
  return (
    <div className="">
      <ThumbnailCard
        img={Thumbnails.dauntless}
        alt="dauntless_thumbnail"
        title="Dauntless Thumbnail"
        desc="I don't have the name of the youtube channel I made this for. All I know is that I made it around the time Dauntless (2019) was released"
      />
      <PosterCard
        img={Posters.developer_roadmap}
        alt="game_workshop"
        title="Game Workshop Poster"
        desc="I don't have the name of the youtube channel I made this for. All I know is that I made it around the time Dauntless (2019) was released"
      />
    </div>
  );
}

export default App;
