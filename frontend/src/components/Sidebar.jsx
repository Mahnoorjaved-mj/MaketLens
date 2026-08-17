const menuItems = [
  { icon: "⌂", label: "Overview" },
  { icon: "↗", label: "Sales" },
  { icon: "♙", label: "Customers" },
  { icon: "▣", label: "Products" },
  { icon: "◷", label: "Forecast" },
  { icon: "⚠", label: "Anomalies" },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">M</div>

        <div>
          <h2>MarketLens</h2>
          <span>AI Business Intelligence</span>
        </div>
      </div>

      <div className="sidebar-section">
        <p className="sidebar-label">MAIN MENU</p>

        <nav>
          {menuItems.map((item, index) => (
            <button
              key={item.label}
              className={`nav-item ${index === 0 ? "active" : ""}`}
            >
              <span className="nav-icon">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="sidebar-bottom">
        <div className="ai-mini">
          <div className="ai-mini-icon">✦</div>

          <div>
            <strong>AI Insights</strong>
            <span>3 new insights</span>
          </div>
        </div>

        <button className="settings-btn">
          ⚙ <span>Settings</span>
        </button>

        <div className="profile">
          <div className="avatar">M</div>

          <div>
            <strong>MarketLens User</strong>
            <span>Business Analyst</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;