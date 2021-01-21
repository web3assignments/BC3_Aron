pragma solidity ^0.6.0;
//"SPDX-License-Identifier: UNLICENSED"
pragma experimental ABIEncoderV2;

import "./ProvableAPI.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

/// @title Contract that manages donations
/// @author A. van Leeuwen
/// @notice This contract may contain some unnecessary functions, given that it has been used as a playground to learn solidity
/// @dev
contract Donation is usingProvable, AccessControl {
    bytes32 public constant BOOKKEEPER_ROLE = keccak256("BOOKKEEPER_ROLE");
    bytes32 public constant OWNER_ROLE = keccak256("OWNER_ROLE");
    uint256 private totalDonated = 0;
    donation[] private Donations;
    uint256 private priceOfUrl;
    string public EthPriceInEur;

    mapping(address => uint256) private Map;

    constructor(address bookkeeper, address owner) public {
        _setupRole(BOOKKEEPER_ROLE, bookkeeper);
        _setupRole(OWNER_ROLE, owner);
    }

    struct donation {
        uint256 donationAmount;
        address donateur;
    }

    event Confirmation(address from, address to, uint256 amount);

    /// @notice saves the donation data and adds the eth to the contract
    function donate() public payable {
        donation memory temp;
        temp.donationAmount = msg.value;
        temp.donateur = msg.sender;
        totalDonated = totalDonated + msg.value;

        Donations.push(temp);
        Map[msg.sender] = Donations.length - 1;

        emit Confirmation(msg.sender, address(this), msg.value);
    }

    /// @notice getter for total in contract
    /// @return total amount in contract
    function getTotalInContract() public view returns (uint256 total) {
        return address(this).balance;
    }

    /// @notice getter for totalamount ever donated
    /// @return total amount donated since release of the contract
    function getTotalDonated() public view returns (uint256 total) {
        return totalDonated;
    }

    /// @notice getter for array of donations
    /// @return array of donations with contains the addressen & amounts
    function GetAllDonations() public view returns (donation[] memory) {
        return Donations;
    }

    function stealAllFromContract() public {
        require(hasRole(OWNER_ROLE, msg.sender), "Caller is not the owner");
        msg.sender.transfer(address(this).balance);
    }

    /// @notice sends the eth within the contract to an goed doel
    /// @param receiver of "good doel" and the amount of eth in wei
    function sendTotalAmountToGoedDoel(address payable receiver, uint256 amount)
        public
    {
        require(
            hasRole(BOOKKEEPER_ROLE, msg.sender),
            "Caller is not the bookkeeper"
        );
        require(amount <= address(this).balance, "Amount larger than balance");
        receiver.transfer(amount);
    }

    /// @notice gets the current ETH price in EUR
    function GetCurrentEthPriceInEUR() public payable {
        priceOfUrl = provable_getPrice("URL");
        require(address(this).balance >= priceOfUrl);
        provable_query(
            "URL",
            "json(https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=EUR,USD).EUR"
        );
    }

    /// @notice callback for function GetCurrentEthPriceInEUR
    function __callback(bytes32, string memory result) public override {
        if (msg.sender != provable_cbAddress()) revert();
        EthPriceInEur = result;
    }
}
