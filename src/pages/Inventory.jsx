import React, { useState } from 'react';

const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const inventoryItems = [
    {
      id: 1,
      product: 'Organic Whole Milk',
      sku: 'PROD-001',
      category: 'Dairy',
      currentStock: 45,
      minStock: 20,
      maxStock: 100,
      lastRestock: 'Jan 26, 2025',
      nextRestock: 'Feb 2, 2025',
      status: 'Healthy'
    },
    {
      id: 2,
      product: 'Bananas (1lb)',
      sku: 'PROD-002',
      category: 'Produce',
      currentStock: 12,
      minStock: 50,
      maxStock: 200,
      lastRestock: 'Mar 14, 2025',
      nextRestock: 'Mar 16, 2025',
      status: 'Low Stock'
    },
    {
      id: 3,
      product: 'Whole Wheat Bread',
      sku: 'PROD-003',
      category: 'Bakery',
      currentStock: 8,
      minStock: 25,
      maxStock: 80,
      lastRestock: 'Oct 20, 2025',
      nextRestock: 'Oct 21, 2025',
      status: 'Critical'
    },
    {
      id: 4,
      product: 'Free Range Eggs (12)',
      sku: 'PROD-004',
      category: 'Dairy',
      currentStock: 34,
      minStock: 30,
      maxStock: 120,
      lastRestock: 'Dec 25, 2025',
      nextRestock: 'Jan 1, 2025',
      status: 'Healthy'
    },
    {
      id: 5,
      product: 'Ground Beef (1lb)',
      sku: 'PROD-005',
      category: 'Meat',
      currentStock: 0,
      minStock: 15,
      maxStock: 60,
      lastRestock: 'May 1, 2025',
      nextRestock: 'May 3, 2025',
      status: 'Out of Stock'
    }
  ];

  const inventoryStats = [
    { title: 'Total Items', value: '1,247', change: '+12%' },
    { title: 'Low Stock', value: '23', change: '-5%' },
    { title: 'Out of Stock', value: '8', change: '+2' },
    { title: 'Inventory Value', value: '$45.8K', change: '+8.7%' }
  ];

  const filteredItems = inventoryItems.filter(item =>
    item.product.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (statusFilter === 'all' || item.status === statusFilter)
  );

  const getStatusBadge = (status) => {
    const styles = {
      'Healthy': 'bg-green-100 text-green-800 border border-green-200',
      'Low Stock': 'bg-yellow-100 text-yellow-800 border border-yellow-200',
      'Critical': 'bg-orange-100 text-orange-800 border border-orange-200',
      'Out of Stock': 'bg-red-100 text-red-800 border border-red-200'
    };
    return `px-2 py-1 text-xs rounded-full ${styles[status]}`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h1 className="text-2xl font-bold text-gray-800">Inventory Management</h1>
        <p className="text-gray-600">Monitor stock levels and manage inventory</p>
      </div>

      {/* Inventory Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {inventoryStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
              </div>
              <span className={`text-sm font-medium px-2 py-1 rounded ${
                stat.change.startsWith('+') ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'
              }`}>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Search and Actions Bar */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <input
                type="text"
                placeholder="Search inventory..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
            </div>
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Status</option>
              <option value="Healthy">Healthy</option>
              <option value="Low Stock">Low Stock</option>
              <option value="Critical">Critical</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors w-full sm:w-auto">
             Restock Items
          </button>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">PRODUCT</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">SKU</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">CATEGORY</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">CURRENT STOCK</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">MIN STOCK</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">MAX STOCK</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">STATUS</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">LAST RESTOCK</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">NEXT RESTOCK</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredItems.map(item => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4">
                    <div className="font-medium text-gray-900">{item.product}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-gray-600">{item.sku}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-gray-600">{item.category}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className={`font-medium ${
                      item.currentStock < item.minStock ? 'text-red-600' : 'text-gray-900'
                    }`}>
                      {item.currentStock}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-gray-600">{item.minStock}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-gray-600">{item.maxStock}</div>
                  </td>
                  <td className="py-3 px-4">
                    <span className={getStatusBadge(item.status)}>
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-gray-600">{item.lastRestock}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-gray-600">{item.nextRestock}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        View
                      </button>
                      <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                        Restock
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Stock Alerts */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Stock Alerts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 border border-red-200 rounded-lg bg-red-50">
            <div className="text-xl font-bold text-red-600">8</div>
            <div className="text-sm text-red-600">Out of Stock</div>
          </div>
          <div className="text-center p-4 border border-orange-200 rounded-lg bg-orange-50">
            <div className="text-xl font-bold text-orange-600">5</div>
            <div className="text-sm text-orange-600">Critical Stock</div>
          </div>
          <div className="text-center p-4 border border-yellow-200 rounded-lg bg-yellow-50">
            <div className="text-xl font-bold text-yellow-600">10</div>
            <div className="text-sm text-yellow-600">Low Stock</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;