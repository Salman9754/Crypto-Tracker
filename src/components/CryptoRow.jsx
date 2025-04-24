import React from 'react';

function CryptoRow({ index, crypto }) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td><img src={crypto.logo} alt={`${crypto.name} Logo`} width="30" height="30" /></td>
      <td>{crypto.name}</td>
      <td>{crypto.symbol}</td>
      <td>{crypto.price}</td>
      <td>{crypto.hour}</td>
      <td>{crypto.day}</td>
      <td>{crypto.week}</td>
      <td>{crypto.marketCap}</td>
      <td>{crypto.volume}</td>
      <td>{crypto.supply}</td>
      <td>{crypto.max}</td>
      <td>{crypto.chart}</td>
    </tr>
  );
}

export default CryptoRow;
