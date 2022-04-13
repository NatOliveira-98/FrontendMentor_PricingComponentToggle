const subscriptionPlans = [
  {
    id: 1,
    planType: 'Basic',
    priceMonthly: '$19.99',
    priceAnnually: '$199.99',
    storageLimit: '500 GB Storage',
    uploadLimit: 'Send up to 3 GB',
    allowedUsers: '2 Users Allowed',
  },
  {
    id: 2,
    planType: 'Professional',
    priceMonthly: '$24.99',
    priceAnnually: '$249.99',
    storageLimit: '1 TB Storage',
    uploadLimit: 'Send up to 10 GB',
    allowedUsers: '5 Users Allowed',
  },
  {
    id: 3,
    planType: 'Master',
    priceMonthly: '$39.99',
    priceAnnually: '$399.99',
    storageLimit: '2 TB Storage',
    uploadLimit: 'Send up to 20 GB',
    allowedUsers: '10 Users Allowed',
  },
];

export default subscriptionPlans;
