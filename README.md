# AirdropShipper

_This tool is an Airdrop simplification infrastructure for Initial Coin Offerings on the Polygon network, it could also be used for a range of other utility like Loyalty rewards and Crypto giveaway automatically handled by our smart contract and so much more._ 

## Problem Statement

_They would like to:_
1. A company wants to distribute its utility tokens to a bunch of addresses, which would be used to reward loyal customers. 
2. The addresses are so much, instead of writing a new smart contract, our tool could be used to simplify the process.
3. Allows an admin/owner to distribute a specified token amongst a batch of addresses as reward for being loyal customers.


## Solution

_I created two contracts one to distribute the minted token to the beneficiaries, while the other would be to exchange the currency for services amd other perks. The frontend was created to help admin distribute the token which is a form of rewarding loyal customers, the admin drags and drops an excel file containing the wallet addresses of the beneficiaries and the amount to be given to each of them in a double column format ie Address - First Column; Amount - Second column._

_I also looked at security aspect. We had to implement add and also remove admin feature. But note that only admin can add another._

_Finally I needed a way to keep track of the token and also usage/claim so we added the analytics part to the frontend._


### UI Design

![Frontend]()

__Check out the frontend design [Here](https://www.figma.com/file/DY7ZEUHLnt5tiVwwI1n08q/Atlantics?node-id=5501%3A2)__

### Frontend Link

_The project was finally deployed and the link to the live prototype is [Here](https://airdrop-ca6046.spheron.app/)_

### Smart Contract Address
My contracts were deployed to both the mumbai testnet and zk-EVM testnet respectively

zk-EVM address - https://explorer.public.zkevm-test.net/address/0x9ad674004D67395067A8e9B540bb674Dd8733597

mumbai deployment link - https://mumbai.polygonscan.com/tx/0xf9fe379a4cd0b3cfc41c15e99bfa046cc3ad1c8fe05afab0000613531a02e0a8


<!-- 
## Technologies
- React
- Css
- Solidity
- Mocha
- Chai -->

## How to install
- Clone the repo using
```bash
    git clone https://github.com/josidbobo/airdrop.git
```
- change directory into the project's folder.
```bash
    cd airdrop
```
- Change directory to the `atlantis-frontend` or `smart-contracts` folder depending on which you want to install
```bash
    cd {{name of folder}}
```
- Install the project using npm or yarn
```bash
    npm install
```

## How to Contribute
- Fork the repo
- Clone the forked repo using
```bash
    git clone {{link to repo}}
```
- change directory into the project's folder.
```bash
    cd airdrop
```
- Change directory to the `atlantis-frontend` or `smart-contracts` folder depending on which you want to install
```bash
    cd {{name of folder}}
```
- Make your contributions
- Push to the forked repo
- Make a pull request

## How to Test
While in the backend branch run `npm run test`


## Important Links

