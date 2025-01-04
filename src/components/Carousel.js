import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Text from "./Text";

export const WideCarousel = ({ cards, title, direction }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ direction: direction }),
  ]);

  return (
    <section className="embla">
      <h1 className="flex justify-center text-2xl font-bold rounded-lg p-2 text-primary">
        {title}
      </h1>
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex gap-8 px-8">
          {cards.map((card, index) => {
            return (
              <WideCard
                key={index}
                url={process.env.PUBLIC_URL + card.url}
                title={card.title}
                year={card.year}
                alt={card.alt}
                desc={card.desc}
                link={card.link}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const TallCarousel = ({ cards, title, direction }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [AutoScroll(
    { direction: direction }
  )]);

  return (
    <section className="embla">
      <h1 className="flex justify-center text-2xl font-bold rounded-lg p-2 text-primary">
        {title}
      </h1>
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex gap-8 px-8">
          {cards.map((card, index) => {
            return (
              <TallCard
                key={index}
                url={process.env.PUBLIC_URL + card.url}
                title={card.title}
                year={card.year}
                alt={card.alt}
                desc={card.desc}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

const WideCard = ({ url, alt, title, year, desc, link }) => {
  return (
    <div className="embla__slide flex-0 max-w-sm p-2 md:w-96 sm:w-48 ">
      <a href={link}>
        <img src={url} alt={alt} className="rounded-md h-48 w-auto m-auto"></img>
      </a>
      <Text title={title} year={year} desc={desc} />
    </div>
  );
};

const TallCard = ({ url, alt, title, year, desc }) => {
  return (
    <div className="embla__slide flex flex-col md:flex-row flex-0 max-w-md md:w-full sm:w-48 p-2">
      <img src={url} alt={alt} className="rounded-md md:h-72 "></img>
      <Text title={title} year={year} desc={desc} />
    </div>
  );
};
