import { motion } from "motion/react";

// Stagger helper
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0, 0.7, 0.2, 1] },
});

function About({ icons }) {
  return (
    <div className="flex grow justify-center items-center px-6 py-24">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 max-w-5xl w-full">
        {/* ── 4. Professional Photo ── */}
        <motion.img
          className="rounded-full h-52 w-52 lg:h-64 lg:w-64 object-cover box-shadow flex-shrink-0"
          src={process.env.PUBLIC_URL + icons[0].url}
          alt={icons[0].name}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.3, ease: [0, 0.7, 0.2, 1] }}
        />

        {/* ── Right Column ── */}
        <div className="flex flex-col text-center lg:text-left gap-5 max-w-xl">
          {/* ── 2. Specific Headline ── */}
          <motion.h1
            className="text-paragraph font-bold text-3xl md:text-5xl leading-tight tracking-tight"
            {...fadeUp(0.45)}
          >
            Full-Stack Engineer,&nbsp;
            <span className="text-primary">UI/UX Designer</span>
            &nbsp;&amp;&nbsp;
            <span className="text-primary">Digital Artist</span>
          </motion.h1>

          {/* ── 3. Supporting Tagline ── */}
          <motion.p
            className="text-paragraph/70 text-base md:text-lg font-medium leading-relaxed"
            {...fadeUp(0.6)}
          >
            I build fast, accessible web apps — from Figma mockups to production
            deploys. 3+ years turning complex problems into clean, delightful
            interfaces. I love to code, design and create art.
          </motion.p>

          {/* ── 5. Call to Action ── */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mt-2"
            {...fadeUp(0.75)}
          >
            <a
              href="#websites"
              className="bg-primary text-background font-semibold px-6 py-3 rounded-xl box-shadow hover:opacity-90 transition-opacity text-sm md:text-base"
            >
              View My Websites
            </a>
            <a
              href="#contact"
              className="border-2 border-secondary/30 text-paragraph font-semibold px-6 py-3 rounded-xl hover:border-primary/60 transition-colors text-sm md:text-base"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
