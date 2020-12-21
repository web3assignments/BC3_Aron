pragma solidity 0.7.5;
//"SPDX-License-Identifier: UNLICENSED"

contract SimpleContract {
  
  uint data;
  
  function getData() external view returns(uint){
      return data;
  }
  
  function setData(uint _data) external {
      data = _data;
  }
}