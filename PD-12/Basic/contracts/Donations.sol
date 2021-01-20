pragma solidity ^0.6.0;
//"SPDX-License-Identifier: UNLICENSED"
import "@openzeppelin/contracts/access/AccessControl.sol";

contract Donations is AccessControl {
  
  uint data;
  bytes32 public constant BOOKKEEPER_ROLE = keccak256("BOOKKEEPER_ROLE");

  constructor(address bookkeeper) public {
      _setupRole(BOOKKEEPER_ROLE, bookkeeper);
  }
  
  function getData() external view returns(uint){
      return data;
  }
  
  function setData(uint _data) external {
      require(hasRole(BOOKKEEPER_ROLE, msg.sender), "Caller is not the bookkeeper");
      data = _data;
  }
}