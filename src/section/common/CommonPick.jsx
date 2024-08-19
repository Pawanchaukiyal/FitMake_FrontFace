import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SmallCard from "../../components/cards/smallcard/SmallCard";
import Button from "../../constants/Button";
import { Server } from "../../constants/config";
import Loader from "../../components/loader/Loader"; // Import the Loader component

const CommonPick = () => {
  const { value } = useParams();
  const [combinedData, setCombinedData] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let yogaUrl = `${Server}/api/v1/yoga/yogaaot/${value}`;
        let exerciseUrl = `${Server}/api/v1/exercises/exerciseaot/${value}`;

        // Fetch yoga data
        const yogaResponse = await axios.get(yogaUrl);
        const yogaData = yogaResponse.data.data || [];

        // Fetch exercise data
        const exerciseResponse = await axios.get(exerciseUrl);
        const exerciseData = exerciseResponse.data.data || [];

        // Combine data from both sources
        const combinedData = [...yogaData, ...exerciseData];
        setCombinedData(combinedData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data");
      } finally {
        setLoading(false); // Stop loading after data is fetched
      }
    };

    fetchData();
  }, [value]);

  return (
    <div className="flex flex-col items-center p-4 md:p-6 lg:p-8">
      {error && <p className="text-red-500">{error}</p>}
      {loading ? (
        <Loader /> // Show loader while data is being fetched
      ) : combinedData.length > 0 ? (
        <div className="flex flex-col sm:gap-3 md:gap-5 w-full">
          {combinedData.map((item, index) => (
            <SmallCard
              key={index}
              data={{
                img: item.yogaImage || item.exerciseImage,
                name: item.name,
                // level: item.level, // Add any other relevant properties here if needed
              }}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-4">
          No data available for this {value}
        </p>
      )}
      <div className="mt-6 w-full flex justify-center">
        <Button data={combinedData} />
      </div>
    </div>
  );
};

export default CommonPick;
