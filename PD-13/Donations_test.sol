pragma solidity ^0.6.0;
import "remix_tests.sol"; // this import is automatically injected by Remix.
import "remix_accounts.sol";
import "../Donations.sol";

contract DonationsTest {
  Donations donations;
  
  address public address1 = 0x93a224c17AC0CFf33dc4A88C3e02dF2204060Bde;

  function beforeEach() public {
    donations = new Donations();
  }
  
  function GetDataTest() public {
      donations.setData(1);
      Assert.equal(donations.getData(), 1, "Data not correct");
      
      donations.setData(2);
      Assert.equal(donations.getData(), 2, "Data not correct");
      
      donations.setData(1);
      Assert.notEqual(donations.getData(), 2, "Data not correct");
  }
  
  function multiplyDataTest() public {
      donations.setData(5);
      donations.multiplyData(5);
      Assert.equal(donations.getData(), 25, "Data not correct");
      
      donations.setData(1);
      donations.multiplyData(5);
      Assert.equal(donations.getData(), 5, "Data not correct");
  }
  
  function DivideDataTest() public {
      donations.setData(10);
      donations.divideData(2);
      Assert.equal(donations.getData(), 5, "Data not correct");
  }
  
  function ValueChangeTest() public {
      donations.setData(1);
      donations.setData(2);
      donations.setData(3);
      Assert.equal(donations.getValuesChanges(), 3, "Not correct");
  }
  
  function DataIsEvenTest() public {
      donations.setData(10);
      Assert.ok(donations.CheckIfDataIsEven(), "Not correct");
      
      donations.setData(11);
      Assert.equal(donations.CheckIfDataIsEven(), false, "Not Correct");
  }

}