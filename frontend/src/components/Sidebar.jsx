import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard, TrendingUp, Package, Users, Sparkles, AlertTriangle,
} from 'lucide-react'

const links = [
  { to: '/', label: 'Overview', icon: LayoutDashboard },
  { to: '/sales', label: 'Sales', icon: TrendingUp },
  { to: '/products', label: 'Products', icon: Package },
  { to: '/customers', label: 'Customers', icon: Users },
  { to: '/forecast', label: 'Forecast', icon: Sparkles },
  { to: '/anomalies', label: 'Anomalies', icon: AlertTriangle },
]

export default function Sidebar() {
  return (
    <aside className="w-56 shrink-0 h-screen sticky top-0 bg-teal flex flex-col">
      <div className="px-4 py-5">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-gold" />
          <span className="text-cream font-semibold tracking-tight text-base">MarketLens</span>
        </div>
      </div>

      <nav className="flex-1 px-3 space-y-1">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-medium transition-colors ${
                isActive
                  ? 'bg-gold text-teal'
                  : 'text-sage hover:text-cream hover:bg-white/5'
              }`
            }
          >
            <Icon size={16} />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="px-4 py-4 border-t border-white/10 flex items-center gap-2.5">
        <div className="h-7 w-7 rounded-full bg-gold flex items-center justify-center text-[11px] font-medium text-teal">
          AJ
        </div>
        <div>
          <div className="text-cream text-[11.5px] font-medium">Alex Johnson</div>
          <div className="text-sage/70 text-[10.5px]">Data Analyst</div>
        </div>
      </div>
    </aside>
  )
}