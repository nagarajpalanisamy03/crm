import React, { useState } from 'react';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  // Retail products data
  const products = [
    {
      id: 1,
      name: 'Organic Whole Milk',
      sku: 'PROD-001',
      category: 'Dairy',
      price: '$4.99',
      cost: '$2.50',
      stock: 45,
      minStock: 20,
      supplier: 'Fresh Dairy Co.',
      lastRestock: 'Jan 26, 2025'
    },
    {
      id: 2,
      name: 'Bananas (1lb)',
      sku: 'PROD-002',
      category: 'Produce',
      price: '$0.79',
      cost: '$0.35',
      stock: 89,
      minStock: 50,
      supplier: 'Tropical Fruits Ltd.',
      lastRestock: 'Mar 14, 2025'
    },
    {
      id: 3,
      name: 'Whole Wheat Bread',
      sku: 'PROD-003',
      category: 'Bakery',
      price: '$3.49',
      cost: '$1.75',
      stock: 12,
      minStock: 25,
      supplier: 'City Bakery',
      lastRestock: 'Oct 20, 2025'
    },
    {
      id: 4,
      name: 'Free Range Eggs (12)',
      sku: 'PROD-004',
      category: 'Dairy',
      price: '$5.99',
      cost: '$3.00',
      stock: 34,
      minStock: 30,
      supplier: 'Happy Hens Farm',
      lastRestock: 'Dec 25, 2025'
    },
    {
      id: 5,
      name: 'Ground Beef (1lb)',
      sku: 'PROD-005',
      category: 'Meat',
      price: '$8.99',
      cost: '$5.50',
      stock: 23,
      minStock: 15,
      supplier: 'Prime Meats Inc.',
      lastRestock: 'May 1, 2025'
    }
  ];

  const productStats = [
    { title: 'Total Products', value: '1,247', change: '+12%' },
    { title: 'Low Stock Items', value: '23', change: '-5%' },
    { title: 'Categories', value: '15', change: '+2' },
    { title: 'Avg. Price', value: '$4.75', change: '+3.2%' }
  ];

  const filteredProducts = products.filter(product =>
    (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     product.sku.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (categoryFilter === 'all' || product.category === categoryFilter)
  );

  const getStockStatus = (stock, minStock) => {
    if (stock === 0) return { text: 'Out of Stock', color: 'bg-red-100 text-red-800 border border-red-200' };
    if (stock < minStock) return { text: 'Low Stock', color: 'bg-yellow-100 text-yellow-800 border border-yellow-200' };
    return { text: 'In Stock', color: 'bg-green-100 text-green-800 border border-green-200' };
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h1 className="text-2xl font-bold text-gray-800">Product Management</h1>
        <p className="text-gray-600">Manage your retail products and inventory</p>
      </div>

      {/* Product Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {productStats.map((stat, index) => (
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
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
            </div>
            <select 
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Categories</option>
              <option value="Dairy">Dairy</option>
              <option value="Produce">Produce</option>
              <option value="Bakery">Bakery</option>
              <option value="Meat">Meat</option>
              <option value="Beverages">Beverages</option>
            </select>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors w-full sm:w-auto">
            + Add Product
          </button>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">PRODUCT NAME</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">SKU</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">CATEGORY</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">PRICE</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">COST</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">STOCK</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">STATUS</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">SUPPLIER</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">LAST RESTOCK</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredProducts.map(product => {
                const stockStatus = getStockStatus(product.stock, product.minStock);
                return (
                  <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4">
                      <div className="font-medium text-gray-900">{product.name}</div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-gray-600">{product.sku}</div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-gray-600">{product.category}</div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="font-medium text-gray-900">{product.price}</div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-gray-600">{product.cost}</div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-gray-600">{product.stock}</div>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${stockStatus.color}`}>
                        {stockStatus.text}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-gray-600">{product.supplier}</div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-gray-600">{product.lastRestock}</div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                          Edit
                        </button>
                        <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                          Restock
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Categories Overview */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Categories Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="text-xl font-bold text-gray-800">45</div>
            <div className="text-sm text-gray-600">Dairy Products</div>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="text-xl font-bold text-gray-800">28</div>
            <div className="text-sm text-gray-600">Produce Items</div>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="text-xl font-bold text-gray-800">18</div>
            <div className="text-sm text-gray-600">Bakery Goods</div>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="text-xl font-bold text-gray-800">12</div>
            <div className="text-sm text-gray-600">Meat Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;