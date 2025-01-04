function About() {
  return (
    <div>
      <div className="flex md:min-h-screen justify-center items-center ">
        <div className="bg-secondary/25 rounded-lg flex gap-4 p-4 md:gap-12 md:p-12 items-center">
          <img
            className="hidden md:block md:h-48 lg:h-72"
            src={process.env.PUBLIC_URL + "/img/icons/nft_icon.png"}
            alt="papatenko-icon"
          ></img>
          <h1 className="text-paragraph font-bold text-2xl md:text-4xl lg:text-6xl ">
            Hello, I'm{" "}
            <span className="text-background bg-accent md:p-2 lg:p-4 rounded-l md:rounded-xl lg:rounded-2xl">
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
    </div>
  );
}
// NOTE: Will add Collage and Text when ready

/* function Collage() {
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
} */

// function Text({ text }) {
//   return (
//     <h1 className="text-paragraph absolute font-bold text-2xl md:text-6xl">
//       {text}
//     </h1>
//   );
// }

export default About;
