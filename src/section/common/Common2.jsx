import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SmallCard from "../../components/cards/smallcard/SmallCard";
import Button from "../../constants/Button";

const Common2 = () => {
  const { value } = useParams();
  const [combinedData, setCombinedData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let yogaUrl, exerciseUrl;

        if (value === "easy" || value === "medium" || value === "hard") {
          yogaUrl = `http://localhost:8000/api/v1/yoga/level/${value}`;
          exerciseUrl = null; // No exerciseUrl for these cases
        } else {
          yogaUrl = `http://localhost:8000/api/v1/yoga/aot/${value}`;
          exerciseUrl = `http://localhost:8000/api/v1/exercises/aot/${value}`;
        }

        // Fetch data from yoga URL
        const yogaResponse = await axios.get(yogaUrl);
        const yogaData = yogaResponse.data.data || [];

        let exerciseData = [];
        if (exerciseUrl) {
          // Fetch data from exercise URL
          const exerciseResponse = await axios.get(exerciseUrl);
          exerciseData = exerciseResponse.data.data || [];
        }

        // Combine data from both sources
        const combinedData = [...yogaData, ...exerciseData];
        setCombinedData(combinedData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data");
      }
    };

    fetchData();
  }, [value]);

  return (
    <div className="flex flex-col items-center p-4 md:p-6 lg:p-8">
      {error && <p className="text-red-500">{error}</p>}
      {combinedData.length > 0 ? (
        <div className="flex flex-col sm:gap-3 md:gap-5 w-full">
          {combinedData.map((item, index) => (
            <SmallCard
              key={index}
              data={item}
              name={item.name}
              img={item.yogaImage || item.exerciseImage}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-4">No data available for this {value}</p>
      )}
      <div className="mt-6 w-full flex justify-center">
        <Button data={combinedData} />
      </div>
    </div>
  );
};

export default Common2;