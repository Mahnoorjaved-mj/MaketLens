
import { useEffect, useState } from 'react'
import { getAnomalies } from '../api.js'

export default function Anomalies() {
  const [data, setData] = useState(null)
  useEffect(() => { getAnomalies().then(setData) }, [])
  if (!data) return <div className="text-teal/50">Loading…</div>

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-semibold text-teal">Anomaly detection</h1>
        <p className="text-teal/50 text-xs mt-1">Rolling z-score flags on daily & regional revenue</p>
      </div>

      <div className="card">
        <div className="text-[13px] font-medium text-teal mb-3">Revenue anomalies</div>
        <table className="w-full text-[13px]">
          <thead>
            <tr className="text-teal/50 text-[10px] uppercase">
              <th className="text-left font-medium pb-2">Date</th>
              <th className="text-left font-medium pb-2">Type</th>
              <th className="text-right font-medium pb-2">Revenue</th>
              <th className="text-right font-medium pb-2">Z-score</th>
            </tr>
          </thead>
          <tbody>
            {data.revenue_anomalies.map((a) => (
              <tr key={a.date} className="border-b border-ice last:border-0">
                <td className="py-2 text-teal/80">{a.date}</td>
                <td className={`py-2 font-medium ${a.type === 'spike' ? 'text-gold' : 'text-red-500'}`}>{a.type}</td>
                <td className="py-2 text-right text-teal font-medium">${a.revenue.toLocaleString()}</td>
                <td className="py-2 text-right text-teal/60">{a.z_score}</td>
              </tr>
            ))}
            {data.revenue_anomalies.length === 0 && (
              <tr><td colSpan={4} className="py-4 text-teal/40 text-center">No anomalies detected at current threshold.</td></tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="card bg-ice border-none">
        <div className="text-[13px] font-medium text-teal mb-3">Regional anomalies</div>
        <table className="w-full text-[13px]">
          <thead>
            <tr className="text-teal/50 text-[10px] uppercase">
              <th className="text-left font-medium pb-2">Region</th>
              <th className="text-left font-medium pb-2">Date</th>
              <th className="text-right font-medium pb-2">Revenue</th>
              <th className="text-right font-medium pb-2">Z-score</th>
            </tr>
          </thead>
          <tbody>
            {data.regional_anomalies.map((a, i) => (
              <tr key={i} className="border-b border-teal/10 last:border-0">
                <td className="py-2 text-teal/80">{a.region_name}</td>
                <td className="py-2 text-teal/80">{a.date}</td>
                <td className="py-2 text-right text-teal font-medium">${a.revenue.toLocaleString()}</td>
                <td className="py-2 text-right text-teal/60">{a.z}</td>
              </tr>
            ))}
            {data.regional_anomalies.length === 0 && (
              <tr><td colSpan={4} className="py-4 text-teal/40 text-center">No regional anomalies detected.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}