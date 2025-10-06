import React, { useState } from 'react';

const Leads = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const leads = [
    {
      id: 1,
      name: 'Enterprise Software Deal',
      company: 'Tech Corporation',
      contact: 'Sarah Johnson',
      value: '$50,000',
      status: 'Qualified',
      source: 'Website',
      created: 'Jan 26, 2025',
      nextAction: 'Schedule Demo'
    },
    {
      id: 2,
      name: 'Marketing Services',
      company: 'Startup Innovations',
      contact: 'Michael Chen',
      value: '$25,000',
      status: 'Contacted',
      source: 'Referral',
      created: 'Mar 14, 2025',
      nextAction: 'Send Proposal'
    },
    {
      id: 3,
      name: 'Consulting Package',
      company: 'Enterprise Solutions Ltd',
      contact: 'Emma Davis',
      value: '$15,000',
      status: 'New',
      source: 'Conference',
      created: 'Oct 20, 2025',
      nextAction: 'Initial Call'
    },
    {
      id: 4,
      name: 'Product Subscription',
      company: 'Business Partners Inc',
      contact: 'Robert Brown',
      value: '$8,000',
      status: 'Proposal',
      source: 'Website',
      created: 'Dec 25, 2025',
      nextAction: 'Follow Up'
    },
    {
      id: 5,
      name: 'Custom Development',
      company: 'Digital Transform Co',
      contact: 'Jennifer Wilson',
      value: '$35,000',
      status: 'Negotiation',
      source: 'Partner',
      created: 'May 1, 2025',
      nextAction: 'Finalize Contract'
    }
  ];

  const leadStats = [
    { title: 'Total Leads', value: '156', change: '+8%' },
    { title: 'New This Month', value: '42', change: '+12%' },
    { title: 'Conversion Rate', value: '18.5%', change: '+2.3%' },
    { title: 'Pipeline Value', value: '$1.2M', change: '+15%' }
  ];

  const filteredLeads = leads.filter(lead =>
    (lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     lead.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
     lead.contact.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (statusFilter === 'all' || lead.status === statusFilter)
  );

  const getStatusBadge = (status) => {
    const styles = {
      'New': 'bg-blue-100 text-blue-800 border border-blue-200',
      'Contacted': 'bg-yellow-100 text-yellow-800 border border-yellow-200',
      'Qualified': 'bg-green-100 text-green-800 border border-green-200',
      'Proposal': 'bg-purple-100 text-purple-800 border border-purple-200',
      'Negotiation': 'bg-orange-100 text-orange-800 border border-orange-200'
    };
    return `px-2 py-1 text-xs rounded-full ${styles[status]}`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h1 className="text-2xl font-bold text-gray-800">Lead Management</h1>
        <p className="text-gray-600">Track and manage your sales pipeline</p>
      </div>

      {/* Lead Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {leadStats.map((stat, index) => (
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
                placeholder="Search leads..."
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
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Qualified">Qualified</option>
              <option value="Proposal">Proposal</option>
              <option value="Negotiation">Negotiation</option>
            </select>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors w-full sm:w-auto">
            + Add Lead
          </button>
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">LEAD NAME</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">COMPANY</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">CONTACT</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">VALUE</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">STATUS</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">SOURCE</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">CREATED</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">NEXT ACTION</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredLeads.map(lead => (
                <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4">
                    <div className="font-medium text-gray-900">{lead.name}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-gray-600">{lead.company}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-gray-600">{lead.contact}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-medium text-gray-900">{lead.value}</div>
                  </td>
                  <td className="py-3 px-4">
                    <span className={getStatusBadge(lead.status)}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-gray-600">{lead.source}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-gray-600">{lead.created}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-gray-600">{lead.nextAction}</div>
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

      {/* Pipeline Overview */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Pipeline Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="text-xl font-bold text-gray-800">45</div>
            <div className="text-sm text-gray-600">New</div>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="text-xl font-bold text-gray-800">28</div>
            <div className="text-sm text-gray-600">Contacted</div>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="text-xl font-bold text-gray-800">18</div>
            <div className="text-sm text-gray-600">Qualified</div>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="text-xl font-bold text-gray-800">12</div>
            <div className="text-sm text-gray-600">Proposal</div>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="text-xl font-bold text-gray-800">8</div>
            <div className="text-sm text-gray-600">Negotiation</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leads;