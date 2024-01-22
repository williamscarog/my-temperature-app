import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    // Realiza una solicitud para obtener la temperatura desde el servidor local
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/temperature');
        setTemperature(response.data.temperatura);
      } catch (error) {
        console.error('Error al obtener la temperatura', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Temperatura Actual:</h1>
      {temperature !== null ? <p>{temperature} °C</p> : <p>Cargando...</p>}
    </div>
  );
}

export default App;
