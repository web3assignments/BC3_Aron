pragma solidity ^0.6.0;
//"SPDX-License-Identifier: UNLICENSED"
pragma experimental ABIEncoderV2; 
import "github.com/provable-things/ethereum-api/provableAPI_0.6.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/math/SafeMath.sol";


/// @title Contract that manages donations
/// @author A. van Leeuwen
/// @notice This contract may contain some unnecessary functions, given that it has been used as a playground to learn solidity
/// @dev 
contract Donation is usingProvable{
  using SafeMath for uint256;    
    
  address public owner;
  uint private totalDonated = 0;
  donation[] private Donations;
  uint256 private priceOfUrl;
  string public EthPriceInEur;
    
  mapping(address => uint) private Map;
  struct donation {
      uint donationAmount;
  	  address donateur;
  }
  
  event Confirmation(
      address from,
      address to,
      uint amount
      );
      
    modifier CheckIfOwner()                { require(msg.sender == owner,      "Only the owner of the contract is allowed to steal from it");       _;}
  
  constructor() public { owner = msg.sender;}
  
  /// @notice saves the donation data and adds the eth to the contract
  function Donate() payable public {
   	  donation memory temp;
      temp.donationAmount= msg.value;
      temp.donateur=msg.sender; 
      totalDonated = totalDonated + msg.value;
    
    Donations.push(temp);
      Map[msg.sender]= Donations.length -1;
      
      emit Confirmation(msg.sender, address(this), msg.value);
  }

  /// @notice getter for total in contract
  /// @return total amount in contract
  function GetTotalInContract() public view returns(uint total) {
      return address(this).balance;
  }
  
  /// @notice getter for totalamount ever donated
  /// @return total amount donated since release of the contract
  function GetTotalDonated() public view returns(uint total) {
      return totalDonated;
  }
  
  /// @notice getter for array of donations
  /// @return array of donations with contains the addressen & amounts
  function GetAllDonations() public view returns(donation[] memory){
      return Donations;
  }
  
  /// @notice Checks if the caller is the owner of the contract and when it is, it retrieves eth from the contract
  /// @return message transfer succesfull
  function GetEthFromContract() payable
  CheckIfOwner()
  public returns(string memory){
      (bool success, /* bytes memory response*/) = address(this).call{value: address(this).balance}('');
        require(success, "Pay was not successful.");
      return "ETH transfered succesfully";
  }
  
  /// @notice sends the eth within the contract to an goed doel
  /// @param receiver of "good doel" and the amount of eth in wei
  function SendTotalAmountToGoedDoel(address payable receiver, uint amount) public {
      require(amount <= address(this).balance, "Amount larger than balance");
      (bool success, /* bytes memory response*/) = receiver.call{value: amount}('');
        require(success, "Pay was not successful.");
  }
  
  /// @notice gets the current ETH price in EUR
  function GetCurrentEthPriceInEUR() public payable {
      priceOfUrl = provable_getPrice("URL");
      require (address(this).balance >= priceOfUrl);
      provable_query("URL", "json(https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=EUR,USD).EUR");
  }
  
  /// @notice callback for function GetCurrentEthPriceInEUR
  function __callback(bytes32 , string memory result) override public {
      if(msg.sender != provable_cbAddress()) revert();
      EthPriceInEur = result;
  }
  
  /// @notice gives the owner the possibility to destroy the contract
  function Destroy() payable
  CheckIfOwner()
  public returns(string memory){
      selfdestruct(msg.sender);
      return "Contract destroyed succesfully";
  }
  
}