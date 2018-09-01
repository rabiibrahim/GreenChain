module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            from: "0x4C15Feb16ff3d4C7abcb91777cc62CAdF0D28C11",
            network_id: 5777, // Match any network id
            gasPrice: 2000000000,   // <--- Twice as much
            gas: 6721975,   // <--- Twice as much
        }
    }
};
