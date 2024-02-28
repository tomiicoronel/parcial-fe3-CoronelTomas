import React, { useState } from 'react';
import Card from './components/Card';
import './App.css';


function App() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [nacionalidad, setNacionalidad] = useState('');
  const [comidaPreferida, setComidaPreferida] = useState('');
  const [error, setError] = useState(null);
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim().length < 3 || /^\s/.test(nombre) || apellido.trim().length < 3 || comidaPreferida.trim().length < 6) {
      setError('Por favor, verifica que la información ingresada sea correcta.');
      setShowCard(false);
      return;
    }

    setError(null);
    setShowCard(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <br />

        <label>
          Apellido:
          <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
        </label>
        <br />

        <label>
          Nacionalidad:
          <input type="text" value={nacionalidad} onChange={(e) => setNacionalidad(e.target.value)} />
        </label>
        <br />

        <label>
          Comida Preferida:
          <input type="text" value={comidaPreferida} onChange={(e) => setComidaPreferida(e.target.value)} />
        </label>
        <br />

        <button type="submit">Enviar</button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {showCard && (
        <Card
          nombre={nombre}
          apellido={apellido}
          nacionalidad={nacionalidad}
          comidaPreferida={comidaPreferida}
        />
      )}
    </div>
  );
}

export default App;
