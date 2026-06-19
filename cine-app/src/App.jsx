import { useState } from 'react'
import './App.css'

function App() {

  const precioBase = 60

  const [nombrePelicula, setNombrePelicula] =
    useState('The Boys')

  const [precioTicket, setPrecioTicket] =
    useState(precioBase)

  const [comision] = useState(0.05)

  const [descuentoGrupal] = useState(0.10)

  const [nombreCine] = useState('Cinemex')

  const [nombreCliente, setNombreCliente] =
    useState('')

  const [cantidadTickets, setCantidadTickets] =
    useState('')

  const [tipoSala, setTipoSala] =
    useState('')

  const [mensaje, setMensaje] =
    useState('')

  const [inicio, setInicio] =
    useState(0)

  const [horaPelicula, setHoraPelicula] =
    useState('')

  const [mostrarResumen, setMostrarResumen] =
    useState(false)

  let subtotal =
    precioTicket * Number(cantidadTickets)

  let cargoServicio =
    subtotal * comision

  let descuento =
    Number(cantidadTickets) >= 5
      ? subtotal * descuentoGrupal
      : 0

  let total =
    subtotal + cargoServicio - descuento

  const peliculas = [

    {
      nombre: "The Boys",
      imagen:
        "https://resizing.flixster.com/StibykxxpJER6U_N50JYuXDpneA=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvZTVjMzZkMzktN2Y4ZS00MjZjLTgyMTMtMzhhOWI1OTBiYzA3LmpwZw=="
    },

    {
      nombre: "Minions",
      imagen:
        "https://upload.wikimedia.org/wikipedia/en/1/19/Minions_%282015_film%29.jpg"
    },

    {
      nombre: "Backyardigans",
      imagen:
        "https://m.media-amazon.com/images/I/91hxyxEr94L._AC_UF894,1000_QL80_.jpg"
    },

    {
      nombre: "Mario Bros",
      imagen:
        "https://m.media-amazon.com/images/M/MV5BZDkyMDBiN2EtYTM2Ni00ZjRjLWFmZWQtZDdkZDBhNTQzYTU4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },

    {
      nombre: "Avengers",
      imagen:
        "https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },

    {
      nombre: "Deadpool",
      imagen:
        "https://m.media-amazon.com/images/I/61jxKOZGU9L.jpg"
    }

  ]

  return (

    <div className="App">

      <h1>Sistema de Boletos de Cine</h1>

      {/* TOP */}
      <div className="top-card">

        <h2>Películas</h2>

        <div className="carousel-container">

          <button
            onClick={() =>
              setInicio(
                inicio > 0
                  ? inicio - 1
                  : 0
              )
            }
          >
            ←
          </button>

          <div className="imagenes">

            {
              peliculas
                .slice(inicio, inicio + 3)
                .map((pelicula, index) => (

                  <div
                    className="pelicula-item"
                    key={index}
                  >

                    <img
                      src={pelicula.imagen}
                      alt={pelicula.nombre}
                      onClick={() =>
                        setNombrePelicula(
                          pelicula.nombre
                        )
                      }
                    />

                    <p>{pelicula.nombre}</p>

                  </div>

                ))
            }

          </div>

          <button
            onClick={() =>
              setInicio(
                inicio < peliculas.length - 3
                  ? inicio + 1
                  : inicio
              )
            }
          >
            →
          </button>

        </div>

      </div>

      {/* ABAJO */}
      <div className="bottom-container">

        {/* CARRITO */}
        <div className="card">

          <h2>Carrito</h2>

          <div className="info-row">
            <span>Cine</span>
            <span>{nombreCine}</span>
          </div>

          <div className="info-row">
            <span>Película</span>
            <span>{nombrePelicula}</span>
          </div>

          <div className="info-row">
            <span>Horario</span>
            <span>
              {
                horaPelicula ||
                'No seleccionado'
              }
            </span>
          </div>

          <div className="info-row">
            <span>Tipo de Sala</span>
            <span>
              {
                tipoSala ||
                'Normal'
              }
            </span>
          </div>

          <div className="info-row">
            <span>Precio Boleto</span>
            <span>
              ${precioTicket}
            </span>
          </div>

          <div className="info-row">
            <span>Comisión</span>
            <span>5%</span>
          </div>

          <hr />

          <div className="info-row">
            <span>Subtotal</span>
            <span>
              ${subtotal.toFixed(2)}
            </span>
          </div>

          <div className="info-row">
            <span>Cargo Servicio</span>
            <span>
              ${cargoServicio.toFixed(2)}
            </span>
          </div>

          <div className="info-row">
            <span>Descuento</span>
            <span>
              ${descuento.toFixed(2)}
            </span>
          </div>

          <hr />

          <div className="total">
            <span>Total</span>
            <span>
              ${total.toFixed(2)}
            </span>
          </div>

        </div>

        {/* CLIENTE */}
        <div className="card">

          <h2>
            Información del Cliente
          </h2>

          <input
            type="text"
            value={nombreCliente}
            placeholder="Ingresa tu nombre"
            onChange={(e) =>
              setNombreCliente(
                e.target.value
              )
            }
          />

          <input
            type="number"
            value={cantidadTickets}
            placeholder="Cantidad de boletos"
            onChange={(e) =>
              setCantidadTickets(
                e.target.value
              )
            }
          />

          {/* PELICULA */}
          <select
            value={nombrePelicula}
            onChange={(e) =>
              setNombrePelicula(
                e.target.value
              )
            }
          >

            {
              peliculas.map(
                (pelicula, index) => (

                  <option
                    key={index}
                    value={
                      pelicula.nombre
                    }
                  >
                    {pelicula.nombre}
                  </option>

                )
              )
            }

          </select>

          {/* HORARIO */}
          <select
            value={horaPelicula}
            onChange={(e) =>
              setHoraPelicula(
                e.target.value
              )
            }
          >

            <option value="">
              Selecciona un horario
            </option>

            <option value="1:00 PM">
              1:00 PM
            </option>

            <option value="3:30 PM">
              3:30 PM
            </option>

            <option value="6:00 PM">
              6:00 PM
            </option>

            <option value="9:00 PM">
              9:00 PM
            </option>

          </select>

          {/* SALAS */}
          <select
            value={tipoSala}
            onChange={(e) => {

              const sala =
                e.target.value

              setTipoSala(sala)

              if (
                sala === 'Tradicional'
              ) {
                setPrecioTicket(
                  precioBase
                )
              }

              else if (
                sala === 'VIP'
              ) {
                setPrecioTicket(
                  precioBase + 40
                )
              }

              else if (
                sala === 'IMAX'
              ) {
                setPrecioTicket(
                  precioBase + 70
                )
              }

              else if (
                sala === '4DX'
              ) {
                setPrecioTicket(
                  precioBase + 100
                )
              }

            }}
          >

            <option value="">
              Selecciona una sala
            </option>

            <option value="Tradicional">
              Tradicional
            </option>

            <option value="VIP">
              VIP
            </option>

            <option value="IMAX">
              IMAX
            </option>

            <option value="4DX">
              4DX
            </option>

          </select>

          {/* BOTONES */}
          <div className="buttons">

            <button
              className="cancel"
              onClick={() => {

                setNombreCliente('')

                setCantidadTickets('')

                setTipoSala('')

                setHoraPelicula('')

                setMensaje('')

                setMostrarResumen(false)

                setPrecioTicket(
                  precioBase
                )

                setNombrePelicula(
                  'The Boys'
                )

              }}
            >
              Cancelar
            </button>

            <button
              className="summary"
              onClick={() =>
                setMostrarResumen(
                  !mostrarResumen
                )
              }
            >
              Resumen
            </button>

            <button
              className="confirm"
              onClick={() =>
                setMensaje(
                  'Compra realizada correctamente'
                )
              }
            >
              Confirmar
            </button>

          </div>

          <h3>{mensaje}</h3>

          {/* RESUMEN */}
          {
            mostrarResumen && (

              <div className="summary-box">

                <h2>
                  Resumen de Compra
                </h2>

                <p>
                  <strong>
                    Cliente:
                  </strong>
                  {' '}
                  {nombreCliente}
                </p>

                <p>
                  <strong>
                    Película:
                  </strong>
                  {' '}
                  {nombrePelicula}
                </p>

                <p>
                  <strong>
                    Horario:
                  </strong>
                  {' '}
                  {horaPelicula}
                </p>

                <p>
                  <strong>
                    Sala:
                  </strong>
                  {' '}
                  {tipoSala}
                </p>

                <p>
                  <strong>
                    Boletos:
                  </strong>
                  {' '}
                  {cantidadTickets}
                </p>

                <p>
                  <strong>
                    Total:
                  </strong>
                  {' '}
                  ${total.toFixed(2)}
                </p>

              </div>

            )
          }

        </div>

      </div>

    </div>

  )
}

export default App