import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { icon: '📊', label: 'Dashboard', link: '/dashboard' },
    { icon: '👥', label: 'Contacts', link: '/contacts' },
    { icon: '🎯', label: 'Leads', link: '/leads' },
    { icon: '📧', label: 'Marketing', link: '/marketing' },
    { icon: '💰', label: 'Sales', link: '/sales' },
    { icon: '📈', label: 'Analytics', link: '/analytics' },
    { icon: '🚀', label: 'Upgrade', link: '/upgrade' }
  ];

  const isActiveLink = (link) => {
    return location.pathname === link || (link === '/dashboard' && location.pathname === '/');
  };

  return (
    <div className="w-64 bg-[#1727d2] text-white shadow-xl">
      <div className="p-6 border-b border-blue-700">
        <h1 className="text-xl font-bold text-white">CRM </h1>
        <p className="text-blue-200 text-sm">Customer Relationship Management</p>
      </div>
      
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                className={`flex items-center px-3 py-3 text-sm rounded-lg transition-all duration-200 group ${
                  isActiveLink(item.link) 
                    ? 'bg-white text-[#1727d2] shadow-lg font-semibold' 
                    : 'text-blue-100 hover:bg-blue-700 hover:shadow-md hover:text-white'
                }`}
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;