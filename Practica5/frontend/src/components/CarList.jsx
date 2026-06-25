import CarCard from "./CarCard";

function CarList({ cars }) {
  return (
    <>
    <div className="car-grid">
      {cars.map(car => (
        <CarCard key={car.id} car={car} />
      ))}
      </div>
    </>
  )
}

export default CarList