// components/CRM/LoyaltyRewards.js
import React from 'react';

const LoyaltyRewards = () => {
  const loyaltyTiers = [
    {
      tier: 'Bronze',
      points: '0-999',
      customers: '856',
      benefits: ['5% cashback', 'Birthday offers'],
      color: 'bg-yellow-100 border-yellow-300'
    },
    {
      tier: 'Silver',
      points: '1000-2499',
      customers: '432',
      benefits: ['10% cashback', 'Early access to sales', 'Free shipping'],
      color: 'bg-gray-100 border-gray-300'
    },
    {
      tier: 'Gold',
      points: '2500-4999',
      customers: '215',
      benefits: ['15% cashback', 'Personal shopping assistant', 'Priority support'],
      color: 'bg-yellow-100 border-yellow-400'
    },
    {
      tier: 'Platinum',
      points: '5000+',
      customers: '65',
      benefits: ['20% cashback', 'VIP events', 'Exclusive products', 'Dedicated account manager'],
      color: 'bg-purple-100 border-purple-300'
    }
  ];

  const rewardsStats = [
    { title: 'Total Points Issued', value: '1,245,890', change: '+15%' },
    { title: 'Points Redeemed', value: '567,340', change: '+12%' },
    { title: 'Active Coupons', value: '156', change: '+8%' },
    { title: 'Total Rewards Value', value: '$45,670', change: '+20%' }
  ];

  return (
    <div className="space-y-6">
      {/* Rewards Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {rewardsStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-4">
            <p className="text-sm text-gray-600">{stat.title}</p>
            <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
            <span className="text-sm text-green-600">{stat.change}</span>
          </div>
        ))}
      </div>

      {/* Loyalty Tiers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {loyaltyTiers.map((tier, index) => (
          <div key={index} className={`bg-white rounded-lg border-2 p-6 ${tier.color}`}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800">{tier.tier} Tier</h3>
                <p className="text-gray-600">{tier.points} points</p>
              </div>
              <span className="bg-white px-3 py-1 rounded-full text-sm font-medium">
                {tier.customers} members
              </span>
            </div>
            <div className="space-y-2">
              {tier.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center text-sm text-gray-700">
                  <span className="text-green-500 mr-2">✓</span>
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Rewards Redemption */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Popular Rewards</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">500 pts</div>
            <div className="text-sm text-gray-600">$5 Discount</div>
            <div className="text-xs text-gray-500">125 redemptions this month</div>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">1000 pts</div>
            <div className="text-sm text-gray-600">Free Product</div>
            <div className="text-xs text-gray-500">89 redemptions this month</div>
          </div>
          <div className="text-center p-4 border border-gray-200 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">2000 pts</div>
            <div className="text-sm text-gray-600">$25 Gift Card</div>
            <div className="text-xs text-gray-500">45 redemptions this month</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoyaltyRewards;