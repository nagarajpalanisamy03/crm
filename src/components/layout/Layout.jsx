// components/Layout.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: '📊' },
    { name: 'Products', href: '/products', icon: '🛒' },
    { name: 'Inventory', href: '/inventory', icon: '📦' },
    { name: 'Suppliers', href: '/suppliers', icon: '🏢' },
    { name: 'Sales', href: '/sales', icon: '💰' },
    { name: 'CRM', href: '/crm', icon: '👥' },
  ];

  const isActive = (path) => {
    if (path === '/crm') {
      return location.pathname.startsWith('/crm');
    }
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <h1 className="text-xl font-bold text-gray-800">Retail Pro</h1>
          <p className="text-sm text-gray-600">Super Market Management</p>
        </div>
        <nav className="mt-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center px-6 py-3 text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <span className="mr-3 text-lg">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout;