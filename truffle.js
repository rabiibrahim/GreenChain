module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      from: '0x43d6B73cC992D8a79729D9988bffe4742e141fC9',
      network_id: 5777, // Match any network id
       gasPrice: 50,   // <--- Twice as much
       gas: 6721975,   // <--- Twice as much
    }
  }
};
