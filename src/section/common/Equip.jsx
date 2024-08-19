// only extract exercise aot

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../constants/Button';
import SmallCard from '../../components/cards/smallcard/SmallCard';
import { Server } from '../../constants/config';
import Loader from '../../components/loader/Loader';

const Equip = () => {
  const { equip } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${Server}/api/v1/exercises/category/${equip}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [equip]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col items-center p-4 md:p-6 lg:p-8">
      {data.length > 0 ? (
        <div className="flex flex-col sm:gap-3 md:gap-5 w-full">
          {data.map((item, index) => (
            <SmallCard
              key={index}
              data={{
                img: item.exerciseImage,
                name: item.name,
              }}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-4">No data available for this {equip}</p>
      )}
      <div className="mt-6 w-full flex justify-center">
        <Button data={data} />
      </div>
    </div>
  );
};

export default Equip;

