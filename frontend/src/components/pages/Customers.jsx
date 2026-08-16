import { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { getCustomers } from '../api.js'
import KpiCard from '../components/KpiCard.jsx'

const COLORS = ['#465C59', '#BED0CE', '#CFA12C']

export default function Customers() {
  const [data, setData] = useState(null)
  useEffect(() => { getCustomers().then(setData) }, [])
  if (!data) return <div className="text-teal/50">Loading…</div>

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-semibold text-teal">Customer intelligence</h1>
        <p className="text-teal/50 text-xs mt-1">What customers are doing</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <KpiCard label="Avg order value" value={`$${data.overall_avg_order_value}`} accent />
        {data.by_segment.map((s) => (
          <KpiCard
            key={s.segment}
            label={`${s.segment} customers`}
            value={`$${s.revenue.toLocaleString()}`}
            sub={`AOV $${s.avg_order_value}`}
            positive
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="card">
          <div className="text-[13px] font-medium text-teal mb-3">Revenue by segment</div>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={data.by_segment} dataKey="revenue" nameKey="segment" outerRadius={80}>
                {data.by_segment.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
              </Pie>
              <Tooltip contentStyle={{ background: '#FDFCFA', border: '1px solid #E2EDED' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="card bg-ice border-none">
          <div className="text-[13px] font-medium text-teal mb-3">Revenue by region</div>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={data.by_region} layout="vertical" margin={{ left: 10 }}>
              <XAxis type="number" stroke="#465C59" fontSize={10} />
              <YAxis type="category" dataKey="region_name" stroke="#465C59" fontSize={10} width={80} />
              <Tooltip contentStyle={{ background: '#FDFCFA', border: '1px solid #E2EDED' }} />
              <Bar dataKey="revenue" fill="#CFA12C" radius={[0, 6, 6, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}