import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  CreditCard,
  Target,
  FolderOpen,
  BarChart3,
  Wallet,
  X
} from 'lucide-react'

interface SidebarProps {
  open: boolean
  onClose: () => void
}

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard, description: 'Overview & insights' },
  { name: 'Transactions', href: '/transactions', icon: CreditCard, description: 'Income & expenses' },
  { name: 'Budgets', href: '/budgets', icon: Target, description: 'Spending limits' },
  { name: 'Categories', href: '/categories', icon: FolderOpen, description: 'Organize spending' },
  { name: 'Analytics', href: '/analytics', icon: BarChart3, description: 'Financial trends' },
]

export function Sidebar({ open, onClose }: SidebarProps) {
  const location = useLocation()

  return (
    <>
      {/* Mobile backdrop */}
      {open && (
        <div 
          className="fixed inset-0 z-50 bg-gray-900/50 backdrop-blur-sm lg:hidden transition-opacity duration-300" 
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 z-50 flex w-80 flex-col transition-transform duration-300 ease-out lg:translate-x-0",
        open ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex grow flex-col gap-y-6 glass-card m-4 rounded-2xl p-6 overflow-y-auto">
          <div className="flex h-16 shrink-0 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 shadow-lg">
                <Wallet className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  FinanceFlow
                </span>
                <p className="text-xs text-gray-500 font-medium">Smart Budget Tracker</p>
              </div>
            </div>
            <button
              type="button"
              className="lg:hidden -m-2 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              onClick={onClose}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-2">
              <li>
                <ul role="list" className="space-y-2">
                  {navigation.map((item, index) => {
                    const isActive = location.pathname === item.href
                    return (
                      <li key={item.name} className="animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                        <Link
                          to={item.href}
                          onClick={onClose}
                          className={cn(
                            "group flex gap-x-4 rounded-xl p-4 text-sm font-medium transition-all duration-200 hover:scale-[1.02]",
                            isActive
                              ? "bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-700 border border-purple-200/50 shadow-lg shadow-purple-500/10"
                              : "text-gray-700 hover:text-purple-700 hover:bg-white/50 border border-transparent hover:border-purple-100/50 hover:shadow-md"
                          )}
                        >
                          <item.icon
                            className={cn(
                              "h-6 w-6 shrink-0 transition-colors duration-200",
                              isActive ? "text-purple-600" : "text-gray-400 group-hover:text-purple-600"
                            )}
                          />
                          <div className="flex-1">
                            <div className="font-semibold">{item.name}</div>
                            <div className="text-xs text-gray-500 group-hover:text-purple-600/70 transition-colors duration-200">
                              {item.description}
                            </div>
                          </div>
                          {isActive && (
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-sm"></div>
                          )}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </li>
              
              {/* Bottom section */}
              <li className="mt-auto">
                <div className="rounded-xl bg-gradient-to-r from-purple-50 to-blue-50 p-4 border border-purple-100/50">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">JD</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900 truncate">John Doe</p>
                      <p className="text-xs text-gray-500 truncate">Premium Account</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}