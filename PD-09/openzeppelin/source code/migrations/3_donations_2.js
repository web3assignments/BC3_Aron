const { deployProxy, upgradeProxy } = require('@openzeppelin/truffle-upgrades');

var Donations = artifacts.require("Donations");
var Donations2 = artifacts.require("Donations2");

module.exports = async function(deployer) {
    const DonationsContract = await Donations.deployed();
    const Donations2Contract = await upgradeProxy(DonationsContract.address, Donations2, { deployer });
    console.log(`Address of DonationsContract: ${Donations.address}`);
    console.log(`Address of Donations2Contract: ${Donations2.address}`);
}