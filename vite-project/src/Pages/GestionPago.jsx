import React, { useState } from 'react';
import './Styles/GestionPago.module.css';

function App() {
  const [payments, setPayments] = useState([]);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && amount && date) {
      const newPayment = { name, amount, date };
      setPayments([...payments, newPayment]);
      setName('');
      setAmount('');
      setDate('');
    } else {
      alert('Por favor, complete todos los campos');
    }
  };

  return (
    <div className="container">
      <h1>Gestión de Pagos</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        
        <label htmlFor="amount">Monto:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        
        <label htmlFor="date">Fecha:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        
        <button type="submit">Agregar Pago</button>
      </form>
      
      <h2>Pagos</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Monto</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={index}>
              <td>{payment.name}</td>
              <td>{payment.amount}</td>
              <td>{payment.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;