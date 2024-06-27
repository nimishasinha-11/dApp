const { ethers } = require("ethers");
require('dotenv').config();

const provider = new ethers.providers.InfuraProvider("goerli", process.env.INFURA_PROJECT_ID);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const contractAddress = process.env.CONTRACT_ADDRESS;
const contractABI = [
    "function getMessage() view returns (string memory)",
    "function setMessage(string memory newMessage)"
];

const contract = new ethers.Contract(contractAddress, contractABI, wallet);

async function getMessage() {
    return await contract.getMessage();
}

async function setMessage(newMessage) {
    const tx = await contract.setMessage(newMessage);
    await tx.wait();
}

module.exports = { getMessage, setMessage };
