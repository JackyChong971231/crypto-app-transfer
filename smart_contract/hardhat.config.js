require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/O0k8eB6pFl0QpPVj3ql0Cjd4wVlFtTOw',
      accounts: ['d861b9b3b8599876390fef0449000ea8c5f372e8b484241d2d81100a3808f614'],
    },
  },
};