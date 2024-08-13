//  this commonunified handle both level of yoga and exercise.
// Take data from card1 and 

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SmallCard from "../../components/cards/smallcard/SmallCard";
import Button from "../../constants/Button";

const CommonUnifiedLevel = () => {
  const { yogalevel, exerciselevel } = useParams();
  const [filteredData, setFilteredData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = "";

        // Determine which URL to use based on the presence of level or exerciselevel
        if (yogalevel) {
          url = `http://localhost:8000/api/v1/yoga/yogalevel/${yogalevel}`;
        } else if (exerciselevel) {
          url = `http://localhost:8000/api/v1/exercises/exerciselevel/${exerciselevel}`;
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
      }
    };

    fetchData();
  }, [yogalevel, exerciselevel]);

  return (
    <div className="flex flex-col items-center p-4 md:p-6 lg:p-8">
      {error && <p className="text-red-500">{error}</p>}
      {filteredData.length > 0 ? (
        <div className="flex flex-col sm:gap-3 md:gap-5 w-full">
          {filteredData.map((item, index) => (
            <SmallCard
              key={index}
              data={item}
              name={item.name}
              img={yogalevel ? item.yogaImage : item.exerciseImage} // Use yogaImage or Image based on the context
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-4">
          No data available for this {yogalevel || exerciselevel}
        </p>
      )}
      <div className="mt-6 w-full flex justify-center">
        <Button data={filteredData} />
      </div>
    </div>
  );
};

export default CommonUnifiedLevel;
