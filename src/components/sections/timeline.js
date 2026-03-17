import { Chrono } from "react-chrono";

export const lightTheme = {
  primary: "#293161",
  secondary: "#7a89dc",
  cardBgColor: "#e5e6f0",
  cardTitleColor: "#101114",
  titleColor: "#293161",
  titleColorActive: "#7a89dc",
};

export const darkTheme = {
  primary: "#9ea6d6",
  secondary: "#9ea6d6",
  cardBgColor: "#0f101a",
  cardTitleColor: "#ebecef",
  titleColor: "#9ea6d6",
  titleColorActive: "#0f101a",
};

const VerticalTimeline = ({ experience, title }) => {
  return (
    <div className="max-w-7xl">
      <h1 className="flex justify-center text-2xl font-bold rounded-lg p-2 text-primary">
        {title}
      </h1>
      <Chrono
        items={experience}
        mode="VERTICAL_ALTERNATING"
        disableToolbar={true}
        theme={darkTheme}
        darkMode={{ enabled: true, showToggle: true }}
        layout={{ itemWidth: 150 }}
      />
    </div>
  );
};

export default VerticalTimeline;
