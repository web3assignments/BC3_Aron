//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20Contract is ERC20 {
    constructor () public ERC20("AronsToken", "ATO")
    {
        _mint(msg.sender, 1000000000000000000);
        _mint(0xEA9a7c7cD8d4Dc3acc6f0AaEc1506C8D6041a1c5, 1000000000000000000);
    }
}