// Debugging mode
const DEBUG = true;

// Connect to the network ropsten test network
const provider = ethers.getDefaultProvider('ropsten');

// Get the MetaMask wallets
const directorWallet = new ethers.Wallet(privateKeys[0], provider);
const policeman1Wallet = new ethers.Wallet(privateKeys[1], provider);
const policeman2Wallet = new ethers.Wallet(privateKeys[2], provider);
const other1Wallet = new ethers.Wallet(privateKeys[3], provider);
const other2Wallet = new ethers.Wallet(privateKeys[4], provider);

if (DEBUG) {
  console.log('\x1b[36m%s\x1b[0m', 'META-MASK ACCOUNTS:')
  console.log('director address: ' + directorWallet.address);
  console.log('policeman1 address: ' + policeman1Wallet.address);
  console.log('policeman2 address: ' + policeman2Wallet.address);
  console.log('other1 address: ' + other1Wallet.address);
  console.log('other2 address: ' + other2Wallet.address + '\n');
}

// We connect to the Contract using a Provider, so we will only
// have read-only access to the Contract
let contract = new ethers.Contract(contractAddress, abi, provider);

if (DEBUG) {
  console.log('\x1b[36m%s\x1b[0m', 'DEPLOYED CONTRACT:')
  console.log('contract address: ' + contract.address);
}

let driverResult = ``;
let policemanResult = ``;

// Create a new instance of the Contract with a Signer, which allows
// update methods
const contractWithDirector = contract.connect(directorWallet);

// Emit listeners
contractWithDirector.on("ViewDriver", (id, name, isExpiry, event) => {

  console.log('\x1b[36m%s\x1b[0m', 'VIEW-DRIVER (DIRECTOR):');
  // Called when anyone changes the value
  console.log('id: ' + id);
  // 123456789

  console.log('name: ' + name);
  // Israel Israel

  console.log('isExpiry: ' + isExpiry);
  // true/false

  // See Event Emitter below for all properties on Event
  console.log('block number: ' + event.blockNumber + '\n');
  // 6032984

  driverResult += `<ul>
  <li>id: ${id}</li>
  <li>name: ${name}</li>
  <li>isExpiry: ${isExpiry}</li>
  <li>block number: ${event.blockNumber}</li>
  </ul>`;

  document.getElementById('viewDriverView').innerHTML = driverResult;
});

contractWithDirector.on("ViewPoliceman", (id, name, onDuty, certificate, event) => {

  console.log('\x1b[36m%s\x1b[0m', 'VIEW-POLICEMAN (DIRECTOR):');

  // Called when anyone changes the value
  console.log('id: ' + id);
  // 123456789

  console.log('name: ' + name);
  // Israel Israel

  console.log('onDuty: ' + onDuty);
  // true/false

  console.log('certificate: ' + certificate);
  // 39E9C2CACF4DC50D0C31C987039C3AE0D2F2D9A3B75D5197C54394254A6C5602

  // See Event Emitter below for all properties on Event
  console.log('block number: ' + event.blockNumber + '\n');
  // 6032984

  policemanResult += `<ul>
  <li>id: ${id}</li>
  <li>name: ${name}</li>
  <li>onDuty: ${onDuty}</li>
  <li>certificate: ${certificate}</li>
  <li>block number: ${event.blockNumber}</li>
  </ul>`;

  document.getElementById('viewPolicemanView').innerHTML = policemanResult;
});

//#1
async function viewDriver(input) {

  if (DEBUG)
    console.log('viewDriver input: ' + input);

  // Execute transaction viewDriver
  const tx = await contractWithDirector.viewDriver(input);

  if (DEBUG)
    console.log('tx hash: ' + tx.hash);

  // The operation is NOT complete yet; we must wait until it is mined
  await tx.wait();
}

//#2
async function viewPoliceman(input) {

  if (DEBUG)
    console.log('viewPoliceman input: ' + input);

  // Execute transaction viewPoliceman
  const tx = await contractWithDirector.viewPoliceman(input);

  if (DEBUG)
    console.log('tx hash: ' + tx.hash);

  // The operation is NOT complete yet; we must wait until it is mined
  await tx.wait();
}