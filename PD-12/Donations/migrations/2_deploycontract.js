var Donations = artifacts.require("Donations");

module.exports = async function(deployer) {
    await deployer.deploy(Donations, "0x93a224c17AC0CFf33dc4A88C3e02dF2204060Bde", "0x93a224c17AC0CFf33dc4A88C3e02dF2204060Bde", {deployer , unsafeAllowCustomTypes:true}); 
    DonationsContract = await Donations.deployed()

    console.log("Expecting Error because not the bookkeeper");
    await DonationsContract.sendTotalAmountToGoedDoel("0x93a224c17AC0CFf33dc4A88C3e02dF2204060Bde",1).catch(err => console.log(`Error: ${err.reason}`));
};