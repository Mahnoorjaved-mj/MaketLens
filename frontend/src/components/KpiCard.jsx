export default function KpiCard({ label, value, sub, positive, accent }) {
  if (accent) {
    return (
      <div className="card-accent">
        <div className="text-[11px] uppercase tracking-wider text-teal/70">{label}</div>
        <div className="text-xl font-semibold text-teal mt-1">{value}</div>
        {sub && <div className="text-xs mt-1 text-teal/80">{sub}</div>}
      </div>
    )
  }

  return (
    <div className="card">
      <div className="kpi-label">{label}</div>
      <div className="kpi-value mt-1">{value}</div>
      {sub && (
        <div className={`text-xs mt-1 ${positive ? 'text-teal' : 'text-red-500'}`}>
          {sub}
        </div>
      )}
    </div>
  )
}