export const mockOverview = {
  kpis: {
    total_revenue: 482300,
    total_profit: 168900,
    total_orders: 9842,
    profit_margin: 35,
    revenue_growth_30d: 12.4,
  },
  revenue_trend: Array.from({ length: 30 }, (_, i) => ({
    date: `Day ${i + 1}`,
    revenue: 8000 + Math.round(Math.sin(i / 3) * 2000 + i * 100),
  })),
  sales_by_region: [
    { region_name: "North America", revenue: 152000 },
    { region_name: "Europe", revenue: 118000 },
    { region_name: "MENA", revenue: 76000 },
    { region_name: "South Asia", revenue: 61000 },
    { region_name: "Southeast Asia", revenue: 45000 },
    { region_name: "Australia", revenue: 30300 },
  ],
  top_products: [
    { product_name: "Aurora Speaker", revenue: 42000 },
    { product_name: "Nimbus Jacket", revenue: 38000 },
    { product_name: "Solace Lamp", revenue: 31000 },
    { product_name: "Vertex Backpack", revenue: 27000 },
    { product_name: "Drift Mug", revenue: 21000 },
  ],
}

export const mockInsights = [
  "Revenue is up 12.4% over the trailing 30 days vs the prior 30.",
  "North America is the leading region by revenue.",
  "Aurora Speaker is the top-selling product by revenue.",
  "Revenue spiked sharply on 2026-08-02 (z-score 3.1).",
  "Overall profit margin currently stands at 35%.",
]