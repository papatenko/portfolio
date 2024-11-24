function About() {
  return (
    <div>
      <div className="flex md:min-h-screen md:ml-20 justify-center md:justify-between items-center">
        <h1 className="text-paragraph font-bold text-2xl md:text-6xl">
          Hello, I'm{" "}
          <span className="text-background bg-accent p-2 md:p-4 rounded-xl md:rounded-2xl">
            Papatenko.
          </span>{" "}
          <br />
          <br />
          What do I do you ask? <br />
          <br />
          Well lemme show you...
        </h1>
        <Collage />
      </div>
    </div>
  );
}

function Collage() {
  return (
    <div className="md:w-1/2 ">
      <h1 className="text-paragraph z-10 font-bold text-2xl md:text-6xl top-0">
        Something
      </h1>
      <Text text="Frontend" />
      <Text text="Video Editing" />
      <Text text="Digital Arts" />
      <Text text="Create Apps" />
      <Text text="Lead Teams" />
      <Text text="Create Websites" />
      <Text text="Create Films" />
    </div>
  );
}

function Text({ text }) {
  return (
    <h1 className="text-paragraph absolute font-bold text-2xl md:text-6xl">
      {text}
    </h1>
  );
}

export default About;
