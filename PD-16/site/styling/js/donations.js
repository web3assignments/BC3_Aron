//#region getContract
async function ethEnabled() {
    if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        window.ethereum.enable();
        return true;
    }
    return false;
}

async function getContract() {

    await ethEnabled();
    var web3 = window.web3;

    try {

        var MyIdoContract = new web3.eth.Contract(
            Donation.abi,
            Donation.networks[4].address
        );

        return MyIdoContract;
    }
    catch (error) {
        console.log("error " + error);
    }
}
//#endregion


async function donate() {

    var contract = await getContract();
    var accounts = await web3.eth.getAccounts();

    amountDonate = parseFloat(document.getElementById('amount').value) * 1000000000000000000;

    let donateCallToContract = await contract.methods.donate().send({ from: accounts[0], value: amountDonate })
        .then(result => { showThankYouPhoto(); return result })
        .catch(err => console.log(err));

    //document.getElementById('message-for-donate').innerText = 'Successvol gedoneerd';

    loadCurrentBalance();
    getMostRecentDonations();
}

//#region currentBalances&transactions
async function loadCurrentBalance() {

    var contract = await getContract();
    var accounts = await web3.eth.getAccounts();

    //Balance in contract
    let getTotalInContract = await contract.methods.getTotalInContract().call()
        .then(result => { return result })
        .catch(err => console.log(err));
    document.getElementById('priceInEth').innerText = 'Balance contract in ETH: ' + getTotalInContract / 1000000000000000000;

    //Balance in euro
    let Euro = await contract.methods.EthPriceInEur().call()
        .then(result => { return result })
        .catch(err => console.log(err));
    let contractBalanceInEUR = (getTotalInContract / 1000000000000000000) * Euro;
    document.getElementById('lastKnownPrice').innerText = 'Last known ETH price in Euro: ' + Euro;
    document.getElementById('priceInEUR').innerText = 'Balance contract in Euro based on last known ETH price: ' + contractBalanceInEUR;

    //Total donated ever
    let getTotalDonated = await contract.methods.getTotalDonated().call()
        .then(result => { return result })
        .catch(err => console.log(err));
    let totalInEUR = (getTotalDonated / 1000000000000000000) * Euro;
    document.getElementById('totalDonated').innerText = 'Total donated in ETH: ' + getTotalDonated / 1000000000000000000;
    document.getElementById('totalDonatedInEur').innerText = 'Total donated in Euro: ' + totalInEUR;

}

async function getMostRecentDonations() {
    var contract = await getContract();
    var accounts = await web3.eth.getAccounts();

    let getTotalInContract = await contract.methods.GetAllDonations().call()
        .then(result => { return result })
        .catch(err => console.log(err));
    let counter = 1;
    for (var i = getTotalInContract.length - 1; i >= getTotalInContract.length - 5; i--) {
        let amount = getTotalInContract[i].donationAmount / 1000000000000000000;
        document.getElementById('donation' + counter).innerText = getTotalInContract[i].donateur + ' donated ' + amount + ' ETH';
        counter++;
    }
}
//#endregion

//#region oracle 
async function getPriceInEUR() {
    var contract = await getContract();
    var accounts = await web3.eth.getAccounts();

    let getTotalInContract = await contract.methods.getTotalInContract().call()
        .then(result => { return result })
        .catch(err => console.log(err));

    let updateCurrentEthPrice = await contract.methods.GetCurrentEthPriceInEUR().send({ from: accounts[0] })
        .then(result => { return result })
        .catch(err => console.log(err));

    document.getElementById('lastKnownPrice').innerText = 'Loading... This function will take around 30 seconds to be processed';

    await sleep(30000);

    loadCurrentBalance();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//#endregion

//#region PhotoCID
function setCID(logstr) {
    document.getElementById('_photoCID').value = logstr;
}

async function upload() {
    const reader = new FileReader();
    reader.onloadend = async function () {
        const ipfs = window.IpfsHttpClient("https://ipfs.infura.io:5001"); // Connect to IPFS
        const buf = await buffer.Buffer(reader.result) // Convert data into buffer
        const result = await ipfs.add(buf).catch() // Upload buffer to IPFS
        setCID(result.path);
        let url = `https://ipfs.io/ipfs/${result.path}`
        console.log(url);
    }
    const photo = document.getElementById("photo");
    reader.readAsArrayBuffer(photo.files[0]); // Read Provided File
}


async function saveCIDToContract() {
    var _photoCID = document.getElementById("_photoCID").value;
    console.log(_photoCID);

    var contract = await getContract();
    var accounts = await web3.eth.getAccounts();

    let saveCIDToContract = await contract.methods.saveThankYouCID(_photoCID).send({ from: accounts[0] })
        .then(result => {
            document.getElementById("uploadSuccesfull").innerText = "Photo update succesfull"
            return result
        })
        .catch(err => console.log(err));
}
async function showThankYouPhoto() {
    var contract = await getContract();
    var accounts = await web3.eth.getAccounts();

    let CID = await contract.methods.getThankYouPhotoCID().call()
        .then(result => { return result })
        .catch(err => console.log(err));

    var img = new Image();
    img.src = `https://ipfs.io/ipfs/${CID}`;
    img.style = 'height:250px';
    document.getElementById('placePhoto').appendChild(img);
}
//#endregion

async function sendTotalAmountToGoedDoel() {
    var _address = document.getElementById("charityAddress").value;
    var _amount = document.getElementById("charityAmount").value;
    
    console.log(_address);
    console.log(_amount);

    var contract = await getContract();
    var accounts = await web3.eth.getAccounts();

    console.log(accounts[0]);

    let donateCallToContract = await contract.methods.sendTotalAmountToGoedDoel(_address, _amount).send({ from: accounts[0] })
        .then(result => { document.getElementById("transferSucces").innerText = "ETH transfered"; return result })
        .catch(err => console.log(err));

    loadCurrentBalance();
}