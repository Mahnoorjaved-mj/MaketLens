function KpiCard({
  title,
  value,
  change,
  icon,
  positive = true,
}) {
  return (
    <div className="kpi-card">

      <div className="kpi-top">

        <div className="kpi-icon">
          {icon}
        </div>

        <span
          className={`kpi-change ${
            positive ? "positive" : "negative"
          }`}
        >
          {positive ? "↑" : "↓"} {change}
        </span>

      </div>

      <div className="kpi-title">
        {title}
      </div>

      <div className="kpi-value">
        {value}
      </div>

      <div className="kpi-period">
        Compared with last month
      </div>

    </div>
  );
}

export default KpiCard;