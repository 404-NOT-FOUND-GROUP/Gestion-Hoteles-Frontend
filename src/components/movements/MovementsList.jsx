import { Navbar } from "../navs/Navbar";
import { Sidebar } from "../navs/Sidebar";

export const MovementsList = () => {
  
  return (
    <div>
      <Navbar />
      <div
        className="table-responsive"
        style={{
          marginTop: "75px",
          paddingBottom: "2rem",
          minHeight: "calc(100vh - 100px)",
          overflowY: "auto",
        }}
      >
        <div
  className="container d-flex justify-content-center align-items-start"
  style={{ minHeight: "100vh", paddingTop: "100px" }}
>
  <form className="w-100" style={{ maxWidth: "500px" }}>

    <h2 className="text-center mb-4">Buscar Movimiento</h2>

    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar por ID de producto"
        onChange={(e) => setProductId(e.target.value)}
      />
    </div>

    <div className="d-grid">
      <button type="submit" className="btn btn-primary">
        Buscar
      </button>
    </div>
  </form>
</div>
</div>

      <Sidebar />
    </div>
  );
};