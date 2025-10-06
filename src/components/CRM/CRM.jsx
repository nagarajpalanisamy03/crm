import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const CRM = () => {
  const location = useLocation();

  const crmTabs = [
    { name: 'Customer Database', href: '/crm/database', icon: '👥' },
    { name: 'Loyalty & Rewards', href: '/crm/loyalty', icon: '🎯' },
    { name: 'Customer Engagement', href: '/crm/engagement', icon: '💬' },
    { name: 'Targeted Marketing', href: '/crm/marketing', icon: '📢' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* CRM Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Customer Relationship Management</h1>
              <p className="text-gray-600">Manage customer relationships, loyalty programs, and marketing campaigns</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                + New Campaign
              </button>
            </div>
          </div>

          {/* CRM Sub-navigation */}
          <div className="mt-4">
            <nav className="flex space-x-8">
              {crmTabs.map((tab) => (
                <Link
                  key={tab.name}
                  to={tab.href}
                  className={`flex items-center py-2 px-1 text-sm font-medium border-b-2 transition-colors ${
                    isActive(tab.href)
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* CRM Content - This is where nested routes will render */}
      <div className="p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default CRM;