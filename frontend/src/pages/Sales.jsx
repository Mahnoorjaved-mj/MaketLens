import React, { useState } from "react";

const salesData = [
  { month: "Jan", revenue: 2.1, sales: 4200 },
  { month: "Feb", revenue: 2.6, sales: 5100 },
  { month: "Mar", revenue: 3.1, sales: 5900 },
  { month: "Apr", revenue: 2.8, sales: 5500 },
  { month: "May", revenue: 3.7, sales: 6800 },
  { month: "Jun", revenue: 4.2, sales: 7600 },
  { month: "Jul", revenue: 4.8, sales: 8200 },
  { month: "Aug", revenue: 5.1, sales: 8900 },
  { month: "Sep", revenue: 5.4, sales: 9300 },
  { month: "Oct", revenue: 6.1, sales: 10100 },
  { month: "Nov", revenue: 6.7, sales: 11200 },
  { month: "Dec", revenue: 7.2, sales: 12400 },
];

const products = [
  {
    rank: "01",
    name: "Premium Package",
    category: "Technology",
    revenue: "Rs 1.82M",
    growth: "+18.4%",
  },
  {
    rank: "02",
    name: "Business Suite",
    category: "Enterprise",
    revenue: "Rs 1.44M",
    growth: "+14.2%",
  },
  {
    rank: "03",
    name: "Analytics Pro",
    category: "Technology",
    revenue: "Rs 1.23M",
    growth: "+11.7%",
  },
  {
    rank: "04",
    name: "Starter Plan",
    category: "SMB",
    revenue: "Rs 980K",
    growth: "+8.9%",
  },
];

const regions = [
  { name: "North", value: 82 },
  { name: "South", value: 71 },
  { name: "East", value: 64 },
  { name: "West", value: 58 },
];

