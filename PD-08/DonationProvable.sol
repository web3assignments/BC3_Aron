pragma solidity ^0.6.0;
//"SPDX-License-Identifier: UNLICENSED"
pragma experimental ABIEncoderV2; 
import "github.com/provable-things/ethereum-api/provableAPI_0.6.sol";

contract Donation is usingProvable{
    
  struct donation {
      uint donationAmount;
  	  address donateur;
  }
  
  event Confirmation(
      address from,
      address to,
      uint amount
      );
  
  uint private totalDonated = 0;
  donation[] private Donations;
  mapping(address => uint) private Map;
  
  uint256 private priceOfUrl;
  string public EthPriceInEur;
  
  function donate() payable public {
   	  donation memory temp;
      temp.donationAmount= msg.value;
      temp.donateur=msg.sender; 
      totalDonated = totalDonated + msg.value;
    
    Donations.push(temp);
      Map[msg.sender]= Donations.length -1;
      
      emit Confirmation(msg.sender, address(this), msg.value);
  }
  
  function getTotalInContract() public view returns(uint total) {
      return address(this).balance;
  }
  
  function getTotalDonated() public view returns(uint total) {
      return totalDonated;
  }
  
  function GetAllDonations() public view returns(donation[] memory){
      return Donations;
  }

  function stealAllFromContract() public {
      msg.sender.transfer(address(this).balance);
  }
  
  function sendTotalAmountToGoedDoel(address payable receiver, uint amount) public {
      require(amount <= address(this).balance, "Amount larger than balance");
      receiver.transfer(amount);
  }
  
  function GetCurrentEthPriceInEUR() public payable {
      priceOfUrl = provable_getPrice("URL");
      require (address(this).balance >= priceOfUrl);
      provable_query("URL", "json(https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=EUR,USD).EUR");
  }
  
  function __callback(bytes32 , string memory result) override public {
      if(msg.sender != provable_cbAddress()) revert();
      EthPriceInEur = result;
  }
  
}