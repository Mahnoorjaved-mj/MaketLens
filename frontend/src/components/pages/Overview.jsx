import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

import KpiCard from "../KpiCard";

const revenueData = [
  { month: "Jan", revenue: 42000 },
  { month: "Feb", revenue: 51000 },
  { month: "Mar", revenue: 47000 },
  { month: "Apr", revenue: 63000 },
  { month: "May", revenue: 72000 },
  { month: "Jun", revenue: 68000 },
  { month: "Jul", revenue: 84000 },
  { month: "Aug", revenue: 92000 },
];

const categoryData = [
  { name: "Technology", sales: 82000 },
  { name: "Electronics", sales: 68000 },
  { name: "Furniture", sales: 52000 },
  { name: "Accessories", sales: 39000 },
];

function Overview() {
  return (
    <div className="dashboard">

      {/* HEADER */}
      <div className="page-header">

        <div>
          <span className="eyebrow">
            BUSINESS OVERVIEW
          </span>

          <h2>
            Good morning, Mahnoor
          </h2>

          <p>
            Here's what's happening across your business today.
          </p>
        </div>

        <div className="header-actions">

          <button className="date-button">
            ◷ &nbsp; August 2026
          </button>

          <button className="primary-button">
            + Add Report
          </button>

        </div>

      </div>

      {/* KPI CARDS */}
      <div className="kpi-grid">

        <KpiCard
          title="Total Revenue"
          value="$124.8K"
          change="12.4%"
          icon="$"
        />

        <KpiCard
          title="Total Sales"
          value="3,842"
          change="8.2%"
          icon="↗"
        />

        <KpiCard
          title="Customers"
          value="8,421"
          change="5.7%"
          icon="♙"
        />

        <KpiCard
          title="Avg. Order Value"
          value="$84.32"
          change="4.8%"
          icon="◇"
        />

      </div>

      {/* MAIN GRID */}
      <div className="dashboard-grid">

        {/* REVENUE CHART */}
        <div className="dashboard-card revenue-card">

          <div className="card-header">

            <div>
              <h3>Revenue Performance</h3>
              <p>Monthly revenue overview</p>
            </div>

            <button className="more-button">
              ⋮
            </button>

          </div>

          <div className="chart-container">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <AreaChart data={revenueData}>

                <defs>
                  <linearGradient
                    id="revenueGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#465C59"
                      stopOpacity={0.25}
                    />

                    <stop
                      offset="100%"
                      stopColor="#465C59"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  stroke="#D5E0DE"
                  strokeDasharray="3 3"
                  vertical={false}
                />

                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#71827F", fontSize: 12 }}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#71827F", fontSize: 12 }}
                  tickFormatter={(value) =>
                    `$${value / 1000}k`
                  }
                />

                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#465C59"
                  strokeWidth={3}
                  fill="url(#revenueGradient)"
                />

              </AreaChart>
            </ResponsiveContainer>

          </div>

        </div>

        {/* AI INSIGHT */}
        <div className="dashboard-card insight-card">

          <div className="card-header">

            <div>
              <span className="ai-label">
                ✦ AI POWERED
              </span>

              <h3>Business Insight</h3>
            </div>

          </div>

          <div className="insight-main">

            <div className="insight-circle">
              <span>+14.8%</span>
              <small>forecast</small>
            </div>

            <div className="insight-text">
              <strong>
                Revenue is expected to grow
              </strong>

              <p>
                Based on current sales patterns,
                customer behavior and historical
                performance.
              </p>
            </div>

          </div>

          <div className="insight-divider" />

          <div className="insight-row">
            <span>Confidence</span>
            <strong>92%</strong>
          </div>

          <div className="insight-row">
            <span>Trend</span>
            <strong className="trend-positive">
              ↑ Strong growth
            </strong>
          </div>

        </div>

      </div>

      {/* LOWER GRID */}
      <div className="dashboard-grid lower-grid">

        {/* CATEGORY */}
        <div className="dashboard-card">

          <div className="card-header">

            <div>
              <h3>Sales by Category</h3>
              <p>Top performing categories</p>
            </div>

            <button className="more-button">
              ⋮
            </button>

          </div>

          <div className="bar-chart">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <BarChart data={categoryData}>

                <CartesianGrid
                  stroke="#D5E0DE"
                  strokeDasharray="3 3"
                  vertical={false}
                />

                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: "#71827F",
                    fontSize: 11,
                  }}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: "#71827F",
                    fontSize: 11,
                  }}
                />

                <Tooltip />

                <Bar
                  dataKey="sales"
                  fill="#465C59"
                  radius={[6, 6, 0, 0]}
                />

              </BarChart>
            </ResponsiveContainer>

          </div>

        </div>

        {/* QUICK INSIGHTS */}
        <div className="dashboard-card">

          <div className="card-header">

            <div>
              <h3>Quick Insights</h3>
              <p>What needs your attention</p>
            </div>

          </div>

          <div className="quick-insights">

            <div className="quick-item">
              <div className="quick-icon">↑</div>

              <div>
                <strong>
                  Sales increased 12.4%
                </strong>

                <span>
                  Compared with previous month
                </span>
              </div>
            </div>

            <div className="quick-item">
              <div className="quick-icon">✦</div>

              <div>
                <strong>
                  Technology is leading
                </strong>

                <span>
                  Highest revenue category
                </span>
              </div>
            </div>

            <div className="quick-item warning">
              <div className="quick-icon">△</div>

              <div>
                <strong>
                  3 anomalies detected
                </strong>

                <span>
                  Review unusual sales activity
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Overview;