function About() {
  return (
    <div>
      <div className="flex md:min-h-screen md:ml-20 items-center">
        <h1 className="text-paragraph font-bold text-2xl md:text-6xl">
          Hello, I'm{" "}
          <span className="text-background bg-accent p-4 rounded-2xl">
            Papatenko.
          </span>{" "}
          <br />
          <br />
          What do I do you ask? <br />
          <br />
          Well lemme show you...
        </h1>
      </div>
    </div>
  );
}
export default About;