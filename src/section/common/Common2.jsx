import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SmallCard from "../../components/cards/smallcard/SmallCard";
import Button from "../../constants/Button";

const Common2 = () => {
  const { aot } = useParams(); 
  const [filteredData, setFilteredData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Determine if the aot value is "easy", "medium", or "hard"
        const isLevel = ["easy", "medium", "hard"].includes(aot);
        const yogaEndpointSuffix = isLevel ? `level/${aot}` : `aot/${aot}`;
        
        // Fetch yoga and exercise data
        const [yogaResponse, exerciseResponse] = await Promise.all([
          axios.get(`http://localhost:8000/api/v1/yoga/${yogaEndpointSuffix}`),
          axios.get(`http://localhost:8000/api/v1/exercise/aot/${aot}`)
        ]);

        const yogaData = yogaResponse.data?.data || [];
        const exerciseData = exerciseResponse.data?.data || [];

        // Combine both data sets into one array
        setFilteredData([...yogaData, ...exerciseData]);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data");
      }
    };

    fetchData();
  }, [aot]);

  return (
    <div className="flex flex-col items-center p-4 md:p-6 lg:p-8">
      {error && <p className="text-red-500">{error}</p>}
      {filteredData.length > 0 ? (
        <div className="flex flex-col sm:gap-3 md:gap-5 w-full">
          {filteredData.map((item, index) => (
            <SmallCard key={index} data={item} name={item.name} img={item.yogaImage || item.exerciseImage} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-4">No data available for this {aot}</p>
      )}
      <div className="mt-6 w-full flex justify-center">
        <Button data={filteredData} />
      </div>
    </div>
  );
};

export default Common2;
