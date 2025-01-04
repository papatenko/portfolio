function Text({ title, year, desc }) {
  return (
    <div className="flex-grow p-2">
      <h1 className="text-2xl font-bold bg-secondary/25 rounded-lg p-2 text-paragraph">
        {title} ({year})
      </h1>
      <p className="p-2 text-paragraph">{desc}</p>
    </div>
  );
};
export default Text
