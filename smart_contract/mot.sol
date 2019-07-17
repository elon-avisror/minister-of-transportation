pragma solidity 0.5.8;

contract MinistryOfTransportation {
    
    // public
    // TODO: geters oand no 'publics' like:
    // function blah() public constant returns(Driver[]) {return drivers}
    mapping(address => uint32) public getID; // save address => id
    mapping(uint32 => address) public getAddress; // save id => address
    mapping(address => Policeman) public policemen; // view policemen
    mapping(uint => Driver) public drivers; // view drivers
    address owner; // only admin
    
    // TODO: private
    
    
    // TODO: add Person
    struct Policeman {
        uint32 id;
        string name;
        address certificate;
        bool onDuty;
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
    
    // functions that are only for owner (ADmin)
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }
    
    // functions that allowed to Admin or Policeman
    modifier onlyPolicemen() {
        require(msg.sender == getAddress[getID[msg.sender]]);
        _;
    }
    
    // fallback functions
    event AddPoliceman(uint32 _id, string _name, address _certificate, bool _onDuty);
    event AddDriver(uint32 _id, string _name, bool _isExpiry);
    event View();

    // Admin: add a new Policeman
    function addPoliceman(uint32 _id, address _certificate, string memory _name, bool _onDuty) public onlyOwner {
        policemen[_certificate] = Policeman(_id, _name, _certificate, _onDuty);
        getAddress[_id] = _certificate;
        getID[_certificate] = _id;
        emit AddPoliceman(_id, _name, _certificate, _onDuty);
    }
    
    // Admin, Policeman: add a new Driver
    function addDriver(uint32 _id, string memory _name, bool _isExpiry) public onlyOwner {
        drivers[_id] = Driver(_id, _name, _isExpiry);
        emit AddDriver(_id, _name, _isExpiry);
    }
    
    function viewDriversByPolicmen(uint32 _id) public onlyPolicemen {
        drivers[_id];
        emit View();
    }
    
    function viewDriversByOwner(uint32 _id) public onlyOwner {
        drivers[_id];
        emit View();
    }

}
/*
contract PoliceOfMOT {
    mapping(uint => Driver) public drivers; // view drivers
    address owner;
    struct Driver {
        uint32 id;
        string name;
        bool isExpiry;
    }
    constructor() public {
        owner = msg.sender;
    }
    modifier onlyPolice() {
        require(msg.sender == owner, "Sender not authorized, Only PoliceOfMOT can do that.");
        _;
    }
}

contract DirectorOfMOT is PoliceOfMOT {
    event Add(uint32 _id, string _name, bool _isExpiry);
    modifier onlyDirector() {
        require(msg.sender == owner, "Sender not authorized, Only DirectorOfMOT can do that.");
        _;
    }
    constructor() public {
        owner = msg.sender;
    }
    function addDriver(uint32 _id, string memory _name, bool _isExpiry) public onlyDirector {
        drivers[_id] = Driver(_id, _name, _isExpiry);
        emit Add(_id, _name, _isExpiry);
    }
}
*/


/*
pragma solidity 0.5.8;

contract MinistryOfTransportation {
    
    mapping(address => Policeman) public policemen; // view policemen
    mapping(uint => Driver) public drivers; // view drivers
    address owner; // only admin
    
    struct Policeman {
        uint32 id;
        string name;
        address certificate;
        bool onDuty;
    }
    
    struct Driver {
        uint32 id;
        string name;
        bool isExpiry;
    }
    
    constructor() public {
        owner = msg.sender;
    }
    
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }
    
    event AddPoliceman(uint32 _id, string _name, address _certificate, bool _onDuty);
    
    event AddDriver(uint32 _id, string _name, bool _isExpiry);

    
    function addPoliceman(uint32 _id, address _certificate, string memory _name, bool _onDuty) public onlyOwner {
        policemen[_certificate] = Policeman(_id, _name, _certificate, _onDuty);
        emit AddPoliceman(_id, _name, _certificate, _onDuty);
    }
    
    function addDriver(uint32 _id, string memory _name, bool _isExpiry) public onlyOwner {
        drivers[_id] = Driver(_id, _name, _isExpiry);
        emit AddDriver(_id, _name, _isExpiry);
    }
    

}
*/