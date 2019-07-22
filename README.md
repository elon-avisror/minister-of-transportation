# The new Minister of Transportation (MT)

## Guide-Line

1. read the documentations of solidity (with environment installation):

   - introduction to smart contracts.
   - installing the solidity compiler.
   - solidity by example.
   - as guidenes, use solidity in depth.

2. bulid solidity smart contract (use remix IDE to test it).

   - issueLicense:

     - input - person info (id, fullname).
     - output - success/failed to add new license to this person.
     - example - 305370801, Elon Avisror --> failed.

   - viewLicense:

     - input - person id.
     - output - license valid/not valid/not exsits.
     - example - 206331795 --> yes (31/9/2021).

   - disqualificationLicense:

     - input - person id and date (id, start date, end date).
     - output - success/failed to disqualification.
     - example - 123456789, 30/7/2019, 5/8/2020 --> success.

3. build a system that communicate with the smart contract (written by solidity).
   javascript language, using web3.js package.

4. run the whole app.

5. assign the project.

6. project presentation (implement the smart contract).

### Made by _Elon Avisror & Mahdi Asali_ \ ( ゜ o ゜)ノ

![GitHub Logo](src/logo.gif)
