pragma solidity 0.5.12;

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
    
      Map[msg.sender]= Donations.length -1;
      Donations.push(temp);
      
      emit Confirmation(msg.sender, address(this), msg.value);
  }
  
  function getTotalInContract() public view returns(uint total) {
      return address(this).balance;
  }
  
  function getTotalDonated() public view returns(uint total) {
      return totalDonated;
  }
  
  function getDonationCount() public view returns(uint count){
      return Donations.length;
  }
  
  function getDonation(uint index) public view returns(address, uint) {
      require(index < Donations.length, "Transaction doesn't exist");
      return (Donations[index].donateur, Donations[index].donationAmount);
  }

  function stealAllFromContract() public {
      msg.sender.transfer(address(this).balance);
  }
  
  function sendTotalAmountToGoedDoel(address payable receiver, uint amount) public {
      require(amount <= address(this).balance, "Amount larger than balance");
      receiver.transfer(amount);
  }
}