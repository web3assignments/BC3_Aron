const { deployProxy } = require('@openzeppelin/truffle-upgrades');

var Donations = artifacts.require("Donations");

module.exports = async function(deployer) {
    const DonationsContract = await deployProxy(Donations, { deployer });
    console.log(`Address of DonationsContract: ${Donations.address}`);
}