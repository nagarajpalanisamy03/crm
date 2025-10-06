import React, { useState } from 'react';

const CustomerDatabase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [segmentFilter, setSegmentFilter] = useState('all');

  const customers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      phone: '+1 (555) 123-4567',
      loyaltyId: 'LOY-001',
      totalSpent: '$2,450',
      visits: 45,
      lastVisit: 'Jan 26, 2025',
      segment: 'VIP',
      points: 2450
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'michael.chen@email.com',
      phone: '+1 (555) 987-6543',
      loyaltyId: 'LOY-002',
      totalSpent: '$1,890',
      visits: 32,
      lastVisit: 'Mar 14, 2025',
      segment: 'Regular',
      points: 1890
    },
    {
      id: 3,
      name: 'Emma Davis',
      email: 'emma.davis@email.com',
      phone: '+1 (555) 456-7890',
      loyaltyId: 'LOY-003',
      totalSpent: '$3,210',
      visits: 58,
      lastVisit: 'Oct 20, 2025',
      segment: 'VIP',
      points: 3210
    }
  ];

  const customerStats = [
    { title: 'Total Customers', value: '2,847', change: '+12%' },
    { title: 'Active Customers', value: '2,156', change: '+8%' },
    { title: 'Avg. Customer Value', value: '$1,245', change: '+5.2%' },
    { title: 'New This Month', value: '156', change: '+15%' }
  ];

  const filteredCustomers = customers.filter(customer =>
    (customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
     customer.loyaltyId.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (segmentFilter === 'all' || customer.segment === segmentFilter)
  );

  const getSegmentBadge = (segment) => {
    const styles = {
      'VIP': 'bg-purple-100 text-purple-800 border border-purple-200',
      'Regular': 'bg-blue-100 text-blue-800 border border-blue-200',
      'Occasional': 'bg-green-100 text-green-800 border border-green-200'
    };
    return `px-2 py-1 text-xs rounded-full ${styles[segment]}`;
  };

  return (
    <div className="space-y-6">
      {/* Customer Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {customerStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-4">
            <p className="text-sm text-gray-600">{stat.title}</p>
            <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
            <span className="text-sm text-green-600">{stat.change}</span>
          </div>
        ))}
      </div>

      {/* Search and Actions */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search customers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
            </div>
            <select 
              value={segmentFilter}
              onChange={(e) => setSegmentFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Segments</option>
              <option value="VIP">VIP</option>
              <option value="Regular">Regular</option>
              <option value="Occasional">Occasional</option>
            </select>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
            + Add Customer
          </button>
        </div>
      </div>

      {/* Customers Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">CUSTOMER</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">CONTACT</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">LOYALTY ID</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">TOTAL SPENT</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">VISITS</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">SEGMENT</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredCustomers.map(customer => (
                <tr key={customer.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="font-medium text-gray-900">{customer.name}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-gray-600">{customer.email}</div>
                    <div className="text-sm text-gray-500">{customer.phone}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-gray-600">{customer.loyaltyId}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-medium text-gray-900">{customer.totalSpent}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-gray-600">{customer.visits}</div>
                  </td>
                  <td className="py-3 px-4">
                    <span className={getSegmentBadge(customer.segment)}>
                      {customer.segment}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        View
                      </button>
                      <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                        Message
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomerDatabase;