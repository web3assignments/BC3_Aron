//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract ERC721Contract is ERC721 {

    uint256 counter;

    constructor () public ERC721("AronsToken", "ACT")
    {
        counter = 0;
    }

    function Mint(address to, string memory tokenUri) public {
        _mint(to, counter);
        _setTokenURI(counter, tokenUri);
        counter++;
    }
}