import "../App.css";
export const ThumbnailCard = ({ img, alt, title, desc }) => {
  return (
    <div className="flex gap-4 rounded-3xl shadow-xl">
      <img src={img} alt={alt} className="rounded-3xl h-48"></img>
      <div className="flex-grow p-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="">{desc}</p>
      </div>
    </div>
  );
};

export const PosterCard = ({ img, alt, title, desc }) => {
  return (
    <div className="flex gap-4 rounded-3xl shadow-xl">
      <img src={img} alt={alt} className="rounded-3xl h-96"></img>
      <div className="flex-grow p-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="">{desc}</p>
      </div>
    </div>
  );
};
