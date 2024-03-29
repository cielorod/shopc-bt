module.exports = {
    networks: {
      development: {
        host: "127.0.0.1",
        port: 7545,
        network_id: "*"
      },
      ropsten: {
        provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/YOUR_INFURA_API_KEY`),
        network_id: 3,
        gas: 5500000,
        confirmations: 2,
        timeoutBlocks: 200,
        skipDryRun: true
      }
    },
    compilers: {
      solc: {
        version: "0.8.0",    // Specify compiler version
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      }
    }
  };
  