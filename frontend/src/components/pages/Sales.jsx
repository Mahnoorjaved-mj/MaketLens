import { useEffect, useState } from 'react'
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
  LineChart, Line,
} from 'recharts'
import { getSales } from '../api.js'

export default function Sales() {
  const [data, setData] = useState(null)

  useEffect(() => { getSales().then(setData) }, [])
  if (!data) return <div className="text-teal/50">Loading…</div>

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-semibold text-teal">Sales intelligence</h1>
        <p className="text-teal/50 text-xs mt-1">Where and when sales are performing</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="card">
          <div className="text-[13px] font-medium text-teal mb-3">Monthly revenue</div>
          <ResponsiveContainer width="100%" height={230}>
            <LineChart data={data.monthly_revenue}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2EDED" />
              <XAxis dataKey="month" stroke="#465C59" fontSize={10} />
              <YAxis stroke="#465C59" fontSize={10} />
              <Tooltip contentStyle={{ background: '#FDFCFA', border: '1px solid #E2EDED' }} />
              <Line type="monotone" dataKey="revenue" stroke="#465C59" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card bg-ice border-none">
          <div className="text-[13px] font-medium text-teal mb-3">Revenue by category</div>
          <ResponsiveContainer width="100%" height={230}>
            <BarChart data={data.by_category}>
              <XAxis dataKey="category" stroke="#465C59" fontSize={9} interval={0} angle={-15} textAnchor="end" height={50} />
              <YAxis stroke="#465C59" fontSize={10} />
              <Tooltip contentStyle={{ background: '#FDFCFA', border: '1px solid #E2EDED' }} />
              <Bar dataKey="revenue" fill="#CFA12C" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <div className="text-[13px] font-medium text-teal mb-3">Revenue by channel</div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data.by_channel}>
              <XAxis dataKey="channel" stroke="#465C59" fontSize={10} />
              <YAxis stroke="#465C59" fontSize={10} />
              <Tooltip contentStyle={{ background: '#FDFCFA', border: '1px solid #E2EDED' }} />
              <Bar dataKey="revenue" fill="#465C59" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card bg-ice border-none">
          <div className="text-[13px] font-medium text-teal mb-3">Revenue by region</div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data.by_region} layout="vertical" margin={{ left: 10 }}>
              <XAxis type="number" stroke="#465C59" fontSize={10} />
              <YAxis type="category" dataKey="region_name" stroke="#465C59" fontSize={10} width={80} />
              <Tooltip contentStyle={{ background: '#FDFCFA', border: '1px solid #E2EDED' }} />
              <Bar dataKey="revenue" fill="#CFA12C" radius={[0, 6, 6, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="card">
          <div className="text-[13px] font-medium text-teal mb-3">Top 5 products</div>
          <table className="w-full text-[13px]">
            <tbody>
              {data.top_products.map((p) => (
                <tr key={p.product_name} className="border-b border-ice last:border-0">
                  <td className="py-2 text-teal/80">{p.product_name}</td>
                  <td className="py-2 text-right text-teal font-medium">${p.revenue.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="card">
          <div className="text-[13px] font-medium text-teal mb-3">Bottom 5 products</div>
          <table className="w-full text-[13px]">
            <tbody>
              {data.bottom_products.map((p) => (
                <tr key={p.product_name} className="border-b border-ice last:border-0">
                  <td className="py-2 text-teal/80">{p.product_name}</td>
                  <td className="py-2 text-right text-teal font-medium">${p.revenue.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}