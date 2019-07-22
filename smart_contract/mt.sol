pragma solidity ^0.5.8;

contract MinistryofTransportation {
    // Owner: can save Policemen addresses
    mapping(address => address) private addresses;
    // Owner: can view policemen
    mapping(address => Policeman) private policemen;
    // Anyone: can view drivers
    mapping(uint32 => Driver) private drivers;
    address owner;
    // structs
    struct Policeman {
        uint32 id;
        string name;
        bool onDuty;
        address certificate;
    }
    struct Driver {
        uint32 id;
        string name;
        bool isExpiry;
    }
    // wallet deployer is the owner (Admin)
    constructor() public {
        owner = msg.sender;
    }
    // functions that are only for owner (Admin)
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can use this function");
        _;
    }
    // functions that allowed to Admin or Policeman
    modifier ownerOrPolicemen() {
        require(msg.sender == addresses[msg.sender] || msg.sender == owner, "Only owner or policeman can use this function");
        _;
    }
    // fallback functions: loggers
    event AddPoliceman(uint32 _id, string _name, bool _onDuty, address _certificate);
    event AddDriver(uint32 _id, string _name, bool _isExpiry);
    event ViewPoliceman(uint32 _id, string _name, bool _onDuty, address _certificate);
    event ViewDriver(uint32 _id, string _name, bool _isExpiry);
    event UpdateDriverLicense(uint32 _id, string _name, bool _isExpiry);
    // Owner: add a new Policeman
    function addPoliceman(uint32 _id, string memory _name, bool _onDuty, address _certificate) public onlyOwner {
        policemen[_certificate] = Policeman(_id, _name, _onDuty, _certificate);
        addresses[_certificate] = _certificate;
        emit AddPoliceman(_id, _name, _onDuty, _certificate);
    }
    // Owner: can add a new Drivers
    function addDriver(uint32 _id, string memory _name, bool _isExpiry) public onlyOwner {
        drivers[_id] = Driver(_id, _name, _isExpiry);
        emit AddDriver(_id, _name, _isExpiry);
    }
    // Owner or Policeman: can update the expiry of the licence
    function updateDriverLicense(uint32 _id, bool _isExpiry) public ownerOrPolicemen {
        drivers[_id].isExpiry = _isExpiry;
        emit UpdateDriverLicense(_id, drivers[_id].name, drivers[_id].isExpiry);
    }
    // Owner: can view policemen
    function viewPoliceman(address _certificate) public onlyOwner returns(uint32, string memory, bool, address)  {
        emit ViewPoliceman(policemen[_certificate].id, policemen[_certificate].name, policemen[_certificate].onDuty, _certificate);
        return (policemen[_certificate].id, policemen[_certificate].name, policemen[_certificate].onDuty, _certificate);
    }
    // Owner or Policeman: can view drivers
    function viewDriver(uint32 _id) public ownerOrPolicemen returns(uint32, string memory, bool) {
        emit ViewDriver(_id, drivers[_id].name, drivers[_id].isExpiry);
        return (_id, drivers[_id].name, drivers[_id].isExpiry);
    }
}