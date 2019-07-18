const Web3 = require('web3');

// use the given Provider, e.g in the browser with Metamask, or instantiate a new websocket provider
const web3 = new Web3(Web3.givenProvider || 'ws://localhost:8546', null, {});
// or
//const web3 = new Web3(Web3.givenProvider || new Web3.providers.WebsocketProvider('ws://localhost:8546'), null, {});

















// -------------------------------------------------------------------------------------------------------- //

/*
// Using the IPC provider in node.js
const net = require('net');
const PATH = '\\\\.\\pipe\\geth.ipc';
const web3 = new Web3(PATH, net, {});
// or
const web3 = new Web3(new Web3.providers.IpcProvider(PATH, net, {}));
web3.eth.sendTransaction({from: '0x123...', data: '0x432...'})
.once('transactionHash', function(hash){ ... })
.once('receipt', function(receipt){ ... })
.on('confirmation', function(confNumber, receipt){ ... })
.on('error', function(error){ ... })
.then(function(receipt){
    // will be fired once the receipt is mined
});
*/