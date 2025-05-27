import React from "react";
import { Navbar } from "../../navs";
import { Sidebar } from "../../navs";

export const Dashboard404 = () => {
  return (
    <div className="min-vh-100 d-flex flex-column bg-light">
      <Navbar />

      <div className="d-flex flex-grow-1 overflow-hidden">
        <Sidebar />

        <main className="flex-grow-1 overflow-auto px-15 pt-5 bg-light text-dark">
          <div className="container-fluid">

            <div className="text-center mb-5">
              <h2 className="fw-bold">Acerca de <span className="text-primary">404-ROOM</span></h2>
              <p className="text-muted">Soluciones inteligentes para la industria hotelera</p>
            </div>

            <div className="row justify-content-center mb-5">
              <div className="col-lg-10 d-flex flex-column flex-md-row align-items-center bg-white rounded shadow p-4">
                <img
                  src="/Logo.png"
                  alt="404-ROOM Logo"
                  className="img-fluid me-md-4 mb-3 mb-md-0"
                  style={{ maxHeight: "250px" }}
                />
                <h4 className="fw-bold text-center text-md-start m-0">
                  404-ROOM — Plataforma Integral de Gestión Hotelera
                </h4>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-lg-6 mb-3 mb-lg-0">
                <div className="bg-white rounded shadow-sm p-4 h-100">
                  <h5 className="fw-bold">¿Quiénes Somos?</h5>
                  <p>
                    En <strong>404-ROOM</strong>, somos una plataforma moderna de
                    gestión hotelera que busca optimizar cada aspecto de la
                    experiencia tanto del huésped como del administrador del hotel.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="bg-white rounded shadow-sm p-4 h-100">
                  <h5 className="fw-bold">Objetivos</h5>
                  <ul className="mb-0">
                    <li>Optimizar la gestión de reservas, habitaciones y clientes.</li>
                    <li>Brindar una interfaz intuitiva para facilitar la administración.</li>
                    <li>Mejorar la experiencia del huésped mediante tecnología.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-12">
                <div className="bg-white rounded shadow-sm p-4">
                  <h5 className="fw-bold">Nuestra Historia</h5>
                  <p>
                    404-ROOM nació como una iniciativa joven para modernizar la
                    forma en que los pequeños y medianos hoteles gestionan sus
                    operaciones.
                  </p>
                </div>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-lg-6 mb-3 mb-lg-0">
                <div className="bg-white rounded shadow-sm p-4 h-100">
                  <h5 className="fw-bold">Nuestros Valores</h5>
                  <ul className="mb-0">
                    <li>Innovación</li>
                    <li>Transparencia</li>
                    <li>Responsabilidad</li>
                    <li>Servicio al cliente</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="bg-white rounded shadow-sm p-4 h-100">
                  <h5 className="fw-bold">Servicios</h5>
                  <ul className="mb-0">
                    <li>Gestión de reservas y habitaciones</li>
                    <li>Control de check-in/check-out</li>
                    <li>Panel administrativo en tiempo real</li>
                    <li>Reportes automatizados</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-12">
                <div className="bg-white rounded shadow-sm p-4">
                  <h5 className="fw-bold">Nuestro Equipo</h5>
                  <p>
                    Contamos con un equipo multidisciplinario comprometido con
                    la mejora continua del servicio, combinando conocimientos en
                    desarrollo de software, atención al cliente y operaciones hoteleras.
                  </p>
                </div>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-lg-6 mb-3 mb-lg-0">
                <div className="bg-white rounded shadow-sm p-4 h-100">
                  <h5 className="fw-bold">Misión</h5>
                  <p>
                    Proporcionar un sistema integral de administración hotelera
                    que facilite las operaciones diarias, mejore la atención al
                    cliente y optimice los recursos.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="bg-white rounded shadow-sm p-4 h-100">
                  <h5 className="fw-bold">Visión</h5>
                  <p>
                    Ser líderes en soluciones digitales para la industria
                    hotelera, reconocidos por nuestra innovación, confiabilidad y excelencia.
                  </p>
                </div>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-12">
                <div className="bg-white rounded shadow-sm p-4">
                  <h5 className="fw-bold">Nuestro Compromiso</h5>
                  <p>
                    Nos comprometemos a brindar soluciones estables, soporte
                    técnico constante y una plataforma que evoluciona con las necesidades del cliente.
                  </p>
                </div>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-12">
                <div className="bg-white rounded shadow-sm p-4">
                  <h5 className="fw-bold">Contáctanos</h5>
                  <p><strong>Email:</strong> contacto@404room.com</p>
                  <p><strong>Teléfono:</strong> +502 1234 5678</p>
                  <p><strong>Dirección:</strong> Ciudad de Guatemala, Guatemala</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};