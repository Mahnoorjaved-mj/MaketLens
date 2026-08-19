import { useState } from "react";

function App() {
  const [activePage, setActivePage] = useState("Overview");

  const menuItems = [
    { name: "Overview", icon: "▦" },
    { name: "Sales Intelligence", icon: "▣" },
    { name: "Customers", icon: "♙" },
    { name: "Forecast", icon: "↗" },
    { name: "Anomalies", icon: "△" },
  ];

  // Enhanced with dedicated color themes for each metric
  const stats = [
    {
      title: "Total Revenue",
      value: "Rs 8.42M",
      change: "12.8%",
      icon: "Rs",
      theme: "emerald",
    },
    {
      title: "Total Sales",
      value: "24,680",
      change: "8.4%",
      icon: "↗",
      theme: "indigo",
    },
    {
      title: "Active Customers",
      value: "6,842",
      change: "5.7%",
      icon: "♟",
      theme: "purple",
    },
    {
      title: "AI Forecast Accuracy",
      value: "94.2%",
      change: "2.1%",
      icon: "✦",
      theme: "amber",
    },
  ];

  return (
    <div className="app">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div className="brand">
          <div className="brand-logo">M</div>

          <div>
            <h1>MarketLens</h1>
            <p>AI Business Intelligence</p>
          </div>
        </div>

        <div className="menu-title">MAIN MENU</div>

        <nav className="navigation">
          {menuItems.map((item) => (
            <button
              key={item.name}
              className={`nav-item ${
                activePage === item.name ? "active" : ""
              }`}
              onClick={() => setActivePage(item.name)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span>{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">

          <div className="ai-engine">
            <div className="ai-status">
              <span className="status-dot"></span>

              <div>
                <strong>AI Engine</strong>
                <small>Online & analyzing</small>
              </div>

              <span className="status-ring">◉</span>
            </div>
          </div>

          <div className="profile">
            <div className="profile-avatar">MJ</div>

            <div className="profile-info">
              <strong>Business Analyst</strong>
              <span>MarketLens User</span>
            </div>

            <span className="profile-arrow">⌄</span>
          </div>

        </div>
      </aside>


      {/* MAIN CONTENT */}
      <main className="main-content">

        {/* HEADER */}
        <header className="top-header">

          <div className="welcome">
            <span className="eyebrow">BUSINESS INTELLIGENCE</span>

            <h2>
              Good evening, Mahnoor <span>👋</span>
            </h2>

            <p>
              Here's what's happening across your business today.
            </p>
          </div>

          <div className="header-actions">

            <div className="period-buttons">
              <button className="period active">30 Days</button>
              <button className="period">90 Days</button>
            </div>

            <button className="refresh">
              ↻ Refresh
            </button>

            <div className="date">
              <strong>August 17, 2026</strong>
              <span>Monday</span>
            </div>

          </div>

        </header>


        {/* AI INSIGHT */}
        <section className="ai-insight">

          <div className="insight-icon">✦</div>

          <div className="insight-content">
            <span>AI INSIGHT</span>

            <h3>
              Revenue is trending upward with strong customer activity.
            </h3>

            <p>
              Sales increased 12.8% compared with the previous period.
              AI predicts continued growth over the next 30 days.
            </p>
          </div>

          <button className="analysis-button">
            View Analysis →
          </button>

        </section>


        {/* KPI CARDS */}
        <section className="stats-grid">

          {stats.map((stat) => (
            <div className={`stat-card stat-${stat.theme}`} key={stat.title}>

              <div className="stat-top">
                <span>{stat.title}</span>

                <div className="stat-icon">
                  {stat.icon}
                </div>
              </div>

              <h3>{stat.value}</h3>

              <p>
                <span className="positive">
                  ↑ {stat.change}
                </span>{" "}
                vs previous period
              </p>

              <div className="mini-bars">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </div>

            </div>
          ))}

        </section>


        {/* CHART AREA */}
        <section className="analytics-grid">

          <div className="chart-card">

            <div className="card-header">
              <div>
                <span>PERFORMANCE</span>
                <h3>Revenue Trend</h3>
              </div>

              <button className="dropdown">
                Monthly ⌄
              </button>
            </div>

            <div className="chart">

              <div className="y-labels">
                <span>10M</span>
                <span>8M</span>
                <span>6M</span>
                <span>4M</span>
                <span>2M</span>
                <span>0</span>
              </div>

              <div className="chart-area">

                <div className="grid-line one"></div>
                <div className="grid-line two"></div>
                <div className="grid-line three"></div>
                <div className="grid-line four"></div>
                <div className="grid-line five"></div>

                <svg
                  viewBox="0 0 900 280"
                  preserveAspectRatio="none"
                  className="line-chart"
                >
                  <defs>
                    {/* Glowing Multi-Color Gradient Fill */}
                    <linearGradient
                      id="areaGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#06B6D4"
                        stopOpacity="0.45"
                      />
                      <stop
                        offset="50%"
                        stopColor="#6366F1"
                        stopOpacity="0.18"
                      />
                      <stop
                        offset="100%"
                        stopColor="#6366F1"
                        stopOpacity="0.0"
                      />
                    </linearGradient>

                    {/* Gradient Stroke Line */}
                    <linearGradient
                      id="lineGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#06B6D4" />
                      <stop offset="60%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>

                  <path
                    d="
                      M 0 230
                      C 55 220, 80 225, 120 205
                      C 165 180, 190 188, 235 172
                      C 280 155, 300 175, 340 150
                      C 385 125, 420 145, 455 125
                      C 500 102, 530 125, 565 105
                      C 610 80, 640 98, 680 75
                      C 720 55, 760 68, 805 48
                      C 840 35, 865 42, 900 25
                      L 900 280
                      L 0 280
                      Z
                    "
                    fill="url(#areaGradient)"
                  />

                  <path
                    d="
                      M 0 230
                      C 55 220, 80 225, 120 205
                      C 165 180, 190 188, 235 172
                      C 280 155, 300 175, 340 150
                      C 385 125, 420 145, 455 125
                      C 500 102, 530 125, 565 105
                      C 610 80, 640 98, 680 75
                      C 720 55, 760 68, 805 48
                      C 840 35, 865 42, 900 25
                    "
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>

              </div>

            </div>

            <div className="months">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
              <span>Oct</span>
              <span>Nov</span>
              <span>Dec</span>
            </div>

          </div>


          {/* FORECAST */}
          <div className="forecast-card">

            <div className="forecast-header">
              <div>
                <span>PREDICTIVE ANALYTICS</span>
                <h3>AI Forecast</h3>
              </div>

              <span className="confidence">
                94% confidence
              </span>
            </div>

            <div className="forecast-value">
              Rs 9.16M
            </div>

            <p className="forecast-description">
              Predicted revenue for the next 30 days
            </p>

            <div className="forecast-progress">
              <div></div>
            </div>

            <div className="forecast-values">
              <div>
                <small>Current</small>
                <strong>Rs 8.42M</strong>
              </div>

              <div className="forecast-right">
                <small>Predicted</small>
                <strong>Rs 9.16M</strong>
              </div>
            </div>

            <div className="forecast-note">
              ✦ AI expects <strong>8.7% growth</strong> based on historical
              sales patterns.
            </div>

          </div>

        </section>


        {/* LOWER SECTION */}
        <section className="bottom-grid">

          <div className="bottom-card">
            <div className="bottom-title">
              <div>
                <span>PERFORMANCE</span>
                <h3>Top Products</h3>
              </div>

              <button>View all →</button>
            </div>

            <div className="product-row">
              <div className="product-rank gold">01</div>
              <div>
                <strong>Premium Analytics Suite</strong>
                <span>Enterprise Product</span>
              </div>
              <strong className="product-price">Rs 2.84M</strong>
            </div>

            <div className="product-row">
              <div className="product-rank indigo">02</div>
              <div>
                <strong>Business Intelligence Pro</strong>
                <span>Professional Product</span>
              </div>
              <strong className="product-price">Rs 1.96M</strong>
            </div>

            <div className="product-row">
              <div className="product-rank emerald">03</div>
              <div>
                <strong>AI Forecasting Module</strong>
                <span>AI Product</span>
              </div>
              <strong className="product-price">Rs 1.42M</strong>
            </div>
          </div>


          <div className="bottom-card anomaly-card">

            <div className="bottom-title">
              <div>
                <span>AI MONITORING</span>
                <h3>Detected Anomalies</h3>
              </div>

              <small>3 detected</small>
            </div>

            <div className="anomaly-item">
              <div className="warning critical">!</div>
              <div>
                <strong>Revenue spike detected</strong>
                <span>Sales are 18% above expected range.</span>
              </div>
            </div>

            <div className="anomaly-item">
              <div className="warning info">!</div>
              <div>
                <strong>Customer activity increased</strong>
                <span>Unusual activity detected this week.</span>
              </div>
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default App;