import React, { useState } from 'react';

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [segmentFilter, setSegmentFilter] = useState('all');
  const [activeTab, setActiveTab] = useState('database');
  const [selectedCustomers, setSelectedCustomers] = useState([]);

  // Customer Database
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
      points: 2450,
      coupons: 3,
      avgSpend: '$54.44',
      frequency: 'Weekly'
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
      points: 1890,
      coupons: 2,
      avgSpend: '$59.06',
      frequency: 'Bi-weekly'
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
      points: 3210,
      coupons: 5,
      avgSpend: '$55.34',
      frequency: 'Weekly'
    },
    {
      id: 4,
      name: 'Robert Brown',
      email: 'robert.brown@email.com',
      phone: '+1 (555) 234-5678',
      loyaltyId: 'LOY-004',
      totalSpent: '$890',
      visits: 12,
      lastVisit: 'Dec 25, 2025',
      segment: 'Occasional',
      points: 890,
      coupons: 1,
      avgSpend: '$74.17',
      frequency: 'Monthly'
    },
    {
      id: 5,
      name: 'Jennifer Wilson',
      email: 'jennifer.wilson@email.com',
      phone: '+1 (555) 345-6789',
      loyaltyId: 'LOY-005',
      totalSpent: '$1,560',
      visits: 28,
      lastVisit: 'May 1, 2025',
      segment: 'Regular',
      points: 1560,
      coupons: 2,
      avgSpend: '$55.71',
      frequency: 'Bi-weekly'
    }
  ];

  // Customer Statistics
  const customerStats = [
    { title: 'Total Customers', value: '2,847', change: '+12%' },
    { title: 'Loyalty Members', value: '1,568', change: '+8%' },
    { title: 'Avg. Customer Value', value: '$1,245', change: '+5.2%' },
    { title: 'Retention Rate', value: '78.5%', change: '+3.1%' }
  ];

  // Loyalty Tiers
  const loyaltyTiers = [
    { tier: 'Bronze', points: '0-999', customers: '856', benefits: '5% cashback' },
    { tier: 'Silver', points: '1000-2499', customers: '432', benefits: '10% cashback + coupons' },
    { tier: 'Gold', points: '2500-4999', customers: '215', benefits: '15% cashback + priority' },
    { tier: 'Platinum', points: '5000+', customers: '65', benefits: '20% cashback + VIP treatment' }
  ];

  // Marketing Campaigns
  const campaigns = [
    { id: 1, name: 'Weekly Specials', channel: 'Email', segment: 'All', sent: '2,847', opened: '1,245', status: 'Active' },
    { id: 2, name: 'VIP Discounts', channel: 'SMS', segment: 'VIP', sent: '320', opened: '289', status: 'Completed' },
    { id: 3, name: 'Birthday Offers', channel: 'Email', segment: 'Loyalty', sent: '156', opened: '134', status: 'Active' },
    { id: 4, name: 'Seasonal Sale', channel: 'WhatsApp', segment: 'Regular', sent: '1,234', opened: '987', status: 'Scheduled' }
  ];

  // Customer Segments
  const segments = [
    { name: 'VIP Customers', criteria: 'Top 10% spenders', count: '285', avgSpend: '$2,100' },
    { name: 'Frequent Shoppers', criteria: '2+ visits per week', count: '432', avgSpend: '$890' },
    { name: 'New Customers', criteria: 'Joined last 30 days', count: '156', avgSpend: '$320' },
    { name: 'At Risk', criteria: 'No visit in 60 days', count: '89', avgSpend: '$650' }
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
      'Occasional': 'bg-green-100 text-green-800 border border-green-200',
      'New': 'bg-yellow-100 text-yellow-800 border border-yellow-200'
    };
    return `px-2 py-1 text-xs rounded-full ${styles[segment]}`;
  };

  const toggleCustomerSelection = (customerId) => {
    setSelectedCustomers(prev =>
      prev.includes(customerId)
        ? prev.filter(id => id !== customerId)
        : [...prev, customerId]
    );
  };

  const selectAllCustomers = () => {
    setSelectedCustomers(
      selectedCustomers.length === filteredCustomers.length
        ? []
        : filteredCustomers.map(c => c.id)
    );
  };

  // Purchase History Sample
  const purchaseHistory = [
    { date: '2025-01-26', amount: '$124.50', items: 8, points: 125 },
    { date: '2025-01-19', amount: '$89.75', items: 6, points: 90 },
    { date: '2025-01-12', amount: '$156.20', items: 11, points: 156 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h1 className="text-2xl font-bold text-gray-800">Customer Management</h1>
        <p className="text-gray-600">Manage customer relationships, loyalty programs, and targeted marketing</p>
      </div>

      {/* Customer Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {customerStats.map((stat, index) => (
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

      {/* Navigation Tabs */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            {['database', 'loyalty', 'engagement', 'marketing'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm capitalize ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab === 'database' && 'Customer Database'}
                {tab === 'loyalty' && 'Loyalty & Rewards'}
                {tab === 'engagement' && 'Customer Engagement'}
                {tab === 'marketing' && 'Targeted Marketing'}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {/* Customer Database Tab */}
          {activeTab === 'database' && (
            <div className="space-y-6">
              {/* Search and Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <div className="relative flex-1 sm:w-64">
                    <input
                      type="text"
                      placeholder="Search customers..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
                  </div>
                  <select 
                    value={segmentFilter}
                    onChange={(e) => setSegmentFilter(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="all">All Segments</option>
                    <option value="VIP">VIP</option>
                    <option value="Regular">Regular</option>
                    <option value="Occasional">Occasional</option>
                  </select>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors w-full sm:w-auto">
                  + Add Customer
                </button>
              </div>

              {/* Customers Table */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                          <input
                            type="checkbox"
                            checked={selectedCustomers.length === filteredCustomers.length && filteredCustomers.length > 0}
                            onChange={selectAllCustomers}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">CUSTOMER</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">CONTACT</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">LOYALTY ID</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">TOTAL SPENT</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">VISITS</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">LAST VISIT</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">SEGMENT</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {filteredCustomers.map(customer => (
                        <tr key={customer.id} className="hover:bg-gray-50 transition-colors">
                          <td className="py-3 px-4">
                            <input
                              type="checkbox"
                              checked={selectedCustomers.includes(customer.id)}
                              onChange={() => toggleCustomerSelection(customer.id)}
                              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                          </td>
                          <td className="py-3 px-4">
                            <div>
                              <div className="font-medium text-gray-900">{customer.name}</div>
                              <div className="text-sm text-gray-500">{customer.frequency} shopper</div>
                            </div>
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
                            <div className="text-sm text-gray-500">Avg: {customer.avgSpend}</div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="text-gray-600">{customer.visits}</div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="text-gray-600">{customer.lastVisit}</div>
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

              {/* Selected Customers Actions */}
              {selectedCustomers.length > 0 && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-medium text-blue-800">
                        {selectedCustomers.length} customers selected
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">
                        Send Email Offer
                      </button>
                      <button className="bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700">
                        Send SMS
                      </button>
                      <button className="bg-purple-600 text-white px-4 py-2 rounded text-sm hover:bg-purple-700">
                        Add to Campaign
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Loyalty & Rewards Tab */}
          {activeTab === 'loyalty' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Loyalty Tiers */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Loyalty Tiers</h3>
                  <div className="space-y-4">
                    {loyaltyTiers.map((tier, index) => (
                      <div key={index} className="bg-white rounded-lg border border-gray-200 p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-semibold text-gray-800">{tier.tier}</h4>
                            <p className="text-sm text-gray-600">{tier.points} points</p>
                          </div>
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            {tier.customers} customers
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{tier.benefits}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Points & Rewards */}
                <div className="space-y-6">
                  <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Points Distribution</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total Points Issued</span>
                        <span className="font-semibold">1,245,890</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Points Redeemed</span>
                        <span className="font-semibold">567,340</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Active Points</span>
                        <span className="font-semibold">678,550</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Reward Coupons</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 border border-green-200 rounded-lg bg-green-50">
                        <div className="text-xl font-bold text-green-600">156</div>
                        <div className="text-sm text-green-600">Active Coupons</div>
                      </div>
                      <div className="text-center p-4 border border-blue-200 rounded-lg bg-blue-50">
                        <div className="text-xl font-bold text-blue-600">$2,450</div>
                        <div className="text-sm text-blue-600">Total Savings</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Customer Engagement Tab */}
          {activeTab === 'engagement' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Communication Channels */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Engagement Channels</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                          📧
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">Email Campaigns</p>
                          <p className="text-sm text-gray-600">Open rate: 43.2%</p>
                        </div>
                      </div>
                      <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                        Send
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                          💬
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">SMS Messages</p>
                          <p className="text-sm text-gray-600">Response rate: 68.5%</p>
                        </div>
                      </div>
                      <button className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">
                        Send
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                          📱
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">WhatsApp</p>
                          <p className="text-sm text-gray-600">Engagement: 72.1%</p>
                        </div>
                      </div>
                      <button className="bg-purple-600 text-white px-3 py-1 rounded text-sm hover:bg-purple-700">
                        Send
                      </button>
                    </div>
                  </div>
                </div>

                {/* Feedback & Reviews */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Customer Feedback</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Average Rating</span>
                      <div className="flex items-center">
                        <span className="text-2xl font-bold text-gray-800">4.7</span>
                        <span className="text-yellow-500 ml-1">⭐</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 border border-gray-200 rounded-lg">
                        <div className="text-lg font-bold text-gray-800">156</div>
                        <div className="text-sm text-gray-600">Reviews</div>
                      </div>
                      <div className="text-center p-3 border border-gray-200 rounded-lg">
                        <div className="text-lg font-bold text-gray-800">89%</div>
                        <div className="text-sm text-gray-600">Satisfaction</div>
                      </div>
                    </div>
                    <button className="w-full bg-gray-100 text-gray-700 py-2 rounded hover:bg-gray-200 transition-colors">
                      View All Feedback
                    </button>
                  </div>
                </div>
              </div>

              {/* Recent Campaigns */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Campaigns</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">CAMPAIGN</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">CHANNEL</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">SEGMENT</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">SENT</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">OPENED</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">STATUS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {campaigns.map(campaign => (
                        <tr key={campaign.id}>
                          <td className="py-3 px-4">{campaign.name}</td>
                          <td className="py-3 px-4">{campaign.channel}</td>
                          <td className="py-3 px-4">{campaign.segment}</td>
                          <td className="py-3 px-4">{campaign.sent}</td>
                          <td className="py-3 px-4">{campaign.opened}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              campaign.status === 'Active' ? 'bg-green-100 text-green-800' :
                              campaign.status === 'Completed' ? 'bg-blue-100 text-blue-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {campaign.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Targeted Marketing Tab */}
          {activeTab === 'marketing' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Customer Segments */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Customer Segments</h3>
                  <div className="space-y-4">
                    {segments.map((segment, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-semibold text-gray-800">{segment.name}</h4>
                            <p className="text-sm text-gray-600">{segment.criteria}</p>
                          </div>
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            {segment.count} customers
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Avg. Spend: {segment.avgSpend}</span>
                          <button className="text-blue-600 hover:text-blue-800 font-medium">
                            Create Campaign
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Personalized Promotions */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Personalized Promotions</h3>
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Birthday Offers</h4>
                      <p className="text-sm text-gray-600 mb-3">Automated birthday discounts and gifts</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Active for 234 customers this month</span>
                        <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                          Configure
                        </button>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Purchase-Based Offers</h4>
                      <p className="text-sm text-gray-600 mb-3">Target based on previous purchases</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">12 active campaigns</span>
                        <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                          Create
                        </button>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Abandoned Cart</h4>
                      <p className="text-sm text-gray-600 mb-3">Recover abandoned shopping carts</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">45 carts recovered this week</span>
                        <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Marketing Performance */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Campaign Performance</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 border border-gray-200 rounded-lg">
                    <div className="text-xl font-bold text-gray-800">24.3%</div>
                    <div className="text-sm text-gray-600">Open Rate</div>
                  </div>
                  <div className="text-center p-4 border border-gray-200 rounded-lg">
                    <div className="text-xl font-bold text-gray-800">18.7%</div>
                    <div className="text-sm text-gray-600">Click Rate</div>
                  </div>
                  <div className="text-center p-4 border border-gray-200 rounded-lg">
                    <div className="text-xl font-bold text-gray-800">8.9%</div>
                    <div className="text-sm text-gray-600">Conversion</div>
                  </div>
                  <div className="text-center p-4 border border-gray-200 rounded-lg">
                    <div className="text-xl font-bold text-gray-800">3.2x</div>
                    <div className="text-sm text-gray-600">ROI</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Customers;