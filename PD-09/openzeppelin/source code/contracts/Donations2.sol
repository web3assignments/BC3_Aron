pragma solidity ^0.6.0;
import "@openzeppelin/upgrades-core/contracts/Initializable.sol";

contract Donations2 is Initializable  {

  address public owner;
  uint data;
  
  function initialize() public initializer {
    owner = msg.sender;
  }
  
  function getData() external view returns(uint){
      return data;
  }
  
  function setData(uint _data) external {
      data = _data;
  }

    function setData2(uint _data) external {
      data = _data+15;
  }
  
}