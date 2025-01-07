import Text from "components/ui/Text"

function TallCard({ url, alt, title, year, desc }) {
  return (
    <div className="embla__slide flex flex-col md:flex-row flex-0 max-w-md md:w-full sm:w-48 p-2">
      <img src={url} alt={alt} className="rounded-md md:h-72 "></img>
      <Text title={title} year={year} desc={desc} />
    </div>
  );
};

export default TallCard;
