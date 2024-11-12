import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export const ThumbnailCard = ({ url, alt, title, desc }) => {
  return (
    <div className="embla__slide flex-0 max-w-sm md:w-full sm:w-48 shadow-xl">
      <img src={url} alt={alt} className=""></img>
      <div className="flex-grow p-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="">{desc}</p>
      </div>
    </div>
  );
};

export const PosterCard = ({ url, alt, title, desc }) => {
  return (
    <div className="embla__slide flex flex-0 max-w-sm md:w-full sm:w-48 shadow-xl">
      <img src={url} alt={alt} className="h-72"></img>
      <div className="flex-grow p-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="">{desc}</p>
      </div>
    </div>
  );
};

export const ThumbnailCarousel = ({ thumbnails }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <section className="embla flex">
      <div className="embla__viewport flex" ref={emblaRef}>
        <div className="embla__container flex gap-8">
          {thumbnails.map((thumbnail) => {
            return (
              <ThumbnailCard
                key={thumbnail.id}
                url={process.env.PUBLIC_URL + thumbnail.url}
                title={thumbnail.title}
                alt={thumbnail.alt}
                desc={thumbnail.desc}
                className="embla__slide min-w-0 flex-0"
              />
            );
          })}
        </div>
      </div>
    </section>
  )
}

export const PosterCarousel = ({ posters }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla flex" ref={emblaRef}>
      <div className="embla__container flex gap-8">
        {posters.map((poster) => {
          return (
            <PosterCard
              key={poster.id}
              url={process.env.PUBLIC_URL + poster.url}
              title={poster.title}
              alt={poster.alt}
              desc={poster.desc}
            />
          );
        })}
      </div>
    </div>
  )
}
