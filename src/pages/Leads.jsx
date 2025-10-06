import React, { useState } from 'react';

const Leads = () => {
  const [activeTab, setActiveTab] = useState('potential');

  const potentialLeads = [
    {
      id: 1,
      name: 'Maria Gonzalez',
      contact: 'maria.g@email.com',
      phone: '+1 (555) 234-5678',
      type: 'Corporate Client',
      interest: 'Bulk Grocery Orders',
      value: '$2,500/month',
      source: 'Website Inquiry',
      status: 'hot',
      lastContact: '2024-01-15',
      notes: 'Interested in weekly office supply delivery. Decision maker for 50 employees.'
    },
    {
      id: 2,
      name: 'Restaurant "La Piazza"',
      contact: 'manager@lapiazza.com',
      phone: '+1 (555) 345-6789',
      type: 'Business Account',
      interest: 'Daily Produce Delivery',
      value: '$1,800/week',
      source: 'Store Visit',
      status: 'hot',
      lastContact: '2024-01-14',
      notes: 'New Italian restaurant opening next month. Needs reliable supplier.'
    }
  ];

  const loyaltyLeads = [
    {
      id: 1,
      name: 'John Smith',
      contact: 'john.smith@email.com',
      phone: '+1 (555) 123-4567',
      type: 'Loyalty Member',
      points: '2,450',
      tier: 'Gold',
      lifetimeValue: '$8,450',
      lastVisit: '2024-01-15',
      potential: 'Referral Program'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      contact: 'sarah.j@email.com',
      phone: '+1 (555) 987-6543',
      type: 'Loyalty Member',
      points: '1,230',
      tier: 'Silver',
      lifetimeValue: '$3,890',
      lastVisit: '2024-01-14',
      potential: 'Upgrade to Gold'
    }
  ];

  const corporateAccounts = [
    {
      id: 1,
      company: 'TechCorp Inc.',
      contact: 'Robert Wilson',
      position: 'Office Manager',
      email: 'r.wilson@techcorp.com',
      phone: '+1 (555) 111-2222',
      employees: '150',
      contractValue: '$12,000/month',
      status: 'Active',
      startDate: '2023-06-01',
      discount: '15% Corporate',
      lastOrder: '2024-01-15',
      totalSpent: '$156,800'
    },
    {
      id: 2,
      company: 'Global Consulting Ltd.',
      contact: 'Jennifer Martinez',
      position: 'HR Director',
      email: 'j.martinez@globalconsult.com',
      phone: '+1 (555) 333-4444',
      employees: '85',
      contractValue: '$8,500/month',
      status: 'Active',
      startDate: '2023-09-15',
      discount: '12% Corporate',
      lastOrder: '2024-01-14',
      totalSpent: '$42,300'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'hot': return 'bg-blue-100 text-blue-800';
      case 'warm': return 'bg-blue-50 text-blue-700';
      case 'cold': return 'bg-gray-100 text-gray-800';
      case 'Active': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h1 className="text-2xl font-bold text-gray-800">Leads Management</h1>
        <p className="text-gray-600">Business Accounts and Partnership Management</p>
      </div>

      {/* Leads Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-600">Active Leads</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">23</p>
            </div>
            <span className="text-sm font-medium px-2 py-1 rounded text-blue-600 bg-blue-50">
              +5
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-600">Hot Leads</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">8</p>
            </div>
            <span className="text-sm font-medium px-2 py-1 rounded text-blue-600 bg-blue-50">
              +3
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-600">Pipeline Value</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">$45.8K</p>
            </div>
            <span className="text-sm font-medium px-2 py-1 rounded text-blue-600 bg-blue-50">
              +$12.5K
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-600">Conversion Rate</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">42%</p>
            </div>
            <span className="text-sm font-medium px-2 py-1 rounded text-blue-600 bg-blue-50">
              +8%
            </span>
          </div>
        </div>
      </div>

      {/* Tabs and Content */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex -mb-px">
            {['potential', 'loyalty', 'corporate'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-3 px-6 text-sm font-medium border-b-2 transition duration-200 ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab === 'potential' && 'Potential Leads'}
                {tab === 'loyalty' && 'Loyalty Upsell'}
                {tab === 'corporate' && 'Corporate Accounts'}
              </button>
            ))}
          </nav>
        </div>

        {/* Potential Leads Tab */}
        {activeTab === 'potential' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">Potential Business Leads</h3>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                Add New Lead
              </button>
            </div>

            <div className="space-y-4">
              {potentialLeads.map((lead) => (
                <div key={lead.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-3">
                        <h4 className="font-semibold text-gray-900">{lead.name}</h4>
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(lead.status)}`}>
                          {lead.status.toUpperCase()}
                        </span>
                        <span className="text-sm font-medium text-blue-600">{lead.value}</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-600 mb-3">
                        <div>
                          <span className="font-medium">Type:</span> {lead.type}
                        </div>
                        <div>
                          <span className="font-medium">Interest:</span> {lead.interest}
                        </div>
                        <div>
                          <span className="font-medium">Contact:</span> {lead.contact}
                        </div>
                        <div>
                          <span className="font-medium">Phone:</span> {lead.phone}
                        </div>
                        <div>
                          <span className="font-medium">Source:</span> {lead.source}
                        </div>
                        <div>
                          <span className="font-medium">Last Contact:</span> {lead.lastContact}
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600 border-t pt-2">
                        <span className="font-medium">Notes:</span> {lead.notes}
                      </p>
                    </div>
                    
                    <div className="flex flex-col space-y-2 ml-4">
                      <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                        Contact
                      </button>
                      <button className="bg-gray-600 text-white px-3 py-1 rounded text-sm hover:bg-gray-700">
                        Convert
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Loyalty Tab */}
        {activeTab === 'loyalty' && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Loyalty Member Upsell Opportunities</h3>
            <div className="space-y-4">
              {loyaltyLeads.map((lead) => (
                <div key={lead.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">{lead.name}</h4>
                      <div className="text-sm text-gray-600 mt-1">
                        <span className="font-medium">{lead.tier} Member</span> • {lead.points} points • Last visit: {lead.lastVisit}
                      </div>
                      <div className="text-sm text-blue-600 font-medium mt-1">
                        Lifetime Value: {lead.lifetimeValue} • Potential: {lead.potential}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                        Offer Upgrade
                      </button>
                      <button className="bg-gray-600 text-white px-3 py-1 rounded text-sm hover:bg-gray-700">
                        Referral Bonus
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Corporate Accounts Tab */}
        {activeTab === 'corporate' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">Corporate Accounts</h3>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                Add Corporate Account
              </button>
            </div>

            <div className="space-y-4">
              {corporateAccounts.map((account) => (
                <div key={account.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-3">
                        <h4 className="font-semibold text-gray-900">{account.company}</h4>
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(account.status)}`}>
                          {account.status}
                        </span>
                        <span className="text-sm font-medium text-blue-600">{account.contractValue}</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-600 mb-3">
                        <div>
                          <span className="font-medium">Contact:</span> {account.contact} ({account.position})
                        </div>
                        <div>
                          <span className="font-medium">Employees:</span> {account.employees}
                        </div>
                        <div>
                          <span className="font-medium">Email:</span> {account.email}
                        </div>
                        <div>
                          <span className="font-medium">Phone:</span> {account.phone}
                        </div>
                        <div>
                          <span className="font-medium">Discount:</span> {account.discount}
                        </div>
                        <div>
                          <span className="font-medium">Start Date:</span> {account.startDate}
                        </div>
                        <div>
                          <span className="font-medium">Last Order:</span> {account.lastOrder}
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center border-t pt-2">
                        <div className="text-sm text-gray-600">
                          <span className="font-medium">Total Spent:</span> {account.totalSpent}
                        </div>
                        <div className="text-xs text-gray-500">
                          Account ID: CORP-{account.id.toString().padStart(4, '0')}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-2 ml-4">
                      <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                        View Orders
                      </button>
                      <button className="bg-gray-600 text-white px-3 py-1 rounded text-sm hover:bg-gray-700">
                        Manage Account
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Leads;