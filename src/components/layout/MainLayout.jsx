import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MainLayout = ({ children }) => {
  const location = useLocation();

  const menuItems = [
    {
      title: 'CUSTOMER MANAGEMENT',
      items: [
        { icon: '👥', label: 'Customer 360', link: '/customers' },
        { icon: '🏠', label: 'Household Mapping', link: '/households' },
        { icon: '📊', label: 'Segmentation', link: '/segmentation' }
      ]
    },
    {
      title: 'LOYALTY & ENGAGEMENT',
      items: [
        { icon: '🎯', label: 'Loyalty Dashboard', link: '/loyalty' },
        { icon: '⭐', label: 'Tier Management', link: '/tiers' },
        { icon: '🏆', label: 'Rewards Center', link: '/rewards' }
      ]
    },
    {
      title: 'MARKETING AUTOMATION',
      items: [
        { icon: '📧', label: 'Campaign Manager', link: '/campaigns' },
        { icon: '🎨', label: 'Personalized Offers', link: '/offers' },
        { icon: '📱', label: 'Omnichannel Hub', link: '/channels' }
      ]
    },
    {
      title: 'ANALYTICS & INSIGHTS',
      items: [
        { icon: '📈', label: 'Performance Dashboard', link: '/analytics' },
        { icon: '🤖', label: 'AI Insights', link: '/insights' },
        { icon: '📊', label: 'Reports', link: '/reports' }
      ]
    }
  ];

  const isActiveLink = (link) => {
    return location.pathname === link;
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Vertical Sidebar */}
      <div className="w-64 bg-[#1727d2] text-white shadow-xl">
        <div className="p-6 border-b border-blue-700">
          <h1 className="text-xl font-bold text-white">RetailCRM </h1>
          <p className="text-blue-200 text-sm">Customer Intelligence Platform</p>
        </div>
        
        <nav className="p-4 space-y-6">
          {menuItems.map((section, index) => (
            <div key={index}>
              <h3 className="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-3">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      to={item.link}
                      className={`flex items-center px-3 py-2 text-sm rounded-lg transition-all duration-200 group ${
                        isActiveLink(item.link) 
                          ? 'bg-white text-[#1727d2] shadow-lg font-semibold' 
                          : 'text-blue-100 hover:bg-blue-700 hover:shadow-md hover:text-white'
                      }`}
                    >
                      <span className="mr-3 text-lg">{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <h2 className="text-xl font-semibold text-gray-800">RetailCRM Dashboard</h2>
              <div className="hidden md:flex items-center space-x-2 text-sm text-gray-500">
                <span>📅</span>
                <span>{new Date().toLocaleDateString()}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 text-blue-800 p-2 rounded-lg">
                <span className="font-semibold">Live</span>
                <span className="ml-2">🟢</span>
              </div>
              
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                AM
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;