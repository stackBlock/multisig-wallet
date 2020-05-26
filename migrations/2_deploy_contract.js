const Wallet = artifacts.require("Wallet");

module.exports = async function (deployer, _network, accounts) {

    await deployer.deploy(
        Wallet,
        [accounts[0], accounts[1], accounts[2]],    // initial accounts
        2                                           // number of reviews needed
    );

    const wallet = await Wallet.deployed();

    await web3.eth.sendTransaction({
        from: accounts[0],                          //  initial transaction of-
        to: wallet.address,                         //  wei from account[0] to-
        value: 10000                                //  to wallet
    });
};