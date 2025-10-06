import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const DashboardLayout = ({ children }) => {
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', path: '/dashboard', icon: '📊' },
    { name: 'Products', path: '/products', icon: '🛒' },
    { name: 'Inventory', path: '/inventory', icon: '📦' },
    { name: 'Suppliers', path: '/suppliers', icon: '🏢' },
    { name: 'Sales', path: '/sales', icon: '💰' },
    { name: 'Customers', path: '/customers', icon: '👥' },
    { name: 'Analytics', path: '/analytics', icon: '📈' },
  ];

  const isActive = (path) => {
    if (path === '/crm') {
      return location.pathname.startsWith('/crm');
    }
    return location.pathname === path;
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200">
        <div className="p-6">
          <h1 className="text-xl font-bold text-gray-800">RetailCRM</h1>
          <p className="text-sm text-gray-600">Super Market Management</p>
        </div>
        <nav className="mt-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 ${
                isActive(item.path) ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' : ''
              }`}
            >
              <span className="mr-3 text-lg">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-auto">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {location.pathname === '/dashboard' && 'Dashboard'}
                {location.pathname === '/products' && 'Product Management'}
                {location.pathname === '/inventory' && 'Inventory Management'}
                {location.pathname === '/suppliers' && 'Supplier Management'}
                {location.pathname === '/sales' && 'Sales Management'}
                {location.pathname === '/customers' && 'Customer Management'}
                {location.pathname === '/analytics' && 'Analytics'}
                {location.pathname.startsWith('/crm') && 'CRM Management'}
              </h2>
              <div className="hidden md:flex items-center space-x-2 text-sm text-gray-500">
                <span>📅</span>
                <span>{new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">Admin User</p>
                  <p className="text-xs text-gray-500">admin@company.com</p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  AU
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;