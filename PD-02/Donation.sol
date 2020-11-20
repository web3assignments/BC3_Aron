pragma solidity 0.5.12;

contract Donation {
  struct donation {
    uint donationAmount;
  	address donateur;
  }
  
  uint private totalDonated = 0;
  
  donation[] public Donations;
  mapping(address => uint) private Map;
  
  function donate() payable public {
   	donation memory temp;
    temp.donationAmount= msg.value;
    temp.donateur=msg.sender; 
    
    totalDonated = totalDonated + msg.value;
    
    Map[msg.sender]= Donations.length -1;
    Donations.push(temp);
  }
  
  function getTotalInContract() public view returns(uint total) {
   	return address(this).balance;
  }
  
  function getTotalDonated() public view returns(uint total) {
    return totalDonated;
  }

  function stealAllFromContract() public {
    msg.sender.transfer(address(this).balance);
  }
  
  function sendTotalAmountToGoedDoel(address payable receiver) public {
    receiver.transfer(address(this).balance);
  }
}