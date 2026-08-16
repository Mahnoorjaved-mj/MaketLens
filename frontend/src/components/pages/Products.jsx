import { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { getProducts } from '../api.js'

export default function Products() {
  const [data, setData] = useState(null)
  useEffect(() => { getProducts().then(setData) }, [])
  if (!data) return <div className="text-teal/50">Loading…</div>

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-semibold text-teal">Product & profitability</h1>
        <p className="text-teal/50 text-xs mt-1">Which products actually drive profit</p>
      </div>

      <div className="card bg-ice border-none">
        <div className="text-[13px] font-medium text-teal mb-3">Profit by category</div>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={data.by_category}>
            <XAxis dataKey="category" stroke="#465C59" fontSize={9} interval={0} angle={-15} textAnchor="end" height={50} />
            <YAxis stroke="#465C59" fontSize={10} />
            <Tooltip contentStyle={{ background: '#FDFCFA', border: '1px solid #E2EDED' }} />
            <Bar dataKey="profit" fill="#CFA12C" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="card">
          <div className="text-[13px] font-medium text-teal mb-3">Top 10 profitable products</div>
          <table className="w-full text-[13px]">
            <thead>
              <tr className="text-teal/50 text-[10px] uppercase">
                <th className="text-left font-medium pb-2">Product</th>
                <th className="text-right font-medium pb-2">Profit</th>
                <th className="text-right font-medium pb-2">Margin</th>
              </tr>
            </thead>
            <tbody>
              {data.top_profitable.map((p) => (
                <tr key={p.product_name} className="border-b border-ice last:border-0">
                  <td className="py-2 text-teal/80">{p.product_name}</td>
                  <td className="py-2 text-right text-teal font-medium">${p.profit.toLocaleString()}</td>
                  <td className="py-2 text-right text-teal">{p.margin_pct}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card">
          <div className="text-[13px] font-medium text-teal mb-3">Least profitable products</div>
          <table className="w-full text-[13px]">
            <thead>
              <tr className="text-teal/50 text-[10px] uppercase">
                <th className="text-left font-medium pb-2">Product</th>
                <th className="text-right font-medium pb-2">Profit</th>
                <th className="text-right font-medium pb-2">Margin</th>
              </tr>
            </thead>
            <tbody>
              {data.least_profitable.map((p) => (
                <tr key={p.product_name} className="border-b border-ice last:border-0">
                  <td className="py-2 text-teal/80">{p.product_name}</td>
                  <td className="py-2 text-right text-teal font-medium">${p.profit.toLocaleString()}</td>
                  <td className="py-2 text-right text-red-500">{p.margin_pct}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}