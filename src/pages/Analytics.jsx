import React, { useState, useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

// Register all Chart.js components
Chart.register(...registerables);

const Analytics = () => {
  const [dateRange, setDateRange] = useState('last30days');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  
  const salesChartRef = useRef(null);
  const inventoryChartRef = useRef(null);
  const categoryChartRef = useRef(null);

  // Retail analytics metrics
  const metrics = [
    {
      id: 1,
      title: 'Total Revenue',
      value: '$45.8K',
      change: '+12.5%',
      trend: 'up',
      description: 'from last month',
      icon: '💰',
      color: 'green'
    },
    {
      id: 2,
      title: 'Products Sold',
      value: '8,247',
      change: '+8.7%',
      trend: 'up',
      description: 'from last month',
      icon: '🛒',
      color: 'blue'
    },
    {
      id: 3,
      title: 'Avg. Transaction',
      value: '$52.87',
      change: '+3.2%',
      trend: 'up',
      description: 'from last month',
      icon: '📊',
      color: 'purple'
    },
    {
      id: 4,
      title: 'Inventory Turnover',
      value: '4.2x',
      change: '+15.3%',
      trend: 'up',
      description: 'from last month',
      icon: '📦',
      color: 'orange'
    }
  ];

  // Recent retail activities
  const activityData = [
    {
      id: 1,
      type: 'sale',
      title: 'Peak Sales Hour',
      description: 'Highest revenue between 11 AM - 1 PM',
      time: '2 hours ago',
      user: 'POS System'
    },
    {
      id: 2,
      type: 'inventory',
      title: 'Low Stock Alert',
      description: 'Bananas running low, restock needed',
      time: '5 hours ago',
      user: 'Inventory System'
    },
    {
      id: 3,
      type: 'product',
      title: 'Top Selling Product',
      description: 'Organic Milk sold 45 units today',
      time: 'Yesterday',
      user: 'Sales Analytics'
    },
    {
      id: 4,
      type: 'supplier',
      title: 'Supplier Performance',
      description: 'Fresh Dairy Co. delivered 98% on-time',
      time: '2 days ago',
      user: 'Supplier Mgmt'
    }
  ];

  // Simulate API call for filter changes
  const handleFilterChange = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    initializeCharts();
    setIsLoading(false);
  };

  // Enhanced chart initialization for retail
  const initializeCharts = () => {
    // Destroy any existing charts first
    [salesChartRef, inventoryChartRef, categoryChartRef].forEach(ref => {
      if (ref.current && ref.current.chart) {
        ref.current.chart.destroy();
      }
    });

    // Sales Trend Chart
    if (salesChartRef.current) {
      const ctx = salesChartRef.current.getContext('2d');
      salesChartRef.current.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['6 AM', '8 AM', '10 AM', '12 PM', '2 PM', '4 PM', '6 PM', '8 PM'],
          datasets: [
            {
              label: 'Revenue',
              data: [450, 1200, 2800, 4200, 3800, 2200, 1500, 800],
              borderColor: '#3498db',
              backgroundColor: 'rgba(52, 152, 219, 0.1)',
              borderWidth: 3,
              tension: 0.4,
              fill: true,
              yAxisID: 'y'
            },
            {
              label: 'Transactions',
              data: [25, 45, 85, 120, 95, 65, 40, 20],
              borderColor: '#2ecc71',
              backgroundColor: 'rgba(46, 204, 113, 0.1)',
              borderWidth: 3,
              tension: 0.4,
              fill: true,
              yAxisID: 'y1'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: {
            mode: 'index',
            intersect: false,
          },
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              mode: 'index',
              intersect: false
            }
          },
          scales: {
            y: {
              type: 'linear',
              display: true,
              position: 'left',
              title: {
                display: true,
                text: 'Revenue ($)'
              }
            },
            y1: {
              type: 'linear',
              display: true,
              position: 'right',
              title: {
                display: true,
                text: 'Transactions'
              },
              grid: {
                drawOnChartArea: false,
              },
            },
            x: {
              grid: {
                display: false
              }
            }
          }
        }
      });
    }

    // Inventory Distribution Chart
    if (inventoryChartRef.current) {
      const ctx = inventoryChartRef.current.getContext('2d');
      inventoryChartRef.current.chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['In Stock (72%)', 'Low Stock (18%)', 'Out of Stock (8%)', 'Overstock (2%)'],
          datasets: [{
            data: [72, 18, 8, 2],
            backgroundColor: [
              '#2ecc71',
              '#f39c12',
              '#e74c3c',
              '#3498db'
            ],
            borderWidth: 3,
            borderColor: '#ffffff',
            hoverOffset: 15
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom'
            }
          },
          cutout: '65%'
        }
      });
    }

    // Category Performance Chart
    if (categoryChartRef.current) {
      const ctx = categoryChartRef.current.getContext('2d');
      categoryChartRef.current.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Dairy', 'Produce', 'Bakery', 'Meat', 'Beverages', 'Frozen'],
          datasets: [{
            label: 'Revenue by Category',
            data: [12500, 8900, 6700, 5400, 4800, 3200],
            backgroundColor: [
              '#3498db',
              '#2ecc71',
              '#f39c12',
              '#e74c3c',
              '#9b59b6',
              '#34495e'
            ],
            borderWidth: 0,
            borderRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                drawBorder: false
              }
            },
            x: {
              grid: {
                display: false
              }
            }
          }
        }
      });
    }
  };

  useEffect(() => {
    const timer = setTimeout(initializeCharts, 100);
    return () => {
      clearTimeout(timer);
      [salesChartRef, inventoryChartRef, categoryChartRef].forEach(ref => {
        if (ref.current && ref.current.chart) {
          ref.current.chart.destroy();
        }
      });
    };
  }, []);

  // Get color classes for metrics
  const getMetricColor = (color) => {
    const colors = {
      green: 'bg-green-500',
      blue: 'bg-blue-500',
      purple: 'bg-purple-500',
      orange: 'bg-orange-500'
    };
    return colors[color] || 'bg-gray-500';
  };

  // Get activity icon and color
  const getActivityConfig = (type) => {
    const configs = {
      sale: { icon: '💰', color: 'bg-green-500' },
      inventory: { icon: '📦', color: 'bg-blue-500' },
      product: { icon: '🛒', color: 'bg-purple-500' },
      supplier: { icon: '🏢', color: 'bg-orange-500' }
    };
    return configs[type] || { icon: '📋', color: 'bg-gray-500' };
  };

  const getTrendColor = (trend) => {
    return trend === 'up' ? 'text-green-600' : 'text-red-600';
  };

  const getTrendIcon = (trend) => {
    return trend === 'up' ? '↑' : '↓';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Enhanced Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Retail Analytics</h1>
              <p className="text-gray-600 mt-1">Track store performance and business metrics</p>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-2">
            </div>
          </div>
        </div>

        {/* Enhanced Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 mb-2">Date Range</label>
                  <select 
                    value={dateRange}
                    onChange={(e) => setDateRange(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full sm:w-48"
                  >
                    <option value="last7days">Last 7 days</option>
                    <option value="last30days">Last 30 days</option>
                    <option value="last90days">Last 90 days</option>
                    <option value="custom">Custom Range</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select 
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full sm:w-48"
                  >
                    <option value="all">All Categories</option>
                    <option value="dairy">Dairy</option>
                    <option value="produce">Produce</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex gap-3 w-full lg:w-auto mt-4 lg:mt-0">
              <button 
                onClick={handleFilterChange}
                disabled={isLoading}
                className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Applying...
                  </>
                ) : (
                  'Apply Filters'
                )}
              </button>
              <button 
                onClick={() => {
                  setDateRange('last30days');
                  setCategoryFilter('all');
                }}
                className="bg-white text-gray-700 border border-gray-300 px-6 py-2.5 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map(metric => (
            <div key={metric.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-600">{metric.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">{metric.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-xl ${getMetricColor(metric.color)} bg-opacity-10 flex items-center justify-center`}>
                  <span className="text-xl">{metric.icon}</span>
                </div>
              </div>
              <div className="flex items-center gap-1 mt-3">
                <span className={`text-sm font-medium ${getTrendColor(metric.trend)}`}>
                  {getTrendIcon(metric.trend)} {metric.change}
                </span>
                <span className="text-sm text-gray-500">{metric.description}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Charts Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* Sales Trend Chart */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <h2 className="text-lg font-semibold text-gray-900">Daily Sales Trend</h2>
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Today</option>
                <option>This Week</option>
                <option>This Month</option>
              </select>
            </div>
            <div className="h-80">
              <canvas ref={salesChartRef}></canvas>
            </div>
          </div>

          {/* Inventory Distribution Chart */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <h2 className="text-lg font-semibold text-gray-900">Inventory Status</h2>
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>All Products</option>
                <option>Perishables</option>
                <option>Non-Perishables</option>
              </select>
            </div>
            <div className="h-80">
              <canvas ref={inventoryChartRef}></canvas>
            </div>
          </div>

          {/* Category Performance Chart */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 xl:col-span-2">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <h2 className="text-lg font-semibold text-gray-900">Revenue by Category</h2>
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
                <option>This Year</option>
              </select>
            </div>
            <div className="h-80">
              <canvas ref={categoryChartRef}></canvas>
            </div>
          </div>
        </div>

        {/* Enhanced Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Recent Analytics</h2>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View All →
            </button>
          </div>
          <div className="space-y-4">
            {activityData.map(activity => {
              const config = getActivityConfig(activity.type);
              return (
                <div key={activity.id} className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white ${config.color}`}>
                    <span className="text-lg">{config.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900">{activity.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{activity.description}</p>
                    <p className="text-gray-500 text-xs mt-1">By {activity.user}</p>
                  </div>
                  <div className="text-sm text-gray-500 whitespace-nowrap">
                    {activity.time}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;