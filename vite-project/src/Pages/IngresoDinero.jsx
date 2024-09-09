import React, { useState } from 'react';

import style from "./Styles/IngresoDinero.module.css";

const MoneyInput = () => {
  // Estado para almacenar el valor ingresado
  const [amount, setAmount] = useState('');

  // Función para manejar los cambios en el campo de entrada
  const handleChange = (e) => {
    const value = e.target.value;
    // Solo permite números y punto decimal
    if (/^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Has ingresado: $${amount}`);
    // Aquí podrías agregar lógica para enviar la cantidad a un servidor o procesarla de alguna manera
  };

  return (
    <div>
      <h2>Ingrese la cantidad de dinero</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Cantidad:
          <input
            type="text"
            value={amount}
            onChange={handleChange}
            placeholder="0.00"
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default MoneyInput;
