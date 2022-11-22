const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = "memory laugh drift talent what surge place detail correct donate release physical"

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*" // Match any network id
    },

    sepolia: {
      provider: () => new HDWalletProvider(mnemonic, 'https://sepolia.infura.io/v3/8a1aad2ab01e4c90b16b01402c20fc1b'),
        network_id: 11155111,       // sepolia's id
        gas: 4500000,        // sepolia has a lower block limit than mainnet
        gasPrice: 10000000000
    },
  }
};