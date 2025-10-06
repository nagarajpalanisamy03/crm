import React, { useState } from 'react';

const Marketing = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const campaigns = [
    {
      id: 1,
      name: 'Q1 Newsletter Campaign',
      type: 'Email',
      status: 'Active',
      audience: 'All Customers',
      sent: '1,245',
      opened: '842',
      clicks: '234',
      startDate: 'Jan 15, 2025',
      endDate: 'Mar 15, 2025',
      budget: '$2,500'
    },
    {
      id: 2,
      name: 'Product Launch Announcement',
      type: 'Social Media',
      status: 'Completed',
      audience: 'Prospects',
      sent: '5,678',
      opened: '3,210',
      clicks: '890',
      startDate: 'Mar 1, 2025',
      endDate: 'Mar 31, 2025',
      budget: '$1,800'
    },
    {
      id: 3,
      name: 'Webinar Promotion',
      type: 'Email',
      status: 'Draft',
      audience: 'Leads',
      sent: '-',
      opened: '-',
      clicks: '-',
      startDate: 'Apr 10, 2025',
      endDate: 'Apr 30, 2025',
      budget: '$1,200'
    },
    {
      id: 4,
      name: 'Holiday Season Sale',
      type: 'Multi-channel',
      status: 'Scheduled',
      audience: 'All Contacts',
      sent: '-',
      opened: '-',
      clicks: '-',
      startDate: 'Nov 15, 2025',
      endDate: 'Dec 31, 2025',
      budget: '$5,000'
    },
    {
      id: 5,
      name: 'Customer Retention',
      type: 'Email',
      status: 'Active',
      audience: 'Existing Customers',
      sent: '3,456',
      opened: '2,891',
      clicks: '567',
      startDate: 'Feb 1, 2025',
      endDate: 'Ongoing',
      budget: '$3,000'
    }
  ];

  const marketingStats = [
    { title: 'Active Campaigns', value: '8', change: '+2' },
    { title: 'Total Reach', value: '45.2K', change: '+12%' },
    { title: 'Engagement Rate', value: '34.8%', change: '+5.7%' },
    { title: 'ROI', value: '3.2x', change: '+0.4x' }
  ];

  const filteredCampaigns = campaigns.filter(campaign =>
    campaign.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (statusFilter === 'all' || campaign.status === statusFilter)
  );

  const getStatusBadge = (status) => {
    const styles = {
      'Active': 'bg-green-100 text-green-800 border border-green-200',
      'Completed': 'bg-blue-100 text-blue-800 border border-blue-200',
      'Draft': 'bg-gray-100 text-gray-800 border border-gray-200',
      'Scheduled': 'bg-yellow-100 text-yellow-800 border border-yellow-200'
    };
    return `px-2 py-1 text-xs rounded-full ${styles[status]}`;
  };

  const getTypeBadge = (type) => {
    const styles = {
      'Email': 'bg-purple-100 text-purple-800 border border-purple-200',
      'Social Media': 'bg-pink-100 text-pink-800 border border-pink-200',
      'Multi-channel': 'bg-orange-100 text-orange-800 border border-orange-200'
    };
    return `px-2 py-1 text-xs rounded-full ${styles[type]}`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h1 className="text-2xl font-bold text-gray-800">Marketing Campaigns</h1>
        <p className="text-gray-600">Create and manage your marketing campaigns</p>
      </div>

      {/* Marketing Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {marketingStats.map((stat, index) => (
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

      {/* Search and Actions Bar */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <input
                type="text"
                placeholder="Search campaigns..."
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
              <option value="Active">Active</option>
              <option value="Completed">Completed</option>
              <option value="Draft">Draft</option>
              <option value="Scheduled">Scheduled</option>
            </select>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors w-full sm:w-auto">
            + Create Campaign
          </button>
        </div>
      </div>

      {/* Campaigns Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">CAMPAIGN NAME</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">TYPE</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">STATUS</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">AUDIENCE</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">SENT</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">OPENED</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">CLICKS</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">START DATE</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">END DATE</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">BUDGET</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredCampaigns.map(campaign => (
                <tr key={campaign.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4">
                    <div className="font-medium text-gray-900">{campaign.name}</div>
                  </td>
                  <td className="py-3 px-4">
                    <span className={getTypeBadge(campaign.type)}>
                      {campaign.type}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={getStatusBadge(campaign.status)}>
                      {campaign.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-gray-600">{campaign.audience}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-gray-600">{campaign.sent}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-gray-600">{campaign.opened}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-gray-600">{campaign.clicks}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-gray-600">{campaign.startDate}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-gray-600">{campaign.endDate}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-medium text-gray-900">{campaign.budget}</div>
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

      {/* Campaign Performance */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Campaign Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="text-xl font-bold text-gray-800">24.3%</div>
            <div className="text-sm text-gray-600">Average Open Rate</div>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="text-xl font-bold text-gray-800">18.7%</div>
            <div className="text-sm text-gray-600">Click-through Rate</div>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="text-xl font-bold text-gray-800">3.2x</div>
            <div className="text-sm text-gray-600">Average ROI</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;