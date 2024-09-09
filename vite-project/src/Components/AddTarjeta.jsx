import React, { useState } from 'react';

const CreditCardForm = () => {
  // Estado para almacenar los valores de los campos
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Aquí podrías añadir lógica para enviar los datos a un servidor o procesar la tarjeta
    console.log('Tarjeta añadida:');
    console.log(`Número: ${cardNumber}`);
    console.log(`Titular: ${cardHolder}`);
    console.log(`Fecha de expiración: ${expiryDate}`);
    console.log(`CVV: ${cvv}`);
    
    // Limpiar los campos después del envío
    setCardNumber('');
    setCardHolder('');
    setExpiryDate('');
    setCvv('');
  };

  return (
    <div className="credit-card-form">
      <h2>Añadir Tarjeta de Crédito/Débito</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cardNumber">Número de Tarjeta:</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="1234 5678 9012 3456"
            maxLength="19"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="cardHolder">Nombre del Titular:</label>
          <input
            type="text"
            id="cardHolder"
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
            placeholder="Juan Pérez"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="expiryDate">Fecha de Expiración:</label>
          <input
            type="text"
            id="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/AA"
            maxLength="5"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            placeholder="123"
            maxLength="4"
            required
          />
        </div>
        
        <button type="submit">Añadir Tarjeta</button>
      </form>
    </div>
  );
};

export default CreditCardForm;
