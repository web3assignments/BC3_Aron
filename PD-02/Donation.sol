pragma solidity 0.5.12;

contract Donation {
  struct donation {
    uint248 donationAmount;
  	address donateur;
  }
  
  donation[] private Donations;
  mapping(address => uint248) public Map;
  
  function donate() payable public {
   	donation memory temp;
    temp.donationAmount=uint248(msg.value);
    temp.donateur=msg.sender; 
    Map[msg.sender]=uint248(msg.value);
    Donations.push(temp);
  }
  
  function getTotalAmountDonated() public view returns(uint total) {
   	return address(this).balance;
  }

  function stealAllFromContract() public {
    msg.sender.transfer(address(this).balance);
  }
  
  function sendTotalAmountToGoedDoel(address payable receiver) public {
    receiver.transfer(address(this).balance);
  }
}
