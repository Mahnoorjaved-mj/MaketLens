function Sidebar({ activePage, setActivePage }) {
  const mainItems = [
    {
      name: "Overview",
      icon: "⌂",
    },
  ];

  const analyticsItems = [
    {
      name: "Sales",
      icon: "↗",
    },
    {
      name: "Customers",
      icon: "♙",
    },
    {
      name: "Products",
      icon: "▦",
    },
  ];

  const intelligenceItems = [
    {
      name: "Forecast",
      icon: "◴",
    },
    {
      name: "Anomalies",
      icon: "△",
    },
  ];

  const renderItems = (items) =>
    items.map((item) => (
      <button
        key={item.name}
        className={`sidebar-item ${
          activePage === item.name ? "active" : ""
        }`}
        onClick={() => setActivePage(item.name)}
      >
        <span className="sidebar-icon">{item.icon}</span>
        <span>{item.name}</span>
      </button>
    ));

  return (
    <aside className="sidebar">

      {/* LOGO */}
      <div className="brand">
        <div className="brand-mark">
          M
        </div>

        <div>
          <h1>MarketLens</h1>
          <span>Business Intelligence</span>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className="navigation">

        <div className="nav-section">
          <span className="nav-title">
            OVERVIEW
          </span>

          {renderItems(mainItems)}
        </div>

        <div className="nav-section">
          <span className="nav-title">
            ANALYTICS
          </span>

          {renderItems(analyticsItems)}
        </div>

        <div className="nav-section">
          <span className="nav-title">
            INTELLIGENCE
          </span>

          {renderItems(intelligenceItems)}
        </div>

      </nav>

      {/* AI CARD */}
      <div className="sidebar-ai-card">

        <div className="ai-icon">
          ✦
        </div>

        <div>
          <strong>AI Insights</strong>
          <p>
            Your business is performing
            above average this month.
          </p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="sidebar-bottom">

        <button className="sidebar-item">
          <span className="sidebar-icon">⚙</span>
          <span>Settings</span>
        </button>

        <div className="sidebar-version">
          MarketLens v1.0
        </div>

      </div>

    </aside>
  );
}

export default Sidebar;