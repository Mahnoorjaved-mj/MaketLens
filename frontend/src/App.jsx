import React from "react";
import "./index.css";

function App() {
  return (
    <div className="app">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div className="brand">
          <div className="brand-icon">M</div>

          <div>
            <h1>MarketLens</h1>
            <span>AI Business Intelligence</span>
          </div>
        </div>

        <div className="nav-section">
          <p className="nav-title">MAIN MENU</p>

          <button className="nav-item active">
            <span>⌂</span>
            Overview
          </button>

          <button className="nav-item">
            <span>▥</span>
            Sales Intelligence
          </button>

          <button className="nav-item">
            <span>◉</span>
            Customers
          </button>

          <button className="nav-item">
            <span>↗</span>
            Forecast
          </button>

          <button className="nav-item">
            <span>△</span>
            Anomalies
          </button>
        </div>

        <div className="sidebar-bottom">
          <div className="ai-status">
            <div className="status-dot"></div>

            <div>
              <strong>AI Engine</strong>
              <small>Online & analyzing</small>
            </div>
          </div>

          <div className="user-box">
            <div className="avatar">MJ</div>

            <div>
              <strong>Business Analyst</strong>
              <small>MarketLens User</small>
            </div>
          </div>
        </div>

      </aside>


      {/* MAIN CONTENT */}
      <main className="main-content">

        {/* TOPBAR */}
        <header className="topbar">

          <div>
            <p className="eyebrow">BUSINESS INTELLIGENCE</p>
            <h2>Good evening, Mahnoor</h2>
            <p className="subtitle">
              Here's what is happening across your business today.
            </p>
          </div>

          <div className="topbar-actions">

            <button className="period-button active-period">
              30 Days
            </button>

            <button className="period-button">
              90 Days
            </button>

            <button className="refresh-button">
              ↻ Refresh
            </button>

          </div>

        </header>


        {/* AI INSIGHT */}
        <section className="ai-banner">

          <div className="ai-icon">
            ✦
          </div>

          <div className="ai-text">
            <span>AI INSIGHT</span>

            <h3>
              Revenue is trending upward with strong customer activity.
            </h3>

            <p>
              Sales increased 12.8% compared with the previous period.
              AI predicts continued growth over the next 30 days.
            </p>
          </div>

          <button className="insight-button">
            View Analysis →
          </button>

        </section>


        {/* KPI CARDS */}
        <section className="kpi-grid">

          <div className="kpi-card">

            <div className="kpi-top">
              <span>Total Revenue</span>
              <div className="kpi-icon">₨</div>
            </div>

            <h3>₨ 8.42M</h3>

            <div className="kpi-change positive">
              ↑ 12.8%
              <span>vs previous period</span>
            </div>

          </div>


          <div className="kpi-card">

            <div className="kpi-top">
              <span>Total Sales</span>
              <div className="kpi-icon">↗</div>
            </div>

            <h3>24,680</h3>

            <div className="kpi-change positive">
              ↑ 8.4%
              <span>vs previous period</span>
            </div>

          </div>


          <div className="kpi-card">

            <div className="kpi-top">
              <span>Active Customers</span>
              <div className="kpi-icon">◉</div>
            </div>

            <h3>6,842</h3>

            <div className="kpi-change positive">
              ↑ 5.7%
              <span>vs previous period</span>
            </div>

          </div>


          <div className="kpi-card">

            <div className="kpi-top">
              <span>AI Forecast Accuracy</span>
              <div className="kpi-icon">✦</div>
            </div>

            <h3>94.2%</h3>

            <div className="kpi-change positive">
              ↑ 2.1%
              <span>model performance</span>
            </div>

          </div>

        </section>


        {/* DASHBOARD GRID */}
        <section className="dashboard-grid">

          {/* SALES TREND */}
          <div className="panel sales-panel">

            <div className="panel-header">

              <div>
                <span className="panel-label">PERFORMANCE</span>
                <h3>Revenue Trend</h3>
              </div>

              <button className="small-button">
                Monthly ▾
              </button>

            </div>

            <div className="chart-placeholder">

              <div className="chart-y">
                <span>10M</span>
                <span>8M</span>
                <span>6M</span>
                <span>4M</span>
                <span>2M</span>
                <span>0</span>
              </div>

              <div className="chart-area">

                <div className="grid-line line-1"></div>
                <div className="grid-line line-2"></div>
                <div className="grid-line line-3"></div>
                <div className="grid-line line-4"></div>

                <svg
                  viewBox="0 0 700 250"
                  preserveAspectRatio="none"
                  className="chart-svg"
                >

                  <defs>
                    <linearGradient
                      id="areaGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#BED0CE"
                        stopOpacity="0.7"
                      />

                      <stop
                        offset="100%"
                        stopColor="#BED0CE"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>

                  <path
                    d="M0,190
                    C50,170 70,180 110,150
                    C150,120 175,145 215,110
                    C255,75 290,105 330,90
                    C370,75 390,105 430,70
                    C470,40 500,65 535,55
                    C575,45 600,75 630,45
                    C660,20 680,40 700,25
                    L700,250
                    L0,250 Z"
                    fill="url(#areaGradient)"
                  />

                  <path
                    d="M0,190
                    C50,170 70,180 110,150
                    C150,120 175,145 215,110
                    C255,75 290,105 330,90
                    C370,75 390,105 430,70
                    C470,40 500,65 535,55
                    C575,45 600,75 630,45
                    C660,20 680,40 700,25"
                    fill="none"
                    stroke="#465C59"
                    strokeWidth="4"
                  />

                </svg>

                <div className="chart-months">
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

            </div>

          </div>


          {/* AI FORECAST */}
          <div className="panel forecast-panel">

            <div className="panel-header">

              <div>
                <span className="panel-label">PREDICTIVE ANALYTICS</span>
                <h3>AI Forecast</h3>
              </div>

              <span className="confidence">
                94% confidence
              </span>

            </div>

            <div className="forecast-number">
              ₨ 9.16M
            </div>

            <p className="forecast-description">
              Predicted revenue for the next 30 days
            </p>

            <div className="forecast-bar">

              <div className="forecast-progress"></div>

            </div>

            <div className="forecast-details">

              <div>
                <span>Current</span>
                <strong>₨ 8.42M</strong>
              </div>

              <div>
                <span>Predicted</span>
                <strong>₨ 9.16M</strong>
              </div>

            </div>

            <div className="forecast-note">
              ✦ AI expects <strong>8.7% growth</strong> based on
              historical sales patterns.
            </div>

          </div>

        </section>


        {/* LOWER SECTION */}
        <section className="lower-grid">

          {/* TOP PRODUCTS */}
          <div className="panel">

            <div className="panel-header">

              <div>
                <span className="panel-label">PRODUCT INTELLIGENCE</span>
                <h3>Top Products</h3>
              </div>

              <button className="text-button">
                View all →
              </button>

            </div>

            <div className="product-list">

              <div className="product-row">
                <div className="product-rank">01</div>

                <div className="product-info">
                  <strong>Premium Package</strong>
                  <span>Technology</span>
                </div>

                <strong>₨ 1.82M</strong>

                <span className="positive">+18.4%</span>
              </div>


              <div className="product-row">
                <div className="product-rank">02</div>

                <div className="product-info">
                  <strong>Business Suite</strong>
                  <span>Enterprise</span>
                </div>

                <strong>₨ 1.46M</strong>

                <span className="positive">+14.2%</span>
              </div>


              <div className="product-row">
                <div className="product-rank">03</div>

                <div className="product-info">
                  <strong>Analytics Pro</strong>
                  <span>Software</span>
                </div>

                <strong>₨ 1.21M</strong>

                <span className="positive">+11.8%</span>
              </div>

            </div>

          </div>


          {/* ANOMALIES */}
          <div className="panel">

            <div className="panel-header">

              <div>
                <span className="panel-label">AI MONITORING</span>
                <h3>Detected Anomalies</h3>
              </div>

              <span className="alert-count">
                3 detected
              </span>

            </div>

            <div className="anomaly-list">

              <div className="anomaly">
                <div className="anomaly-icon warning">!</div>

                <div>
                  <strong>Sales spike detected</strong>
                  <p>Electronics · 2 hours ago</p>
                </div>

                <span>High</span>
              </div>


              <div className="anomaly">
                <div className="anomaly-icon neutral">↗</div>

                <div>
                  <strong>Customer activity increased</strong>
                  <p>Enterprise · Today</p>
                </div>

                <span>Medium</span>
              </div>


              <div className="anomaly">
                <div className="anomaly-icon warning">!</div>

                <div>
                  <strong>Unusual revenue pattern</strong>
                  <p>North region · Yesterday</p>
                </div>

                <span>High</span>
              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default App;