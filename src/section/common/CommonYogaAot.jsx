import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SmallCard from '../../components/cards/smallcard/SmallCard';
import { Server } from '../../constants/config';
import Loader from '../../components/loader/Loader';
import Button from '../../constants/Button'; // Assuming Button is your start button component

const CommonYogaAot = () => {
  const { value } = useParams();
  const [combinedData, setCombinedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${Server}/api/v1/yoga/yogaaot/${value}`);
        setCombinedData(response.data.data);
      } catch (error) {
        console.error('Error fetching combined data:', error);
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [value]);

  if (loading) {
    return (
      <div className="flex flex-col items-center p-4 md:p-6 lg:p-8">
        <Loader />
        <p className="text-center text-gray-700 mt-4">Data is loading...</p>
        <p className="text-center text-red-500 mt-2">
          If it takes time, please refresh the page.
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center p-4 md:p-6 lg:p-8">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-4 md:p-6 lg:p-8">
      {combinedData.length > 0 ? (
        <>
          <div className="flex flex-col sm:gap-3 md:gap-5 w-full">
            {combinedData.map((item, index) => (
              <SmallCard
                key={index}
                data={{
                  img: item.yogaImage || item.exerciseImage,
                  name: item.name,
                }}
              />
            ))}
          </div>
          <div className="mt-6 w-full flex justify-center">
            <Button data={combinedData} />
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500 mt-4">
          No data available for this {value}
        </p>
      )}
    </div>
  );
};

export default CommonYogaAot;
