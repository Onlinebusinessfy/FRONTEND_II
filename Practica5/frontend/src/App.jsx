import { useEffect, useState } from "react";
import CarList from "./components/CarList";
import Pagination from "./components/Pagination";
import FilterBar from "./components/FilterBar";
import EmptyState from "./components/EmptyState";
import Theory from "./components/Theory";
import "./App.css";

function App() {
  const [showTheory, setShowTheory] = useState(false);

  const [cars, setCars] = useState([]);
  const [next, setNext] = useState(null);
  const [previous, setPrevious] = useState(null);

  const [search, setSearch] = useState("");
  const [availability, setAvailability] = useState("all");

  const loadCars = async (
    url = "http://localhost:8000/api/cars/"
  ) => {
    const response = await fetch(url);
    const data = await response.json();

    setCars(data.results);
    setNext(data.next);
    setPrevious(data.previous);
  };

  useEffect(() => {
    loadCars();
  }, []);

  const filteredCars = cars.filter((car) => {
    const matchesSearch =
      car.brand.toLowerCase().includes(search.toLowerCase()) ||
      car.model.toLowerCase().includes(search.toLowerCase());

    const matchesAvailability =
      availability === "all" ||
      (availability === "available" && car.is_available) ||
      (availability === "sold" && !car.is_available);

    return matchesSearch && matchesAvailability;
  });

  if (showTheory) {
    return (
      <div className="container">
        <Theory goBack={() => setShowTheory(false)} />
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Car Agency</h1>

      <FilterBar
        search={search}
        setSearch={setSearch}
        availability={availability}
        setAvailability={setAvailability}
      />

      {filteredCars.length > 0 ? (
        <CarList cars={filteredCars} />
      ) : (
        <EmptyState />
      )}

      <Pagination
        previous={previous}
        next={next}
        loadPage={loadCars}
      />

      <button
        className="theory-btn"
        onClick={() => setShowTheory(true)}
      >
        Ver respuestas teóricas
      </button>
    </div>
  );
}

export default App;