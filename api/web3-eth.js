const Web3 = require('web3');
const { Eth } = require('web3-eth');

// "Web3.givenProvider" will be set if in an Ethereum supported browser.
const eth = new Eth(Web3.givenProvider || 'ws://localhost:5500', null);
//const web3 = new Web3(Web3.givenProvider || 'ws://localhost:8546', null);
//console.log(web3.eth);
//console.log(web3.eth.getAccounts);
// web3.eth.getAccounts(console.log);
// or using the web3 umbrella package

