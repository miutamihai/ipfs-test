const path = require("path");
const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = "alarm front observe forest victory car crane birth love erode dumb market";


module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 8545
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/2ce6a09a30f04680b32d2fc397ea85fb");
      },
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
    }
  }
};
