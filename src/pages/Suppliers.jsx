import React, { useState } from 'react';

const Suppliers = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Retail suppliers data
  const suppliers = [
    {
      id: 1,
      name: 'Fresh Dairy Co.',
      contact: 'Sarah Johnson',
      email: 'sarah@freshdairy.com',
      phone: '+1 (555) 123-4567',
      products: 'Milk, Cheese, Yogurt',
      deliverySchedule: 'Daily',
      status: 'Active',
      lastDelivery: 'Jan 26, 2025'
    },
    {
      id: 2,
      name: 'Tropical Fruits Ltd.',
      contact: 'Michael Chen',
      email: 'michael@tropicalfruits.io',
      phone: '+1 (555) 987-6543',
      products: 'Bananas, Oranges, Apples',
      deliverySchedule: '3x Weekly',
      status: 'Active',
      lastDelivery: 'Mar 14, 2025'
    },
    {
      id: 3,
      name: 'City Bakery',
      contact: 'Emma Davis',
      email: 'emma@citybakery.com',
      phone: '+1 (555) 456-7890',
      products: 'Bread, Pastries, Cakes',
      deliverySchedule: 'Daily',
      status: 'Active',
      lastDelivery: 'Oct 20, 2025'
    },
    {
      id: 4,
      name: 'Happy Hens Farm',
      contact: 'Robert Brown',
      email: 'robert@happyhens.co',
      phone: '+1 (555) 234-5678',
      products: 'Eggs, Poultry',
      deliverySchedule: '2x Weekly',
      status: 'Active',
      lastDelivery: 'Dec 25, 2025'
    },
    {
      id: 5,
      name: 'Prime Meats Inc.',
      contact: 'Jennifer Wilson',
      email: 'jennifer@primemeats.com',
      phone: '+1 (555) 345-6789',
      products: 'Beef, Pork, Chicken',
      deliverySchedule: '3x Weekly',
      status: 'Inactive',
      lastDelivery: 'May 1, 2025'
    }
  ];

  const supplierStats = [
    { title: 'Total Suppliers', value: '45', change: '+2' },
    { title: 'Active Suppliers', value: '42', change: '+1' },
    { title: 'Products Supplied', value: '1,247', change: '+12%' },
    { title: 'Avg. Delivery Time', value: '2.3 days', change: '-0.2' }
  ];

  const filteredSuppliers = suppliers.filter(supplier =>
    supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    supplier.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
    supplier.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status) => {
    return status === 'Active' 
      ? 'bg-green-100 text-green-800 border border-green-200'
      : 'bg-gray-100 text-gray-800 border border-gray-200';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h1 className="text-2xl font-bold text-gray-800">Supplier Management</h1>
        <p className="text-gray-600">Manage your retail suppliers and vendors</p>
      </div>

      {/* Supplier Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {supplierStats.map((stat, index) => (
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
                placeholder="Search suppliers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
            </div>
            <select className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors w-full sm:w-auto">
            + Add Supplier
          </button>
        </div>
      </div>

      {/* Suppliers Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">SUPPLIER NAME</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">CONTACT</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">EMAIL</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">PHONE</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">PRODUCTS</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">DELIVERY SCHEDULE</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">STATUS</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">LAST DELIVERY</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredSuppliers.map(supplier => (
                <tr key={supplier.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4">
                    <div className="font-medium text-gray-900">{supplier.name}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-gray-600">{supplier.contact}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-gray-600">{supplier.email}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-gray-600">{supplier.phone}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-gray-600">{supplier.products}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-gray-600">{supplier.deliverySchedule}</div>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusBadge(supplier.status)}`}>
                      {supplier.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-gray-600">{supplier.lastDelivery}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        View
                      </button>
                      <button className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Supplier Performance */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
          <div className="text-2xl font-bold text-gray-800">98.5%</div>
          <div className="text-sm text-gray-600">On-time Delivery Rate</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
          <div className="text-2xl font-bold text-gray-800">2.1 days</div>
          <div className="text-sm text-gray-600">Avg. Delivery Time</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
          <div className="text-2xl font-bold text-gray-800">4.8/5</div>
          <div className="text-sm text-gray-600">Supplier Rating</div>
        </div>
      </div>
    </div>
  );
};

export default Suppliers;