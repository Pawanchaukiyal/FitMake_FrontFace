// Here fetch the all the given aot from yoga and exercise

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SmallCard from '../../components/cards/smallcard/SmallCard';
import { Server } from '../../constants/config';

const Commonaot = () => {
  const { value } = useParams();
  const [combinedData, setCombinedData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${Server}/api/v1/combined/aot/${value}`);
        setCombinedData(response.data.data);
      } catch (error) {
        console.error('Error fetching combined data:', error);
        setError('Failed to fetch data');
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
            <SmallCard key={index} 
            data={{
             name:item.name,
             img:item.yogaImage || item.exerciseImage
          }}
             />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-4">No data available for this {value}</p>
      )}
    </div>
  );
};

export default Commonaot;