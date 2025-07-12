import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Target,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  Sparkles,
  Eye
} from 'lucide-react'

// Mock data - this would come from your database/state management
const mockData = {
  totalBalance: 5420.50,
  monthlyIncome: 3200.00,
  monthlyExpenses: 2150.75,
  budgetUsage: 67,
  recentTransactions: [
    { id: 1, description: 'Salary Payment', amount: 3200.00, type: 'income', date: '2024-01-15', category: 'Job' },
    { id: 2, description: 'Whole Foods Market', amount: -85.50, type: 'expense', date: '2024-01-14', category: 'Food' },
    { id: 3, description: 'Shell Gas Station', amount: -45.00, type: 'expense', date: '2024-01-13', category: 'Transportation' },
    { id: 4, description: 'Starbucks Coffee', amount: -8.75, type: 'expense', date: '2024-01-13', category: 'Food' },
    { id: 5, description: 'Netflix Subscription', amount: -15.99, type: 'expense', date: '2024-01-12', category: 'Entertainment' },
  ],
  budgetCategories: [
    { name: 'Food & Dining', spent: 280, budget: 400, color: 'from-rose-400 to-pink-400' },
    { name: 'Transportation', spent: 150, budget: 200, color: 'from-blue-400 to-cyan-400' },
    { name: 'Entertainment', spent: 75, budget: 100, color: 'from-green-400 to-emerald-400' },
    { name: 'Shopping', spent: 320, budget: 300, color: 'from-amber-400 to-orange-400' },
  ]
}

export function Dashboard() {
  const savingsThisMonth = mockData.monthlyIncome - mockData.monthlyExpenses

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
            Financial Overview
          </h1>
          <p className="text-lg text-gray-600 font-medium">Track your finances and reach your goals</p>
        </div>
        <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
          <Plus className="h-4 w-4 mr-2" />
          Add Transaction
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="glass-card hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group animate-slide-up">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-semibold text-gray-700">Total Balance</CardTitle>
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <DollarSign className="h-5 w-5 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              ${mockData.totalBalance.toLocaleString()}
            </div>
            <p className="text-sm text-gray-600 mt-2 flex items-center gap-1">
              <TrendingUp className="h-4 w-4 text-green-500" />
              +2.1% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group animate-slide-up" style={{animationDelay: '0.1s'}}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-semibold text-gray-700">Monthly Income</CardTitle>
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <TrendingUp className="h-5 w-5 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
              ${mockData.monthlyIncome.toLocaleString()}
            </div>
            <p className="text-sm text-gray-600 mt-2 flex items-center gap-1">
              <Sparkles className="h-4 w-4 text-green-500" />
              On track this month
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group animate-slide-up" style={{animationDelay: '0.2s'}}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-semibold text-gray-700">Monthly Expenses</CardTitle>
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <TrendingDown className="h-5 w-5 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-700 bg-clip-text text-transparent">
              ${mockData.monthlyExpenses.toLocaleString()}
            </div>
            <p className="text-sm text-gray-600 mt-2 flex items-center gap-1">
              <ArrowDownRight className="h-4 w-4 text-rose-500" />
              -5.2% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group animate-slide-up" style={{animationDelay: '0.3s'}}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-semibold text-gray-700">Monthly Savings</CardTitle>
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <Target className="h-5 w-5 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-700 bg-clip-text text-transparent">
              ${savingsThisMonth.toLocaleString()}
            </div>
            <p className="text-sm text-gray-600 mt-2 flex items-center gap-1">
              <TrendingUp className="h-4 w-4 text-purple-500" />
              +12.3% savings rate
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Recent Transactions */}
        <Card className="lg:col-span-2 glass-card hover:shadow-xl transition-all duration-300 animate-slide-up" style={{animationDelay: '0.4s'}}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl font-bold text-gray-900">Recent Activity</CardTitle>
                <CardDescription className="text-gray-600 mt-1">Your latest financial transactions</CardDescription>
              </div>
              <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700 hover:bg-purple-50">
                <Eye className="h-4 w-4 mr-2" />
                View all
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockData.recentTransactions.map((transaction, index) => (
                <div 
                  key={transaction.id} 
                  className="flex items-center justify-between p-4 rounded-xl hover:bg-white/50 transition-all duration-200 border border-white/20 hover:border-purple-200/50 hover:shadow-sm group"
                  style={{animationDelay: `${0.5 + index * 0.1}s`}}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl ${transaction.type === 'income' ? 'bg-gradient-to-br from-green-100 to-emerald-100' : 'bg-gradient-to-br from-rose-100 to-pink-100'} group-hover:scale-110 transition-transform duration-200`}>
                      {transaction.type === 'income' ? 
                        <ArrowUpRight className="h-5 w-5 text-green-600" /> : 
                        <ArrowDownRight className="h-5 w-5 text-rose-600" />
                      }
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{transaction.description}</p>
                      <p className="text-sm text-gray-500 flex items-center gap-2">
                        <span className="px-2 py-1 bg-gray-100 rounded-md text-xs font-medium">{transaction.category}</span>
                        <span>•</span>
                        <span>{transaction.date}</span>
                      </p>
                    </div>
                  </div>
                  <div className={`text-lg font-bold ${transaction.type === 'income' ? 'text-green-600' : 'text-rose-600'}`}>
                    {transaction.type === 'income' ? '+' : '-'}${Math.abs(transaction.amount).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Budget Overview */}
        <Card className="glass-card hover:shadow-xl transition-all duration-300 animate-slide-up" style={{animationDelay: '0.5s'}}>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900">Budget Status</CardTitle>
            <CardDescription className="text-gray-600">Monthly spending by category</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {mockData.budgetCategories.map((category, index) => {
              const percentage = (category.spent / category.budget) * 100
              const isOverBudget = percentage > 100
              
              return (
                <div 
                  key={category.name} 
                  className="space-y-3 animate-slide-up"
                  style={{animationDelay: `${0.6 + index * 0.1}s`}}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`}></div>
                      <span className="font-semibold text-gray-800">{category.name}</span>
                    </div>
                    <span className={`font-bold text-sm ${isOverBudget ? 'text-red-600' : 'text-gray-900'}`}>
                      ${category.spent} / ${category.budget}
                    </span>
                  </div>
                  <div className="relative">
                    <Progress 
                      value={Math.min(percentage, 100)} 
                      className={`h-3 ${isOverBudget ? 'bg-red-100' : 'bg-gray-100'}`}
                    />
                    {isOverBudget && (
                      <div className="absolute top-0 left-0 h-3 w-full bg-gradient-to-r from-red-400 to-red-500 rounded-full opacity-20"></div>
                    )}
                  </div>
                  {isOverBudget && (
                    <p className="text-xs text-red-600 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                      Over budget by ${category.spent - category.budget}
                    </p>
                  )}
                </div>
              )
            })}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}