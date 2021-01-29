var Donations = artifacts.require("Donations");

module.exports = async function(deployer) {
    await deployer.deploy(Donations, "0x93a224c17AC0CFf33dc4A88C3e02dF2204060Bde"); 
    DonationsContract = await Donations.deployed()
};