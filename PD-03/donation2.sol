pragma solidity 0.7.5;
//"SPDX-License-Identifier: UNLICENSED"
pragma experimental ABIEncoderV2; 

contract Donation {
    
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
}