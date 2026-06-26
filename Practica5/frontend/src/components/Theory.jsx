function Theory({ goBack }) {
  return (
    <div className="theory">
      <h2>Respuestas teóricas</h2>

      <h3>1. ¿Cuál es la responsabilidad de Django en esta práctica?</h3>
      <p>
        Django funciona como backend. Se encarga de almacenar los datos,
        procesarlos y exponerlos mediante una API REST para que React pueda
        consumirlos.
      </p>

      <h3>2. ¿Cuál es la responsabilidad de React?</h3>
      <p>
        React funciona como frontend. Se encarga de mostrar la interfaz gráfica,
        consumir la API y actualizar la información sin recargar la página.
      </p>

      <h3>3. ¿Qué es una API REST?</h3>
      <p>
        Es una interfaz que permite la comunicación entre aplicaciones utilizando
        peticiones HTTP como GET, POST, PUT y DELETE.
      </p>

      <h3>4. ¿Qué hace un serializer en Django REST Framework?</h3>
      <p>
        Convierte objetos de Django en formato JSON y viceversa para que puedan
        ser enviados y recibidos por la API.
      </p>

      <h3>5. ¿Por qué necesitamos CORS para conectar React con Django?</h3>
      <p>
        Porque React y Django se ejecutan en dominios o puertos distintos.
        CORS permite que el navegador autorice la comunicación entre ambos.
      </p>

      <h3>6. ¿Qué es la paginación y por qué es útil?</h3>
      <p>
        Es una técnica para dividir grandes cantidades de datos en varias
        páginas y mejorar el rendimiento y la experiencia del usuario.
      </p>

      <h3>7. ¿Qué hace useEffect al consumir una API?</h3>
      <p>
        Permite ejecutar código cuando el componente se monta. Se utiliza para
        realizar peticiones a la API al cargar la página.
      </p>

      <h3>
        8. ¿Qué diferencia hay entre manejar datos locales con useState y
        consumir datos desde un backend?
      </h3>
      <p>
        useState almacena datos temporalmente en React, mientras que los datos
        del backend permanecen guardados en la base de datos y pueden ser
        compartidos entre diferentes usuarios y sesiones.
      </p>

      <button className="theory-btn" onClick={goBack}>
        Volver a Car Agency
      </button>
    </div>
  );
}

export default Theory;