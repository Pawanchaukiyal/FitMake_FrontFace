import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import SmallCard from "../../components/cards/smallcard/SmallCard";
import Button from "../../constants/Button";

const Common1 = () => {
  const { level, aot } = useParams(); // Extract both parameters
  const type = level ? 'yoga' : 'exercises';
  const [filteredData, setFilteredData] = useState([]);
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/${type}/${level ? `level/${level}` : `aot/${aot}`}`);
        if (response.data && Array.isArray(response.data.data)) {
          setFilteredData(response.data.data); // Set data if it's an array
        } else {
          setError('Data format is incorrect'); // Handle unexpected data format
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError('Failed to fetch data'); // Set error message
      }
    };

    fetchData();
  }, [level, aot]);

  return (
    <div className="flex flex-col items-center p-4 md:p-6 lg:p-8">
      {error && <p className="text-red-500">{error}</p>} {/* Display error message if there's an error */}
      {filteredData.length > 0 ? (
        <div className="flex flex-col sm:gap-3 md:gap-5 w-full">
          {filteredData.map((item, index) => (
            <SmallCard key={index} data={item} name={item.name} img={item.yogaImage} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-4">No data available for this {level ? 'level' : 'aot'}</p>
      )}
      <div className="mt-6 w-full flex justify-center">
        <Button data={filteredData} />
      </div>
    </div>
  );
};

export default Common1;
