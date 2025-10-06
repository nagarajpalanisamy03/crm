import React, { useState } from 'react';

const Marketing = () => {
  const [activeTab, setActiveTab] = useState('promotions');

  const currentPromotions = [
    {
      id: 1,
      name: 'Weekend Super Sale',
      type: 'Store-wide',
      discount: '20% OFF',
      category: 'All Products',
      status: 'active',
      startDate: '2024-01-13',
      endDate: '2024-01-14',
      target: 'All Customers',
      redemption: '1,245',
      budget: '$2,000',
      salesIncrease: '+35%'
    },
    {
      id: 2,
      name: 'Dairy Products Bundle',
      type: 'Category',
      discount: 'Buy 2 Get 1 Free',
      category: 'Dairy',
      status: 'active',
      startDate: '2024-01-10',
      endDate: '2024-01-20',
      target: 'Regular Shoppers',
      redemption: '856',
      budget: '$1,500',
      salesIncrease: '+68%'
    },
    {
      id: 3,
      name: 'New Customer Welcome',
      type: 'Loyalty',
      discount: '15% OFF First Purchase',
      category: 'All Products',
      status: 'active',
      startDate: '2024-01-01',
      endDate: '2024-01-31',
      target: 'New Customers',
      redemption: '342',
      budget: '$800',
      salesIncrease: '+42%'
    }
  ];

  const loyaltyPrograms = [
    {
      id: 1,
      name: 'Gold Member Tier',
      members: '1,234',
      points: '45,670',
      rewards: 'Free Delivery + 5% Cashback',
      status: 'active'
    },
    {
      id: 2,
      name: 'Silver Member Tier',
      members: '2,567',
      points: '23,450',
      rewards: '2% Cashback',
      status: 'active'
    }
  ];

  const retailCampaigns = [
    {
      id: 1,
      name: 'Weekly Flyer Distribution',
      type: 'Print Media',
      reach: '5,000 households',
      cost: '$1,200',
      response: '12%',
      newCustomers: '156'
    },
    {
      id: 2,
      name: 'Social Media - Facebook',
      type: 'Digital',
      reach: '15,230 people',
      cost: '$300',
      response: '8%',
      newCustomers: '89'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h1 className="text-2xl font-bold text-gray-800">Marketing Management</h1>
        <p className="text-gray-600">Retail Promotions and Campaign Management</p>
      </div>

      {/* Marketing Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-600">Active Promotions</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">8</p>
            </div>
            <span className="text-sm font-medium px-2 py-1 rounded text-blue-600 bg-blue-50">
              +2
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-600">Loyalty Members</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">4,691</p>
            </div>
            <span className="text-sm font-medium px-2 py-1 rounded text-blue-600 bg-blue-50">
              +156
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-600">Campaign ROI</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">285%</p>
            </div>
            <span className="text-sm font-medium px-2 py-1 rounded text-blue-600 bg-blue-50">
              +45%
            </span>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-600">Coupon Redemption</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">68%</p>
            </div>
            <span className="text-sm font-medium px-2 py-1 rounded text-blue-600 bg-blue-50">
              +16%
            </span>
          </div>
        </div>
      </div>

      {/* Tabs and Content */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex -mb-px">
            {['promotions', 'loyalty', 'campaigns'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-3 px-6 text-sm font-medium border-b-2 transition duration-200 ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        {/* Promotions Tab */}
        {activeTab === 'promotions' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">Current Promotions</h3>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                Create Promotion
              </button>
            </div>

            <div className="space-y-4">
              {currentPromotions.map((promo) => (
                <div key={promo.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-3">
                        <h4 className="font-semibold text-gray-900">{promo.name}</h4>
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                          {promo.status.toUpperCase()}
                        </span>
                        <span className="text-sm font-medium text-blue-600">{promo.discount}</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-600 mb-3">
                        <div>
                          <span className="font-medium">Type:</span> {promo.type}
                        </div>
                        <div>
                          <span className="font-medium">Category:</span> {promo.category}
                        </div>
                        <div>
                          <span className="font-medium">Target:</span> {promo.target}
                        </div>
                        <div>
                          <span className="font-medium">Duration:</span> {promo.startDate} to {promo.endDate}
                        </div>
                        <div>
                          <span className="font-medium">Redemption:</span> {promo.redemption}
                        </div>
                        <div>
                          <span className="font-medium">Sales Increase:</span> {promo.salesIncrease}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-2 ml-4">
                      <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                        Edit
                      </button>
                      <button className="bg-gray-600 text-white px-3 py-1 rounded text-sm hover:bg-gray-700">
                        Analytics
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Loyalty Tab */}
        {activeTab === 'loyalty' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-800">Loyalty Programs</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {loyaltyPrograms.map((program) => (
                <div key={program.id} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">{program.name}</h4>
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                      Active
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Members:</span>
                      <span className="font-semibold">{program.members}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Points:</span>
                      <span className="font-semibold">{program.points}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Rewards:</span>
                      <p className="font-semibold text-blue-600 mt-1">{program.rewards}</p>
                    </div>
                  </div>

                  <div className="flex space-x-2 mt-4">
                    <button className="flex-1 bg-blue-600 text-white py-2 rounded text-sm hover:bg-blue-700">
                      Manage Members
                    </button>
                    <button className="flex-1 border border-gray-300 py-2 rounded text-sm hover:bg-gray-50">
                      Edit Program
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Campaigns Tab */}
        {activeTab === 'campaigns' && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Marketing Campaigns</h3>
            
            <div className="space-y-4">
              {retailCampaigns.map((campaign) => (
                <div key={campaign.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-3">
                        <h4 className="font-semibold text-gray-900">{campaign.name}</h4>
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                          {campaign.type}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-600">
                        <div>
                          <span className="font-medium">Reach:</span> {campaign.reach}
                        </div>
                        <div>
                          <span className="font-medium">Cost:</span> {campaign.cost}
                        </div>
                        <div>
                          <span className="font-medium">Response Rate:</span> {campaign.response}
                        </div>
                        <div>
                          <span className="font-medium">New Customers:</span> {campaign.newCustomers}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-2 ml-4">
                      <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                        Analyze
                      </button>
                      <button className="bg-gray-600 text-white px-3 py-1 rounded text-sm hover:bg-gray-700">
                        Repeat
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Marketing;