import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SmallCard from "../../components/cards/smallcard/SmallCard";
import Button from "../../constants/Button";

const data = [
  {
    name: "Mountain Pose",
    level: "easy",
    aot: ["standing", "balance"],
    img: "https://th.bing.com/th?id=OIP.M-4qYeO_AFbQscgCBdDvKwHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    instructions:
      "Stand tall with feet together, shoulders relaxed, weight evenly distributed through your soles, arms at sides.",
  },
  {
    name: "Downward Dog",
    level: "easy",
    aot: ["standing", "inversion"],
    img: "https://th.bing.com/th?id=OIP.M-4qYeO_AFbQscgCBdDvKwHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    instructions:
      "Start on all fours with hands directly under shoulders, knees under hips. Walk hands a few inches forward, curl toes under and slowly press hips toward ceiling, bringing your body into an inverted V.",
  },
  {
    name: "Warrior I",
    level: "medium",
    aot: ["standing", "strength"],
    img: "https://th.bing.com/th?id=OIP.M-4qYeO_AFbQscgCBdDvKwHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    instructions:
      "From standing, step one foot back and rotate the back heel down. Bend the front knee over the ankle and raise arms overhead, palms touching.",
  },
  {
    name: "Triangle Pose",
    level: "medium",
    aot: ["standing", "stretch"],
    img: "https://th.bing.com/th?id=OIP.M-4qYeO_AFbQscgCBdDvKwHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    instructions:
      "Stand with feet about 3 feet apart, toes turned slightly inward. Extend arms out to the sides at shoulder height, then reach forward and lower your hand to your shin or the floor. Extend the other arm straight up.",
  },
  {
    name: "Crow Pose",
    level: "hard",
    aot: ["arm balance", "strength"],
    img: "https://th.bing.com/th?id=OIP.M-4qYeO_AFbQscgCBdDvKwHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    instructions:
      "Start in a squat with your knees wide and hands on the floor in front of you. Place your knees on the backs of your upper arms and slowly shift your weight onto your hands, lifting your feet off the ground.",
  },
];

const Common1 = () => {
  const { level } = useParams();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filtered = data.filter((item) => item.level === level);
    console.log(filtered);
    setFilteredData(filtered);
  }, [level]);

  return (
    <>
      {filteredData.length > 0 ? (
        filteredData.map((item, index) => (
          <SmallCard key={index} data={item} name={item.name} img={item.img} />
        ))
      ) : (
        <p>No data available for this level</p>
      )}
      <Button data={filteredData} />
    </>
  );
};

export default Common1;
