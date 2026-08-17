import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Overview from "./components/pages/Overview";
import Sales from "./components/pages/Sales";
import Customers from "./components/pages/Customers";
import Products from "./components/pages/Products";
import Forecast from "./components/pages/Forecast";
import Anomalies from "./components/pages/Anomalies";
import "./index.css";

function App() {
  const [activePage, setActivePage] = useState("Overview");

  const renderPage = () => {
    switch (activePage) {
      case "Sales":
        return <Sales />;
      case "Customers":
        return <Customers />;
      case "Products":
        return <Products />;
      case "Forecast":
        return <Forecast />;
      case "Anomalies":
        return <Anomalies />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="app">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main className="main-content">

        {/* TOP NAVBAR */}
        <header className="topbar">

          <div className="mobile-brand">
            <span className="brand-mark">M</span>
            <span>MarketLens</span>
          </div>

          <div className="topbar-actions">

            <div className="search-box">
              <span>⌕</span>
              <input
                type="text"
                placeholder="Search anything..."
              />
              <kbd>⌘ K</kbd>
            </div>

            <button className="icon-button">
              ♧
            </button>

            <div className="profile">
              <div className="avatar">M</div>
              <div className="profile-info">
                <strong>Mahnoor</strong>
                <span>Administrator</span>
              </div>
              <span className="chevron">⌄</span>
            </div>

          </div>
        </header>

        {/* PAGE */}
        <section className="page-container">
          {renderPage()}
        </section>

      </main>
    </div>
  );
}

export default App;