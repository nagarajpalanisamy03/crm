// components/CRM/TargetedMarketing.js
import React, { useState } from 'react';

const TargetedMarketing = () => {
  const [selectedSegment, setSelectedSegment] = useState(null);

  const customerSegments = [
    {
      id: 1,
      name: 'VIP Customers',
      criteria: 'Top 10% spenders',
      count: '285',
      avgSpend: '$2,100',
      lastActivity: 'Last 7 days',
      color: 'bg-purple-50 border-purple-200'
    },
    {
      id: 2,
      name: 'Frequent Shoppers',
      criteria: '2+ visits per week',
      count: '432',
      avgSpend: '$890',
      lastActivity: 'Last 3 days',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      id: 3,
      name: 'New Customers',
      criteria: 'Joined last 30 days',
      count: '156',
      avgSpend: '$320',
      lastActivity: 'Last 14 days',
      color: 'bg-green-50 border-green-200'
    },
    {
      id: 4,
      name: 'At Risk Customers',
      criteria: 'No visit in 60 days',
      count: '89',
      avgSpend: '$650',
      lastActivity: '60+ days ago',
      color: 'bg-red-50 border-red-200'
    },
    {
      id: 5,
      name: 'Seasonal Shoppers',
      criteria: 'Holiday season buyers',
      count: '234',
      avgSpend: '$1,200',
      lastActivity: 'Last 30 days',
      color: 'bg-orange-50 border-orange-200'
    },
    {
      id: 6,
      name: 'Bulk Buyers',
      criteria: 'Large quantity purchases',
      count: '67',
      avgSpend: '$3,400',
      lastActivity: 'Last 21 days',
      color: 'bg-indigo-50 border-indigo-200'
    }
  ];

  const marketingPerformance = [
    { metric: 'Email Open Rate', value: '24.3%', target: '25%', status: 'on-track' },
    { metric: 'Campaign CTR', value: '18.7%', target: '20%', status: 'on-track' },
    { metric: 'Conversion Rate', value: '8.9%', target: '10%', status: 'needs-work' },
    { metric: 'ROI', value: '3.2x', target: '3.0x', status: 'exceeding' }
  ];

  return (
    <div className="space-y-6">
      {/* Marketing Performance */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {marketingPerformance.map((item, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-4">
            <p className="text-sm text-gray-600">{item.metric}</p>
            <div className="flex items-baseline justify-between mt-2">
              <p className="text-2xl font-bold text-gray-800">{item.value}</p>
              <span className={`text-sm ${
                item.status === 'exceeding' ? 'text-green-600' :
                item.status === 'needs-work' ? 'text-red-600' : 'text-yellow-600'
              }`}>
                Target: {item.target}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Customer Segments */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-gray-800">Customer Segments</h3>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Create New Segment
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {customerSegments.map(segment => (
            <div 
              key={segment.id}
              className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                selectedSegment === segment.id ? 'ring-2 ring-blue-500' : segment.color
              }`}
              onClick={() => setSelectedSegment(segment.id)}
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-semibold text-gray-800">{segment.name}</h4>
                <span className="bg-white px-2 py-1 rounded text-sm font-medium">
                  {segment.count}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{segment.criteria}</p>
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">Avg: {segment.avgSpend}</span>
                <span className="text-gray-500">{segment.lastActivity}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Personalized Campaigns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Personalized Campaign Types</h3>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">Birthday Offers</h4>
              <p className="text-sm text-gray-600 mb-3">Automated birthday discounts and special gifts</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Active for 45 customers this week</span>
                <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                  Configure
                </button>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">Purchase-Based Offers</h4>
              <p className="text-sm text-gray-600 mb-3">Recommend products based on purchase history</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">12 active recommendation campaigns</span>
                <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                  Create
                </button>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-800 mb-2">Abandoned Cart Recovery</h4>
              <p className="text-sm text-gray-600 mb-3">Automated reminders for abandoned shopping carts</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">78 carts recovered this month</span>
                <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Campaign Performance</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">Email Campaigns</span>
                <span className="text-sm font-medium text-gray-800">24.3%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '24.3%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">SMS Campaigns</span>
                <span className="text-sm font-medium text-gray-800">56.9%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '56.9%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">Personalized Offers</span>
                <span className="text-sm font-medium text-gray-800">42.1%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '42.1%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">Segmented Campaigns</span>
                <span className="text-sm font-medium text-gray-800">67.8%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-600 h-2 rounded-full" style={{ width: '67.8%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetedMarketing;