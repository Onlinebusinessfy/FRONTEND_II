function CarCard({ car }) {
    return (
        <div className="card">
            <h2>{car.brand} {car.model}</h2>

            <p>Año: {car.year}</p>
            <p>Precio: ${car.price}</p>
            <p>Kilometraje: {car.mileage}</p>
            <p>Color: {car.color}</p>
            <p>Transmisión: {car.transmission}</p>
            <p>Combustible: {car.fuel_type}</p>

            <p>
                Estado:
                <span className={car.is_available ? "available" : "sold"}>
                    {car.is_available ? " Disponible" : " Vendido"}
                </span>
            </p>
        </div>
    )
}

export default CarCard