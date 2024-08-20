import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SmallCard from "../../components/cards/smallcard/SmallCard";
import Button from "../../constants/Button";
import { Server } from "../../constants/config";
import Loader from "../../components/loader/Loader";

const CommonUnifiedLevel = () => {
  const { yogalevel, exerciselevel } = useParams();
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state added
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = "";

        // Determine which URL to use based on the presence of yogalevel or exerciselevel
        if (yogalevel) {
          url = `${Server}/api/v1/yoga/yogalevel/${yogalevel}`;
        } else if (exerciselevel) {
          url = `${Server}/api/v1/exercises/exerciselevel/${exerciselevel}`;
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
  }, [yogalevel, exerciselevel]);

  return (
    <div className="flex flex-col items-center p-4 md:p-6 lg:p-8">
      {loading ? (
        <>
          <Loader />
          <p className="text-center text-gray-600 mt-4">Data is loading...</p>
          <p className="text-center text-red-500 mt-2">
            If it takes time, please refresh the page.
          </p>
        </>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : filteredData.length > 0 ? (
        <div className="flex flex-col sm:gap-3 md:gap-5 w-full">
          {filteredData.map((item, index) => (
            <SmallCard
              key={index}
              data={{
                img: yogalevel ? item.yogaImage : item.exerciseImage,
                name: item.name,
                level: item.level,
                // Add other properties if needed
              }}
            />
          ))}
          <div className="mt-6 w-full flex justify-center">
            <Button data={filteredData} />
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-4">
          No data available for this {yogalevel || exerciselevel}
        </p>
      )}
    </div>
  );
};

export default CommonUnifiedLevel;
