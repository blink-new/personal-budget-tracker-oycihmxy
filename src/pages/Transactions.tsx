import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { 
  Plus,
  Search,
  Filter,
  Download,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Sparkles
} from 'lucide-react'

// Mock data
const mockTransactions = [
  { id: 1, description: 'Salary Payment', amount: 3200.00, type: 'income', date: '2024-01-15', category: 'Job', account: 'Checking' },
  { id: 2, description: 'Whole Foods', amount: -125.50, type: 'expense', date: '2024-01-14', category: 'Groceries', account: 'Credit Card' },
  { id: 3, description: 'Shell Gas Station', amount: -45.00, type: 'expense', date: '2024-01-13', category: 'Transportation', account: 'Debit Card' },
  { id: 4, description: 'Starbucks', amount: -8.75, type: 'expense', date: '2024-01-13', category: 'Food & Dining', account: 'Credit Card' },
  { id: 5, description: 'Netflix Subscription', amount: -15.99, type: 'expense', date: '2024-01-12', category: 'Entertainment', account: 'Credit Card' },
  { id: 6, description: 'Amazon Purchase', amount: -67.89, type: 'expense', date: '2024-01-11', category: 'Shopping', account: 'Credit Card' },
  { id: 7, description: 'Freelance Project', amount: 500.00, type: 'income', date: '2024-01-10', category: 'Freelance', account: 'Checking' },
  { id: 8, description: 'Electric Bill', amount: -89.45, type: 'expense', date: '2024-01-09', category: 'Utilities', account: 'Checking' },
]

const categories = ['All', 'Food & Dining', 'Transportation', 'Entertainment', 'Shopping', 'Utilities', 'Job', 'Freelance', 'Groceries']

export function Transactions() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)

  const filteredTransactions = mockTransactions.filter(transaction => {
    const matchesSearch = transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.category.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || transaction.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const totalIncome = mockTransactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0)

  const totalExpenses = mockTransactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + Math.abs(t.amount), 0)

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent">
            Transaction History
          </h1>
          <p className="text-lg text-gray-600 font-medium">Track and manage all your financial transactions</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="glass-card hover:shadow-lg transition-all duration-200">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
                <Plus className="h-4 w-4 mr-2" />
                Add Transaction
              </Button>
            </DialogTrigger>
            <DialogContent className="glass-card border-white/20">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Add New Transaction
                </DialogTitle>
                <DialogDescription className="text-gray-600">
                  Record a new income or expense transaction
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-6 py-4">
                <div className="grid gap-3">
                  <Label htmlFor="amount" className="text-sm font-semibold text-gray-700">Amount</Label>
                  <Input id="amount" type="number" placeholder="0.00" className="glass-card border-white/20" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="type" className="text-sm font-semibold text-gray-700">Type</Label>
                  <Select>
                    <SelectTrigger className="glass-card border-white/20">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="income">Income</SelectItem>
                      <SelectItem value="expense">Expense</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="category" className="text-sm font-semibold text-gray-700">Category</Label>
                  <Select>
                    <SelectTrigger className="glass-card border-white/20">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="food">Food & Dining</SelectItem>
                      <SelectItem value="transport">Transportation</SelectItem>
                      <SelectItem value="entertainment">Entertainment</SelectItem>
                      <SelectItem value="shopping">Shopping</SelectItem>
                      <SelectItem value="utilities">Utilities</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="description" className="text-sm font-semibold text-gray-700">Description</Label>
                  <Textarea id="description" placeholder="Enter transaction description" className="glass-card border-white/20" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="date" className="text-sm font-semibold text-gray-700">Date</Label>
                  <Input id="date" type="date" className="glass-card border-white/20" />
                </div>
              </div>
              <div className="flex justify-end gap-3">
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)} className="glass-card">
                  Cancel
                </Button>
                <Button onClick={() => setIsAddDialogOpen(false)} className="bg-gradient-to-r from-purple-600 to-blue-600">
                  Add Transaction
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="glass-card hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group animate-slide-up">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-semibold text-gray-700">Total Income</CardTitle>
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <ArrowUpRight className="h-5 w-5 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
              ${totalIncome.toLocaleString()}
            </div>
            <p className="text-sm text-gray-600 mt-2 flex items-center gap-1">
              <Sparkles className="h-4 w-4 text-green-500" />
              All time earnings
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group animate-slide-up" style={{animationDelay: '0.1s'}}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-semibold text-gray-700">Total Expenses</CardTitle>
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <ArrowDownRight className="h-5 w-5 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-700 bg-clip-text text-transparent">
              ${totalExpenses.toLocaleString()}
            </div>
            <p className="text-sm text-gray-600 mt-2 flex items-center gap-1">
              <ArrowDownRight className="h-4 w-4 text-rose-500" />
              All time spending
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group animate-slide-up" style={{animationDelay: '0.2s'}}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-semibold text-gray-700">Net Worth</CardTitle>
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <Calendar className="h-5 w-5 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-700 bg-clip-text text-transparent">
              ${(totalIncome - totalExpenses).toLocaleString()}
            </div>
            <p className="text-sm text-gray-600 mt-2 flex items-center gap-1">
              <Calendar className="h-4 w-4 text-purple-500" />
              Current balance
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{animationDelay: '0.3s'}}>
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            placeholder="Search transactions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-12 glass-card border-white/20 h-12 text-base"
          />
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full sm:w-56 glass-card border-white/20 h-12">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {categories.map(category => (
              <SelectItem key={category} value={category}>{category}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Transactions List */}
      <Card className="glass-card hover:shadow-xl transition-all duration-300 animate-slide-up" style={{animationDelay: '0.4s'}}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl font-bold text-gray-900">All Transactions</CardTitle>
              <CardDescription className="text-gray-600 mt-1">
                {filteredTransactions.length} of {mockTransactions.length} transactions
              </CardDescription>
            </div>
            <Badge variant="secondary" className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-200/50">
              {filteredTransactions.length} results
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {filteredTransactions.map((transaction, index) => (
              <div 
                key={transaction.id} 
                className="flex items-center justify-between p-5 rounded-xl glass-card border-white/20 hover:border-purple-200/50 hover:shadow-lg transition-all duration-200 cursor-pointer group animate-slide-up"
                style={{animationDelay: `${0.5 + index * 0.05}s`}}
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl ${transaction.type === 'income' ? 'bg-gradient-to-br from-green-100 to-emerald-100' : 'bg-gradient-to-br from-rose-100 to-pink-100'} group-hover:scale-110 transition-transform duration-200`}>
                    {transaction.type === 'income' ? 
                      <ArrowUpRight className="h-6 w-6 text-green-600" /> : 
                      <ArrowDownRight className="h-6 w-6 text-rose-600" />
                    }
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-lg">{transaction.description}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <Badge variant="secondary" className="text-xs font-medium bg-white/80 border border-gray-200">
                        {transaction.category}
                      </Badge>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-500 font-medium">{transaction.account}</span>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-500 font-medium">{transaction.date}</span>
                    </div>
                  </div>
                </div>
                <div className={`text-xl font-bold ${transaction.type === 'income' ? 'text-green-600' : 'text-rose-600'}`}>
                  {transaction.type === 'income' ? '+' : '-'}${Math.abs(transaction.amount).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}