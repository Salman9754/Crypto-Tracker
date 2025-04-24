import React from 'react';
import Table from 'react-bootstrap/Table';
import CryptoRow from './CryptoRow';

function CryptoTable() {
  // Example data
  const cryptoData = [
    {
      logo: 'btc_logo.png', 
      name: 'Bitcoin', 
      symbol: 'BTC', 
      price: '$93k', 
      hour: '+0.43%', 
      day: '+1%', 
      week: '+11%', 
      marketCap: '$1.8T', 
      volume: '$43B', 
      supply: '19.8M', 
      max: '21M',
      chart: '📈'
    },
    {
      logo: 'eth_logo.png', 
      name: 'Ethereum', 
      symbol: 'ETH', 
      price: '$1800', 
      hour: '+0.6%', 
      day: '+3%', 
      week: '+13%', 
      marketCap: '$217B', 
      volume: '$23B', 
      supply: '120M', 
      max: '∞',
      chart: '📈'
    },
    // Add more objects as needed
  ];

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Logo</th>
          <th>Name</th>
          <th>Symbol</th>
          <th>Price</th>
          <th>1h %</th>
          <th>24h %</th>
          <th>7d %</th>
          <th>Market Cap</th>
          <th>Volume</th>
          <th>Supply</th>
          <th>Max</th>
          <th>Chart</th>
        </tr>
      </thead>
      <tbody>
        {cryptoData.map((crypto, index) => (
          <CryptoRow key={index} index={index} crypto={crypto} />
        ))}
      </tbody>
    </Table>
  );
}

export default CryptoTable;
