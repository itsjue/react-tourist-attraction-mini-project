import React, { useState, useEffect } from "react";
import axios from "axios";
import { TravelCard } from "./TravelCard";

function Main() {
  const [_travelData, _setTravelData] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    getTravelData("");
  }, []);

  const getTravelData = async (q = "") => {
    try {
      const response = await axios.get("http://localhost:4001/trips", {
        params: { keywords: (q ?? "").trim() },
      });

      _setTravelData(response.data?.data || []);
    } catch (err) {
      console.error(err);
      _setTravelData([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getTravelData(keyword);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setKeyword(value);

    getTravelData(value);

    if (value === "") {
      getTravelData("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-1 mt-8">
        <h3>ค้นหาที่เที่ยว</h3>
        <input
          type="text"
          placeholder="หาที่เที่ยวแล้วไปกัน..."
          value={keyword}
          onChange={handleChange}
          className="border-b-2 border-b-gray-400 placeholder-gray-400 placeholder:text-center"
        />
      </form>

      {keyword.trim() !== "" && _travelData.length === 0 && (
        <p className="mt-6 text-center text-gray-600">
          not found "{keyword.trim()}"
        </p>
      )}

      {_travelData.map((trip) => (
        <TravelCard
          key={trip.eid}
          title={trip.title}
          url={trip.url}
          description={trip.description}
          tags={trip.tags}
          photos={trip.photos}
        />
      ))}
    </div>
  );
}

export default Main;
