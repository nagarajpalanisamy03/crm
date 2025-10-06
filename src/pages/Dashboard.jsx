import React from 'react';

const Dashboard = () => {
  // Retail-specific stats
  const stats = [
    { title: 'Daily Revenue', value: '$8,247', change: '+12%' },
    { title: 'Products Sold', value: '1,156', change: '+8%' },
    { title: 'Low Stock Items', value: '23', change: '-5%' },
    { title: 'Customer Visits', value: '842', change: '+15%' }
  ];

  // Retail quick actions
  const quickActions = [
    { label: 'Add Product', icon: '🛒' },
    { label: 'Restock Inventory', icon: '📦' },
    { label: 'New Supplier', icon: '🏢' },
    { label: 'Sales Report', icon: '📊' }
  ];

  // Recent retail activities
  const recentActivities = [
    { action: 'Restocked Dairy Section', user: 'Manager', time: '2 mins ago' },
    { action: 'Processed 50 customer orders', user: 'POS System', time: '15 mins ago' },
    { action: 'Low stock alert: Bananas', user: 'Inventory System', time: '1 hour ago' },
    { action: 'New supplier added: Fresh Produce Co.', user: 'Admin', time: '2 hours ago' }
  ];

  // Top selling products
  const topProducts = [
    { name: 'Organic Milk', sales: 89, revenue: '$445' },
    { name: 'Bananas', sales: 76, revenue: '$152' },
    { name: 'Bread', sales: 64, revenue: '$128' },
    { name: 'Eggs', sales: 58, revenue: '$116' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h1 className="text-2xl font-bold text-gray-800">Retail Dashboard</h1>
        <p className="text-gray-600">Super Market Management System</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
              </div>
              <span className={`text-sm font-medium px-2 py-1 rounded ${
                stat.change.startsWith('+') ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'
              }`}>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <div className="lg:col-span-1 bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className="w-full flex items-center space-x-3 p-3 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg">{action.icon}</span>
                <span className="font-medium text-gray-700">{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activities</h2>
          <div className="space-y-3">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    📝
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{activity.action}</p>
                    <p className="text-sm text-gray-600">By {activity.user}</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Selling Products */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Top Selling Products</h2>
        <div className="space-y-3">
          {topProducts.map((product, index) => (
            <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                  🏆
                </div>
                <div>
                  <p className="font-medium text-gray-800">{product.name}</p>
                  <p className="text-sm text-gray-600">{product.sales} units sold</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-800">{product.revenue}</p>
                <p className="text-sm text-gray-600">Revenue</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;