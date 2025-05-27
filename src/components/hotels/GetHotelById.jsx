import React, { useState } from "react";
import {useGetHotelById} from "../shared/hooks/useGetHotelById";

export const GetHotelById = () => {
  const [hid, setHid] = useState("");
  const { hotel, isLoading } = useGetHotelById(hid);

  return (
    <div>
      <input
        placeholder="ID del hotel"
        value={hid}
        onChange={(e) => setHid(e.target.value)}
      />
      {isLoading && hid && <div>Cargando hotel...</div>}
      {hotel && (
        <div>
          <h4>{hotel.name}</h4>
          <p>{hotel.address}</p>
        </div>
      )}
    </div>
  );
};
