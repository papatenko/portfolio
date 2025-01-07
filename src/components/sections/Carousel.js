import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import TallCard from "components/ui/TallCard";
import WideCard from "components/ui/WideCard";

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
