import CryptoTable from "./components/CryptoTable";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="container-fluid bg-dark">
       <div className="container">
       <Navbar />
       </div>
      </div>
      <div className="container d-flex justify-content-between align-items-center mt-5">
        <CryptoTable />
      </div>
    </>
  );
}

export default App;
