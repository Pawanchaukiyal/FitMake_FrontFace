import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "../../constants/Button";
import SmallCard from "../../components/cards/smallcard/SmallCard";
import { Server } from "../../constants/config";
import Loader from "../../components/loader/Loader";

const CommonUnifiedAot = () => {
  const { yogaaot, exerciseaot } = useParams();
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state added
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = "";

        // Determine which URL to use based on the presence of yogaaot or exerciseaot
        if (yogaaot) {
          url = `${Server}/api/v1/yoga/yogaaot/${yogaaot}`;
        } else if (exerciseaot) {
          url = `${Server}/api/v1/exercises/exerciseaot/${exerciseaot}`;
        }

        const response = await axios.get(url);
        if (response.data && Array.isArray(response.data.data)) {
          setFilteredData(response.data.data);
        } else {
          setError("Data format is incorrect");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data");
      } finally {
        setLoading(false); // Stop loading after data is fetched
      }
    };

    fetchData();
  }, [yogaaot, exerciseaot]);

  return (
    <div className="flex flex-col items-center p-4 md:p-6 lg:p-8">
      {error && <p className="text-red-500">{error}</p>}
      {loading ? (
        <Loader /> // Display loader while data is being fetched
      ) : filteredData.length > 0 ? (
        <div className="flex flex-col sm:gap-3 md:gap-5 w-full">
          {filteredData.map((item, index) => (
            <SmallCard
              key={index}
              data={{
                img: yogaaot ? item.yogaImage : item.exerciseImage,
                name: item.name,
                level: item.level,
                // Add other properties if needed
              }}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-4">
          No data available for this {yogaaot || exerciseaot}
        </p>
      )}
      <div className="mt-6 w-full flex justify-center">
        <Button data={filteredData} />
      </div>
    </div>
  );
};

export default CommonUnifiedAot;
