// components/CRM/CustomerEngagement.js
import React, { useState } from 'react';

const CustomerEngagement = () => {
  const [activeChannel, setActiveChannel] = useState('email');

  const engagementChannels = [
    {
      id: 'email',
      name: 'Email Campaigns',
      icon: '📧',
      stats: { sent: '2,847', opened: '1,245', rate: '43.7%' },
      color: 'bg-blue-50 border-blue-200'
    },
    {
      id: 'sms',
      name: 'SMS Messages',
      icon: '💬',
      stats: { sent: '1,568', responded: '892', rate: '56.9%' },
      color: 'bg-green-50 border-green-200'
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: '📱',
      stats: { sent: '856', opened: '723', rate: '84.5%' },
      color: 'bg-green-50 border-green-200'
    },
    {
      id: 'push',
      name: 'Push Notifications',
      icon: '🔔',
      stats: { sent: '4,235', opened: '2,156', rate: '50.9%' },
      color: 'bg-purple-50 border-purple-200'
    }
  ];

  const recentCampaigns = [
    {
      id: 1,
      name: 'Weekly Specials',
      channel: 'Email',
      segment: 'All Customers',
      sent: '2,847',
      opened: '1,245',
      status: 'Completed'
    },
    {
      id: 2,
      name: 'VIP Discounts',
      channel: 'SMS',
      segment: 'VIP Customers',
      sent: '320',
      opened: '289',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Birthday Offers',
      channel: 'Email',
      segment: 'Birthday Month',
      sent: '156',
      opened: '134',
      status: 'Active'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Engagement Channels */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {engagementChannels.map((channel) => (
          <div 
            key={channel.id}
            className={`bg-white rounded-lg border-2 p-4 cursor-pointer transition-all ${
              activeChannel === channel.id ? 'ring-2 ring-blue-500' : channel.color
            }`}
            onClick={() => setActiveChannel(channel.id)}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl">{channel.icon}</span>
              <span className="text-sm font-medium text-gray-600">{channel.stats.rate}</span>
            </div>
            <h3 className="font-semibold text-gray-800">{channel.name}</h3>
            <div className="mt-2 text-sm text-gray-600">
              Sent: {channel.stats.sent} • Engaged: {channel.stats.opened || channel.stats.responded}
            </div>
          </div>
        ))}
      </div>

      {/* Campaign Builder */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Create New Campaign</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Name</label>
            <input 
              type="text" 
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter campaign name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Channel</label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>Email</option>
              <option>SMS</option>
              <option>WhatsApp</option>
              <option>Push Notification</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Target Segment</label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>All Customers</option>
              <option>VIP Customers</option>
              <option>New Customers</option>
              <option>Inactive Customers</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Schedule</label>
            <input 
              type="datetime-local"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
          <textarea 
            rows="4"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your campaign message..."
          />
        </div>
        <div className="mt-6 flex justify-end">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Launch Campaign
          </button>
        </div>
      </div>

      {/* Recent Campaigns */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Campaigns</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">CAMPAIGN</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">CHANNEL</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">SEGMENT</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">SENT</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">ENGAGED</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">STATUS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentCampaigns.map(campaign => (
                <tr key={campaign.id}>
                  <td className="py-3 px-4">{campaign.name}</td>
                  <td className="py-3 px-4">{campaign.channel}</td>
                  <td className="py-3 px-4">{campaign.segment}</td>
                  <td className="py-3 px-4">{campaign.sent}</td>
                  <td className="py-3 px-4">{campaign.opened}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      campaign.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {campaign.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomerEngagement;