const { testModel } = require('../models');

const testData = [
  {
    test_name: 'Valorant',
  },
  {
    test_name: 'Farming Simulator 2022',
  },
  {
    test_name: 'Battletoads',
  },
  {
    test_name: 'Overwatch',
  },
  {
    test_name: 'Garfield Kart - Furious Racing',
  },
];

const seedTest = () => Category.bulkCreate(testData);

module.exports = seedTest;
