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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = yogaaot 
          ? `${Server}/api/v1/yoga/yogaaot/${yogaaot}`
          : `${Server}/api/v1/exercises/exerciseaot/${exerciseaot}`;

        const response = await axios.get(url);
        setFilteredData(response.data.data);
      } catch (error) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [yogaaot, exerciseaot]);

  if (loading) {
    return (
      <div className="flex flex-col items-center p-4 md:p-6 lg:p-8">
        <Loader />
        <p className="text-center text-gray-600 mt-4">Data is loading...</p>
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
      {filteredData.length > 0 ? (
        <>
          <div className="flex flex-col sm:gap-3 md:gap-5 w-full">
            {filteredData.map((item, index) => (
              <SmallCard
                key={index}
                data={{
                  img: yogaaot ? item.yogaImage : item.exerciseImage,
                  name: item.name,
                  level: item.level,
                }}
              />
            ))}
          </div>
          <div className="mt-6 w-full flex justify-center">
            <Button data={filteredData} />
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500 mt-4">
          No data available for this {yogaaot || exerciseaot}
        </p>
      )}
    </div>
  );
};

export default CommonUnifiedAot;
