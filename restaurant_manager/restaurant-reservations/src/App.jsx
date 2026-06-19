// Utilicé la OPCION 1 Y 2 de los puntos extra
import "./App.css";
import { useState } from "react";

function App() {

  const [reservations, setReservations] = useState([]);

  const [search, setSearch] = useState("");

  const [formData, setFormData] = useState({
    customerName: "",
    guests: "",
    time: "",
    tableType: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const addReservation = (e) => {
    e.preventDefault();

    // Validacion que el nombre no puede estar vacio
    if (formData.customerName.trim() === "") {
      alert("El nombre no puede estar vacio");
      return;
    }

    // Validacion que todos deben tener algo
    if (
      !formData.guests ||
      !formData.time ||
      !formData.tableType
    ) {
      alert("Todos los campos son obligatorios");
      return;
    }

    const newReservation = {
      id: Date.now(),
      customerName: formData.customerName,
      guests: formData.guests,
      time: formData.time,
      tableType: formData.tableType,
    };

    setReservations([...reservations, newReservation]);

    setFormData({
      customerName: "",
      guests: "",
      time: "",
      tableType: "",
    });
  };

  // Cancelar reservacion
  const deleteReservation = (id) => {
    const updatedReservations = reservations.filter(
      (reservation) => reservation.id !== id
    );

    setReservations(updatedReservations);
  };

  // Filtrar las reservaciones en base al nombre del cliente
  const filteredReservations = reservations.filter((reservation) =>
    reservation.customerName
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="container">

      <h1 className="title">
        Restaurant Reservations
      </h1>

      <h2 className="total">
        Total Reservations: {reservations.length}
      </h2>

      <form className="form" onSubmit={addReservation}>

        <input
          type="text"
          name="customerName"
          placeholder="Customer Name"
          value={formData.customerName}
          onChange={handleChange}
        />

        <input
          type="number"
          name="guests"
          placeholder="Number of Guests"
          value={formData.guests}
          onChange={handleChange}
        />

        <input
          type="time"
          name="time"
          placeholder="Reservation Time"
          value={formData.time}
          onChange={handleChange}
        />

        <select
          name="tableType"
          value={formData.tableType}
          onChange={handleChange}
        >
          <option value="">
            Select Table Type
          </option>

          <option value="Indoor">
            Indoor
          </option>

          <option value="Outdoor">
            Outdoor
          </option>

          <option value="VIP">
            VIP
          </option>

          <option value="Family Area">
            Family Area
          </option>
        </select>

        <button type="submit">
          Add Reservation
        </button>

      </form>

      <input
        className="search"
        type="text"
        placeholder="Busca por nombre del cliente"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="cards">
      {/* Se muestra mensaje cuando no hay reservaciones */}
        {
          filteredReservations.length === 0 ? (

            <h3 className="no-results">
              No reservations yet.
            </h3>

          ) : (

            filteredReservations.map((reservation) => (
              <div
                key={reservation.id}
                className="card"
              >
                <h3>
                  {reservation.customerName}
                </h3>

                <p>
                  Guests: {reservation.guests}
                </p>

                <p>
                  Time: {reservation.time}
                </p>

                <p>
                  Table: {reservation.tableType}
                </p>

                <button
                  onClick={() => deleteReservation(reservation.id)}
                >
                  Cancelar Reservacion
                </button>

              </div>
            ))

          )
        }

      </div>

    </div>
  );
}

export default App;