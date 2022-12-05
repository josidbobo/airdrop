# AirdropShipper

_This tool is an Airdrop simplification infrastructure for Initial Coin Offerings on the Polygon network, it could also be used for a range of other utility like Loyalty rewards and Crypto giveaway automatically handled by our smart contract._ 

## Problem Statement

_They would like to:_
1. A company wants to distribute its utility tokens to a bunch of addresses, which would be used to reward loyal customers. 
2. The addresses are so much instead of writing a new smart contract, our tool could be used to simplify the process.
3. Allows an admin/owner to distribute a specified token amongst a batch of addresses as reward for being loyal customers.


## Solution

_We created two contracts one to distribute the minted token to the beneficiaries, while the other would be to exchange the currency for services amd other perks. The frontend was created to help admin distribute the token which is a form of rewarding loyal customers._

_We also looked at security aspect. We had to implement add and also remove admin feature. But note that only admin can add another._

_Finally we needed a way to keep track of the token and also usage/claim so we added the analytics part to the frontend._


### UI Design

![Atlantis](https://user-images.githubusercontent.com/19577206/162528321-94ec4f4e-b9f4-4814-bbcd-bbb4bac96607.JPG)

__Check out the frontend design [Here]()__

### Frontend Link

_The project was finally deployed and the link to the live prototype is [Here]()_

### Smart Contract Address


<!-- 
## Technologies
- React
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
- Change directory to the `frontend` or `smart-contracts` folder depending on which you want to install
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
    cd literate-octo-palm-tree
```
- Change directory to the `frontend` or `smart-contracts` folder depending on which you want to install
```bash
    cd {{name of folder}}
```
- Make your contributions
- Push to the forked repo
- Make a pull request

## How to Test
While in the backend branch run `npm run test`


## Important Links

