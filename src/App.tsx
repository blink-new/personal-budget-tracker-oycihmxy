import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'
import { Dashboard } from './pages/Dashboard'
import { Transactions } from './pages/Transactions'
import { Budgets } from './pages/Budgets'
import { Categories } from './pages/Categories'
import { Analytics } from './pages/Analytics'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        {/* Background Gradient Orbs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-br from-blue-400/20 to-cyan-400/20 blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-indigo-400/10 to-purple-400/10 blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        </div>

        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <div className="lg:pl-80">
          <div className="sticky top-0 z-40 flex h-20 shrink-0 items-center gap-x-6 glass-card px-6 lg:px-8">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 hover:text-gray-900 lg:hidden transition-colors duration-200"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
            
            <div className="h-8 w-px bg-gray-200/60 lg:hidden" />
            
            <div className="flex flex-1 gap-x-6 self-stretch items-center">
              <div className="flex items-center gap-x-6">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent tracking-tight">
                  Budget Tracker
                </h1>
              </div>
              
              <div className="flex items-center gap-x-6 ml-auto">
                <div className="hidden lg:block lg:h-8 lg:w-px lg:bg-gray-200/40" />
                
                <div className="flex items-center gap-x-4">
                  <div className="text-right hidden sm:block">
                    <p className="text-sm font-medium text-gray-900">Welcome back!</p>
                    <p className="text-xs text-gray-500">Have a great day managing your finances</p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg ring-2 ring-white/20 flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">JD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <main className="py-8 relative">
            <div className="px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/budgets" element={<Budgets />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/analytics" element={<Analytics />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App