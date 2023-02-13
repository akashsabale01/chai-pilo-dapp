// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract Chai {
    struct Memo {
        string name;
        string message;
        uint timeStamp;
        address from;
    }

    // push(i.e. store) all memo in memos array & then access it
    Memo[] memos; // array of structure

    // Address of account to which all eth will go i.e. receiver here we are fixing it i.e. only we are receiver here
    address payable owner;

    // payable means we are transfering eth to this address

    constructor() {
        owner = payable(msg.sender);
    }

    function buyChai(
        string memory _name,
        string memory _message
    ) public payable {
        require(msg.value > 0, "Please pay amount greater than 0 ether");
        owner.transfer(msg.value);
        memos.push(Memo(_name, _message, block.timestamp, msg.sender));
    }

    function getMemos() public view returns (Memo[] memory) {
        return memos;
    }
}
