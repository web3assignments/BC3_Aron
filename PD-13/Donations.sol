pragma solidity ^0.6.0;
//"SPDX-License-Identifier: UNLICENSED"
pragma experimental ABIEncoderV2; 

contract Donations {

  uint data;
  uint[] private values;
  
  function getData() external view returns(uint){
      return data;
  }
  
  function setData(uint _data) external {
      data = _data;
      values.push(_data);
  }
  
  function multiplyData(uint multiplier) public {
      data = data * multiplier;
  }
  
  function divideData(uint divider) public {
      data = data / divider;
  }
  
  function getValuesChanges() public view returns(uint amount) {
      return values.length;
  }
  
  function CheckIfDataIsEven() public view returns(bool even) {
      if(data % 2 != 0){
          return false;
      }
      return true;
  }
}