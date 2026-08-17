import { useEffect, useState } from 'react'
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
  BarChart, Bar,
} from 'recharts'
import { getOverview, getInsights } from '../api.js'
import { mockOverview, mockInsights } from '../mockData.js'
import KpiCard from '../components/KpiCard.jsx'

export default function Overview() {
  const [data, setData] = useState(null)
  const [insights, setInsights] = useState([])
  const [usingMockData, setUsingMockData] = useState(false)

  useEffect(() => {
    getOverview()
      .then(setData)
      .catch(() => {
        setData(mockOverview)
        setUsingMockData(true)
      })

    getInsights()
      .then(d => setInsights(d.insights || []))
      .catch(() => setInsights(mockInsights))
  }, [])

  if (!data) return <div className="text-teal/50">Loading overview…</div>

  const { kpis, revenue_trend, sales_by_region, top_products } = data

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-semibold text-teal">Executive overview</h1>
        <p className="text-teal/50 text-xs mt-1">Business health at a glance</p>
        {usingMockData && (
          <p className="text-[11px] text-gold mt-1">Showing sample data — backend not connected yet</p>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        <KpiCard label="Revenue" value={`$${kpis.total_revenue.toLocaleString()}`} />
        <KpiCard label="Profit" value={`$${kpis.total_profit.toLocaleString()}`} />
        <KpiCard label="Orders" value={kpis.total_orders.toLocaleString()} />
        <KpiCard label="Margin" value={`${kpis.profit_margin}%`} />
        <KpiCard
          label="Growth 30d"
          value={`${kpis.revenue_growth_30d >= 0 ? '+' : ''}${kpis.revenue_growth_30d}%`}
          accent
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        <div className="card lg:col-span-2">
          <div className="text-[13px] font-medium text-teal mb-3">Revenue trend</div>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={revenue_trend}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2EDED" />
              <XAxis dataKey="date" hide />
              <YAxis stroke="#465C59" fontSize={11} />
              <Tooltip contentStyle={{ background: '#FDFCFA', border: '1px solid #E2EDED' }} />
              <Line type="monotone" dataKey="revenue" stroke="#465C59" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card bg-ice border-none">
          <div className="text-[13px] font-medium text-teal mb-3">Sales by region</div>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={sales_by_region} layout="vertical" margin={{ left: 10 }}>
              <XAxis type="number" stroke="#465C59" fontSize={10} />
              <YAxis type="category" dataKey="region_name" stroke="#465C59" fontSize={10} width={80} />
              <Tooltip contentStyle={{ background: '#FDFCFA', border: '1px solid #E2EDED' }} />
              <Bar dataKey="revenue" fill="#CFA12C" radius={[0, 6, 6, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        <div className="card lg:col-span-2">
          <div className="text-[13px] font-medium text-teal mb-3">Top products</div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={top_products}>
              <XAxis dataKey="product_name" stroke="#465C59" fontSize={9} interval={0} angle={-15} textAnchor="end" height={50} />
              <YAxis stroke="#465C59" fontSize={10} />
              <Tooltip contentStyle={{ background: '#FDFCFA', border: '1px solid #E2EDED' }} />
              <Bar dataKey="revenue" fill="#465C59" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <div className="text-[13px] font-medium text-teal mb-3">AI business insights</div>
          <ul className="space-y-2 text-[13px] text-teal/80">
            {insights.map((line, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-gold">•</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}