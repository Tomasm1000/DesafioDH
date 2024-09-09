import React, { useState } from 'react';


const filterTransactionsByDate = (transactions, period) => {
  const now = new Date();
  let startDate;

  switch (period) {
    case 'hoy':
      startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      break;
    case 'ayer':
      startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
      break;
    case 'ultima semana':
      startDate = new Date(now - 7 * 24 * 60 * 60 * 1000);
      break;
    case 'ultimos 15 dias':
      startDate = new Date(now - 15 * 24 * 60 * 60 * 1000);
      break;
    case 'ultimo mes':
      startDate = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
      break;
    case 'ultimos 3 meses':
      startDate = new Date(now.getFullYear(), now.getMonth() - 3, now.getDate());
      break;
    default:
      return transactions;
  }

  return transactions.filter(transaction => {
    const transactionDate = new Date(transaction.date);
    return transactionDate >= startDate;
  });
};

const TransactionFilter = ({ transactions }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('hoy');
  const [filteredTransactions, setFilteredTransactions] = useState(
    filterTransactionsByDate(transactions, 'hoy')
  );

  const handleFilterChange = (event) => {
    const period = event.target.value;
    setSelectedPeriod(period);
    setFilteredTransactions(filterTransactionsByDate(transactions, period));
  };

  return (
    <div>
      <h1>Filtrar Transacciones</h1>
      <select value={selectedPeriod} onChange={handleFilterChange}>
        <option value="hoy">Hoy</option>
        <option value="ayer">Ayer</option>
        <option value="ultima semana">Última semana</option>
        <option value="ultimos 15 dias">Últimos 15 días</option>
        <option value="ultimo mes">Último mes</option>
        <option value="ultimos 3 meses">Últimos 3 meses</option>
      </select>

      <ul>
        {filteredTransactions.map((transaction, index) => (
          <li key={index}>
            {transaction.date}: {transaction.description} - ${transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Datos de ejemplo
const transactions = [
  { date: '2024-08-19', description: 'Compra A', amount: 50 },
  { date: '2024-08-15', description: 'Compra B', amount: 30 },
  { date: '2024-07-20', description: 'Compra C', amount: 20 },
  // Añadir más transacciones según sea necesario
];

const App = () => (
  <div>
    <TransactionFilter transactions={transactions} />
  </div>
);

export default transactions;
