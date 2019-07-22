/***
 * Get MetaMask private keys from accounts:
 * Director
 * Policeman#1
 * Policeman#2
 * Other#1
 * Other#2
 */
const privateKeys = [
    '114A250EB921A6AB159A3E14243A0A24670E3E89ECD14D15D95C0CFB85A7F9BE', /* Director */
    '39E9C2CACF4DC50D0C31C987039C3AE0D2F2D9A3B75D5197C54394254A6C5602', /* Policeman#1 */
    'BC50368E90B7200394964543635D2A342525C9D58E12D37F0733C0A0E9804F5E', /* Policeman#2 */
    'AF0E52C83726627B612C35E850156056D177B7C8A2A68FE5C748132A2911FAF4', /* Other#1 */
    '4B22E8CD6883D702A9F609B96E23CD3CDD33616F1551480A3C5D8DDA82D7E338'  /* Other#2 */
];

const contractAddress = '0x2ea7ef843438c264330364c706ce6c3288052b92';

const abi = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "_certificate",
                "type": "address"
            }
        ],
        "name": "viewPoliceman",
        "outputs": [
            {
                "name": "",
                "type": "uint32"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "bool"
            },
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_id",
                "type": "uint32"
            }
        ],
        "name": "viewDriver",
        "outputs": [
            {
                "name": "",
                "type": "uint32"
            },
            {
                "name": "",
                "type": "string"
            },
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_id",
                "type": "uint32"
            },
            {
                "name": "_isExpiry",
                "type": "bool"
            }
        ],
        "name": "updateDriverLicense",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_id",
                "type": "uint32"
            },
            {
                "name": "_name",
                "type": "string"
            },
            {
                "name": "_onDuty",
                "type": "bool"
            },
            {
                "name": "_certificate",
                "type": "address"
            }
        ],
        "name": "addPoliceman",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_id",
                "type": "uint32"
            },
            {
                "name": "_name",
                "type": "string"
            },
            {
                "name": "_isExpiry",
                "type": "bool"
            }
        ],
        "name": "addDriver",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "_id",
                "type": "uint32"
            },
            {
                "indexed": false,
                "name": "_name",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "_onDuty",
                "type": "bool"
            },
            {
                "indexed": false,
                "name": "_certificate",
                "type": "address"
            }
        ],
        "name": "AddPoliceman",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "_id",
                "type": "uint32"
            },
            {
                "indexed": false,
                "name": "_name",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "_isExpiry",
                "type": "bool"
            }
        ],
        "name": "AddDriver",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "_id",
                "type": "uint32"
            },
            {
                "indexed": false,
                "name": "_name",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "_onDuty",
                "type": "bool"
            },
            {
                "indexed": false,
                "name": "_certificate",
                "type": "address"
            }
        ],
        "name": "ViewPoliceman",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "_id",
                "type": "uint32"
            },
            {
                "indexed": false,
                "name": "_name",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "_isExpiry",
                "type": "bool"
            }
        ],
        "name": "ViewDriver",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "_id",
                "type": "uint32"
            },
            {
                "indexed": false,
                "name": "_name",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "_isExpiry",
                "type": "bool"
            }
        ],
        "name": "UpdateDriverLicense",
        "type": "event"
    }
];