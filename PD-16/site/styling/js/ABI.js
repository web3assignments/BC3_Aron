var Donation = {
  "contractName": "Donations",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Confirmation",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "previousAdminRole",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "newAdminRole",
          "type": "bytes32"
        }
      ],
      "name": "RoleAdminChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleGranted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleRevoked",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "DEFAULT_ADMIN_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "EthPriceInEur",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "OWNER_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "ThankYouCID",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        }
      ],
      "name": "getRoleAdmin",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getRoleMember",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        }
      ],
      "name": "getRoleMemberCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "grantRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "hasRole",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "renounceRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "revokeRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "donate",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [],
      "name": "getTotalInContract",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "total",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "getTotalDonated",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "total",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "GetAllDonations",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "donationAmount",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "donateur",
              "type": "address"
            }
          ],
          "internalType": "struct Donations.donation[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address payable",
          "name": "receiver",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "sendTotalAmountToGoedDoel",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "CID",
          "type": "string"
        }
      ],
      "name": "saveThankYouCID",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getThankYouPhotoCID",
      "outputs": [
        {
          "internalType": "string",
          "name": "photoCID",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "GetCurrentEthPriceInEUR",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        },
        {
          "internalType": "string",
          "name": "result",
          "type": "string"
        }
      ],
      "name": "__callback",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_myid",
          "type": "bytes32"
        },
        {
          "internalType": "string",
          "name": "_result",
          "type": "string"
        },
        {
          "internalType": "bytes",
          "name": "_proof",
          "type": "bytes"
        }
      ],
      "name": "__callback",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "Destroy",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.6.12+commit.27d51765\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Confirmation\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"previousAdminRole\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"newAdminRole\",\"type\":\"bytes32\"}],\"name\":\"RoleAdminChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleGranted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleRevoked\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DEFAULT_ADMIN_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"Destroy\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"EthPriceInEur\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"GetAllDonations\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"donationAmount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"donateur\",\"type\":\"address\"}],\"internalType\":\"struct Donations.donation[]\",\"name\":\"\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"GetCurrentEthPriceInEUR\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"OWNER_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"ThankYouCID\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"},{\"internalType\":\"string\",\"name\":\"result\",\"type\":\"string\"}],\"name\":\"__callback\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_myid\",\"type\":\"bytes32\"},{\"internalType\":\"string\",\"name\":\"_result\",\"type\":\"string\"},{\"internalType\":\"bytes\",\"name\":\"_proof\",\"type\":\"bytes\"}],\"name\":\"__callback\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"donate\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"}],\"name\":\"getRoleAdmin\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"getRoleMember\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"}],\"name\":\"getRoleMemberCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getThankYouPhotoCID\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"photoCID\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getTotalDonated\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"total\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getTotalInContract\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"total\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"grantRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"hasRole\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"renounceRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"revokeRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"CID\",\"type\":\"string\"}],\"name\":\"saveThankYouCID\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address payable\",\"name\":\"receiver\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"sendTotalAmountToGoedDoel\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"A. van Leeuwen\",\"kind\":\"dev\",\"methods\":{\"Destroy()\":{\"returns\":{\"_0\":\"message that contract is destroyed\"}},\"GetAllDonations()\":{\"returns\":{\"_0\":\"array of donations with contains the addressen & amounts\"}},\"getRoleAdmin(bytes32)\":{\"details\":\"Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}.\"},\"getRoleMember(bytes32,uint256)\":{\"details\":\"Returns one of the accounts that have `role`. `index` must be a value between 0 and {getRoleMemberCount}, non-inclusive. Role bearers are not sorted in any particular way, and their ordering may change at any point. WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure you perform all queries on the same block. See the following https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296[forum post] for more information.\"},\"getRoleMemberCount(bytes32)\":{\"details\":\"Returns the number of accounts that have `role`. Can be used together with {getRoleMember} to enumerate all bearers of a role.\"},\"getTotalDonated()\":{\"returns\":{\"total\":\"amount donated since release of the contract\"}},\"getTotalInContract()\":{\"returns\":{\"total\":\"amount in contract\"}},\"grantRole(bytes32,address)\":{\"details\":\"Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role.\"},\"hasRole(bytes32,address)\":{\"details\":\"Returns `true` if `account` has been granted `role`.\"},\"renounceRole(bytes32,address)\":{\"details\":\"Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`.\"},\"revokeRole(bytes32,address)\":{\"details\":\"Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role.\"},\"saveThankYouCID(string)\":{\"params\":{\"CID\":\"the IPFS cid of the photo\"}},\"sendTotalAmountToGoedDoel(address,uint256)\":{\"params\":{\"receiver\":\"of \\\"good doel\\\" and the amount of eth in wei\"}}},\"title\":\"Contract that manages donations\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"Destroy()\":{\"notice\":\"gives the owner the possibility to destroy the contract\"},\"GetAllDonations()\":{\"notice\":\"getter for array of donations\"},\"GetCurrentEthPriceInEUR()\":{\"notice\":\"gets the current ETH price in EUR\"},\"__callback(bytes32,string)\":{\"notice\":\"callback for function GetCurrentEthPriceInEUR\"},\"donate()\":{\"notice\":\"saves the donation data and adds the eth to the contract\"},\"getThankYouPhotoCID()\":{\"notice\":\"getter for the cid of the photo\"},\"getTotalDonated()\":{\"notice\":\"getter for totalamount ever donated\"},\"getTotalInContract()\":{\"notice\":\"getter for total in contract\"},\"saveThankYouCID(string)\":{\"notice\":\"Saves the CID on the Chain\"},\"sendTotalAmountToGoedDoel(address,uint256)\":{\"notice\":\"sends the eth within the contract to an goed doel\"}},\"notice\":\"This contract may contain some unnecessary functions, given that it has been used as a playground to learn solidity\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"/C/Users/Aron/Documents/GitHub/BC3_Aron/PD-15/truffleContract/contracts/Donations.sol\":\"Donations\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/C/Users/Aron/Documents/GitHub/BC3_Aron/PD-15/truffleContract/contracts/Donations.sol\":{\"keccak256\":\"0xdb11eb412e0ca3cc935a5a11a0fd03ccacc3ab68c2c9581b5a6ca1cc6de10aca\",\"license\":\"UNLICENSED\",\"urls\":[\"bzz-raw://3bc343d6a2ed6d81a3cea4e5b3098a4843a76ef12fce285e753a0d9f1780da33\",\"dweb:/ipfs/QmQZdQwRAbpMb6KMV2oH3TutRCRAKmo116HQ18Sz5oQVkT\"]},\"/C/Users/Aron/Documents/GitHub/BC3_Aron/PD-15/truffleContract/contracts/ProvableAPI.sol\":{\"keccak256\":\"0x1fc6722eebb007804dc77ee8e11687a961b4e544ccccf8af18d8f445e0f52a34\",\"urls\":[\"bzz-raw://eaf215a13707520c96593e2d662d8e3eb18ff439a05468bc8e453532fe1e8286\",\"dweb:/ipfs/QmSEi8wMqzGPjH6d6KbZJzz4SgvSAHgCMVgFNtHXmhCUvW\"]},\"@openzeppelin/contracts/GSN/Context.sol\":{\"keccak256\":\"0x8d3cb350f04ff49cfb10aef08d87f19dcbaecc8027b0bed12f3275cd12f38cf0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ded47ec7c96750f9bd04bbbc84f659992d4ba901cb7b532a52cd468272cf378f\",\"dweb:/ipfs/QmfBrGtQP7rZEqEg6Wz6jh2N2Kukpj1z5v3CGWmAqrzm96\"]},\"@openzeppelin/contracts/access/AccessControl.sol\":{\"keccak256\":\"0x37ff88aa5ca8f533e31b9e1cb5354816b15bb7d41c904ea1c8f5dd5a78d6da25\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f3731db435ced7084f2cb3947e708371c10a2e3f654dcfe2a237fc8fbdafbe5f\",\"dweb:/ipfs/QmUyiwkuiP2fYBVaTwwY82sJKxJyPQaBqAtS4uG6iaUSP7\"]},\"@openzeppelin/contracts/math/SafeMath.sol\":{\"keccak256\":\"0x3b21f2c8d626de3b9925ae33e972d8bf5c8b1bffb3f4ee94daeed7d0679036e6\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7f8d45329fecbf0836ad7543330c3ecd0f8d0ffa42d4016278c3eb2215fdcdfe\",\"dweb:/ipfs/QmXWLT7GcnHtA5NiD6MFi2CV3EWJY4wv5mLNnypqYDrxL3\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0xa6a15ddddcbf29d2922a1e0d4151b5d2d33da24b93cc9ebc12390e0d855532f8\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7c119bcaecfa853d564ac88d312777f75fa1126a3bca88a3371adb0ad9f35cb0\",\"dweb:/ipfs/QmY9UPuXeSKq86Zh38fE43VGQPhKMN34mkuFSFqPcr6nvZ\"]},\"@openzeppelin/contracts/utils/EnumerableSet.sol\":{\"keccak256\":\"0xae0992eb1ec30fd1ecdf2e04a6036decfc9797bf11dc1ec84b546b74318d5ec2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3b61f99a64e999682ad7bfbb3a1c762a20a0a5b30f9f2011693fa857969af61f\",\"dweb:/ipfs/QmZystFY76wkWCf7V3yKh3buZuKVKbswiE7y6yU62kk3zi\"]}},\"version\":1}",
  "bytecode": "0x608060405260006006553480156200001657600080fd5b50604051620032273803806200322783398181016040528101906200003c919062000223565b6200006e7fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e826200007560201b60201c565b506200029d565b6200008782826200008b60201b60201c565b5050565b620000ba81600560008581526020019081526020016000206000016200012f60201b62000eb31790919060201c565b156200012b57620000d06200016760201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b60006200015f836000018373ffffffffffffffffffffffffffffffffffffffff1660001b6200016f60201b60201c565b905092915050565b600033905090565b6000620001838383620001e960201b60201c565b620001de578260000182908060018154018082558091505060019003906000526020600020016000909190919091505582600001805490508360010160008481526020019081526020016000208190555060019050620001e3565b600090505b92915050565b600080836001016000848152602001908152602001600020541415905092915050565b6000815190506200021d8162000283565b92915050565b6000602082840312156200023657600080fd5b600062000246848285016200020c565b91505092915050565b60006200025c8262000263565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6200028e816200024f565b81146200029a57600080fd5b50565b612f7a80620002ad6000396000f3fe6080604052600436106101355760003560e01c8063a964b7bb116100ab578063e58378bb1161006f578063e58378bb14610405578063ed88c68e14610430578063ef91313f1461043a578063f58fef8e14610465578063f8c1e2cd14610483578063fd938812146104ac57610135565b8063a964b7bb14610341578063be87acd01461034b578063ca15c87314610374578063d547741f146103b1578063d56e3068146103da57610135565b806336568abe116100fd57806336568abe1461021f57806338bbfa50146102485780635759d1b6146102715780639010d07c1461029c57806391d14854146102d9578063a217fddf1461031657610135565b80630959a1761461013a5780631905283614610165578063248a9ca31461019057806327dc297e146101cd5780632f2ff15d146101f6575b600080fd5b34801561014657600080fd5b5061014f6104d7565b60405161015c9190612afd565b60405180910390f35b34801561017157600080fd5b5061017a610596565b6040516101879190612b9a565b60405180910390f35b34801561019c57600080fd5b506101b760048036038101906101b291906124c7565b610634565b6040516101c49190612b3a565b60405180910390f35b3480156101d957600080fd5b506101f460048036038101906101ef9190612555565b610654565b005b34801561020257600080fd5b5061021d60048036038101906102189190612519565b6106ae565b005b34801561022b57600080fd5b5061024660048036038101906102419190612519565b610722565b005b34801561025457600080fd5b5061026f600480360381019061026a91906125a9565b6107a5565b005b34801561027d57600080fd5b506102866107c8565b6040516102939190612b9a565b60405180910390f35b3480156102a857600080fd5b506102c360048036038101906102be9190612628565b610866565b6040516102d09190612aab565b60405180910390f35b3480156102e557600080fd5b5061030060048036038101906102fb9190612519565b610898565b60405161030d9190612b1f565b60405180910390f35b34801561032257600080fd5b5061032b6108ca565b6040516103389190612b3a565b60405180910390f35b6103496108d1565b005b34801561035757600080fd5b50610372600480360381019061036d919061248b565b61097e565b005b34801561038057600080fd5b5061039b600480360381019061039691906124c7565b610adb565b6040516103a89190612c9c565b60405180910390f35b3480156103bd57600080fd5b506103d860048036038101906103d39190612519565b610b02565b005b3480156103e657600080fd5b506103ef610b76565b6040516103fc9190612c9c565b60405180910390f35b34801561041157600080fd5b5061041a610b80565b6040516104279190612b3a565b60405180910390f35b610438610ba4565b005b34801561044657600080fd5b5061044f610d02565b60405161045c9190612c9c565b60405180910390f35b61046d610d0a565b60405161047a9190612b9a565b60405180910390f35b34801561048f57600080fd5b506104aa60048036038101906104a59190612664565b610d8e565b005b3480156104b857600080fd5b506104c1610e11565b6040516104ce9190612b9a565b60405180910390f35b6060600a805480602002602001604051908101604052809291908181526020016000905b8282101561058d5783829060005260206000209060020201604051806040016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681525050815260200190600101906104fb565b50505050905090565b60098054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561062c5780601f106106015761010080835404028352916020019161062c565b820191906000526020600020905b81548152906001019060200180831161060f57829003601f168201915b505050505081565b600060056000838152602001908152602001600020600201549050919050565b61065c610ee3565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461069357600080fd5b80600890805190602001906106a992919061225a565b505050565b6106d560056000848152602001908152602001600020600201546106d06111f7565b610898565b610714576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161070b90612bdc565b60405180910390fd5b61071e82826111ff565b5050565b61072a6111f7565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610797576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078e90612c7c565b60405180910390fd5b6107a18282611293565b5050565b6000801b600360008060001b815260200190815260200160002081905550505050565b60088054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561085e5780601f106108335761010080835404028352916020019161085e565b820191906000526020600020905b81548152906001019060200180831161084157829003601f168201915b505050505081565b6000610890826005600086815260200190815260200160002060000161132790919063ffffffff16565b905092915050565b60006108c2826005600086815260200190815260200160002060000161134190919063ffffffff16565b905092915050565b6000801b81565b61090f6040518060400160405280600381526020017f55524c0000000000000000000000000000000000000000000000000000000000815250611371565b60078190555060075447101561092457600080fd5b61097b6040518060400160405280600381526020017f55524c00000000000000000000000000000000000000000000000000000000008152506040518060800160405280604d8152602001612ef8604d9139611692565b50565b6109a87fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e33610898565b6109e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109de90612bfc565b60405180910390fd5b47811115610a2a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2190612c1c565b60405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff1682604051610a5090612a96565b60006040518083038185875af1925050503d8060008114610a8d576040519150601f19603f3d011682016040523d82523d6000602084013e610a92565b606091505b5050905080610ad6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610acd90612c5c565b60405180910390fd5b505050565b6000610afb60056000848152602001908152602001600020600001611a8f565b9050919050565b610b296005600084815260200190815260200160002060020154610b246111f7565b610898565b610b68576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5f90612c3c565b60405180910390fd5b610b728282611293565b5050565b6000600654905090565b7fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e81565b610bac6122da565b3481600001818152505033816020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250503460065401600681905550600a8190806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050506001600a8054905003600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507fc18a96ff84cf8f593e2214dfbc9f897503a4a17ec0c894db5b7ed4ed6896cc9d333034604051610cf793929190612ac6565b60405180910390a150565b600047905090565b6060610d367fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e33610898565b610d75576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d6c90612bfc565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff16ff5b610db87fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e33610898565b610df7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dee90612bfc565b60405180910390fd5b8060099080519060200190610e0d92919061225a565b5050565b606060098054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ea95780601f10610e7e57610100808354040283529160200191610ea9565b820191906000526020600020905b815481529060010190602001808311610e8c57829003601f168201915b5050505050905090565b6000610edb836000018373ffffffffffffffffffffffffffffffffffffffff1660001b611aa4565b905092915050565b60008073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161480610f6b57506000610f69600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16611b14565b145b15610f7c57610f7a6000611b1f565b505b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166338cc48316040518163ffffffff1660e01b8152600401602060405180830381600087803b158015610fe657600080fd5b505af1158015610ffa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061101e9190612462565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461115257600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166338cc48316040518163ffffffff1660e01b8152600401602060405180830381600087803b1580156110da57600080fd5b505af11580156110ee573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111129190612462565b6000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c281d19e6040518163ffffffff1660e01b8152600401602060405180830381600087803b1580156111ba57600080fd5b505af11580156111ce573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111f29190612462565b905090565b600033905090565b6112278160056000858152602001908152602001600020600001610eb390919063ffffffff16565b1561128f576112346111f7565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b6112bb8160056000858152602001908152602001600020600001611b3090919063ffffffff16565b15611323576112c86111f7565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b60006113368360000183611b60565b60001c905092915050565b6000611369836000018373ffffffffffffffffffffffffffffffffffffffff1660001b611bcd565b905092915050565b60008073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614806113f9575060006113f7600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16611b14565b145b1561140a576114086000611b1f565b505b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166338cc48316040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561147457600080fd5b505af1158015611488573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114ac9190612462565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146115e057600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166338cc48316040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561156857600080fd5b505af115801561157c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115a09190612462565b6000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663524f3889836040518263ffffffff1660e01b81526004016116399190612b9a565b602060405180830381600087803b15801561165357600080fd5b505af1158015611667573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061168b91906126a5565b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16148061171a57506000611718600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16611b14565b145b1561172b576117296000611b1f565b505b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166338cc48316040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561179557600080fd5b505af11580156117a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117cd9190612462565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461190157600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166338cc48316040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561188957600080fd5b505af115801561189d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118c19190612462565b6000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663524f3889856040518263ffffffff1660e01b815260040161195d9190612b9a565b602060405180830381600087803b15801561197757600080fd5b505af115801561198b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119af91906126a5565b905062030d403a02670de0b6b3a7640000018111156119d4576000801b915050611a89565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663adf59f9982600087876040518563ffffffff1660e01b8152600401611a3393929190612b55565b6020604051808303818588803b158015611a4c57600080fd5b505af1158015611a60573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190611a8591906124f0565b9150505b92915050565b6000611a9d82600001611bf0565b9050919050565b6000611ab08383611bcd565b611b09578260000182908060018154018082558091505060019003906000526020600020016000909190919091505582600001805490508360010160008481526020019081526020016000208190555060019050611b0e565b600090505b92915050565b6000813b9050919050565b6000611b29611c01565b9050919050565b6000611b58836000018373ffffffffffffffffffffffffffffffffffffffff1660001b612158565b905092915050565b600081836000018054905011611bab576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ba290612bbc565b60405180910390fd5b826000018281548110611bba57fe5b9060005260206000200154905092915050565b600080836001016000848152602001908152602001600020541415905092915050565b600081600001805490509050919050565b600080611c21731d3b2638a7cc9f2cb3d298a3da7a90b67e5506ed611b14565b1115611cc357731d3b2638a7cc9f2cb3d298a3da7a90b67e5506ed600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611cba6040518060400160405280600b81526020017f6574685f6d61696e6e6574000000000000000000000000000000000000000000815250612240565b60019050612155565b6000611ce273c03a2615d5efaf5f49f60b7bb6583eaec212fdf1611b14565b1115611d845773c03a2615d5efaf5f49f60b7bb6583eaec212fdf1600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611d7b6040518060400160405280600c81526020017f6574685f726f707374656e330000000000000000000000000000000000000000815250612240565b60019050612155565b6000611da373b7a07bcf2ba2f2703b24c0691b5278999c59ac7e611b14565b1115611e455773b7a07bcf2ba2f2703b24c0691b5278999c59ac7e600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611e3c6040518060400160405280600981526020017f6574685f6b6f76616e0000000000000000000000000000000000000000000000815250612240565b60019050612155565b6000611e6473146500cfd35b22e4a392fe0adc06de1a1368ed48611b14565b1115611f065773146500cfd35b22e4a392fe0adc06de1a1368ed48600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611efd6040518060400160405280600b81526020017f6574685f72696e6b656279000000000000000000000000000000000000000000815250612240565b60019050612155565b6000611f2573a2998efd205fb9d4b4963afb70778d6354ad3a41611b14565b1115611fc75773a2998efd205fb9d4b4963afb70778d6354ad3a41600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611fbe6040518060400160405280600a81526020017f6574685f676f65726c6900000000000000000000000000000000000000000000815250612240565b60019050612155565b6000611fe6736f485c8bf6fc43ea212e93bbf8ce046c7f1cb475611b14565b111561204a57736f485c8bf6fc43ea212e93bbf8ce046c7f1cb475600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060019050612155565b60006120697320e12a1f859b3feae5fb2a0a32c18f5a65555bbf611b14565b11156120cd577320e12a1f859b3feae5fb2a0a32c18f5a65555bbf600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060019050612155565b60006120ec7351efaf4c8b3c9afbd5ab9f4bbc82784ab6ef8faa611b14565b1115612150577351efaf4c8b3c9afbd5ab9f4bbc82784ab6ef8faa600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060019050612155565b600090505b90565b6000808360010160008481526020019081526020016000205490506000811461223457600060018203905060006001866000018054905003905060008660000182815481106121a357fe5b90600052602060002001549050808760000184815481106121c057fe5b90600052602060002001819055506001830187600101600083815260200190815260200160002081905550866000018054806121f857fe5b6001900381819060005260206000200160009055905586600101600087815260200190815260200160002060009055600194505050505061223a565b60009150505b92915050565b806002908051906020019061225692919061225a565b5050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061229b57805160ff19168380011785556122c9565b828001600101855582156122c9579182015b828111156122c85782518255916020019190600101906122ad565b5b5090506122d6919061230a565b5090565b604051806040016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b5b8082111561232357600081600090555060010161230b565b5090565b60008135905061233681612e9b565b92915050565b60008151905061234b81612e9b565b92915050565b60008135905061236081612eb2565b92915050565b60008135905061237581612ec9565b92915050565b60008151905061238a81612ec9565b92915050565b600082601f8301126123a157600080fd5b81356123b46123af82612ce4565b612cb7565b915080825260208301602083018583830111156123d057600080fd5b6123db838284612e48565b50505092915050565b600082601f8301126123f557600080fd5b813561240861240382612d10565b612cb7565b9150808252602083016020830185838301111561242457600080fd5b61242f838284612e48565b50505092915050565b60008135905061244781612ee0565b92915050565b60008151905061245c81612ee0565b92915050565b60006020828403121561247457600080fd5b60006124828482850161233c565b91505092915050565b6000806040838503121561249e57600080fd5b60006124ac85828601612351565b92505060206124bd85828601612438565b9150509250929050565b6000602082840312156124d957600080fd5b60006124e784828501612366565b91505092915050565b60006020828403121561250257600080fd5b60006125108482850161237b565b91505092915050565b6000806040838503121561252c57600080fd5b600061253a85828601612366565b925050602061254b85828601612327565b9150509250929050565b6000806040838503121561256857600080fd5b600061257685828601612366565b925050602083013567ffffffffffffffff81111561259357600080fd5b61259f858286016123e4565b9150509250929050565b6000806000606084860312156125be57600080fd5b60006125cc86828701612366565b935050602084013567ffffffffffffffff8111156125e957600080fd5b6125f5868287016123e4565b925050604084013567ffffffffffffffff81111561261257600080fd5b61261e86828701612390565b9150509250925092565b6000806040838503121561263b57600080fd5b600061264985828601612366565b925050602061265a85828601612438565b9150509250929050565b60006020828403121561267657600080fd5b600082013567ffffffffffffffff81111561269057600080fd5b61269c848285016123e4565b91505092915050565b6000602082840312156126b757600080fd5b60006126c58482850161244d565b91505092915050565b60006126da8383612a49565b60408301905092915050565b6126ef81612e00565b82525050565b6126fe81612d9c565b82525050565b61270d81612d9c565b82525050565b600061271e82612d4c565b6127288185612d6f565b935061273383612d3c565b8060005b8381101561276457815161274b88826126ce565b975061275683612d62565b925050600181019050612737565b5085935050505092915050565b61277a81612dc0565b82525050565b61278981612dcc565b82525050565b61279881612e12565b82525050565b60006127a982612d57565b6127b38185612d8b565b93506127c3818560208601612e57565b6127cc81612e8a565b840191505092915050565b60006127e4602283612d8b565b91507f456e756d657261626c655365743a20696e646578206f7574206f6620626f756e60008301527f64730000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061284a602f83612d8b565b91507f416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e60008301527f2061646d696e20746f206772616e7400000000000000000000000000000000006020830152604082019050919050565b60006128b0601783612d8b565b91507f43616c6c6572206973206e6f7420746865206f776e65720000000000000000006000830152602082019050919050565b60006128f0601a83612d8b565b91507f416d6f756e74206c6172676572207468616e2062616c616e63650000000000006000830152602082019050919050565b6000612930603083612d8b565b91507f416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e60008301527f2061646d696e20746f207265766f6b65000000000000000000000000000000006020830152604082019050919050565b6000612996600083612d80565b9150600082019050919050565b60006129b0601783612d8b565b91507f50617920776173206e6f74207375636365737366756c2e0000000000000000006000830152602082019050919050565b60006129f0602f83612d8b565b91507f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008301527f20726f6c657320666f722073656c6600000000000000000000000000000000006020830152604082019050919050565b604082016000820151612a5f6000850182612a78565b506020820151612a7260208501826126f5565b50505050565b612a8181612df6565b82525050565b612a9081612df6565b82525050565b6000612aa182612989565b9150819050919050565b6000602082019050612ac06000830184612704565b92915050565b6000606082019050612adb60008301866126e6565b612ae86020830185612704565b612af56040830184612a87565b949350505050565b60006020820190508181036000830152612b178184612713565b905092915050565b6000602082019050612b346000830184612771565b92915050565b6000602082019050612b4f6000830184612780565b92915050565b6000606082019050612b6a600083018661278f565b8181036020830152612b7c818561279e565b90508181036040830152612b90818461279e565b9050949350505050565b60006020820190508181036000830152612bb4818461279e565b905092915050565b60006020820190508181036000830152612bd5816127d7565b9050919050565b60006020820190508181036000830152612bf58161283d565b9050919050565b60006020820190508181036000830152612c15816128a3565b9050919050565b60006020820190508181036000830152612c35816128e3565b9050919050565b60006020820190508181036000830152612c5581612923565b9050919050565b60006020820190508181036000830152612c75816129a3565b9050919050565b60006020820190508181036000830152612c95816129e3565b9050919050565b6000602082019050612cb16000830184612a87565b92915050565b6000604051905081810181811067ffffffffffffffff82111715612cda57600080fd5b8060405250919050565b600067ffffffffffffffff821115612cfb57600080fd5b601f19601f8301169050602081019050919050565b600067ffffffffffffffff821115612d2757600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b6000612da782612dd6565b9050919050565b6000612db982612dd6565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000612e0b82612e24565b9050919050565b6000612e1d82612df6565b9050919050565b6000612e2f82612e36565b9050919050565b6000612e4182612dd6565b9050919050565b82818337600083830152505050565b60005b83811015612e75578082015181840152602081019050612e5a565b83811115612e84576000848401525b50505050565b6000601f19601f8301169050919050565b612ea481612d9c565b8114612eaf57600080fd5b50565b612ebb81612dae565b8114612ec657600080fd5b50565b612ed281612dcc565b8114612edd57600080fd5b50565b612ee981612df6565b8114612ef457600080fd5b5056fe6a736f6e2868747470733a2f2f6d696e2d6170692e63727970746f636f6d706172652e636f6d2f646174612f70726963653f6673796d3d455448267473796d733d4555522c555344292e455552a26469706673582212204daa8a5483c84c769fbf6e00f413b0b7265c25defd8fca7e1f4d24a93875632364736f6c634300060c0033",
  "deployedBytecode": "0x6080604052600436106101355760003560e01c8063a964b7bb116100ab578063e58378bb1161006f578063e58378bb14610405578063ed88c68e14610430578063ef91313f1461043a578063f58fef8e14610465578063f8c1e2cd14610483578063fd938812146104ac57610135565b8063a964b7bb14610341578063be87acd01461034b578063ca15c87314610374578063d547741f146103b1578063d56e3068146103da57610135565b806336568abe116100fd57806336568abe1461021f57806338bbfa50146102485780635759d1b6146102715780639010d07c1461029c57806391d14854146102d9578063a217fddf1461031657610135565b80630959a1761461013a5780631905283614610165578063248a9ca31461019057806327dc297e146101cd5780632f2ff15d146101f6575b600080fd5b34801561014657600080fd5b5061014f6104d7565b60405161015c9190612afd565b60405180910390f35b34801561017157600080fd5b5061017a610596565b6040516101879190612b9a565b60405180910390f35b34801561019c57600080fd5b506101b760048036038101906101b291906124c7565b610634565b6040516101c49190612b3a565b60405180910390f35b3480156101d957600080fd5b506101f460048036038101906101ef9190612555565b610654565b005b34801561020257600080fd5b5061021d60048036038101906102189190612519565b6106ae565b005b34801561022b57600080fd5b5061024660048036038101906102419190612519565b610722565b005b34801561025457600080fd5b5061026f600480360381019061026a91906125a9565b6107a5565b005b34801561027d57600080fd5b506102866107c8565b6040516102939190612b9a565b60405180910390f35b3480156102a857600080fd5b506102c360048036038101906102be9190612628565b610866565b6040516102d09190612aab565b60405180910390f35b3480156102e557600080fd5b5061030060048036038101906102fb9190612519565b610898565b60405161030d9190612b1f565b60405180910390f35b34801561032257600080fd5b5061032b6108ca565b6040516103389190612b3a565b60405180910390f35b6103496108d1565b005b34801561035757600080fd5b50610372600480360381019061036d919061248b565b61097e565b005b34801561038057600080fd5b5061039b600480360381019061039691906124c7565b610adb565b6040516103a89190612c9c565b60405180910390f35b3480156103bd57600080fd5b506103d860048036038101906103d39190612519565b610b02565b005b3480156103e657600080fd5b506103ef610b76565b6040516103fc9190612c9c565b60405180910390f35b34801561041157600080fd5b5061041a610b80565b6040516104279190612b3a565b60405180910390f35b610438610ba4565b005b34801561044657600080fd5b5061044f610d02565b60405161045c9190612c9c565b60405180910390f35b61046d610d0a565b60405161047a9190612b9a565b60405180910390f35b34801561048f57600080fd5b506104aa60048036038101906104a59190612664565b610d8e565b005b3480156104b857600080fd5b506104c1610e11565b6040516104ce9190612b9a565b60405180910390f35b6060600a805480602002602001604051908101604052809291908181526020016000905b8282101561058d5783829060005260206000209060020201604051806040016040529081600082015481526020016001820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681525050815260200190600101906104fb565b50505050905090565b60098054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561062c5780601f106106015761010080835404028352916020019161062c565b820191906000526020600020905b81548152906001019060200180831161060f57829003601f168201915b505050505081565b600060056000838152602001908152602001600020600201549050919050565b61065c610ee3565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461069357600080fd5b80600890805190602001906106a992919061225a565b505050565b6106d560056000848152602001908152602001600020600201546106d06111f7565b610898565b610714576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161070b90612bdc565b60405180910390fd5b61071e82826111ff565b5050565b61072a6111f7565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610797576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078e90612c7c565b60405180910390fd5b6107a18282611293565b5050565b6000801b600360008060001b815260200190815260200160002081905550505050565b60088054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561085e5780601f106108335761010080835404028352916020019161085e565b820191906000526020600020905b81548152906001019060200180831161084157829003601f168201915b505050505081565b6000610890826005600086815260200190815260200160002060000161132790919063ffffffff16565b905092915050565b60006108c2826005600086815260200190815260200160002060000161134190919063ffffffff16565b905092915050565b6000801b81565b61090f6040518060400160405280600381526020017f55524c0000000000000000000000000000000000000000000000000000000000815250611371565b60078190555060075447101561092457600080fd5b61097b6040518060400160405280600381526020017f55524c00000000000000000000000000000000000000000000000000000000008152506040518060800160405280604d8152602001612ef8604d9139611692565b50565b6109a87fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e33610898565b6109e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109de90612bfc565b60405180910390fd5b47811115610a2a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2190612c1c565b60405180910390fd5b60008273ffffffffffffffffffffffffffffffffffffffff1682604051610a5090612a96565b60006040518083038185875af1925050503d8060008114610a8d576040519150601f19603f3d011682016040523d82523d6000602084013e610a92565b606091505b5050905080610ad6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610acd90612c5c565b60405180910390fd5b505050565b6000610afb60056000848152602001908152602001600020600001611a8f565b9050919050565b610b296005600084815260200190815260200160002060020154610b246111f7565b610898565b610b68576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5f90612c3c565b60405180910390fd5b610b728282611293565b5050565b6000600654905090565b7fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e81565b610bac6122da565b3481600001818152505033816020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250503460065401600681905550600a8190806001815401808255809150506001900390600052602060002090600202016000909190919091506000820151816000015560208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050506001600a8054905003600b60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055507fc18a96ff84cf8f593e2214dfbc9f897503a4a17ec0c894db5b7ed4ed6896cc9d333034604051610cf793929190612ac6565b60405180910390a150565b600047905090565b6060610d367fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e33610898565b610d75576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d6c90612bfc565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff16ff5b610db87fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e33610898565b610df7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dee90612bfc565b60405180910390fd5b8060099080519060200190610e0d92919061225a565b5050565b606060098054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ea95780601f10610e7e57610100808354040283529160200191610ea9565b820191906000526020600020905b815481529060010190602001808311610e8c57829003601f168201915b5050505050905090565b6000610edb836000018373ffffffffffffffffffffffffffffffffffffffff1660001b611aa4565b905092915050565b60008073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161480610f6b57506000610f69600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16611b14565b145b15610f7c57610f7a6000611b1f565b505b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166338cc48316040518163ffffffff1660e01b8152600401602060405180830381600087803b158015610fe657600080fd5b505af1158015610ffa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061101e9190612462565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461115257600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166338cc48316040518163ffffffff1660e01b8152600401602060405180830381600087803b1580156110da57600080fd5b505af11580156110ee573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111129190612462565b6000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c281d19e6040518163ffffffff1660e01b8152600401602060405180830381600087803b1580156111ba57600080fd5b505af11580156111ce573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111f29190612462565b905090565b600033905090565b6112278160056000858152602001908152602001600020600001610eb390919063ffffffff16565b1561128f576112346111f7565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b6112bb8160056000858152602001908152602001600020600001611b3090919063ffffffff16565b15611323576112c86111f7565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b60006113368360000183611b60565b60001c905092915050565b6000611369836000018373ffffffffffffffffffffffffffffffffffffffff1660001b611bcd565b905092915050565b60008073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614806113f9575060006113f7600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16611b14565b145b1561140a576114086000611b1f565b505b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166338cc48316040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561147457600080fd5b505af1158015611488573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114ac9190612462565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146115e057600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166338cc48316040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561156857600080fd5b505af115801561157c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115a09190612462565b6000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663524f3889836040518263ffffffff1660e01b81526004016116399190612b9a565b602060405180830381600087803b15801561165357600080fd5b505af1158015611667573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061168b91906126a5565b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16148061171a57506000611718600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16611b14565b145b1561172b576117296000611b1f565b505b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166338cc48316040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561179557600080fd5b505af11580156117a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117cd9190612462565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461190157600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166338cc48316040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561188957600080fd5b505af115801561189d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118c19190612462565b6000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663524f3889856040518263ffffffff1660e01b815260040161195d9190612b9a565b602060405180830381600087803b15801561197757600080fd5b505af115801561198b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119af91906126a5565b905062030d403a02670de0b6b3a7640000018111156119d4576000801b915050611a89565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663adf59f9982600087876040518563ffffffff1660e01b8152600401611a3393929190612b55565b6020604051808303818588803b158015611a4c57600080fd5b505af1158015611a60573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190611a8591906124f0565b9150505b92915050565b6000611a9d82600001611bf0565b9050919050565b6000611ab08383611bcd565b611b09578260000182908060018154018082558091505060019003906000526020600020016000909190919091505582600001805490508360010160008481526020019081526020016000208190555060019050611b0e565b600090505b92915050565b6000813b9050919050565b6000611b29611c01565b9050919050565b6000611b58836000018373ffffffffffffffffffffffffffffffffffffffff1660001b612158565b905092915050565b600081836000018054905011611bab576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ba290612bbc565b60405180910390fd5b826000018281548110611bba57fe5b9060005260206000200154905092915050565b600080836001016000848152602001908152602001600020541415905092915050565b600081600001805490509050919050565b600080611c21731d3b2638a7cc9f2cb3d298a3da7a90b67e5506ed611b14565b1115611cc357731d3b2638a7cc9f2cb3d298a3da7a90b67e5506ed600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611cba6040518060400160405280600b81526020017f6574685f6d61696e6e6574000000000000000000000000000000000000000000815250612240565b60019050612155565b6000611ce273c03a2615d5efaf5f49f60b7bb6583eaec212fdf1611b14565b1115611d845773c03a2615d5efaf5f49f60b7bb6583eaec212fdf1600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611d7b6040518060400160405280600c81526020017f6574685f726f707374656e330000000000000000000000000000000000000000815250612240565b60019050612155565b6000611da373b7a07bcf2ba2f2703b24c0691b5278999c59ac7e611b14565b1115611e455773b7a07bcf2ba2f2703b24c0691b5278999c59ac7e600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611e3c6040518060400160405280600981526020017f6574685f6b6f76616e0000000000000000000000000000000000000000000000815250612240565b60019050612155565b6000611e6473146500cfd35b22e4a392fe0adc06de1a1368ed48611b14565b1115611f065773146500cfd35b22e4a392fe0adc06de1a1368ed48600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611efd6040518060400160405280600b81526020017f6574685f72696e6b656279000000000000000000000000000000000000000000815250612240565b60019050612155565b6000611f2573a2998efd205fb9d4b4963afb70778d6354ad3a41611b14565b1115611fc75773a2998efd205fb9d4b4963afb70778d6354ad3a41600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611fbe6040518060400160405280600a81526020017f6574685f676f65726c6900000000000000000000000000000000000000000000815250612240565b60019050612155565b6000611fe6736f485c8bf6fc43ea212e93bbf8ce046c7f1cb475611b14565b111561204a57736f485c8bf6fc43ea212e93bbf8ce046c7f1cb475600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060019050612155565b60006120697320e12a1f859b3feae5fb2a0a32c18f5a65555bbf611b14565b11156120cd577320e12a1f859b3feae5fb2a0a32c18f5a65555bbf600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060019050612155565b60006120ec7351efaf4c8b3c9afbd5ab9f4bbc82784ab6ef8faa611b14565b1115612150577351efaf4c8b3c9afbd5ab9f4bbc82784ab6ef8faa600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060019050612155565b600090505b90565b6000808360010160008481526020019081526020016000205490506000811461223457600060018203905060006001866000018054905003905060008660000182815481106121a357fe5b90600052602060002001549050808760000184815481106121c057fe5b90600052602060002001819055506001830187600101600083815260200190815260200160002081905550866000018054806121f857fe5b6001900381819060005260206000200160009055905586600101600087815260200190815260200160002060009055600194505050505061223a565b60009150505b92915050565b806002908051906020019061225692919061225a565b5050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061229b57805160ff19168380011785556122c9565b828001600101855582156122c9579182015b828111156122c85782518255916020019190600101906122ad565b5b5090506122d6919061230a565b5090565b604051806040016040528060008152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b5b8082111561232357600081600090555060010161230b565b5090565b60008135905061233681612e9b565b92915050565b60008151905061234b81612e9b565b92915050565b60008135905061236081612eb2565b92915050565b60008135905061237581612ec9565b92915050565b60008151905061238a81612ec9565b92915050565b600082601f8301126123a157600080fd5b81356123b46123af82612ce4565b612cb7565b915080825260208301602083018583830111156123d057600080fd5b6123db838284612e48565b50505092915050565b600082601f8301126123f557600080fd5b813561240861240382612d10565b612cb7565b9150808252602083016020830185838301111561242457600080fd5b61242f838284612e48565b50505092915050565b60008135905061244781612ee0565b92915050565b60008151905061245c81612ee0565b92915050565b60006020828403121561247457600080fd5b60006124828482850161233c565b91505092915050565b6000806040838503121561249e57600080fd5b60006124ac85828601612351565b92505060206124bd85828601612438565b9150509250929050565b6000602082840312156124d957600080fd5b60006124e784828501612366565b91505092915050565b60006020828403121561250257600080fd5b60006125108482850161237b565b91505092915050565b6000806040838503121561252c57600080fd5b600061253a85828601612366565b925050602061254b85828601612327565b9150509250929050565b6000806040838503121561256857600080fd5b600061257685828601612366565b925050602083013567ffffffffffffffff81111561259357600080fd5b61259f858286016123e4565b9150509250929050565b6000806000606084860312156125be57600080fd5b60006125cc86828701612366565b935050602084013567ffffffffffffffff8111156125e957600080fd5b6125f5868287016123e4565b925050604084013567ffffffffffffffff81111561261257600080fd5b61261e86828701612390565b9150509250925092565b6000806040838503121561263b57600080fd5b600061264985828601612366565b925050602061265a85828601612438565b9150509250929050565b60006020828403121561267657600080fd5b600082013567ffffffffffffffff81111561269057600080fd5b61269c848285016123e4565b91505092915050565b6000602082840312156126b757600080fd5b60006126c58482850161244d565b91505092915050565b60006126da8383612a49565b60408301905092915050565b6126ef81612e00565b82525050565b6126fe81612d9c565b82525050565b61270d81612d9c565b82525050565b600061271e82612d4c565b6127288185612d6f565b935061273383612d3c565b8060005b8381101561276457815161274b88826126ce565b975061275683612d62565b925050600181019050612737565b5085935050505092915050565b61277a81612dc0565b82525050565b61278981612dcc565b82525050565b61279881612e12565b82525050565b60006127a982612d57565b6127b38185612d8b565b93506127c3818560208601612e57565b6127cc81612e8a565b840191505092915050565b60006127e4602283612d8b565b91507f456e756d657261626c655365743a20696e646578206f7574206f6620626f756e60008301527f64730000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061284a602f83612d8b565b91507f416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e60008301527f2061646d696e20746f206772616e7400000000000000000000000000000000006020830152604082019050919050565b60006128b0601783612d8b565b91507f43616c6c6572206973206e6f7420746865206f776e65720000000000000000006000830152602082019050919050565b60006128f0601a83612d8b565b91507f416d6f756e74206c6172676572207468616e2062616c616e63650000000000006000830152602082019050919050565b6000612930603083612d8b565b91507f416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e60008301527f2061646d696e20746f207265766f6b65000000000000000000000000000000006020830152604082019050919050565b6000612996600083612d80565b9150600082019050919050565b60006129b0601783612d8b565b91507f50617920776173206e6f74207375636365737366756c2e0000000000000000006000830152602082019050919050565b60006129f0602f83612d8b565b91507f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008301527f20726f6c657320666f722073656c6600000000000000000000000000000000006020830152604082019050919050565b604082016000820151612a5f6000850182612a78565b506020820151612a7260208501826126f5565b50505050565b612a8181612df6565b82525050565b612a9081612df6565b82525050565b6000612aa182612989565b9150819050919050565b6000602082019050612ac06000830184612704565b92915050565b6000606082019050612adb60008301866126e6565b612ae86020830185612704565b612af56040830184612a87565b949350505050565b60006020820190508181036000830152612b178184612713565b905092915050565b6000602082019050612b346000830184612771565b92915050565b6000602082019050612b4f6000830184612780565b92915050565b6000606082019050612b6a600083018661278f565b8181036020830152612b7c818561279e565b90508181036040830152612b90818461279e565b9050949350505050565b60006020820190508181036000830152612bb4818461279e565b905092915050565b60006020820190508181036000830152612bd5816127d7565b9050919050565b60006020820190508181036000830152612bf58161283d565b9050919050565b60006020820190508181036000830152612c15816128a3565b9050919050565b60006020820190508181036000830152612c35816128e3565b9050919050565b60006020820190508181036000830152612c5581612923565b9050919050565b60006020820190508181036000830152612c75816129a3565b9050919050565b60006020820190508181036000830152612c95816129e3565b9050919050565b6000602082019050612cb16000830184612a87565b92915050565b6000604051905081810181811067ffffffffffffffff82111715612cda57600080fd5b8060405250919050565b600067ffffffffffffffff821115612cfb57600080fd5b601f19601f8301169050602081019050919050565b600067ffffffffffffffff821115612d2757600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b6000612da782612dd6565b9050919050565b6000612db982612dd6565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000612e0b82612e24565b9050919050565b6000612e1d82612df6565b9050919050565b6000612e2f82612e36565b9050919050565b6000612e4182612dd6565b9050919050565b82818337600083830152505050565b60005b83811015612e75578082015181840152602081019050612e5a565b83811115612e84576000848401525b50505050565b6000601f19601f8301169050919050565b612ea481612d9c565b8114612eaf57600080fd5b50565b612ebb81612dae565b8114612ec657600080fd5b50565b612ed281612dcc565b8114612edd57600080fd5b50565b612ee981612df6565b8114612ef457600080fd5b5056fe6a736f6e2868747470733a2f2f6d696e2d6170692e63727970746f636f6d706172652e636f6d2f646174612f70726963653f6673796d3d455448267473796d733d4555522c555344292e455552a26469706673582212204daa8a5483c84c769fbf6e00f413b0b7265c25defd8fca7e1f4d24a93875632364736f6c634300060c0033",
  "immutableReferences": {},
  "sourceMap": "458:3881:0:-:0;;;701:1;670:32;;1139:82;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1184:29;619:23;1207:5;1184:10;;;:29;;:::i;:::-;1139:82;458:3881;;6586:110:5;6664:25;6675:4;6681:7;6664:10;;;:25;;:::i;:::-;6586:110;;:::o;7023:184::-;7096:33;7121:7;7096:6;:12;7103:4;7096:12;;;;;;;;;;;:20;;:24;;;;;;:33;;;;:::i;:::-;7092:109;;;7177:12;:10;;;:12;;:::i;:::-;7150:40;;7168:7;7150:40;;7162:4;7150:40;;;;;;;;;;7092:109;7023:184;;:::o;6429:141:8:-;6499:4;6522:41;6527:3;:10;;6555:5;6547:14;;6539:23;;6522:4;;;:41;;:::i;:::-;6515:48;;6429:141;;;;:::o;598:104:4:-;651:15;685:10;678:17;;598:104;:::o;1640:404:8:-;1703:4;1724:21;1734:3;1739:5;1724:9;;;:21;;:::i;:::-;1719:319;;1761:3;:11;;1778:5;1761:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1941:3;:11;;:18;;;;1919:3;:12;;:19;1932:5;1919:19;;;;;;;;;;;:40;;;;1980:4;1973:11;;;;1719:319;2022:5;2015:12;;1640:404;;;;;:::o;3805:127::-;3878:4;3924:1;3901:3;:12;;:19;3914:5;3901:19;;;;;;;;;;;;:24;;3894:31;;3805:127;;;;:::o;5:134:-1:-;;89:6;83:13;74:22;;101:33;128:5;101:33;:::i;:::-;68:71;;;;:::o;146:263::-;;261:2;249:9;240:7;236:23;232:32;229:2;;;277:1;274;267:12;229:2;312:1;329:64;385:7;376:6;365:9;361:22;329:64;:::i;:::-;319:74;;291:108;223:186;;;;:::o;416:91::-;;478:24;496:5;478:24;:::i;:::-;467:35;;461:46;;;:::o;514:121::-;;587:42;580:5;576:54;565:65;;559:76;;;:::o;642:117::-;711:24;729:5;711:24;:::i;:::-;704:5;701:35;691:2;;750:1;747;740:12;691:2;685:74;:::o;458:3881:0:-;;;;;;;",
  "deployedSourceMap": "458:3881:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2222:102;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;776:25;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4280:112:5;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3807:167:0;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;4642:223:5;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;5816:205;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;15884:189:2;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;742:27:0;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3963:136:5;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2948:137;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1725:49;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3425:311:0;;;:::i;:::-;;2468:433;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;3253:125:5;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;5099:226;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1992:101:0;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;582:60;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1303:351;;;:::i;:::-;;1750:113;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4107:229;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2999:165;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;3221:145;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2222:102;2270:17;2307:9;2300:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2222:102;:::o;776:25::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;4280:112:5:-;4337:7;4363:6;:12;4370:4;4363:12;;;;;;;;;;;:22;;;4356:29;;4280:112;;;:::o;3807:167:0:-;3903:20;:18;:20::i;:::-;3889:34;;:10;:34;;;3885:48;;3925:8;;;3885:48;3960:6;3944:13;:22;;;;;;;;;;;;:::i;:::-;;3807:167;;:::o;4642:223:5:-;4725:45;4733:6;:12;4740:4;4733:12;;;;;;;;;;;:22;;;4757:12;:10;:12::i;:::-;4725:7;:45::i;:::-;4717:105;;;;;;;;;;;;:::i;:::-;;;;;;;;;4833:25;4844:4;4850:7;4833:10;:25::i;:::-;4642:223;;:::o;5816:205::-;5913:12;:10;:12::i;:::-;5902:23;;:7;:23;;;5894:83;;;;;;;;;;;;:::i;:::-;;;;;;;;;5988:26;6000:4;6006:7;5988:11;:26::i;:::-;5816:205;;:::o;15884:189:2:-;16063:1;16055:10;;16018:22;:34;16049:1;16041:10;;16018:34;;;;;;;;;;;:47;;;;15884:189;;;:::o;742:27:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;3963:136:5:-;4036:7;4062:30;4086:5;4062:6;:12;4069:4;4062:12;;;;;;;;;;;:20;;:23;;:30;;;;:::i;:::-;4055:37;;3963:136;;;;:::o;2948:137::-;3017:4;3040:38;3070:7;3040:6;:12;3047:4;3040:12;;;;;;;;;;;:20;;:29;;:38;;;;:::i;:::-;3033:45;;2948:137;;;;:::o;1725:49::-;1770:4;1725:49;;;:::o;3425:311:0:-;3499:24;;;;;;;;;;;;;;;;;;:17;:24::i;:::-;3486:10;:37;;;;3567:10;;3542:21;:35;;3534:44;;;;;;3589:139;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:14;:139::i;:::-;;3425:311::o;2468:433::-;2585:31;619:23;2605:10;2585:7;:31::i;:::-;2577:67;;;;;;;;;;;;:::i;:::-;;;;;;;;;2673:21;2663:6;:31;;2655:70;;;;;;;;;;;;:::i;:::-;;;;;;;;;2751:12;2807:8;:13;;2828:6;2807:32;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2736:103;;;2858:7;2850:43;;;;;;;;;;;;:::i;:::-;;;;;;;;;2468:433;;;:::o;3253:125:5:-;3316:7;3342:29;:6;:12;3349:4;3342:12;;;;;;;;;;;:20;;:27;:29::i;:::-;3335:36;;3253:125;;;:::o;5099:226::-;5183:45;5191:6;:12;5198:4;5191:12;;;;;;;;;;;:22;;;5215:12;:10;:12::i;:::-;5183:7;:45::i;:::-;5175:106;;;;;;;;;;;;:::i;:::-;;;;;;;;;5292:26;5304:4;5310:7;5292:11;:26::i;:::-;5099:226;;:::o;1992:101:0:-;2040:13;2073:12;;2066:19;;1992:101;:::o;582:60::-;619:23;582:60;:::o;1303:351::-;1347:20;;:::i;:::-;1400:9;1378:4;:19;;:31;;;;;1436:10;1420:4;:13;;:26;;;;;;;;;;;1487:9;1472:12;;:24;1457:12;:39;;;;1509:9;1524:4;1509:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1577:1;1558:9;:16;;;;:20;1540:3;:15;1544:10;1540:15;;;;;;;;;;;;;;;:38;;;;1596:50;1609:10;1629:4;1636:9;1596:50;;;;;;;;:::i;:::-;;;;;;;;1303:351;:::o;1750:113::-;1801:13;1834:21;1827:28;;1750:113;:::o;4107:229::-;4150:13;4184:31;619:23;4204:10;4184:7;:31::i;:::-;4176:67;;;;;;;;;;;;:::i;:::-;;;;;;;;;4267:10;4254:24;;;2999:165;3069:31;619:23;3089:10;3069:7;:31::i;:::-;3061:67;;;;;;;;;;;;:::i;:::-;;;;;;;;;3153:3;3139:11;:17;;;;;;;;;;;;:::i;:::-;;2999:165;:::o;3221:145::-;3300:22;3347:11;3340:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3221:145;:::o;6429:141:8:-;6499:4;6522:41;6527:3;:10;;6555:5;6547:14;;6539:23;;6522:4;:41::i;:::-;6515:48;;6429:141;;;;:::o;38114:132:2:-;38174:24;12213:1;12189:26;;12197:3;;;;;;;;;;;12189:26;;;12188:64;;;;12250:1;12221:25;12241:3;;;;;;;;;;;12221:11;:25::i;:::-;:30;12188:64;12184:132;;;12269:35;11835:1;12269:19;:35::i;:::-;;12184:132;12351:3;;;;;;;;;;;:14;;;:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;12330:37;;12338:8;;;;;;;;;;12330:37;;;12326:108;;12405:3;;;;;;;;;;;:14;;;:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;12384:8;;:38;;;;;;;;;;;;;;;;;;12326:108;38218:8:::1;::::0;::::1;;;;;;;;:18;;;:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;38211:27;;38114:132:::0;:::o;598:104:4:-;651:15;685:10;678:17;;598:104;:::o;7023:184:5:-;7096:33;7121:7;7096:6;:12;7103:4;7096:12;;;;;;;;;;;:20;;:24;;:33;;;;:::i;:::-;7092:109;;;7177:12;:10;:12::i;:::-;7150:40;;7168:7;7150:40;;7162:4;7150:40;;;;;;;;;;7092:109;7023:184;;:::o;7213:188::-;7287:36;7315:7;7287:6;:12;7294:4;7287:12;;;;;;;;;;;:20;;:27;;:36;;;;:::i;:::-;7283:112;;;7371:12;:10;:12::i;:::-;7344:40;;7362:7;7344:40;;7356:4;7344:40;;;;;;;;;;7283:112;7213:188;;:::o;7650:147:8:-;7724:7;7766:22;7770:3;:10;;7782:5;7766:3;:22::i;:::-;7758:31;;7743:47;;7650:147;;;;:::o;6966:156::-;7046:4;7069:46;7079:3;:10;;7107:5;7099:14;;7091:23;;7069:9;:46::i;:::-;7062:53;;6966:156;;;;:::o;16081:158:2:-;16165:16;12213:1;12189:26;;12197:3;;;;;;;;;;;12189:26;;;12188:64;;;;12250:1;12221:25;12241:3;;;;;;;;;;;12221:11;:25::i;:::-;:30;12188:64;12184:132;;;12269:35;11835:1;12269:19;:35::i;:::-;;12184:132;12351:3;;;;;;;;;;;:14;;;:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;12330:37;;12338:8;;;;;;;;;;12330:37;;;12326:108;;12405:3;;;;;;;;;;;:14;;;:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;12384:8;;:38;;;;;;;;;;;;;;;;;;12326:108;16201:8:::1;::::0;::::1;;;;;;;;:17;;;16219:11;16201:30;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;16194:37;;16081:158:::0;;;:::o;16440:360::-;16541:11;12213:1;12189:26;;12197:3;;;;;;;;;;;12189:26;;;12188:64;;;;12250:1;12221:25;12241:3;;;;;;;;;;;12221:11;:25::i;:::-;:30;12188:64;12184:132;;;12269:35;11835:1;12269:19;:35::i;:::-;;12184:132;12351:3;;;;;;;;;;;:14;;;:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;12330:37;;12338:8;;;;;;;;;;12330:37;;;12326:108;;12405:3;;;;;;;;;;;:14;;;:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;12384:8;;:38;;;;;;;;;;;;;;;;;;12326:108;16565:10:::1;16578:8:::0;::::1;;;;;;;;;;:17;;;16596:11;16578:30;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;16565:43;;16655:6;16641:11;:20;16631:7;:30;16623:5;:38;16619:106;;;16685:1;16678:8:::0;::::1;;;;;;16619:106;16742:8;::::0;::::1;;;;;;;;:14;;;16764:5;16771:1;16774:11;16787:4;16742:50;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;16735:57;;;12444:1;16440:360:::0;;;;:::o;7203:115:8:-;7266:7;7292:19;7300:3;:10;;7292:7;:19::i;:::-;7285:26;;7203:115;;;:::o;1640:404::-;1703:4;1724:21;1734:3;1739:5;1724:9;:21::i;:::-;1719:319;;1761:3;:11;;1778:5;1761:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1941:3;:11;;:18;;;;1919:3;:12;;:19;1932:5;1919:19;;;;;;;;;;;:40;;;;1980:4;1973:11;;;;1719:319;2022:5;2015:12;;1640:404;;;;;:::o;38254:151:2:-;38313:10;38381:5;38369:18;38360:27;;38345:53;;;:::o;12938:208::-;13003:16;13117:21;:19;:21::i;:::-;13110:28;;12938:208;;;:::o;6738:147:8:-;6811:4;6834:44;6842:3;:10;;6870:5;6862:14;;6854:23;;6834:7;:44::i;:::-;6827:51;;6738:147;;;;:::o;4452:201::-;4519:7;4567:5;4546:3;:11;;:18;;;;:26;4538:73;;;;;;;;;;;;:::i;:::-;;;;;;;;;4628:3;:11;;4640:5;4628:18;;;;;;;;;;;;;;;;4621:25;;4452:201;;;;:::o;3805:127::-;3878:4;3924:1;3901:3;:12;;:19;3914:5;3901:19;;;;;;;;;;;;:24;;3894:31;;3805:127;;;;:::o;4013:107::-;4069:7;4095:3;:11;;:18;;;;4088:25;;4013:107;;;:::o;13430:2070:2:-;13479:16;13570:1;13512:55;13524:42;13512:11;:55::i;:::-;:59;13508:250;;;13624:42;13598:3;;:69;;;;;;;;;;;;;;;;;;13682:38;;;;;;;;;;;;;;;;;;:23;:38::i;:::-;13742:4;13735:11;;;;13508:250;13830:1;13772:55;13784:42;13772:11;:55::i;:::-;:59;13768:259;;;13892:42;13866:3;;:69;;;;;;;;;;;;;;;;;;13950:39;;;;;;;;;;;;;;;;;;:23;:39::i;:::-;14011:4;14004:11;;;;13768:259;14099:1;14041:55;14053:42;14041:11;:55::i;:::-;:59;14037:254;;;14159:42;14133:3;;:69;;;;;;;;;;;;;;;;;;14217:36;;;;;;;;;;;;;;;;;;:23;:36::i;:::-;14275:4;14268:11;;;;14037:254;14363:1;14305:55;14317:42;14305:11;:55::i;:::-;:59;14301:258;;;14425:42;14399:3;;:69;;;;;;;;;;;;;;;;;;14483:38;;;;;;;;;;;;;;;;;;:23;:38::i;:::-;14543:4;14536:11;;;;14301:258;14631:1;14573:55;14585:42;14573:11;:55::i;:::-;:59;14569:256;;;14692:42;14666:3;;:69;;;;;;;;;;;;;;;;;;14750:37;;;;;;;;;;;;;;;;;;:23;:37::i;:::-;14809:4;14802:11;;;;14569:256;14897:1;14839:55;14851:42;14839:11;:55::i;:::-;:59;14835:205;;;14959:42;14933:3;;:69;;;;;;;;;;;;;;;;;;15024:4;15017:11;;;;14835:205;15112:1;15054:55;15066:42;15054:11;:55::i;:::-;:59;15050:204;;;15173:42;15147:3;;:69;;;;;;;;;;;;;;;;;;15238:4;15231:11;;;;15050:204;15326:1;15268:55;15280:42;15268:11;:55::i;:::-;:59;15264:206;;;15389:42;15363:3;;:69;;;;;;;;;;;;;;;;;;15454:4;15447:11;;;;15264:206;15487:5;15480:12;;13430:2070;;:::o;2212:1512:8:-;2278:4;2394:18;2415:3;:12;;:19;2428:5;2415:19;;;;;;;;;;;;2394:40;;2463:1;2449:10;:15;2445:1273;;2806:21;2843:1;2830:10;:14;2806:38;;2858:17;2899:1;2878:3;:11;;:18;;;;:22;2858:42;;3140:17;3160:3;:11;;3172:9;3160:22;;;;;;;;;;;;;;;;3140:42;;3303:9;3274:3;:11;;3286:13;3274:26;;;;;;;;;;;;;;;:38;;;;3420:1;3404:13;:17;3378:3;:12;;:23;3391:9;3378:23;;;;;;;;;;;:43;;;;3527:3;:11;;:17;;;;;;;;;;;;;;;;;;;;;;;;3619:3;:12;;:19;3632:5;3619:19;;;;;;;;;;;3612:26;;;3660:4;3653:11;;;;;;;;2445:1273;3702:5;3695:12;;;2212:1512;;;;;:::o;13154:127:2:-;13260:13;13236:21;:37;;;;;;;;;;;;:::i;:::-;;13154:127;:::o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;5:130::-;;85:6;72:20;63:29;;97:33;124:5;97:33;:::i;:::-;57:78;;;;:::o;142:134::-;;226:6;220:13;211:22;;238:33;265:5;238:33;:::i;:::-;205:71;;;;:::o;283:146::-;;371:6;358:20;349:29;;383:41;418:5;383:41;:::i;:::-;343:86;;;;:::o;436:130::-;;516:6;503:20;494:29;;528:33;555:5;528:33;:::i;:::-;488:78;;;;:::o;573:134::-;;657:6;651:13;642:22;;669:33;696:5;669:33;:::i;:::-;636:71;;;;:::o;715:440::-;;816:3;809:4;801:6;797:17;793:27;783:2;;834:1;831;824:12;783:2;871:6;858:20;893:64;908:48;949:6;908:48;:::i;:::-;893:64;:::i;:::-;884:73;;977:6;970:5;963:21;1013:4;1005:6;1001:17;1046:4;1039:5;1035:16;1081:3;1072:6;1067:3;1063:16;1060:25;1057:2;;;1098:1;1095;1088:12;1057:2;1108:41;1142:6;1137:3;1132;1108:41;:::i;:::-;776:379;;;;;;;:::o;1164:442::-;;1266:3;1259:4;1251:6;1247:17;1243:27;1233:2;;1284:1;1281;1274:12;1233:2;1321:6;1308:20;1343:65;1358:49;1400:6;1358:49;:::i;:::-;1343:65;:::i;:::-;1334:74;;1428:6;1421:5;1414:21;1464:4;1456:6;1452:17;1497:4;1490:5;1486:16;1532:3;1523:6;1518:3;1514:16;1511:25;1508:2;;;1549:1;1546;1539:12;1508:2;1559:41;1593:6;1588:3;1583;1559:41;:::i;:::-;1226:380;;;;;;;:::o;1614:130::-;;1694:6;1681:20;1672:29;;1706:33;1733:5;1706:33;:::i;:::-;1666:78;;;;:::o;1751:134::-;;1835:6;1829:13;1820:22;;1847:33;1874:5;1847:33;:::i;:::-;1814:71;;;;:::o;1892:263::-;;2007:2;1995:9;1986:7;1982:23;1978:32;1975:2;;;2023:1;2020;2013:12;1975:2;2058:1;2075:64;2131:7;2122:6;2111:9;2107:22;2075:64;:::i;:::-;2065:74;;2037:108;1969:186;;;;:::o;2162:382::-;;;2291:2;2279:9;2270:7;2266:23;2262:32;2259:2;;;2307:1;2304;2297:12;2259:2;2342:1;2359:61;2412:7;2403:6;2392:9;2388:22;2359:61;:::i;:::-;2349:71;;2321:105;2457:2;2475:53;2520:7;2511:6;2500:9;2496:22;2475:53;:::i;:::-;2465:63;;2436:98;2253:291;;;;;:::o;2551:241::-;;2655:2;2643:9;2634:7;2630:23;2626:32;2623:2;;;2671:1;2668;2661:12;2623:2;2706:1;2723:53;2768:7;2759:6;2748:9;2744:22;2723:53;:::i;:::-;2713:63;;2685:97;2617:175;;;;:::o;2799:263::-;;2914:2;2902:9;2893:7;2889:23;2885:32;2882:2;;;2930:1;2927;2920:12;2882:2;2965:1;2982:64;3038:7;3029:6;3018:9;3014:22;2982:64;:::i;:::-;2972:74;;2944:108;2876:186;;;;:::o;3069:366::-;;;3190:2;3178:9;3169:7;3165:23;3161:32;3158:2;;;3206:1;3203;3196:12;3158:2;3241:1;3258:53;3303:7;3294:6;3283:9;3279:22;3258:53;:::i;:::-;3248:63;;3220:97;3348:2;3366:53;3411:7;3402:6;3391:9;3387:22;3366:53;:::i;:::-;3356:63;;3327:98;3152:283;;;;;:::o;3442:472::-;;;3573:2;3561:9;3552:7;3548:23;3544:32;3541:2;;;3589:1;3586;3579:12;3541:2;3624:1;3641:53;3686:7;3677:6;3666:9;3662:22;3641:53;:::i;:::-;3631:63;;3603:97;3759:2;3748:9;3744:18;3731:32;3783:18;3775:6;3772:30;3769:2;;;3815:1;3812;3805:12;3769:2;3835:63;3890:7;3881:6;3870:9;3866:22;3835:63;:::i;:::-;3825:73;;3710:194;3535:379;;;;;:::o;3921:701::-;;;;4078:2;4066:9;4057:7;4053:23;4049:32;4046:2;;;4094:1;4091;4084:12;4046:2;4129:1;4146:53;4191:7;4182:6;4171:9;4167:22;4146:53;:::i;:::-;4136:63;;4108:97;4264:2;4253:9;4249:18;4236:32;4288:18;4280:6;4277:30;4274:2;;;4320:1;4317;4310:12;4274:2;4340:63;4395:7;4386:6;4375:9;4371:22;4340:63;:::i;:::-;4330:73;;4215:194;4468:2;4457:9;4453:18;4440:32;4492:18;4484:6;4481:30;4478:2;;;4524:1;4521;4514:12;4478:2;4544:62;4598:7;4589:6;4578:9;4574:22;4544:62;:::i;:::-;4534:72;;4419:193;4040:582;;;;;:::o;4629:366::-;;;4750:2;4738:9;4729:7;4725:23;4721:32;4718:2;;;4766:1;4763;4756:12;4718:2;4801:1;4818:53;4863:7;4854:6;4843:9;4839:22;4818:53;:::i;:::-;4808:63;;4780:97;4908:2;4926:53;4971:7;4962:6;4951:9;4947:22;4926:53;:::i;:::-;4916:63;;4887:98;4712:283;;;;;:::o;5002:347::-;;5116:2;5104:9;5095:7;5091:23;5087:32;5084:2;;;5132:1;5129;5122:12;5084:2;5195:1;5184:9;5180:17;5167:31;5218:18;5210:6;5207:30;5204:2;;;5250:1;5247;5240:12;5204:2;5270:63;5325:7;5316:6;5305:9;5301:22;5270:63;:::i;:::-;5260:73;;5146:193;5078:271;;;;:::o;5356:263::-;;5471:2;5459:9;5450:7;5446:23;5442:32;5439:2;;;5487:1;5484;5477:12;5439:2;5522:1;5539:64;5595:7;5586:6;5575:9;5571:22;5539:64;:::i;:::-;5529:74;;5501:108;5433:186;;;;:::o;5627:269::-;;5762:94;5852:3;5844:6;5762:94;:::i;:::-;5885:4;5880:3;5876:14;5862:28;;5755:141;;;;:::o;5904:142::-;5995:45;6034:5;5995:45;:::i;:::-;5990:3;5983:58;5977:69;;:::o;6053:103::-;6126:24;6144:5;6126:24;:::i;:::-;6121:3;6114:37;6108:48;;:::o;6163:113::-;6246:24;6264:5;6246:24;:::i;:::-;6241:3;6234:37;6228:48;;:::o;6350:882::-;;6543:78;6615:5;6543:78;:::i;:::-;6634:110;6737:6;6732:3;6634:110;:::i;:::-;6627:117;;6765:80;6839:5;6765:80;:::i;:::-;6865:7;6893:1;6878:332;6903:6;6900:1;6897:13;6878:332;;;6970:6;6964:13;6991:111;7098:3;7083:13;6991:111;:::i;:::-;6984:118;;7119:84;7196:6;7119:84;:::i;:::-;7109:94;;6935:275;6925:1;6922;6918:9;6913:14;;6878:332;;;6882:14;7223:3;7216:10;;6522:710;;;;;;;:::o;7240:104::-;7317:21;7332:5;7317:21;:::i;:::-;7312:3;7305:34;7299:45;;:::o;7351:113::-;7434:24;7452:5;7434:24;:::i;:::-;7429:3;7422:37;7416:48;;:::o;7471:142::-;7562:45;7601:5;7562:45;:::i;:::-;7557:3;7550:58;7544:69;;:::o;7620:347::-;;7732:39;7765:5;7732:39;:::i;:::-;7783:71;7847:6;7842:3;7783:71;:::i;:::-;7776:78;;7859:52;7904:6;7899:3;7892:4;7885:5;7881:16;7859:52;:::i;:::-;7932:29;7954:6;7932:29;:::i;:::-;7927:3;7923:39;7916:46;;7712:255;;;;;:::o;7975:371::-;;8135:67;8199:2;8194:3;8135:67;:::i;:::-;8128:74;;8235:34;8231:1;8226:3;8222:11;8215:55;8304:4;8299:2;8294:3;8290:12;8283:26;8337:2;8332:3;8328:12;8321:19;;8121:225;;;:::o;8355:384::-;;8515:67;8579:2;8574:3;8515:67;:::i;:::-;8508:74;;8615:34;8611:1;8606:3;8602:11;8595:55;8684:17;8679:2;8674:3;8670:12;8663:39;8730:2;8725:3;8721:12;8714:19;;8501:238;;;:::o;8748:323::-;;8908:67;8972:2;8967:3;8908:67;:::i;:::-;8901:74;;9008:25;9004:1;8999:3;8995:11;8988:46;9062:2;9057:3;9053:12;9046:19;;8894:177;;;:::o;9080:326::-;;9240:67;9304:2;9299:3;9240:67;:::i;:::-;9233:74;;9340:28;9336:1;9331:3;9327:11;9320:49;9397:2;9392:3;9388:12;9381:19;;9226:180;;;:::o;9415:385::-;;9575:67;9639:2;9634:3;9575:67;:::i;:::-;9568:74;;9675:34;9671:1;9666:3;9662:11;9655:55;9744:18;9739:2;9734:3;9730:12;9723:40;9791:2;9786:3;9782:12;9775:19;;9561:239;;;:::o;9809:296::-;;9986:83;10067:1;10062:3;9986:83;:::i;:::-;9979:90;;10097:1;10092:3;10088:11;10081:18;;9972:133;;;:::o;10114:323::-;;10274:67;10338:2;10333:3;10274:67;:::i;:::-;10267:74;;10374:25;10370:1;10365:3;10361:11;10354:46;10428:2;10423:3;10419:12;10412:19;;10260:177;;;:::o;10446:384::-;;10606:67;10670:2;10665:3;10606:67;:::i;:::-;10599:74;;10706:34;10702:1;10697:3;10693:11;10686:55;10775:17;10770:2;10765:3;10761:12;10754:39;10821:2;10816:3;10812:12;10805:19;;10592:238;;;:::o;10899:478::-;11030:4;11025:3;11021:14;11123:4;11116:5;11112:16;11106:23;11135:63;11192:4;11187:3;11183:14;11169:12;11135:63;:::i;:::-;11050:154;11281:4;11274:5;11270:16;11264:23;11293:63;11350:4;11345:3;11341:14;11327:12;11293:63;:::i;:::-;11214:148;11003:374;;;:::o;11384:103::-;11457:24;11475:5;11457:24;:::i;:::-;11452:3;11445:37;11439:48;;:::o;11494:113::-;11577:24;11595:5;11577:24;:::i;:::-;11572:3;11565:37;11559:48;;:::o;11614:379::-;;11821:147;11964:3;11821:147;:::i;:::-;11814:154;;11985:3;11978:10;;11802:191;;;:::o;12000:222::-;;12127:2;12116:9;12112:18;12104:26;;12141:71;12209:1;12198:9;12194:17;12185:6;12141:71;:::i;:::-;12098:124;;;;:::o;12229:460::-;;12420:2;12409:9;12405:18;12397:26;;12434:79;12510:1;12499:9;12495:17;12486:6;12434:79;:::i;:::-;12524:72;12592:2;12581:9;12577:18;12568:6;12524:72;:::i;:::-;12607;12675:2;12664:9;12660:18;12651:6;12607:72;:::i;:::-;12391:298;;;;;;:::o;12696:466::-;;12921:2;12910:9;12906:18;12898:26;;12971:9;12965:4;12961:20;12957:1;12946:9;12942:17;12935:47;12996:156;13147:4;13138:6;12996:156;:::i;:::-;12988:164;;12892:270;;;;:::o;13169:210::-;;13290:2;13279:9;13275:18;13267:26;;13304:65;13366:1;13355:9;13351:17;13342:6;13304:65;:::i;:::-;13261:118;;;;:::o;13386:222::-;;13513:2;13502:9;13498:18;13490:26;;13527:71;13595:1;13584:9;13580:17;13571:6;13527:71;:::i;:::-;13484:124;;;;:::o;13615:636::-;;13846:2;13835:9;13831:18;13823:26;;13860:79;13936:1;13925:9;13921:17;13912:6;13860:79;:::i;:::-;13987:9;13981:4;13977:20;13972:2;13961:9;13957:18;13950:48;14012:78;14085:4;14076:6;14012:78;:::i;:::-;14004:86;;14138:9;14132:4;14128:20;14123:2;14112:9;14108:18;14101:48;14163:78;14236:4;14227:6;14163:78;:::i;:::-;14155:86;;13817:434;;;;;;:::o;14258:310::-;;14405:2;14394:9;14390:18;14382:26;;14455:9;14449:4;14445:20;14441:1;14430:9;14426:17;14419:47;14480:78;14553:4;14544:6;14480:78;:::i;:::-;14472:86;;14376:192;;;;:::o;14575:416::-;;14775:2;14764:9;14760:18;14752:26;;14825:9;14819:4;14815:20;14811:1;14800:9;14796:17;14789:47;14850:131;14976:4;14850:131;:::i;:::-;14842:139;;14746:245;;;:::o;14998:416::-;;15198:2;15187:9;15183:18;15175:26;;15248:9;15242:4;15238:20;15234:1;15223:9;15219:17;15212:47;15273:131;15399:4;15273:131;:::i;:::-;15265:139;;15169:245;;;:::o;15421:416::-;;15621:2;15610:9;15606:18;15598:26;;15671:9;15665:4;15661:20;15657:1;15646:9;15642:17;15635:47;15696:131;15822:4;15696:131;:::i;:::-;15688:139;;15592:245;;;:::o;15844:416::-;;16044:2;16033:9;16029:18;16021:26;;16094:9;16088:4;16084:20;16080:1;16069:9;16065:17;16058:47;16119:131;16245:4;16119:131;:::i;:::-;16111:139;;16015:245;;;:::o;16267:416::-;;16467:2;16456:9;16452:18;16444:26;;16517:9;16511:4;16507:20;16503:1;16492:9;16488:17;16481:47;16542:131;16668:4;16542:131;:::i;:::-;16534:139;;16438:245;;;:::o;16690:416::-;;16890:2;16879:9;16875:18;16867:26;;16940:9;16934:4;16930:20;16926:1;16915:9;16911:17;16904:47;16965:131;17091:4;16965:131;:::i;:::-;16957:139;;16861:245;;;:::o;17113:416::-;;17313:2;17302:9;17298:18;17290:26;;17363:9;17357:4;17353:20;17349:1;17338:9;17334:17;17327:47;17388:131;17514:4;17388:131;:::i;:::-;17380:139;;17284:245;;;:::o;17536:222::-;;17663:2;17652:9;17648:18;17640:26;;17677:71;17745:1;17734:9;17730:17;17721:6;17677:71;:::i;:::-;17634:124;;;;:::o;17765:256::-;;17827:2;17821:9;17811:19;;17865:4;17857:6;17853:17;17964:6;17952:10;17949:22;17928:18;17916:10;17913:34;17910:62;17907:2;;;17985:1;17982;17975:12;17907:2;18005:10;18001:2;17994:22;17805:216;;;;:::o;18028:321::-;;18171:18;18163:6;18160:30;18157:2;;;18203:1;18200;18193:12;18157:2;18270:4;18266:9;18259:4;18251:6;18247:17;18243:33;18235:41;;18334:4;18328;18324:15;18316:23;;18094:255;;;:::o;18356:322::-;;18500:18;18492:6;18489:30;18486:2;;;18532:1;18529;18522:12;18486:2;18599:4;18595:9;18588:4;18580:6;18576:17;18572:33;18564:41;;18663:4;18657;18653:15;18645:23;;18423:255;;;:::o;18685:175::-;;18795:3;18787:11;;18833:4;18828:3;18824:14;18816:22;;18781:79;;;:::o;18867:161::-;;19000:5;18994:12;18984:22;;18965:63;;;:::o;19035:122::-;;19129:5;19123:12;19113:22;;19094:63;;;:::o;19164:132::-;;19286:4;19281:3;19277:14;19269:22;;19263:33;;;:::o;19304:202::-;;19458:6;19453:3;19446:19;19495:4;19490:3;19486:14;19471:29;;19439:67;;;;:::o;19515:144::-;;19650:3;19635:18;;19628:31;;;;:::o;19668:163::-;;19783:6;19778:3;19771:19;19820:4;19815:3;19811:14;19796:29;;19764:67;;;;:::o;19839:91::-;;19901:24;19919:5;19901:24;:::i;:::-;19890:35;;19884:46;;;:::o;19937:99::-;;20007:24;20025:5;20007:24;:::i;:::-;19996:35;;19990:46;;;:::o;20043:85::-;;20116:5;20109:13;20102:21;20091:32;;20085:43;;;:::o;20135:72::-;;20197:5;20186:16;;20180:27;;;:::o;20214:121::-;;20287:42;20280:5;20276:54;20265:65;;20259:76;;;:::o;20342:72::-;;20404:5;20393:16;;20387:27;;;:::o;20421:129::-;;20508:37;20539:5;20508:37;:::i;:::-;20495:50;;20489:61;;;:::o;20557:116::-;;20644:24;20662:5;20644:24;:::i;:::-;20631:37;;20625:48;;;:::o;20680:121::-;;20759:37;20790:5;20759:37;:::i;:::-;20746:50;;20740:61;;;:::o;20808:108::-;;20887:24;20905:5;20887:24;:::i;:::-;20874:37;;20868:48;;;:::o;20924:145::-;21005:6;21000:3;20995;20982:30;21061:1;21052:6;21047:3;21043:16;21036:27;20975:94;;;:::o;21078:268::-;21143:1;21150:101;21164:6;21161:1;21158:13;21150:101;;;21240:1;21235:3;21231:11;21225:18;21221:1;21216:3;21212:11;21205:39;21186:2;21183:1;21179:10;21174:15;;21150:101;;;21266:6;21263:1;21260:13;21257:2;;;21331:1;21322:6;21317:3;21313:16;21306:27;21257:2;21127:219;;;;:::o;21354:97::-;;21442:2;21438:7;21433:2;21426:5;21422:14;21418:28;21408:38;;21402:49;;;:::o;21459:117::-;21528:24;21546:5;21528:24;:::i;:::-;21521:5;21518:35;21508:2;;21567:1;21564;21557:12;21508:2;21502:74;:::o;21583:133::-;21660:32;21686:5;21660:32;:::i;:::-;21653:5;21650:43;21640:2;;21707:1;21704;21697:12;21640:2;21634:82;:::o;21723:117::-;21792:24;21810:5;21792:24;:::i;:::-;21785:5;21782:35;21772:2;;21831:1;21828;21821:12;21772:2;21766:74;:::o;21847:117::-;21916:24;21934:5;21916:24;:::i;:::-;21909:5;21906:35;21896:2;;21955:1;21952;21945:12;21896:2;21890:74;:::o",
  "source": "pragma solidity ^0.6.0;\r\n//\"SPDX-License-Identifier: UNLICENSED\"\r\npragma experimental ABIEncoderV2;\r\n\r\nimport \"./ProvableAPI.sol\";\r\nimport \"@openzeppelin/contracts/access/AccessControl.sol\";\r\nimport \"@openzeppelin/contracts/math/SafeMath.sol\";\r\n\r\n/// @title Contract that manages donations\r\n/// @author A. van Leeuwen\r\n/// @notice This contract may contain some unnecessary functions, given that it has been used as a playground to learn solidity\r\n/// @dev\r\ncontract Donations is usingProvable, AccessControl {\r\n    // SafeMath\r\n    using SafeMath for uint256;\r\n\r\n    // Roles\r\n    bytes32 public constant OWNER_ROLE = keccak256(\"OWNER_ROLE\");\r\n\r\n    // Attributes\r\n    uint256 private totalDonated = 0;\r\n    uint256 private priceOfUrl;\r\n    string public EthPriceInEur;\r\n    string public ThankYouCID;\r\n\r\n    // Arrays\r\n    donation[] private Donations;\r\n\r\n    // Mappings\r\n    mapping(address => uint256) private Map;\r\n\r\n    // Structs\r\n    struct donation {\r\n        uint256 donationAmount;\r\n        address donateur;\r\n    }\r\n\r\n    // Events\r\n    event Confirmation(address from, address to, uint256 amount);\r\n\r\n    // Constructor\r\n    constructor(address owner) public {\r\n        _setupRole(OWNER_ROLE, owner);\r\n    }\r\n\r\n    /// @notice saves the donation data and adds the eth to the contract\r\n    function donate() public payable {\r\n        donation memory temp;\r\n        temp.donationAmount = msg.value;\r\n        temp.donateur = msg.sender;\r\n        totalDonated = totalDonated + msg.value;\r\n\r\n        Donations.push(temp);\r\n        Map[msg.sender] = Donations.length - 1;\r\n\r\n        emit Confirmation(msg.sender, address(this), msg.value);\r\n    }\r\n\r\n    /// @notice getter for total in contract\r\n    /// @return total amount in contract\r\n    function getTotalInContract() public view returns (uint256 total) {\r\n        return address(this).balance;\r\n    }\r\n\r\n    /// @notice getter for totalamount ever donated\r\n    /// @return total amount donated since release of the contract\r\n    function getTotalDonated() public view returns (uint256 total) {\r\n        return totalDonated;\r\n    }\r\n\r\n    /// @notice getter for array of donations\r\n    /// @return array of donations with contains the addressen & amounts\r\n    function GetAllDonations() public view returns (donation[] memory) {\r\n        return Donations;\r\n    }\r\n\r\n    /// @notice sends the eth within the contract to an goed doel\r\n    /// @param receiver of \"good doel\" and the amount of eth in wei\r\n    function sendTotalAmountToGoedDoel(address payable receiver, uint256 amount)\r\n        public\r\n    {\r\n        require(hasRole(OWNER_ROLE, msg.sender), \"Caller is not the owner\");\r\n        require(amount <= address(this).balance, \"Amount larger than balance\");\r\n        (\r\n            bool success, /* bytes memory response*/\r\n\r\n        ) = receiver.call{value: amount}(\"\");\r\n        require(success, \"Pay was not successful.\");\r\n    }\r\n\r\n    /// @notice Saves the CID on the Chain\r\n    /// @param CID the IPFS cid of the photo\r\n    function saveThankYouCID(string memory CID) public {\r\n        require(hasRole(OWNER_ROLE, msg.sender), \"Caller is not the owner\");\r\n        ThankYouCID = CID;\r\n    }\r\n\r\n    /// @notice getter for the cid of the photo\r\n    function getThankYouPhotoCID()\r\n        public\r\n        view\r\n        returns (string memory photoCID)\r\n    {\r\n        return ThankYouCID;\r\n    }\r\n\r\n    /// @notice gets the current ETH price in EUR\r\n    function GetCurrentEthPriceInEUR() public payable {\r\n        priceOfUrl = provable_getPrice(\"URL\");\r\n        require(address(this).balance >= priceOfUrl);\r\n        provable_query(\r\n            \"URL\",\r\n            \"json(https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=EUR,USD).EUR\"\r\n        );\r\n    }\r\n\r\n    /// @notice callback for function GetCurrentEthPriceInEUR\r\n    function __callback(bytes32, string memory result) public override {\r\n        if (msg.sender != provable_cbAddress()) revert();\r\n        EthPriceInEur = result;\r\n    }\r\n\r\n    /// @notice gives the owner the possibility to destroy the contract\r\n    /// @return message that contract is destroyed\r\n    function Destroy() public payable returns (string memory) {\r\n        require(hasRole(OWNER_ROLE, msg.sender), \"Caller is not the owner\");\r\n        selfdestruct(msg.sender);\r\n        return \"Contract destroyed succesfully\";\r\n    }\r\n}\r\n",
  "sourcePath": "C:/Users/Aron/Documents/GitHub/BC3_Aron/PD-15/truffleContract/contracts/Donations.sol",
  "ast": {
    "absolutePath": "/C/Users/Aron/Documents/GitHub/BC3_Aron/PD-15/truffleContract/contracts/Donations.sol",
    "exportedSymbols": {
      "Donations": [
        291
      ]
    },
    "id": 292,
    "license": "UNLICENSED",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.6",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:0"
      },
      {
        "id": 2,
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ],
        "nodeType": "PragmaDirective",
        "src": "66:33:0"
      },
      {
        "absolutePath": "/C/Users/Aron/Documents/GitHub/BC3_Aron/PD-15/truffleContract/contracts/ProvableAPI.sol",
        "file": "./ProvableAPI.sol",
        "id": 3,
        "nodeType": "ImportDirective",
        "scope": 292,
        "sourceUnit": 6740,
        "src": "103:27:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/access/AccessControl.sol",
        "file": "@openzeppelin/contracts/access/AccessControl.sol",
        "id": 4,
        "nodeType": "ImportDirective",
        "scope": 292,
        "sourceUnit": 13461,
        "src": "132:58:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/math/SafeMath.sol",
        "file": "@openzeppelin/contracts/math/SafeMath.sol",
        "id": 5,
        "nodeType": "ImportDirective",
        "scope": 292,
        "sourceUnit": 13657,
        "src": "192:51:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 7,
              "name": "usingProvable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6739,
              "src": "480:13:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_usingProvable_$6739",
                "typeString": "contract usingProvable"
              }
            },
            "id": 8,
            "nodeType": "InheritanceSpecifier",
            "src": "480:13:0"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 9,
              "name": "AccessControl",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 13460,
              "src": "495:13:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_AccessControl_$13460",
                "typeString": "contract AccessControl"
              }
            },
            "id": 10,
            "nodeType": "InheritanceSpecifier",
            "src": "495:13:0"
          }
        ],
        "contractDependencies": [
          6739,
          13177,
          13460
        ],
        "contractKind": "contract",
        "documentation": {
          "id": 6,
          "nodeType": "StructuredDocumentation",
          "src": "247:211:0",
          "text": "@title Contract that manages donations\n @author A. van Leeuwen\n @notice This contract may contain some unnecessary functions, given that it has been used as a playground to learn solidity\n @dev"
        },
        "fullyImplemented": true,
        "id": 291,
        "linearizedBaseContracts": [
          291,
          13460,
          13177,
          6739
        ],
        "name": "Donations",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 13,
            "libraryName": {
              "contractScope": null,
              "id": 11,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 13656,
              "src": "539:8:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$13656",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "533:27:0",
            "typeName": {
              "id": 12,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "552:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": true,
            "functionSelector": "e58378bb",
            "id": 18,
            "mutability": "constant",
            "name": "OWNER_ROLE",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 291,
            "src": "582:60:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 14,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "582:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "argumentTypes": null,
              "arguments": [
                {
                  "argumentTypes": null,
                  "hexValue": "4f574e45525f524f4c45",
                  "id": 16,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "string",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "629:12:0",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_stringliteral_b19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e",
                    "typeString": "literal_string \"OWNER_ROLE\""
                  },
                  "value": "OWNER_ROLE"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_stringliteral_b19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e",
                    "typeString": "literal_string \"OWNER_ROLE\""
                  }
                ],
                "id": 15,
                "name": "keccak256",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": -8,
                "src": "619:9:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                  "typeString": "function (bytes memory) pure returns (bytes32)"
                }
              },
              "id": 17,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "functionCall",
              "lValueRequested": false,
              "names": [],
              "nodeType": "FunctionCall",
              "src": "619:23:0",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 21,
            "mutability": "mutable",
            "name": "totalDonated",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 291,
            "src": "670:32:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 19,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "670:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30",
              "id": 20,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "701:1:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0"
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 23,
            "mutability": "mutable",
            "name": "priceOfUrl",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 291,
            "src": "709:26:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 22,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "709:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "functionSelector": "5759d1b6",
            "id": 25,
            "mutability": "mutable",
            "name": "EthPriceInEur",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 291,
            "src": "742:27:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 24,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "742:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "19052836",
            "id": 27,
            "mutability": "mutable",
            "name": "ThankYouCID",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 291,
            "src": "776:25:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 26,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "776:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 30,
            "mutability": "mutable",
            "name": "Donations",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 291,
            "src": "825:28:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_donation_$39_storage_$dyn_storage",
              "typeString": "struct Donations.donation[]"
            },
            "typeName": {
              "baseType": {
                "contractScope": null,
                "id": 28,
                "name": "donation",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 39,
                "src": "825:8:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_donation_$39_storage_ptr",
                  "typeString": "struct Donations.donation"
                }
              },
              "id": 29,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "825:10:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_donation_$39_storage_$dyn_storage_ptr",
                "typeString": "struct Donations.donation[]"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 34,
            "mutability": "mutable",
            "name": "Map",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 291,
            "src": "879:39:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 33,
              "keyType": {
                "id": 31,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "887:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "879:27:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 32,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "898:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "canonicalName": "Donations.donation",
            "id": 39,
            "members": [
              {
                "constant": false,
                "id": 36,
                "mutability": "mutable",
                "name": "donationAmount",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 39,
                "src": "970:22:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 35,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "970:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 38,
                "mutability": "mutable",
                "name": "donateur",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 39,
                "src": "1003:16:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 37,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1003:7:0",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "donation",
            "nodeType": "StructDefinition",
            "scope": 291,
            "src": "943:84:0",
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 47,
            "name": "Confirmation",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 46,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 47,
                  "src": "1069:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 40,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1069:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 43,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 47,
                  "src": "1083:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1083:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 45,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 47,
                  "src": "1095:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1095:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1068:42:0"
            },
            "src": "1050:61:0"
          },
          {
            "body": {
              "id": 57,
              "nodeType": "Block",
              "src": "1173:48:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 53,
                        "name": "OWNER_ROLE",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18,
                        "src": "1195:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 54,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49,
                        "src": "1207:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 52,
                      "name": "_setupRole",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13386,
                      "src": "1184:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address)"
                      }
                    },
                    "id": 55,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1184:29:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 56,
                  "nodeType": "ExpressionStatement",
                  "src": "1184:29:0"
                }
              ]
            },
            "documentation": null,
            "id": 58,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 50,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49,
                  "mutability": "mutable",
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 58,
                  "src": "1151:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 48,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1151:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1150:15:0"
            },
            "returnParameters": {
              "id": 51,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1173:0:0"
            },
            "scope": 291,
            "src": "1139:82:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 113,
              "nodeType": "Block",
              "src": "1336:318:0",
              "statements": [
                {
                  "assignments": [
                    63
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 63,
                      "mutability": "mutable",
                      "name": "temp",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 113,
                      "src": "1347:20:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_donation_$39_memory_ptr",
                        "typeString": "struct Donations.donation"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 62,
                        "name": "donation",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 39,
                        "src": "1347:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_donation_$39_storage_ptr",
                          "typeString": "struct Donations.donation"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 64,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1347:20:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 70,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 65,
                        "name": "temp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63,
                        "src": "1378:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_donation_$39_memory_ptr",
                          "typeString": "struct Donations.donation memory"
                        }
                      },
                      "id": 67,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "donationAmount",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 36,
                      "src": "1378:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 68,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "1400:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 69,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1400:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1378:31:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 71,
                  "nodeType": "ExpressionStatement",
                  "src": "1378:31:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 77,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 72,
                        "name": "temp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63,
                        "src": "1420:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_donation_$39_memory_ptr",
                          "typeString": "struct Donations.donation memory"
                        }
                      },
                      "id": 74,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "donateur",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 38,
                      "src": "1420:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 75,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "1436:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 76,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1436:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "1420:26:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 78,
                  "nodeType": "ExpressionStatement",
                  "src": "1420:26:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 84,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 79,
                      "name": "totalDonated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21,
                      "src": "1457:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 83,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 80,
                        "name": "totalDonated",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21,
                        "src": "1472:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "+",
                      "rightExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 81,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "1487:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 82,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1487:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "1472:24:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1457:39:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 85,
                  "nodeType": "ExpressionStatement",
                  "src": "1457:39:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 89,
                        "name": "temp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63,
                        "src": "1524:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_donation_$39_memory_ptr",
                          "typeString": "struct Donations.donation memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_donation_$39_memory_ptr",
                          "typeString": "struct Donations.donation memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 86,
                        "name": "Donations",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30,
                        "src": "1509:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_donation_$39_storage_$dyn_storage",
                          "typeString": "struct Donations.donation storage ref[] storage ref"
                        }
                      },
                      "id": 88,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1509:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_donation_$39_storage_$returns$__$",
                        "typeString": "function (struct Donations.donation storage ref)"
                      }
                    },
                    "id": 90,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1509:20:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 91,
                  "nodeType": "ExpressionStatement",
                  "src": "1509:20:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 100,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 92,
                        "name": "Map",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34,
                        "src": "1540:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 95,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 93,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "1544:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 94,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1544:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1540:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 99,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 96,
                          "name": "Donations",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 30,
                          "src": "1558:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_donation_$39_storage_$dyn_storage",
                            "typeString": "struct Donations.donation storage ref[] storage ref"
                          }
                        },
                        "id": 97,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1558:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 98,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1577:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "1558:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1540:38:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 101,
                  "nodeType": "ExpressionStatement",
                  "src": "1540:38:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 103,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "1609:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 104,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1609:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 107,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "1629:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Donations_$291",
                              "typeString": "contract Donations"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_Donations_$291",
                              "typeString": "contract Donations"
                            }
                          ],
                          "id": 106,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1621:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 105,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "1621:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": null,
                              "typeString": null
                            }
                          }
                        },
                        "id": 108,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1621:13:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 109,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "1636:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 110,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1636:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 102,
                      "name": "Confirmation",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47,
                      "src": "1596:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 111,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1596:50:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 112,
                  "nodeType": "EmitStatement",
                  "src": "1591:55:0"
                }
              ]
            },
            "documentation": {
              "id": 59,
              "nodeType": "StructuredDocumentation",
              "src": "1229:68:0",
              "text": "@notice saves the donation data and adds the eth to the contract"
            },
            "functionSelector": "ed88c68e",
            "id": 114,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "donate",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 60,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1318:2:0"
            },
            "returnParameters": {
              "id": 61,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1336:0:0"
            },
            "scope": 291,
            "src": "1303:351:0",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 126,
              "nodeType": "Block",
              "src": "1816:47:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 122,
                          "name": "this",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -28,
                          "src": "1842:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_Donations_$291",
                            "typeString": "contract Donations"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_Donations_$291",
                            "typeString": "contract Donations"
                          }
                        ],
                        "id": 121,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "1834:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 120,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "1834:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": null,
                            "typeString": null
                          }
                        }
                      },
                      "id": 123,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1834:13:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 124,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "balance",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "1834:21:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 119,
                  "id": 125,
                  "nodeType": "Return",
                  "src": "1827:28:0"
                }
              ]
            },
            "documentation": {
              "id": 115,
              "nodeType": "StructuredDocumentation",
              "src": "1662:82:0",
              "text": "@notice getter for total in contract\n @return total amount in contract"
            },
            "functionSelector": "ef91313f",
            "id": 127,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getTotalInContract",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 116,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1777:2:0"
            },
            "returnParameters": {
              "id": 119,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 118,
                  "mutability": "mutable",
                  "name": "total",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 127,
                  "src": "1801:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 117,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1801:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1800:15:0"
            },
            "scope": 291,
            "src": "1750:113:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 135,
              "nodeType": "Block",
              "src": "2055:38:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 133,
                    "name": "totalDonated",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 21,
                    "src": "2073:12:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 132,
                  "id": 134,
                  "nodeType": "Return",
                  "src": "2066:19:0"
                }
              ]
            },
            "documentation": {
              "id": 128,
              "nodeType": "StructuredDocumentation",
              "src": "1871:115:0",
              "text": "@notice getter for totalamount ever donated\n @return total amount donated since release of the contract"
            },
            "functionSelector": "d56e3068",
            "id": 136,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getTotalDonated",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 129,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2016:2:0"
            },
            "returnParameters": {
              "id": 132,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 131,
                  "mutability": "mutable",
                  "name": "total",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 136,
                  "src": "2040:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 130,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2040:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2039:15:0"
            },
            "scope": 291,
            "src": "1992:101:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 145,
              "nodeType": "Block",
              "src": "2289:35:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 143,
                    "name": "Donations",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 30,
                    "src": "2307:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_donation_$39_storage_$dyn_storage",
                      "typeString": "struct Donations.donation storage ref[] storage ref"
                    }
                  },
                  "functionReturnParameters": 142,
                  "id": 144,
                  "nodeType": "Return",
                  "src": "2300:16:0"
                }
              ]
            },
            "documentation": {
              "id": 137,
              "nodeType": "StructuredDocumentation",
              "src": "2101:115:0",
              "text": "@notice getter for array of donations\n @return array of donations with contains the addressen & amounts"
            },
            "functionSelector": "0959a176",
            "id": 146,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "GetAllDonations",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 138,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2246:2:0"
            },
            "returnParameters": {
              "id": 142,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 141,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 146,
                  "src": "2270:17:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_donation_$39_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct Donations.donation[]"
                  },
                  "typeName": {
                    "baseType": {
                      "contractScope": null,
                      "id": 139,
                      "name": "donation",
                      "nodeType": "UserDefinedTypeName",
                      "referencedDeclaration": 39,
                      "src": "2270:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_donation_$39_storage_ptr",
                        "typeString": "struct Donations.donation"
                      }
                    },
                    "id": 140,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "2270:10:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_donation_$39_storage_$dyn_storage_ptr",
                      "typeString": "struct Donations.donation[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2269:19:0"
            },
            "scope": 291,
            "src": "2222:102:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 188,
              "nodeType": "Block",
              "src": "2566:335:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 156,
                            "name": "OWNER_ROLE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18,
                            "src": "2593:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 157,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "2605:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 158,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2605:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          ],
                          "id": 155,
                          "name": "hasRole",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13249,
                          "src": "2585:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_bytes32_$_t_address_$returns$_t_bool_$",
                            "typeString": "function (bytes32,address) view returns (bool)"
                          }
                        },
                        "id": 159,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2585:31:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "43616c6c6572206973206e6f7420746865206f776e6572",
                        "id": 160,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2618:25:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_15ed5034391ed5ef65b8bb8dbcb08f9b6c4034ebcf89f76344a17e1651e92b33",
                          "typeString": "literal_string \"Caller is not the owner\""
                        },
                        "value": "Caller is not the owner"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_15ed5034391ed5ef65b8bb8dbcb08f9b6c4034ebcf89f76344a17e1651e92b33",
                          "typeString": "literal_string \"Caller is not the owner\""
                        }
                      ],
                      "id": 154,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "2577:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 161,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2577:67:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 162,
                  "nodeType": "ExpressionStatement",
                  "src": "2577:67:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 170,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 164,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 151,
                          "src": "2663:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 167,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -28,
                                "src": "2681:4:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_Donations_$291",
                                  "typeString": "contract Donations"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_Donations_$291",
                                  "typeString": "contract Donations"
                                }
                              ],
                              "id": 166,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "2673:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 165,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "2673:7:0",
                                "typeDescriptions": {
                                  "typeIdentifier": null,
                                  "typeString": null
                                }
                              }
                            },
                            "id": 168,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2673:13:0",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "id": 169,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "balance",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2673:21:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2663:31:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "416d6f756e74206c6172676572207468616e2062616c616e6365",
                        "id": 171,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2696:28:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_4656657eb257a75dd0bcfb261a1b6faf4bb18e9a4ea3743ab7955d8be50d090f",
                          "typeString": "literal_string \"Amount larger than balance\""
                        },
                        "value": "Amount larger than balance"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_4656657eb257a75dd0bcfb261a1b6faf4bb18e9a4ea3743ab7955d8be50d090f",
                          "typeString": "literal_string \"Amount larger than balance\""
                        }
                      ],
                      "id": 163,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "2655:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 172,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2655:70:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 173,
                  "nodeType": "ExpressionStatement",
                  "src": "2655:70:0"
                },
                {
                  "assignments": [
                    175,
                    null
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 175,
                      "mutability": "mutable",
                      "name": "success",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 188,
                      "src": "2751:12:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 174,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "2751:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    null
                  ],
                  "id": 182,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 180,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2836:2:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                            "typeString": "literal_string \"\""
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 176,
                          "name": "receiver",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 149,
                          "src": "2807:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "id": 177,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "call",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2807:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                          "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                        }
                      },
                      "id": 179,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "names": [
                        "value"
                      ],
                      "nodeType": "FunctionCallOptions",
                      "options": [
                        {
                          "argumentTypes": null,
                          "id": 178,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 151,
                          "src": "2828:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "src": "2807:28:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                        "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                      }
                    },
                    "id": 181,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2807:32:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2736:103:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 184,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 175,
                        "src": "2858:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "50617920776173206e6f74207375636365737366756c2e",
                        "id": 185,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2867:25:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c7b79432a4b78502aa1f2503999db66c4bf5a1246c253da21687aee3442a9e9b",
                          "typeString": "literal_string \"Pay was not successful.\""
                        },
                        "value": "Pay was not successful."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c7b79432a4b78502aa1f2503999db66c4bf5a1246c253da21687aee3442a9e9b",
                          "typeString": "literal_string \"Pay was not successful.\""
                        }
                      ],
                      "id": 183,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "2850:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 186,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2850:43:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 187,
                  "nodeType": "ExpressionStatement",
                  "src": "2850:43:0"
                }
              ]
            },
            "documentation": {
              "id": 147,
              "nodeType": "StructuredDocumentation",
              "src": "2332:130:0",
              "text": "@notice sends the eth within the contract to an goed doel\n @param receiver of \"good doel\" and the amount of eth in wei"
            },
            "functionSelector": "be87acd0",
            "id": 189,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sendTotalAmountToGoedDoel",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 152,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 149,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 189,
                  "src": "2503:24:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  },
                  "typeName": {
                    "id": 148,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2503:15:0",
                    "stateMutability": "payable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 151,
                  "mutability": "mutable",
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 189,
                  "src": "2529:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 150,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2529:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2502:42:0"
            },
            "returnParameters": {
              "id": 153,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2566:0:0"
            },
            "scope": 291,
            "src": "2468:433:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 208,
              "nodeType": "Block",
              "src": "3050:114:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 197,
                            "name": "OWNER_ROLE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18,
                            "src": "3077:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 198,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "3089:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 199,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "3089:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          ],
                          "id": 196,
                          "name": "hasRole",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13249,
                          "src": "3069:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_bytes32_$_t_address_$returns$_t_bool_$",
                            "typeString": "function (bytes32,address) view returns (bool)"
                          }
                        },
                        "id": 200,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3069:31:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "43616c6c6572206973206e6f7420746865206f776e6572",
                        "id": 201,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3102:25:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_15ed5034391ed5ef65b8bb8dbcb08f9b6c4034ebcf89f76344a17e1651e92b33",
                          "typeString": "literal_string \"Caller is not the owner\""
                        },
                        "value": "Caller is not the owner"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_15ed5034391ed5ef65b8bb8dbcb08f9b6c4034ebcf89f76344a17e1651e92b33",
                          "typeString": "literal_string \"Caller is not the owner\""
                        }
                      ],
                      "id": 195,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "3061:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 202,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3061:67:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 203,
                  "nodeType": "ExpressionStatement",
                  "src": "3061:67:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 206,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 204,
                      "name": "ThankYouCID",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27,
                      "src": "3139:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 205,
                      "name": "CID",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 192,
                      "src": "3153:3:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "3139:17:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 207,
                  "nodeType": "ExpressionStatement",
                  "src": "3139:17:0"
                }
              ]
            },
            "documentation": {
              "id": 190,
              "nodeType": "StructuredDocumentation",
              "src": "2909:84:0",
              "text": "@notice Saves the CID on the Chain\n @param CID the IPFS cid of the photo"
            },
            "functionSelector": "f8c1e2cd",
            "id": 209,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "saveThankYouCID",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 193,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 192,
                  "mutability": "mutable",
                  "name": "CID",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 209,
                  "src": "3024:17:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 191,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3024:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3023:19:0"
            },
            "returnParameters": {
              "id": 194,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3050:0:0"
            },
            "scope": 291,
            "src": "2999:165:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 217,
              "nodeType": "Block",
              "src": "3329:37:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 215,
                    "name": "ThankYouCID",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 27,
                    "src": "3347:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 214,
                  "id": 216,
                  "nodeType": "Return",
                  "src": "3340:18:0"
                }
              ]
            },
            "documentation": {
              "id": 210,
              "nodeType": "StructuredDocumentation",
              "src": "3172:43:0",
              "text": "@notice getter for the cid of the photo"
            },
            "functionSelector": "fd938812",
            "id": 218,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getThankYouPhotoCID",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 211,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3249:2:0"
            },
            "returnParameters": {
              "id": 214,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 213,
                  "mutability": "mutable",
                  "name": "photoCID",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 218,
                  "src": "3300:22:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 212,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3300:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3299:24:0"
            },
            "scope": 291,
            "src": "3221:145:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 243,
              "nodeType": "Block",
              "src": "3475:261:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 226,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 222,
                      "name": "priceOfUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23,
                      "src": "3486:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "55524c",
                          "id": 224,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3517:5:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_96388ed71ebb5d970d8c40d08f33931fc80bd2768fd60f12b78e085d12441b0e",
                            "typeString": "literal_string \"URL\""
                          },
                          "value": "URL"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_stringliteral_96388ed71ebb5d970d8c40d08f33931fc80bd2768fd60f12b78e085d12441b0e",
                            "typeString": "literal_string \"URL\""
                          }
                        ],
                        "id": 223,
                        "name": "provable_getPrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          1414,
                          1432
                        ],
                        "referencedDeclaration": 1414,
                        "src": "3499:17:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$returns$_t_uint256_$",
                          "typeString": "function (string memory) returns (uint256)"
                        }
                      },
                      "id": 225,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3499:24:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3486:37:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 227,
                  "nodeType": "ExpressionStatement",
                  "src": "3486:37:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 235,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 231,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -28,
                                "src": "3550:4:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_Donations_$291",
                                  "typeString": "contract Donations"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_Donations_$291",
                                  "typeString": "contract Donations"
                                }
                              ],
                              "id": 230,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "3542:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 229,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "3542:7:0",
                                "typeDescriptions": {
                                  "typeIdentifier": null,
                                  "typeString": null
                                }
                              }
                            },
                            "id": 232,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3542:13:0",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "id": 233,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "balance",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3542:21:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 234,
                          "name": "priceOfUrl",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 23,
                          "src": "3567:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "3542:35:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 228,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "3534:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 236,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3534:44:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 237,
                  "nodeType": "ExpressionStatement",
                  "src": "3534:44:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "55524c",
                        "id": 239,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3618:5:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_96388ed71ebb5d970d8c40d08f33931fc80bd2768fd60f12b78e085d12441b0e",
                          "typeString": "literal_string \"URL\""
                        },
                        "value": "URL"
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "6a736f6e2868747470733a2f2f6d696e2d6170692e63727970746f636f6d706172652e636f6d2f646174612f70726963653f6673796d3d455448267473796d733d4555522c555344292e455552",
                        "id": 240,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3638:79:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_44e2d59a5485b142921d3ba11c647b9b4de155f356a677ccb12e9ca4aa3dba27",
                          "typeString": "literal_string \"json(https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=EUR,USD).EUR\""
                        },
                        "value": "json(https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=EUR,USD).EUR"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_96388ed71ebb5d970d8c40d08f33931fc80bd2768fd60f12b78e085d12441b0e",
                          "typeString": "literal_string \"URL\""
                        },
                        {
                          "typeIdentifier": "t_stringliteral_44e2d59a5485b142921d3ba11c647b9b4de155f356a677ccb12e9ca4aa3dba27",
                          "typeString": "literal_string \"json(https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=EUR,USD).EUR\""
                        }
                      ],
                      "id": 238,
                      "name": "provable_query",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1472,
                        1514,
                        1560,
                        1604,
                        1647,
                        1692,
                        1741,
                        1788,
                        1835,
                        1884,
                        1937,
                        1988,
                        2026,
                        2067,
                        2111,
                        2152,
                        2198,
                        2247,
                        2299,
                        2348,
                        2402,
                        2459,
                        2519,
                        2576,
                        2638,
                        2703,
                        2771,
                        2836,
                        2906,
                        2979,
                        3055,
                        3128,
                        3175,
                        3224,
                        3277,
                        3328,
                        3366,
                        3407,
                        3451,
                        3492,
                        3538,
                        3587,
                        3639,
                        3688,
                        3742,
                        3799,
                        3859,
                        3916,
                        3978,
                        4043,
                        4111,
                        4176,
                        4246,
                        4319,
                        4395,
                        4468
                      ],
                      "referencedDeclaration": 1472,
                      "src": "3589:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (string memory,string memory) returns (bytes32)"
                      }
                    },
                    "id": 241,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3589:139:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 242,
                  "nodeType": "ExpressionStatement",
                  "src": "3589:139:0"
                }
              ]
            },
            "documentation": {
              "id": 219,
              "nodeType": "StructuredDocumentation",
              "src": "3374:45:0",
              "text": "@notice gets the current ETH price in EUR"
            },
            "functionSelector": "a964b7bb",
            "id": 244,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "GetCurrentEthPriceInEUR",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 220,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3457:2:0"
            },
            "returnParameters": {
              "id": 221,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3475:0:0"
            },
            "scope": 291,
            "src": "3425:311:0",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "baseFunctions": [
              1371
            ],
            "body": {
              "id": 266,
              "nodeType": "Block",
              "src": "3874:100:0",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 257,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 253,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "3889:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 254,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "3889:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 255,
                        "name": "provable_cbAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4493,
                        "src": "3903:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$__$returns$_t_address_$",
                          "typeString": "function () returns (address)"
                        }
                      },
                      "id": 256,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3903:20:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "3889:34:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 261,
                  "nodeType": "IfStatement",
                  "src": "3885:48:0",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 258,
                        "name": "revert",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -19,
                          -19
                        ],
                        "referencedDeclaration": -19,
                        "src": "3925:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 259,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3925:8:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 260,
                    "nodeType": "ExpressionStatement",
                    "src": "3925:8:0"
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 264,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 262,
                      "name": "EthPriceInEur",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25,
                      "src": "3944:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 263,
                      "name": "result",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 249,
                      "src": "3960:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "3944:22:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 265,
                  "nodeType": "ExpressionStatement",
                  "src": "3944:22:0"
                }
              ]
            },
            "documentation": {
              "id": 245,
              "nodeType": "StructuredDocumentation",
              "src": "3744:57:0",
              "text": "@notice callback for function GetCurrentEthPriceInEUR"
            },
            "functionSelector": "27dc297e",
            "id": 267,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "__callback",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 251,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "3865:8:0"
            },
            "parameters": {
              "id": 250,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 247,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 267,
                  "src": "3827:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 246,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3827:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 249,
                  "mutability": "mutable",
                  "name": "result",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 267,
                  "src": "3836:20:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 248,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3836:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3826:31:0"
            },
            "returnParameters": {
              "id": 252,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3874:0:0"
            },
            "scope": 291,
            "src": "3807:167:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 289,
              "nodeType": "Block",
              "src": "4165:171:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 275,
                            "name": "OWNER_ROLE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18,
                            "src": "4192:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 276,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "4204:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 277,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "4204:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          ],
                          "id": 274,
                          "name": "hasRole",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13249,
                          "src": "4184:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_bytes32_$_t_address_$returns$_t_bool_$",
                            "typeString": "function (bytes32,address) view returns (bool)"
                          }
                        },
                        "id": 278,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4184:31:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "43616c6c6572206973206e6f7420746865206f776e6572",
                        "id": 279,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4217:25:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_15ed5034391ed5ef65b8bb8dbcb08f9b6c4034ebcf89f76344a17e1651e92b33",
                          "typeString": "literal_string \"Caller is not the owner\""
                        },
                        "value": "Caller is not the owner"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_15ed5034391ed5ef65b8bb8dbcb08f9b6c4034ebcf89f76344a17e1651e92b33",
                          "typeString": "literal_string \"Caller is not the owner\""
                        }
                      ],
                      "id": 273,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4176:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 280,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4176:67:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 281,
                  "nodeType": "ExpressionStatement",
                  "src": "4176:67:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 283,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "4267:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 284,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4267:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      ],
                      "id": 282,
                      "name": "selfdestruct",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -21,
                      "src": "4254:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_selfdestruct_nonpayable$_t_address_payable_$returns$__$",
                        "typeString": "function (address payable)"
                      }
                    },
                    "id": 285,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4254:24:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 286,
                  "nodeType": "ExpressionStatement",
                  "src": "4254:24:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "436f6e74726163742064657374726f7965642073756363657366756c6c79",
                    "id": 287,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "4296:32:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_a1f2cee9053f27ad1ac653bb06281a1d1da5cf1339abeae35ee246788c7e3c3c",
                      "typeString": "literal_string \"Contract destroyed succesfully\""
                    },
                    "value": "Contract destroyed succesfully"
                  },
                  "functionReturnParameters": 272,
                  "id": 288,
                  "nodeType": "Return",
                  "src": "4289:39:0"
                }
              ]
            },
            "documentation": {
              "id": 268,
              "nodeType": "StructuredDocumentation",
              "src": "3982:119:0",
              "text": "@notice gives the owner the possibility to destroy the contract\n @return message that contract is destroyed"
            },
            "functionSelector": "f58fef8e",
            "id": 290,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "Destroy",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 269,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4123:2:0"
            },
            "returnParameters": {
              "id": 272,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 271,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 290,
                  "src": "4150:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 270,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4150:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4149:15:0"
            },
            "scope": 291,
            "src": "4107:229:0",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 292,
        "src": "458:3881:0"
      }
    ],
    "src": "0:4341:0"
  },
  "legacyAST": {
    "absolutePath": "/C/Users/Aron/Documents/GitHub/BC3_Aron/PD-15/truffleContract/contracts/Donations.sol",
    "exportedSymbols": {
      "Donations": [
        291
      ]
    },
    "id": 292,
    "license": "UNLICENSED",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.6",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:0"
      },
      {
        "id": 2,
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ],
        "nodeType": "PragmaDirective",
        "src": "66:33:0"
      },
      {
        "absolutePath": "/C/Users/Aron/Documents/GitHub/BC3_Aron/PD-15/truffleContract/contracts/ProvableAPI.sol",
        "file": "./ProvableAPI.sol",
        "id": 3,
        "nodeType": "ImportDirective",
        "scope": 292,
        "sourceUnit": 6740,
        "src": "103:27:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/access/AccessControl.sol",
        "file": "@openzeppelin/contracts/access/AccessControl.sol",
        "id": 4,
        "nodeType": "ImportDirective",
        "scope": 292,
        "sourceUnit": 13461,
        "src": "132:58:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/math/SafeMath.sol",
        "file": "@openzeppelin/contracts/math/SafeMath.sol",
        "id": 5,
        "nodeType": "ImportDirective",
        "scope": 292,
        "sourceUnit": 13657,
        "src": "192:51:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 7,
              "name": "usingProvable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6739,
              "src": "480:13:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_usingProvable_$6739",
                "typeString": "contract usingProvable"
              }
            },
            "id": 8,
            "nodeType": "InheritanceSpecifier",
            "src": "480:13:0"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 9,
              "name": "AccessControl",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 13460,
              "src": "495:13:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_AccessControl_$13460",
                "typeString": "contract AccessControl"
              }
            },
            "id": 10,
            "nodeType": "InheritanceSpecifier",
            "src": "495:13:0"
          }
        ],
        "contractDependencies": [
          6739,
          13177,
          13460
        ],
        "contractKind": "contract",
        "documentation": {
          "id": 6,
          "nodeType": "StructuredDocumentation",
          "src": "247:211:0",
          "text": "@title Contract that manages donations\n @author A. van Leeuwen\n @notice This contract may contain some unnecessary functions, given that it has been used as a playground to learn solidity\n @dev"
        },
        "fullyImplemented": true,
        "id": 291,
        "linearizedBaseContracts": [
          291,
          13460,
          13177,
          6739
        ],
        "name": "Donations",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 13,
            "libraryName": {
              "contractScope": null,
              "id": 11,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 13656,
              "src": "539:8:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$13656",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "533:27:0",
            "typeName": {
              "id": 12,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "552:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": true,
            "functionSelector": "e58378bb",
            "id": 18,
            "mutability": "constant",
            "name": "OWNER_ROLE",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 291,
            "src": "582:60:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 14,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "582:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "argumentTypes": null,
              "arguments": [
                {
                  "argumentTypes": null,
                  "hexValue": "4f574e45525f524f4c45",
                  "id": 16,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "string",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "629:12:0",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_stringliteral_b19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e",
                    "typeString": "literal_string \"OWNER_ROLE\""
                  },
                  "value": "OWNER_ROLE"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_stringliteral_b19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e",
                    "typeString": "literal_string \"OWNER_ROLE\""
                  }
                ],
                "id": 15,
                "name": "keccak256",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": -8,
                "src": "619:9:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                  "typeString": "function (bytes memory) pure returns (bytes32)"
                }
              },
              "id": 17,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "functionCall",
              "lValueRequested": false,
              "names": [],
              "nodeType": "FunctionCall",
              "src": "619:23:0",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 21,
            "mutability": "mutable",
            "name": "totalDonated",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 291,
            "src": "670:32:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 19,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "670:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30",
              "id": 20,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "701:1:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0"
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 23,
            "mutability": "mutable",
            "name": "priceOfUrl",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 291,
            "src": "709:26:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 22,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "709:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "functionSelector": "5759d1b6",
            "id": 25,
            "mutability": "mutable",
            "name": "EthPriceInEur",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 291,
            "src": "742:27:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 24,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "742:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "19052836",
            "id": 27,
            "mutability": "mutable",
            "name": "ThankYouCID",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 291,
            "src": "776:25:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 26,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "776:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 30,
            "mutability": "mutable",
            "name": "Donations",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 291,
            "src": "825:28:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_donation_$39_storage_$dyn_storage",
              "typeString": "struct Donations.donation[]"
            },
            "typeName": {
              "baseType": {
                "contractScope": null,
                "id": 28,
                "name": "donation",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 39,
                "src": "825:8:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_donation_$39_storage_ptr",
                  "typeString": "struct Donations.donation"
                }
              },
              "id": 29,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "825:10:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_donation_$39_storage_$dyn_storage_ptr",
                "typeString": "struct Donations.donation[]"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 34,
            "mutability": "mutable",
            "name": "Map",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 291,
            "src": "879:39:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 33,
              "keyType": {
                "id": 31,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "887:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "879:27:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 32,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "898:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "canonicalName": "Donations.donation",
            "id": 39,
            "members": [
              {
                "constant": false,
                "id": 36,
                "mutability": "mutable",
                "name": "donationAmount",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 39,
                "src": "970:22:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 35,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "970:7:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 38,
                "mutability": "mutable",
                "name": "donateur",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 39,
                "src": "1003:16:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 37,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "1003:7:0",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "donation",
            "nodeType": "StructDefinition",
            "scope": 291,
            "src": "943:84:0",
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 47,
            "name": "Confirmation",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 46,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 41,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 47,
                  "src": "1069:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 40,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1069:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 43,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 47,
                  "src": "1083:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 42,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1083:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 45,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 47,
                  "src": "1095:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 44,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1095:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1068:42:0"
            },
            "src": "1050:61:0"
          },
          {
            "body": {
              "id": 57,
              "nodeType": "Block",
              "src": "1173:48:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 53,
                        "name": "OWNER_ROLE",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18,
                        "src": "1195:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 54,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 49,
                        "src": "1207:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 52,
                      "name": "_setupRole",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13386,
                      "src": "1184:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address)"
                      }
                    },
                    "id": 55,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1184:29:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 56,
                  "nodeType": "ExpressionStatement",
                  "src": "1184:29:0"
                }
              ]
            },
            "documentation": null,
            "id": 58,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 50,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 49,
                  "mutability": "mutable",
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 58,
                  "src": "1151:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 48,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1151:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1150:15:0"
            },
            "returnParameters": {
              "id": 51,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1173:0:0"
            },
            "scope": 291,
            "src": "1139:82:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 113,
              "nodeType": "Block",
              "src": "1336:318:0",
              "statements": [
                {
                  "assignments": [
                    63
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 63,
                      "mutability": "mutable",
                      "name": "temp",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 113,
                      "src": "1347:20:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_donation_$39_memory_ptr",
                        "typeString": "struct Donations.donation"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 62,
                        "name": "donation",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 39,
                        "src": "1347:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_donation_$39_storage_ptr",
                          "typeString": "struct Donations.donation"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 64,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1347:20:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 70,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 65,
                        "name": "temp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63,
                        "src": "1378:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_donation_$39_memory_ptr",
                          "typeString": "struct Donations.donation memory"
                        }
                      },
                      "id": 67,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "donationAmount",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 36,
                      "src": "1378:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 68,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "1400:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 69,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1400:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1378:31:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 71,
                  "nodeType": "ExpressionStatement",
                  "src": "1378:31:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 77,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 72,
                        "name": "temp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63,
                        "src": "1420:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_donation_$39_memory_ptr",
                          "typeString": "struct Donations.donation memory"
                        }
                      },
                      "id": 74,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "donateur",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 38,
                      "src": "1420:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 75,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "1436:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 76,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1436:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "1420:26:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 78,
                  "nodeType": "ExpressionStatement",
                  "src": "1420:26:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 84,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 79,
                      "name": "totalDonated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21,
                      "src": "1457:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 83,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 80,
                        "name": "totalDonated",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21,
                        "src": "1472:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "+",
                      "rightExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 81,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "1487:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 82,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1487:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "1472:24:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1457:39:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 85,
                  "nodeType": "ExpressionStatement",
                  "src": "1457:39:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 89,
                        "name": "temp",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 63,
                        "src": "1524:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_donation_$39_memory_ptr",
                          "typeString": "struct Donations.donation memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_donation_$39_memory_ptr",
                          "typeString": "struct Donations.donation memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 86,
                        "name": "Donations",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30,
                        "src": "1509:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_donation_$39_storage_$dyn_storage",
                          "typeString": "struct Donations.donation storage ref[] storage ref"
                        }
                      },
                      "id": 88,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1509:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_donation_$39_storage_$returns$__$",
                        "typeString": "function (struct Donations.donation storage ref)"
                      }
                    },
                    "id": 90,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1509:20:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 91,
                  "nodeType": "ExpressionStatement",
                  "src": "1509:20:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 100,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 92,
                        "name": "Map",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34,
                        "src": "1540:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 95,
                      "indexExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 93,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "1544:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 94,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1544:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1540:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 99,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 96,
                          "name": "Donations",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 30,
                          "src": "1558:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_donation_$39_storage_$dyn_storage",
                            "typeString": "struct Donations.donation storage ref[] storage ref"
                          }
                        },
                        "id": 97,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "length",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1558:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "31",
                        "id": 98,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1577:1:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "1558:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1540:38:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 101,
                  "nodeType": "ExpressionStatement",
                  "src": "1540:38:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 103,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "1609:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 104,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1609:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 107,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "1629:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Donations_$291",
                              "typeString": "contract Donations"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_Donations_$291",
                              "typeString": "contract Donations"
                            }
                          ],
                          "id": 106,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1621:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 105,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "1621:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": null,
                              "typeString": null
                            }
                          }
                        },
                        "id": 108,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1621:13:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 109,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "1636:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 110,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "value",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1636:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 102,
                      "name": "Confirmation",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 47,
                      "src": "1596:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 111,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1596:50:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 112,
                  "nodeType": "EmitStatement",
                  "src": "1591:55:0"
                }
              ]
            },
            "documentation": {
              "id": 59,
              "nodeType": "StructuredDocumentation",
              "src": "1229:68:0",
              "text": "@notice saves the donation data and adds the eth to the contract"
            },
            "functionSelector": "ed88c68e",
            "id": 114,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "donate",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 60,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1318:2:0"
            },
            "returnParameters": {
              "id": 61,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1336:0:0"
            },
            "scope": 291,
            "src": "1303:351:0",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 126,
              "nodeType": "Block",
              "src": "1816:47:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 122,
                          "name": "this",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -28,
                          "src": "1842:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_Donations_$291",
                            "typeString": "contract Donations"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_Donations_$291",
                            "typeString": "contract Donations"
                          }
                        ],
                        "id": 121,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "1834:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": {
                          "id": 120,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "1834:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": null,
                            "typeString": null
                          }
                        }
                      },
                      "id": 123,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1834:13:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 124,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "balance",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "1834:21:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 119,
                  "id": 125,
                  "nodeType": "Return",
                  "src": "1827:28:0"
                }
              ]
            },
            "documentation": {
              "id": 115,
              "nodeType": "StructuredDocumentation",
              "src": "1662:82:0",
              "text": "@notice getter for total in contract\n @return total amount in contract"
            },
            "functionSelector": "ef91313f",
            "id": 127,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getTotalInContract",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 116,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1777:2:0"
            },
            "returnParameters": {
              "id": 119,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 118,
                  "mutability": "mutable",
                  "name": "total",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 127,
                  "src": "1801:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 117,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1801:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1800:15:0"
            },
            "scope": 291,
            "src": "1750:113:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 135,
              "nodeType": "Block",
              "src": "2055:38:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 133,
                    "name": "totalDonated",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 21,
                    "src": "2073:12:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 132,
                  "id": 134,
                  "nodeType": "Return",
                  "src": "2066:19:0"
                }
              ]
            },
            "documentation": {
              "id": 128,
              "nodeType": "StructuredDocumentation",
              "src": "1871:115:0",
              "text": "@notice getter for totalamount ever donated\n @return total amount donated since release of the contract"
            },
            "functionSelector": "d56e3068",
            "id": 136,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getTotalDonated",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 129,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2016:2:0"
            },
            "returnParameters": {
              "id": 132,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 131,
                  "mutability": "mutable",
                  "name": "total",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 136,
                  "src": "2040:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 130,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2040:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2039:15:0"
            },
            "scope": 291,
            "src": "1992:101:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 145,
              "nodeType": "Block",
              "src": "2289:35:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 143,
                    "name": "Donations",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 30,
                    "src": "2307:9:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_donation_$39_storage_$dyn_storage",
                      "typeString": "struct Donations.donation storage ref[] storage ref"
                    }
                  },
                  "functionReturnParameters": 142,
                  "id": 144,
                  "nodeType": "Return",
                  "src": "2300:16:0"
                }
              ]
            },
            "documentation": {
              "id": 137,
              "nodeType": "StructuredDocumentation",
              "src": "2101:115:0",
              "text": "@notice getter for array of donations\n @return array of donations with contains the addressen & amounts"
            },
            "functionSelector": "0959a176",
            "id": 146,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "GetAllDonations",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 138,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2246:2:0"
            },
            "returnParameters": {
              "id": 142,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 141,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 146,
                  "src": "2270:17:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_donation_$39_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct Donations.donation[]"
                  },
                  "typeName": {
                    "baseType": {
                      "contractScope": null,
                      "id": 139,
                      "name": "donation",
                      "nodeType": "UserDefinedTypeName",
                      "referencedDeclaration": 39,
                      "src": "2270:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_donation_$39_storage_ptr",
                        "typeString": "struct Donations.donation"
                      }
                    },
                    "id": 140,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "2270:10:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_donation_$39_storage_$dyn_storage_ptr",
                      "typeString": "struct Donations.donation[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2269:19:0"
            },
            "scope": 291,
            "src": "2222:102:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 188,
              "nodeType": "Block",
              "src": "2566:335:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 156,
                            "name": "OWNER_ROLE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18,
                            "src": "2593:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 157,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "2605:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 158,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2605:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          ],
                          "id": 155,
                          "name": "hasRole",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13249,
                          "src": "2585:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_bytes32_$_t_address_$returns$_t_bool_$",
                            "typeString": "function (bytes32,address) view returns (bool)"
                          }
                        },
                        "id": 159,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2585:31:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "43616c6c6572206973206e6f7420746865206f776e6572",
                        "id": 160,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2618:25:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_15ed5034391ed5ef65b8bb8dbcb08f9b6c4034ebcf89f76344a17e1651e92b33",
                          "typeString": "literal_string \"Caller is not the owner\""
                        },
                        "value": "Caller is not the owner"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_15ed5034391ed5ef65b8bb8dbcb08f9b6c4034ebcf89f76344a17e1651e92b33",
                          "typeString": "literal_string \"Caller is not the owner\""
                        }
                      ],
                      "id": 154,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "2577:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 161,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2577:67:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 162,
                  "nodeType": "ExpressionStatement",
                  "src": "2577:67:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 170,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 164,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 151,
                          "src": "2663:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 167,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -28,
                                "src": "2681:4:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_Donations_$291",
                                  "typeString": "contract Donations"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_Donations_$291",
                                  "typeString": "contract Donations"
                                }
                              ],
                              "id": 166,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "2673:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 165,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "2673:7:0",
                                "typeDescriptions": {
                                  "typeIdentifier": null,
                                  "typeString": null
                                }
                              }
                            },
                            "id": 168,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2673:13:0",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "id": 169,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "balance",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2673:21:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2663:31:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "416d6f756e74206c6172676572207468616e2062616c616e6365",
                        "id": 171,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2696:28:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_4656657eb257a75dd0bcfb261a1b6faf4bb18e9a4ea3743ab7955d8be50d090f",
                          "typeString": "literal_string \"Amount larger than balance\""
                        },
                        "value": "Amount larger than balance"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_4656657eb257a75dd0bcfb261a1b6faf4bb18e9a4ea3743ab7955d8be50d090f",
                          "typeString": "literal_string \"Amount larger than balance\""
                        }
                      ],
                      "id": 163,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "2655:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 172,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2655:70:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 173,
                  "nodeType": "ExpressionStatement",
                  "src": "2655:70:0"
                },
                {
                  "assignments": [
                    175,
                    null
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 175,
                      "mutability": "mutable",
                      "name": "success",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 188,
                      "src": "2751:12:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 174,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "2751:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    null
                  ],
                  "id": 182,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 180,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2836:2:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                            "typeString": "literal_string \"\""
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "id": 176,
                          "name": "receiver",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 149,
                          "src": "2807:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "id": 177,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "call",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2807:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                          "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                        }
                      },
                      "id": 179,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "names": [
                        "value"
                      ],
                      "nodeType": "FunctionCallOptions",
                      "options": [
                        {
                          "argumentTypes": null,
                          "id": 178,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 151,
                          "src": "2828:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "src": "2807:28:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value",
                        "typeString": "function (bytes memory) payable returns (bool,bytes memory)"
                      }
                    },
                    "id": 181,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2807:32:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                      "typeString": "tuple(bool,bytes memory)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2736:103:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 184,
                        "name": "success",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 175,
                        "src": "2858:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "50617920776173206e6f74207375636365737366756c2e",
                        "id": 185,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2867:25:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c7b79432a4b78502aa1f2503999db66c4bf5a1246c253da21687aee3442a9e9b",
                          "typeString": "literal_string \"Pay was not successful.\""
                        },
                        "value": "Pay was not successful."
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c7b79432a4b78502aa1f2503999db66c4bf5a1246c253da21687aee3442a9e9b",
                          "typeString": "literal_string \"Pay was not successful.\""
                        }
                      ],
                      "id": 183,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "2850:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 186,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2850:43:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 187,
                  "nodeType": "ExpressionStatement",
                  "src": "2850:43:0"
                }
              ]
            },
            "documentation": {
              "id": 147,
              "nodeType": "StructuredDocumentation",
              "src": "2332:130:0",
              "text": "@notice sends the eth within the contract to an goed doel\n @param receiver of \"good doel\" and the amount of eth in wei"
            },
            "functionSelector": "be87acd0",
            "id": 189,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "sendTotalAmountToGoedDoel",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 152,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 149,
                  "mutability": "mutable",
                  "name": "receiver",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 189,
                  "src": "2503:24:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  },
                  "typeName": {
                    "id": 148,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2503:15:0",
                    "stateMutability": "payable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 151,
                  "mutability": "mutable",
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 189,
                  "src": "2529:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 150,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2529:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2502:42:0"
            },
            "returnParameters": {
              "id": 153,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2566:0:0"
            },
            "scope": 291,
            "src": "2468:433:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 208,
              "nodeType": "Block",
              "src": "3050:114:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 197,
                            "name": "OWNER_ROLE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18,
                            "src": "3077:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 198,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "3089:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 199,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "3089:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          ],
                          "id": 196,
                          "name": "hasRole",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13249,
                          "src": "3069:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_bytes32_$_t_address_$returns$_t_bool_$",
                            "typeString": "function (bytes32,address) view returns (bool)"
                          }
                        },
                        "id": 200,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3069:31:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "43616c6c6572206973206e6f7420746865206f776e6572",
                        "id": 201,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3102:25:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_15ed5034391ed5ef65b8bb8dbcb08f9b6c4034ebcf89f76344a17e1651e92b33",
                          "typeString": "literal_string \"Caller is not the owner\""
                        },
                        "value": "Caller is not the owner"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_15ed5034391ed5ef65b8bb8dbcb08f9b6c4034ebcf89f76344a17e1651e92b33",
                          "typeString": "literal_string \"Caller is not the owner\""
                        }
                      ],
                      "id": 195,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "3061:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 202,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3061:67:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 203,
                  "nodeType": "ExpressionStatement",
                  "src": "3061:67:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 206,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 204,
                      "name": "ThankYouCID",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27,
                      "src": "3139:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 205,
                      "name": "CID",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 192,
                      "src": "3153:3:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "3139:17:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 207,
                  "nodeType": "ExpressionStatement",
                  "src": "3139:17:0"
                }
              ]
            },
            "documentation": {
              "id": 190,
              "nodeType": "StructuredDocumentation",
              "src": "2909:84:0",
              "text": "@notice Saves the CID on the Chain\n @param CID the IPFS cid of the photo"
            },
            "functionSelector": "f8c1e2cd",
            "id": 209,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "saveThankYouCID",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 193,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 192,
                  "mutability": "mutable",
                  "name": "CID",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 209,
                  "src": "3024:17:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 191,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3024:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3023:19:0"
            },
            "returnParameters": {
              "id": 194,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3050:0:0"
            },
            "scope": 291,
            "src": "2999:165:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 217,
              "nodeType": "Block",
              "src": "3329:37:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 215,
                    "name": "ThankYouCID",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 27,
                    "src": "3347:11:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 214,
                  "id": 216,
                  "nodeType": "Return",
                  "src": "3340:18:0"
                }
              ]
            },
            "documentation": {
              "id": 210,
              "nodeType": "StructuredDocumentation",
              "src": "3172:43:0",
              "text": "@notice getter for the cid of the photo"
            },
            "functionSelector": "fd938812",
            "id": 218,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getThankYouPhotoCID",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 211,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3249:2:0"
            },
            "returnParameters": {
              "id": 214,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 213,
                  "mutability": "mutable",
                  "name": "photoCID",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 218,
                  "src": "3300:22:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 212,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3300:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3299:24:0"
            },
            "scope": 291,
            "src": "3221:145:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 243,
              "nodeType": "Block",
              "src": "3475:261:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 226,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 222,
                      "name": "priceOfUrl",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23,
                      "src": "3486:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "55524c",
                          "id": 224,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3517:5:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_96388ed71ebb5d970d8c40d08f33931fc80bd2768fd60f12b78e085d12441b0e",
                            "typeString": "literal_string \"URL\""
                          },
                          "value": "URL"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_stringliteral_96388ed71ebb5d970d8c40d08f33931fc80bd2768fd60f12b78e085d12441b0e",
                            "typeString": "literal_string \"URL\""
                          }
                        ],
                        "id": 223,
                        "name": "provable_getPrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          1414,
                          1432
                        ],
                        "referencedDeclaration": 1414,
                        "src": "3499:17:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$returns$_t_uint256_$",
                          "typeString": "function (string memory) returns (uint256)"
                        }
                      },
                      "id": 225,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3499:24:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3486:37:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 227,
                  "nodeType": "ExpressionStatement",
                  "src": "3486:37:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 235,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 231,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -28,
                                "src": "3550:4:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_Donations_$291",
                                  "typeString": "contract Donations"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_Donations_$291",
                                  "typeString": "contract Donations"
                                }
                              ],
                              "id": 230,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "3542:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 229,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "3542:7:0",
                                "typeDescriptions": {
                                  "typeIdentifier": null,
                                  "typeString": null
                                }
                              }
                            },
                            "id": 232,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3542:13:0",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "id": 233,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "balance",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3542:21:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 234,
                          "name": "priceOfUrl",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 23,
                          "src": "3567:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "3542:35:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 228,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "3534:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 236,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3534:44:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 237,
                  "nodeType": "ExpressionStatement",
                  "src": "3534:44:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "55524c",
                        "id": 239,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3618:5:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_96388ed71ebb5d970d8c40d08f33931fc80bd2768fd60f12b78e085d12441b0e",
                          "typeString": "literal_string \"URL\""
                        },
                        "value": "URL"
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "6a736f6e2868747470733a2f2f6d696e2d6170692e63727970746f636f6d706172652e636f6d2f646174612f70726963653f6673796d3d455448267473796d733d4555522c555344292e455552",
                        "id": 240,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3638:79:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_44e2d59a5485b142921d3ba11c647b9b4de155f356a677ccb12e9ca4aa3dba27",
                          "typeString": "literal_string \"json(https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=EUR,USD).EUR\""
                        },
                        "value": "json(https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=EUR,USD).EUR"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_96388ed71ebb5d970d8c40d08f33931fc80bd2768fd60f12b78e085d12441b0e",
                          "typeString": "literal_string \"URL\""
                        },
                        {
                          "typeIdentifier": "t_stringliteral_44e2d59a5485b142921d3ba11c647b9b4de155f356a677ccb12e9ca4aa3dba27",
                          "typeString": "literal_string \"json(https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=EUR,USD).EUR\""
                        }
                      ],
                      "id": 238,
                      "name": "provable_query",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1472,
                        1514,
                        1560,
                        1604,
                        1647,
                        1692,
                        1741,
                        1788,
                        1835,
                        1884,
                        1937,
                        1988,
                        2026,
                        2067,
                        2111,
                        2152,
                        2198,
                        2247,
                        2299,
                        2348,
                        2402,
                        2459,
                        2519,
                        2576,
                        2638,
                        2703,
                        2771,
                        2836,
                        2906,
                        2979,
                        3055,
                        3128,
                        3175,
                        3224,
                        3277,
                        3328,
                        3366,
                        3407,
                        3451,
                        3492,
                        3538,
                        3587,
                        3639,
                        3688,
                        3742,
                        3799,
                        3859,
                        3916,
                        3978,
                        4043,
                        4111,
                        4176,
                        4246,
                        4319,
                        4395,
                        4468
                      ],
                      "referencedDeclaration": 1472,
                      "src": "3589:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (string memory,string memory) returns (bytes32)"
                      }
                    },
                    "id": 241,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3589:139:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 242,
                  "nodeType": "ExpressionStatement",
                  "src": "3589:139:0"
                }
              ]
            },
            "documentation": {
              "id": 219,
              "nodeType": "StructuredDocumentation",
              "src": "3374:45:0",
              "text": "@notice gets the current ETH price in EUR"
            },
            "functionSelector": "a964b7bb",
            "id": 244,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "GetCurrentEthPriceInEUR",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 220,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3457:2:0"
            },
            "returnParameters": {
              "id": 221,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3475:0:0"
            },
            "scope": 291,
            "src": "3425:311:0",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "baseFunctions": [
              1371
            ],
            "body": {
              "id": 266,
              "nodeType": "Block",
              "src": "3874:100:0",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 257,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 253,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "3889:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 254,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "3889:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 255,
                        "name": "provable_cbAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4493,
                        "src": "3903:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$__$returns$_t_address_$",
                          "typeString": "function () returns (address)"
                        }
                      },
                      "id": 256,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3903:20:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "3889:34:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 261,
                  "nodeType": "IfStatement",
                  "src": "3885:48:0",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 258,
                        "name": "revert",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          -19,
                          -19
                        ],
                        "referencedDeclaration": -19,
                        "src": "3925:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 259,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3925:8:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 260,
                    "nodeType": "ExpressionStatement",
                    "src": "3925:8:0"
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 264,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 262,
                      "name": "EthPriceInEur",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 25,
                      "src": "3944:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 263,
                      "name": "result",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 249,
                      "src": "3960:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "3944:22:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 265,
                  "nodeType": "ExpressionStatement",
                  "src": "3944:22:0"
                }
              ]
            },
            "documentation": {
              "id": 245,
              "nodeType": "StructuredDocumentation",
              "src": "3744:57:0",
              "text": "@notice callback for function GetCurrentEthPriceInEUR"
            },
            "functionSelector": "27dc297e",
            "id": 267,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "__callback",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 251,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "3865:8:0"
            },
            "parameters": {
              "id": 250,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 247,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 267,
                  "src": "3827:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 246,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3827:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 249,
                  "mutability": "mutable",
                  "name": "result",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 267,
                  "src": "3836:20:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 248,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3836:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3826:31:0"
            },
            "returnParameters": {
              "id": 252,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3874:0:0"
            },
            "scope": 291,
            "src": "3807:167:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 289,
              "nodeType": "Block",
              "src": "4165:171:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 275,
                            "name": "OWNER_ROLE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 18,
                            "src": "4192:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 276,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "4204:3:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 277,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "4204:10:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          ],
                          "id": 274,
                          "name": "hasRole",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13249,
                          "src": "4184:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_bytes32_$_t_address_$returns$_t_bool_$",
                            "typeString": "function (bytes32,address) view returns (bool)"
                          }
                        },
                        "id": 278,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4184:31:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "43616c6c6572206973206e6f7420746865206f776e6572",
                        "id": 279,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4217:25:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_15ed5034391ed5ef65b8bb8dbcb08f9b6c4034ebcf89f76344a17e1651e92b33",
                          "typeString": "literal_string \"Caller is not the owner\""
                        },
                        "value": "Caller is not the owner"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_15ed5034391ed5ef65b8bb8dbcb08f9b6c4034ebcf89f76344a17e1651e92b33",
                          "typeString": "literal_string \"Caller is not the owner\""
                        }
                      ],
                      "id": 273,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4176:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 280,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4176:67:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 281,
                  "nodeType": "ExpressionStatement",
                  "src": "4176:67:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 283,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "4267:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 284,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4267:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      ],
                      "id": 282,
                      "name": "selfdestruct",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -21,
                      "src": "4254:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_selfdestruct_nonpayable$_t_address_payable_$returns$__$",
                        "typeString": "function (address payable)"
                      }
                    },
                    "id": 285,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4254:24:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 286,
                  "nodeType": "ExpressionStatement",
                  "src": "4254:24:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "436f6e74726163742064657374726f7965642073756363657366756c6c79",
                    "id": 287,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "4296:32:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_a1f2cee9053f27ad1ac653bb06281a1d1da5cf1339abeae35ee246788c7e3c3c",
                      "typeString": "literal_string \"Contract destroyed succesfully\""
                    },
                    "value": "Contract destroyed succesfully"
                  },
                  "functionReturnParameters": 272,
                  "id": 288,
                  "nodeType": "Return",
                  "src": "4289:39:0"
                }
              ]
            },
            "documentation": {
              "id": 268,
              "nodeType": "StructuredDocumentation",
              "src": "3982:119:0",
              "text": "@notice gives the owner the possibility to destroy the contract\n @return message that contract is destroyed"
            },
            "functionSelector": "f58fef8e",
            "id": 290,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "Destroy",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 269,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4123:2:0"
            },
            "returnParameters": {
              "id": 272,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 271,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 290,
                  "src": "4150:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 270,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4150:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4149:15:0"
            },
            "scope": 291,
            "src": "4107:229:0",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 292,
        "src": "458:3881:0"
      }
    ],
    "src": "0:4341:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.6.12+commit.27d51765.Emscripten.clang"
  },
  "networks": {
    "4": {
      "events": {
        "0xc18a96ff84cf8f593e2214dfbc9f897503a4a17ec0c894db5b7ed4ed6896cc9d": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "Confirmation",
          "type": "event"
        },
        "0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "previousAdminRole",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "newAdminRole",
              "type": "bytes32"
            }
          ],
          "name": "RoleAdminChanged",
          "type": "event"
        },
        "0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "RoleGranted",
          "type": "event"
        },
        "0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "bytes32",
              "name": "role",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            }
          ],
          "name": "RoleRevoked",
          "type": "event"
        }
      },
      "links": {},
      "address": "0x2D125aAE8fbf7ce7Af70f123Ab3a7D7ae01e3C00",
      "transactionHash": "0x16b3f144064c31ba5b27af3541743af7ed3d17c12bd965ea31187f005b5d5423"
    }
  },
  "schemaVersion": "3.3.2",
  "updatedAt": "2021-01-29T10:50:32.386Z",
  "networkType": "ethereum",
  "devdoc": {
    "author": "A. van Leeuwen",
    "kind": "dev",
    "methods": {
      "Destroy()": {
        "returns": {
          "_0": "message that contract is destroyed"
        }
      },
      "GetAllDonations()": {
        "returns": {
          "_0": "array of donations with contains the addressen & amounts"
        }
      },
      "getRoleAdmin(bytes32)": {
        "details": "Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role's admin, use {_setRoleAdmin}."
      },
      "getRoleMember(bytes32,uint256)": {
        "details": "Returns one of the accounts that have `role`. `index` must be a value between 0 and {getRoleMemberCount}, non-inclusive. Role bearers are not sorted in any particular way, and their ordering may change at any point. WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure you perform all queries on the same block. See the following https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296[forum post] for more information."
      },
      "getRoleMemberCount(bytes32)": {
        "details": "Returns the number of accounts that have `role`. Can be used together with {getRoleMember} to enumerate all bearers of a role."
      },
      "getTotalDonated()": {
        "returns": {
          "total": "amount donated since release of the contract"
        }
      },
      "getTotalInContract()": {
        "returns": {
          "total": "amount in contract"
        }
      },
      "grantRole(bytes32,address)": {
        "details": "Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``'s admin role."
      },
      "hasRole(bytes32,address)": {
        "details": "Returns `true` if `account` has been granted `role`."
      },
      "renounceRole(bytes32,address)": {
        "details": "Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`."
      },
      "revokeRole(bytes32,address)": {
        "details": "Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``'s admin role."
      },
      "saveThankYouCID(string)": {
        "params": {
          "CID": "the IPFS cid of the photo"
        }
      },
      "sendTotalAmountToGoedDoel(address,uint256)": {
        "params": {
          "receiver": "of \"good doel\" and the amount of eth in wei"
        }
      }
    },
    "title": "Contract that manages donations",
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {
      "Destroy()": {
        "notice": "gives the owner the possibility to destroy the contract"
      },
      "GetAllDonations()": {
        "notice": "getter for array of donations"
      },
      "GetCurrentEthPriceInEUR()": {
        "notice": "gets the current ETH price in EUR"
      },
      "__callback(bytes32,string)": {
        "notice": "callback for function GetCurrentEthPriceInEUR"
      },
      "donate()": {
        "notice": "saves the donation data and adds the eth to the contract"
      },
      "getThankYouPhotoCID()": {
        "notice": "getter for the cid of the photo"
      },
      "getTotalDonated()": {
        "notice": "getter for totalamount ever donated"
      },
      "getTotalInContract()": {
        "notice": "getter for total in contract"
      },
      "saveThankYouCID(string)": {
        "notice": "Saves the CID on the Chain"
      },
      "sendTotalAmountToGoedDoel(address,uint256)": {
        "notice": "sends the eth within the contract to an goed doel"
      }
    },
    "notice": "This contract may contain some unnecessary functions, given that it has been used as a playground to learn solidity",
    "version": 1
  }
}