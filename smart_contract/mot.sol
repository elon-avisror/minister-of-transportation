pragma solidity ^0.5.1;

contract MinisterOfTransportatoion  {
    mapping(uint => Driver) public drivers;
    address owner;
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    struct Driver {
        uint32 id;
        string name;
    }
    event Add(uint32 _id, string _name);
    constructor() public {
        owner = msg.sender;
    }
    function addDriver(uint32 _id, string memory _name) public onlyOwner {
        drivers[_id] = Driver(_id, _name);
        emit Add(_id, _name);
    }
}