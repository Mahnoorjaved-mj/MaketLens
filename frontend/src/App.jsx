import { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import Overview from "./pages/Overview";
import Sales from "./pages/Sales";
import Customers from "./pages/Customers";
import Products from "./pages/Products";
import Forecast from "./pages/Forecast";
import Anomalies from "./pages/Anomalies";

function App() {
  const [activePage, setActivePage] = useState("overview");

  return (
    <div className="app">
      
      {/* SIDEBAR */}
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      {/* MAIN CONTENT */}
      <main className="main-content">

        {activePage === "overview" && <Overview />}

        {activePage === "sales" && <Sales />}

        {activePage === "customers" && <Customers />}

        {activePage === "products" && <Products />}

        {activePage === "forecast" && <Forecast />}

        {activePage === "anomalies" && <Anomalies />}

      </main>

    </div>
  );
}

export default App;