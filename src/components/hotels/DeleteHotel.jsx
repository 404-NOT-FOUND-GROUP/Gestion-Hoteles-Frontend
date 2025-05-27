import React, { useState } from "react";
import { useDeleteHotel } from "../shared/hooks/useDeleteHotel";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../navs";
import { Sidebar } from "../navs";

export const DeleteHotel = () => {
  const [hid, setHid] = useState("");
  const { isLoading, handleDelete } = useDeleteHotel();
  const navigate = useNavigate();

  return (
    <div>
        <Navbar/>
        <Sidebar/>
    <div
      className="table-responsive"
      style={{
        marginTop: "75px",
        paddingBottom: "2rem",
        minHeight: "calc(100vh - 100px)",
        overflowY: "auto"
      }}
    >
      <div
        className="container d-flex justify-content-center align-items-start"
        style={{paddingTop: "50px"}}
      >
        <div
          className="w-100 p-5 rounded-4"
          style={{ maxWidth: "600px", backgroundColor: "#aeb6c0" }}
        >
          <h2 className="text-center mb-5" style={{ fontWeight: "900", color: "#164360" }}>
            Eliminar Hotel
          </h2>

          <div className="mb-4">
            <label htmlFor="hotelId" className="form-label fw-semibold">
              ID del hotel a eliminar
            </label>
            <input
              id="hotelId"
              type="text"
              className="form-control form-control-lg"
              placeholder="Ingrese el ID del hotel"
              value={hid}
              onChange={(e) => setHid(e.target.value)}
              required
              style={{ borderColor: "#dc3545" }}
            />
          </div>

          <button
            className="btn btn-success btn-lg w-100 mb-3"
            style={{ fontWeight: "600", backgroundColor: "#164360" }}
            onClick={() => handleDelete(hid)}
            disabled={isLoading || !hid.trim()}
          >
            {isLoading ? "Eliminando..." : "Eliminar Hotel"}
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};
