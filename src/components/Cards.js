import "../App.css";
export const ThumbnailCard = ({ url, alt, title, desc }) => {
  return (
    <div className="max-w-sm md:w-full sm:w-48 shadow-xl">
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
    <div className="flex gap-4 rounded-3xl shadow-xl">
      <img src={url} alt={alt} className="rounded-3xl h-96"></img>
      <div className="flex-grow p-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="">{desc}</p>
      </div>
    </div>
  );
};
