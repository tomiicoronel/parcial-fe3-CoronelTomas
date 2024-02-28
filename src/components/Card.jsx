import React from 'react';

function Card({ nombre, apellido, nacionalidad, comidaPreferida }) {
return (
    <div>
    <h2>Información ingresada:</h2>
    <p><strong>Nombre:</strong> {nombre}</p>
    <p><strong>Apellido:</strong> {apellido}</p>
    <p><strong>Nacionalidad:</strong> {nacionalidad}</p>
    <p><strong>Comida Preferida:</strong> {comidaPreferida}</p>
    </div>
    );
}

export default Card;
