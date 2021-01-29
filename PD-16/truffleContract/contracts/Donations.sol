pragma solidity ^0.6.0;
//"SPDX-License-Identifier: UNLICENSED"
pragma experimental ABIEncoderV2;

import "./ProvableAPI.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";

/// @title Contract that manages donations
/// @author A. van Leeuwen
/// @notice This contract may contain some unnecessary functions, given that it has been used as a playground to learn solidity
/// @dev
contract Donations is usingProvable, AccessControl {
    // SafeMath
    using SafeMath for uint256;

    // Roles
    bytes32 public constant OWNER_ROLE = keccak256("OWNER_ROLE");

    // Attributes
    uint256 private totalDonated = 0;
    uint256 private priceOfUrl;
    string public EthPriceInEur;
    string public ThankYouCID;

    // Arrays
    donation[] private Donations;

    // Mappings
    mapping(address => uint256) private Map;

    // Structs
    struct donation {
        uint256 donationAmount;
        address donateur;
    }

    // Events
    event Confirmation(address from, address to, uint256 amount);

    // Constructor
    constructor(address owner) public {
        _setupRole(OWNER_ROLE, owner);
    }

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

    /// @notice sends the eth within the contract to an goed doel
    /// @param receiver of "good doel" and the amount of eth in wei
    function sendTotalAmountToGoedDoel(address payable receiver, uint256 amount)
        public
    {
        require(hasRole(OWNER_ROLE, msg.sender), "Caller is not the owner");
        require(amount <= address(this).balance, "Amount larger than balance");
        (
            bool success, /* bytes memory response*/

        ) = receiver.call{value: amount}("");
        require(success, "Pay was not successful.");
    }

    /// @notice Saves the CID on the Chain
    /// @param CID the IPFS cid of the photo
    function saveThankYouCID(string memory CID) public {
        require(hasRole(OWNER_ROLE, msg.sender), "Caller is not the owner");
        ThankYouCID = CID;
    }

    /// @notice getter for the cid of the photo
    function getThankYouPhotoCID()
        public
        view
        returns (string memory photoCID)
    {
        return ThankYouCID;
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

    /// @notice gives the owner the possibility to destroy the contract
    /// @return message that contract is destroyed
    function Destroy() public payable returns (string memory) {
        require(hasRole(OWNER_ROLE, msg.sender), "Caller is not the owner");
        selfdestruct(msg.sender);
        return "Contract destroyed succesfully";
    }
}
