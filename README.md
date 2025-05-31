# SendETH DApp

## 🚀 Overview
SendETH DApp is a decentralized application (DApp) built using **ethers.js** that allows users to:
- Connect to an Ethereum wallet (e.g., MetaMask)
- View account balance
- Send ETH to another wallet
- Interact with a **voting smart contract** deployed on the **Sepolia Testnet**



## 🔧 Setup & Installation
### **1️⃣ Install Dependencies**
Make sure you have **Node.js** installed, then run:
```bash

npm install ethers
Connect to MetaMask
Install MetaMask if you don’t have it.
Switch to the Sepolia Test Network.
Get Sepolia ETH from a faucet (e.g., Alchemy Faucet).
Run the DApp
Either open index.html in a browser or start a local server:
npx live-server

Here’s a README.md file for your SendETH DApp project. It explains how to set up, use, and understand its architecture.
# SendETH DApp

## 🚀 Overview
SendETH DApp is a decentralized application (DApp) built using **ethers.js** that allows users to:
- Connect to an Ethereum wallet (e.g., MetaMask)
- View account balance
- Send ETH to another wallet
- Interact with a **voting smart contract** deployed on the **Sepolia Testnet**

## 🏗 Project Structure


SendETH-DApp/ │── index.html  # UI │── styles.css  # Styling │── app.js  # Wallet & transaction logic │── voting.js  # Voting contract interaction │── README.md  # Documentation │── package.json  # Dependencies

## 🔧 Setup & Installation
### **1️⃣ Install Dependencies**
Make sure you have **Node.js** installed, then run:
```bash
npm install ethers


Connect to MetaMask
- Install MetaMask if you don’t have it.
- Switch to the Sepolia Test Network.
- Get Sepolia ETH from a faucet (e.g., Alchemy Faucet).

Run the DApp
Either open index.html in a browser or start a local server:
npx live-server


⚡ Usage
Connect Wallet
Click the Connect Wallet button in the UI to link MetaMask.
Check Balance
Click Get Balance to fetch ETH balance.
Send ETH
- Enter the recipient’s wallet address.
- Enter the amount (in ETH).
- Click Send ETH.

Vote on Smart Contract
- Click Vote for Proposal 1 or Vote for Proposal 2.
- Your vote will be recorded on the Sepolia Test Network.

🛠 Tech Stack
- Frontend: HTML, CSS, JavaScript
- Blockchain Interaction: ethers.js
- Smart Contract Deployment: Sepolia Ethereum Network


