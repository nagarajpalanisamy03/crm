import React, { useState } from 'react';

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Contacts data matching HRMS table style
  const contacts = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@techcorp.com',
      company: 'Tech Corporation',
      title: 'CTO',
      phone: '+1 (555) 123-4567',
      status: 'Active',
      lastContact: 'Jan 26, 2025'
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'michael.chen@startup.io',
      company: 'Startup Innovations',
      title: 'CEO',
      phone: '+1 (555) 987-6543',
      status: 'Active',
      lastContact: 'Mar 14, 2025'
    },
    {
      id: 3,
      name: 'Emma Davis',
      email: 'emma.davis@enterprise.com',
      company: 'Enterprise Solutions Ltd',
      title: 'VP of Sales',
      phone: '+1 (555) 456-7890',
      status: 'Inactive',
      lastContact: 'Oct 20, 2025'
    },
    {
      id: 4,
      name: 'Robert Brown',
      email: 'robert.brown@business.co',
      company: 'Business Partners Inc',
      title: 'Marketing Director',
      phone: '+1 (555) 234-5678',
      status: 'Active',
      lastContact: 'Dec 25, 2025'
    },
    {
      id: 5,
      name: 'Jennifer Wilson',
      email: 'jennifer.wilson@digital.com',
      company: 'Digital Transform Co',
      title: 'Product Manager',
      phone: '+1 (555) 345-6789',
      status: 'Active',
      lastContact: 'May 1, 2025'
    }
  ];

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status) => {
    return status === 'Active' 
      ? 'bg-green-100 text-green-800 border border-green-200'
      : 'bg-gray-100 text-gray-800 border border-gray-200';
  };

  return (
    <div className="space-y-6">
      {/* Header matching HRMS style */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h1 className="text-2xl font-bold text-gray-800">Contact Management</h1>
        <p className="text-gray-600">Manage your customer and business contacts</p>
      </div>

      {/* Search and Actions Bar */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <input
                type="text"
                placeholder="Search contacts..."
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
            + Add Contact
          </button>
        </div>
      </div>

      {/* Contacts Table matching HRMS style */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">NAME</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">EMAIL</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">COMPANY</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">TITLE</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">PHONE</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">STATUS</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">LAST CONTACT</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredContacts.map(contact => (
                <tr key={contact.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4">
                    <div className="font-medium text-gray-900">{contact.name}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-gray-600">{contact.email}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-gray-600">{contact.company}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-gray-600">{contact.title}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-gray-600">{contact.phone}</div>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${getStatusBadge(contact.status)}`}>
                      {contact.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="text-gray-600">{contact.lastContact}</div>
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

      {/* Contact Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
          <div className="text-2xl font-bold text-gray-800">2,847</div>
          <div className="text-sm text-gray-600">Total Contacts</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
          <div className="text-2xl font-bold text-gray-800">156</div>
          <div className="text-sm text-gray-600">New This Month</div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
          <div className="text-2xl font-bold text-gray-800">18.5%</div>
          <div className="text-sm text-gray-600">Conversion Rate</div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;