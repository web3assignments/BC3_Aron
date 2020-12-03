    Web3 = require('web3');
    web3 = new Web3();
    var i = 0;
    var find = "11111";
    var findlenght = find.length + 2;
    var prefix;
    do {
        newAddress = web3.eth.accounts.create();
        prefix = newAddress.address.slice(2, findlenght).toLowerCase();
        if (++i % 100000 == 0) {
            console.log(i);
        }
    }
    while (prefix != find) {
        console.log(`found an address with prefix ${prefix}`);
        console.log(`address=${newAddress.address}`);
        console.log(`privatekey=${newAddress.privateKey}`);
    }