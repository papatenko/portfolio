import { motion } from 'motion/react'
import Text from "components/ui/text"

function WideCard({ url, alt, title, year, desc, link }) {
  const renderLink = () => {
    return (
      <a href={link}>
        <motion.img
          src={url}
          alt={alt}
          className="rounded-md md:h-48 w-auto m-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        ></motion.img>
      </a>
    )
  }
  const renderThumbnail = () => {
    return (
      <img
        src={url}
        alt={alt}
        className="rounded-md md:h-48 w-auto m-auto"
      ></img>
    )
  }
  return (
    <div className="embla__slide flex-0 max-w-sm p-2 md:w-96 sm:w-48 ">
      {link ? renderLink() : renderThumbnail()}
      <Text title={title} year={year} desc={desc} />
    </div>
  );
};

export default WideCard
