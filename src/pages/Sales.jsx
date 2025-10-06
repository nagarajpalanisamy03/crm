import React, { useState } from 'react';

const Sales = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [timeFilter, setTimeFilter] = useState('today');

  // Retail sales transactions
  const sales = [
    {
      id: 1,
      transactionId: 'TXN-001',
      customer: 'Walk-in Customer',
      items: 5,
      amount: '$45.75',
      payment: 'Credit Card',
      cashier: 'John Smith',
      time: '10:15 AM',
      date: 'Jan 26, 2025'
    },
    {
      id: 2,
      transactionId: 'TXN-002',
      customer: 'Loyalty Member #2345',
      items: 12,
      amount: '$89.50',
      payment: 'Mobile Pay',
      cashier: 'Sarah Wilson',
      time: '11:30 AM',
      date: 'Jan 26, 2025'
    },
    {
      id: 3,
      transactionId: 'TXN-003',
      customer: 'Walk-in Customer',
      items: 3,
      amount: '$23.25',
      payment: 'Cash',
      cashier: 'Mike Johnson',
      time: '02:45 PM',
      date: 'Jan 26, 2025'
    },
    {
      id: 4,
      transactionId: 'TXN-004',
      customer: 'Loyalty Member #1567',
      items: 8,
      amount: '$67.80',
      payment: 'Credit Card',
      cashier: 'Lisa Chen',
      time: '04:20 PM',
      date: 'Jan 26, 2025'
    },
    {
      id: 5,
      transactionId: 'TXN-005',
      customer: 'Walk-in Customer',
      items: 2,
      amount: '$12.50',
      payment: 'Debit Card',
      cashier: 'David Brown',
      time: '06:15 PM',
      date: 'Jan 26, 2025'
    }
  ];

  const salesStats = [
    { title: 'Today\'s Revenue', value: '$8,247', change: '+12%' },
    { title: 'Transactions', value: '156', change: '+8%' },
    { title: 'Avg. Transaction', value: '$52.87', change: '+3.2%' },
    { title: 'Items Sold', value: '842', change: '+15%' }
  ];

  const topProducts = [
    { name: 'Organic Milk', sales: 45, revenue: '$225' },
    { name: 'Bananas', sales: 38, revenue: '$30' },
    { name: 'Bread', sales: 32, revenue: '$112' },
    { name: 'Eggs', sales: 28, revenue: '$168' }
  ];

  const filteredSales = sales.filter(sale =>
    sale.transactionId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sale.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h1 className="text-2xl font-bold text-gray-800">Sales Management</h1>
        <p className="text-gray-600">Track retail sales and transactions</p>
      </div>

      {/* Sales Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {salesStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
              </div>
              <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Search and Filters */}
        <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-64">
                <input
                  type="text"
                  placeholder="Search transactions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
              </div>
              <select 
                value={timeFilter}
                onChange={(e) => setTimeFilter(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="year">This Year</option>
              </select>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors w-full sm:w-auto">
              📄 Generate Report
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Quick Stats</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Peak Hour</span>
              <span className="font-medium">11:00 AM - 1:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Busiest Cashier</span>
              <span className="font-medium">Sarah Wilson</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Popular Payment</span>
              <span className="font-medium">Credit Card (45%)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sales Transactions */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">TRANSACTION ID</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">CUSTOMER</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">ITEMS</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">AMOUNT</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">PAYMENT</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">CASHIER</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">TIME</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">DATE</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredSales.map(sale => (
                <tr key={sale.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4">
                    <div className="font-medium text-gray-900">{sale.transactionId}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-gray-600">{sale.customer}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-gray-600">{sale.items} items</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-medium text-gray-900">{sale.amount}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-gray-600">{sale.payment}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-gray-600">{sale.cashier}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-gray-600">{sale.time}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-gray-600">{sale.date}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        View
                      </button>
                      <button className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                        Receipt
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Products and Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Selling Products */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Top Selling Products</h2>
          <div className="space-y-3">
            {topProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{product.name}</p>
                    <p className="text-sm text-gray-600">{product.sales} units</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-800">{product.revenue}</p>
                  <p className="text-sm text-gray-600">Revenue</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Performance Metrics</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">Sales Target</span>
                <span className="text-sm font-medium text-gray-800">87%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '87%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">Customer Satisfaction</span>
                <span className="text-sm font-medium text-gray-800">94%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '94%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">Inventory Turnover</span>
                <span className="text-sm font-medium text-gray-800">78%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '78%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;