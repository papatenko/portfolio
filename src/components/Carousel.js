import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

export const ThumbnailCarousel = ({ thumbnails }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ direction: "backward" }),
  ]);

  return (
    <section className="embla">
      <h1 className="flex justify-center text-2xl font-bold rounded-lg p-2 text-primary">
        My YouTube Thumbnails
      </h1>
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex gap-8 px-8">
          {thumbnails.map((thumbnail) => {
            return (
              <ThumbnailCard
                key={thumbnail.id}
                url={process.env.PUBLIC_URL + thumbnail.url}
                title={thumbnail.title}
                year={thumbnail.year}
                alt={thumbnail.alt}
                desc={thumbnail.desc}
                link={thumbnail.link}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const PosterCarousel = ({ posters }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [AutoScroll()]);

  return (
    <section className="embla">
      <h1 className="flex justify-center text-2xl font-bold rounded-lg p-2 text-primary">
        My Posters
      </h1>
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex gap-8 px-8">
          {posters.map((poster) => {
            return (
              <PosterCard
                key={poster.id}
                url={process.env.PUBLIC_URL + poster.url}
                title={poster.title}
                year={poster.year}
                alt={poster.alt}
                desc={poster.desc}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Text = ({ title, year, desc }) => {
  return (
    <div className="flex-grow p-2">
      <h1 className="text-2xl font-bold bg-secondary/25 rounded-lg p-2 text-paragraph">
        {title} ({year})
      </h1>
      <p className="p-2 text-paragraph">{desc}</p>
    </div>
  );
};

const ThumbnailCard = ({ url, alt, title, year, desc, link }) => {
  return (
    <div className="embla__slide flex-0 max-w-sm md:w-full sm:w-48 p-2">
      <a href={link}>
        <img src={url} alt={alt} className="rounded-md"></img>
      </a>
      <Text title={title} year={year} desc={desc} />
    </div>
  );
};

const PosterCard = ({ url, alt, title, year, desc }) => {
  return (
    <div className="embla__slide flex flex-0 max-w-md md:w-full sm:w-48 p-2">
      <img src={url} alt={alt} className="rounded-md h-72"></img>
      <Text title={title} year={year} desc={desc} />
    </div>
  );
};