function Sales() {
  const [period, setPeriod] = useState("30 Days");
  const [category, setCategory] = useState("All");

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((item) => item.category === category);

  return (
    <main className="sales-page">

      {/* HEADER */}
      <section className="sales-page-header">

        <div>
          <span className="sales-eyebrow">
            SALES INTELLIGENCE
          </span>

          <h1>Sales Performance</h1>

          <p>
            Understand what is driving your revenue, sales and
            product performance.
          </p>
        </div>

        <div className="sales-header-actions">

          <div className="sales-period-switch">

            <button
              className={period === "30 Days" ? "active" : ""}
              onClick={() => setPeriod("30 Days")}
            >
              30 Days
            </button>

            <button
              className={period === "90 Days" ? "active" : ""}
              onClick={() => setPeriod("90 Days")}
            >
              90 Days
            </button>

          </div>

          <button
            className="sales-refresh"
            onClick={() => window.location.reload()}
          >
            ↻ Refresh
          </button>

        </div>

      </section>


      {/* FILTER BAR */}
      <section className="sales-filter-bar">

        <div className="sales-filter-info">
          <strong>Sales Filters</strong>
          <span>Analyze performance by business segment</span>
        </div>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Technology">Technology</option>
          <option value="Enterprise">Enterprise</option>
          <option value="SMB">SMB</option>
        </select>

        <select defaultValue="All Regions">
          <option>All Regions</option>
          <option>North</option>
          <option>South</option>
          <option>East</option>
          <option>West</option>
        </select>

        <select defaultValue="All Channels">
          <option>All Channels</option>
          <option>Online</option>
          <option>Retail</option>
          <option>Partner</option>
        </select>

      </section>


      {/* KPI CARDS */}
      <section className="sales-kpi-grid">

        <div className="sales-kpi">
          <div className="sales-kpi-top">
            <span>Total Revenue</span>
            <div className="sales-kpi-icon">Rs</div>
          </div>

          <strong>Rs 8.42M</strong>

          <small>
            <b>↑ 12.8%</b> vs previous period
          </small>

        </div>


        <div className="sales-kpi">
          <div className="sales-kpi-top">
            <span>Total Sales</span>
            <div className="sales-kpi-icon">↗</div>
          </div>

          <strong>24,680</strong>

          <small>
            <b>↑ 8.4%</b> vs previous period
          </small>

        </div>


        <div className="sales-kpi">
          <div className="sales-kpi-top">
            <span>Average Order Value</span>
            <div className="sales-kpi-icon">₨</div>
          </div>

          <strong>Rs 3,410</strong>

          <small>
            <b>↑ 4.7%</b> vs previous period
          </small>

        </div>


        <div className="sales-kpi">
          <div className="sales-kpi-top">
            <span>Conversion Rate</span>
            <div className="sales-kpi-icon">%</div>
          </div>

          <strong>18.6%</strong>

          <small>
            <b>↑ 2.1%</b> improvement
          </small>

        </div>

      </section>


      {/* MAIN ANALYTICS */}
      <section className="sales-main-grid">

        {/* REVENUE */}
        <div className="sales-panel">

          <div className="sales-panel-header">

            <div>
              <span className="sales-eyebrow">
                PERFORMANCE
              </span>

              <h2>Revenue Trend</h2>
            </div>

            <select defaultValue="Monthly">
              <option>Monthly</option>
              <option>Weekly</option>
              <option>Daily</option>
            </select>

          </div>


          <div className="sales-chart">

            <div className="sales-y-axis">
              <span>8M</span>
              <span>6M</span>
              <span>4M</span>
              <span>2M</span>
              <span>0</span>
            </div>


            <div className="sales-chart-area">

              <div className="sales-grid-lines">
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>


              <div className="sales-bars">

                {salesData.map((item) => (

                  <div
                    className="sales-bar-column"
                    key={item.month}
                  >

                    <div
                      className="sales-bar"
                      style={{
                        height: `${(item.revenue / 7.2) * 100}%`,
                      }}
                      title={`${item.month}: Rs ${item.revenue}M`}
                    />

                    <span>{item.month}</span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>


        {/* AI SALES INSIGHT */}
        <div className="sales-panel sales-ai-panel">

          <span className="sales-eyebrow">
            AI ANALYSIS
          </span>

          <div className="sales-ai-icon">
            ✦
          </div>

          <h2>Sales are accelerating</h2>

          <p>
            Revenue has increased consistently across the
            selected period. Technology products are currently
            contributing the strongest growth.
          </p>


          <div className="sales-ai-metric">

            <span>Growth detected</span>

            <strong>+12.8%</strong>

          </div>


          <div className="sales-confidence">

            <div>
              <span>AI confidence</span>
              <strong>94%</strong>
            </div>

            <div className="confidence-track">
              <div />
            </div>

          </div>


          <button className="sales-analysis-btn">
            View AI Analysis →
          </button>

        </div>

      </section>


      {/* LOWER SECTION */}
      <section className="sales-bottom-grid">


        {/* TOP PRODUCTS */}
        <div className="sales-panel">

          <div className="sales-panel-header">

            <div>
              <span className="sales-eyebrow">
                PERFORMANCE
              </span>

              <h2>Top Products</h2>
            </div>

            <button className="sales-view-btn">
              View all →
            </button>

          </div>


          <div className="sales-table">

            <div className="sales-table-head">
              <span>PRODUCT</span>
              <span>CATEGORY</span>
              <span>REVENUE</span>
              <span>GROWTH</span>
            </div>


            {filteredProducts.map((product) => (

              <div
                className="sales-table-row"
                key={product.name}
              >

                <div className="sales-product">

                  <b>{product.rank}</b>

                  <div>
                    <strong>{product.name}</strong>
                    <small>{product.category}</small>
                  </div>

                </div>

                <span>{product.category}</span>

                <strong>{product.revenue}</strong>

                <em>{product.growth}</em>

              </div>

            ))}

          </div>

        </div>


        {/* REGIONAL PERFORMANCE */}
        <div className="sales-panel">

          <div className="sales-panel-header">

            <div>
              <span className="sales-eyebrow">
                REGIONAL ANALYSIS
              </span>

              <h2>Sales by Region</h2>
            </div>

          </div>


          <div className="sales-region-list">

            {regions.map((region) => (

              <div
                className="sales-region"
                key={region.name}
              >

                <div className="sales-region-info">

                  <span>{region.name}</span>

                  <strong>{region.value}%</strong>

                </div>

                <div className="sales-region-track">

                  <div
                    style={{
                      width: `${region.value}%`,
                    }}
                  />

                </div>

              </div>

            ))}

          </div>


          <div className="sales-region-summary">

            <span>Best performing region</span>

            <strong>North</strong>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Sales;