import { Chrono } from "react-chrono";

const items = [
  {
    title: "January 2022",
    cardTitle: "1",
    cardSubtitle: "Event 1 Subtitle",
    cardDetailedText: "This is the first event on the timeline.",
  },
  {
    title: "February 2022",
    cardTitle: "2",
    cardSubtitle: "Event 2 Subtitle",
    cardDetailedText: "This is the second event on the timeline.",
  },
  {
    title: "March 2022",
    cardTitle: "3",
    cardSubtitle: "Event 3 Subtitle",
    cardDetailedText: "This is the third event on the timeline.",
  },
];

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

const VerticalTimeline = () => {
  return (
    <div className="max-w-7xl">
      <Chrono
        items={items}
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
