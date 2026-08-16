import { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts'
import { getForecast } from '../api.js'

export default function Forecast() {
  const [data, setData] = useState(null)
  useEffect(() => { getForecast().then(setData) }, [])
  if (!data) return <div className="text-teal/50">Loading…</div>

  const merged = [
    ...data.actual.slice(-60).map(d => ({ date: d.date, actual: d.revenue })),
    ...data.forecast.map(d => ({ date: d.date, forecast: d.forecast_revenue })),
  ]

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-semibold text-teal">Forecast intelligence</h1>
        <p className="text-teal/50 text-xs mt-1">Trend + weekly seasonality projection, next 30 days</p>
      </div>

      <div className="card">
        <div className="text-[13px] font-medium text-teal mb-3">Actual vs forecast revenue</div>
        <ResponsiveContainer width="100%" height={330}>
          <LineChart data={merged}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E2EDED" />
            <XAxis dataKey="date" hide />
            <YAxis stroke="#465C59" fontSize={11} />
            <Tooltip contentStyle={{ background: '#FDFCFA', border: '1px solid #E2EDED' }} />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Line type="monotone" dataKey="actual" stroke="#465C59" strokeWidth={2} dot={false} name="Actual" />
            <Line type="monotone" dataKey="forecast" stroke="#CFA12C" strokeWidth={2} strokeDasharray="5 5" dot={false} name="Forecast" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <p className="text-xs text-teal/50">
        Model: linear trend fit + day-of-week seasonal factors on daily revenue — a lightweight
        baseline to demo the pipeline. Swap in Prophet, ARIMA, or XGBoost in{' '}
        <code className="text-teal/70">backend/main.py::forecast()</code> for production-grade accuracy
        without touching the frontend.
      </p>
    </div>
  )
}
