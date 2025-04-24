import { React, useEffect } from "react";
import Table from "react-bootstrap/Table";
import CryptoRow from "./CryptoRow";
import { useSelector, useDispatch } from "react-redux";
import { updateCryptoData } from "../redux/cryptoSlice/CryptoSlice";

function CryptoTable() {
  const Data = useSelector((state) => state.crypto.data);
  const Dispatch = useDispatch();
  useEffect(() => {
    const interval = setInterval(() => {
      Dispatch(updateCryptoData());
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [Dispatch]);
  if (!Data) {
    return <div>Loading...</div>;
  }

  return (
   <div style={{ overflowX: 'auto', width: '100%' }} className="table-responsive">
     <Table  bordered hover className="data_table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th style={{ minWidth: '60px' }}>1h %</th>
          <th style={{ minWidth: '80px' }}>24h %</th>
          <th>7d %</th>
          <th>Market Cap</th>
          <th>Volume</th>
          <th>Supply</th>
          <th>Chart</th>
        </tr>
      </thead>
      <tbody>
        {Data.map((crypto, index) => (
          <CryptoRow key={index} index={index} crypto={crypto} />
        ))}
      </tbody>
    </Table>
   </div>
  );
}

export default CryptoTable;
