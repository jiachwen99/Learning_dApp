pragma solidity >=0.8.2;

contract JxContract {
    string public message;
    
    event UpdatedMessages(string oldStr, string newStr);

    constructor(string memory initMessage) {
        message = initMessage;
    }

    function update(string memory newMessage) public {
        string memory oldMessage = message;
        message = newMessage;
        emit UpdatedMessages(oldMessage, newMessage);
    }
}