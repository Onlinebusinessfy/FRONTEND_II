import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [nombre, setNombre] = useState("")
  const precio = 100
  const cantidad = 5
  const edad = 20

function saludar(){
  alert("Hola " + nombre)
}

  return (
    <>
    <div className="App">
      <h1>Hola React</h1>
      <p>Esta es mi primera app en React</p>
      <button onClick={saludar}>Call to action</button>
    </div>
    <div className="container">
      <h1 className="title">Hola {nombre}</h1>
      <p className="description">El precio total es: {precio * cantidad}</p>
      <p>{edad >= 18 ? "Mayor de edad" : "Menor de edad"}</p>
      <input type="text" placeholder="Escribe tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <p>El nombre ingresado es: {nombre}</p>
    </div>
    </>
  )
}

export default App
