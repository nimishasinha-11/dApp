
# dApp Backend with Ethereum Smart Contract

This project is a decentralized application backend (dApp) that allows users to store and retrieve a message on Ethereum/Polygon/Arbitrum Testnets.

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- Infura account with a Project ID
- Ethereum wallet with testnet ETH

## Setting Up the Local Development Environment

1. **Clone the repository**:
   git clone https://github.com/yourusername/dapp-backend.git
   cd dapp-backend

2. **Install dependencies**:
   npm install

3. **Set up environment variables**:
   Create a `.env` file in the root directory and add the following:
   INFURA_PROJECT_ID=your_infura_project_id
   PRIVATE_KEY=your_private_key
   CONTRACT_ADDRESS=deployed_contract_address

## Deploying the Smart Contract

1. **Install Truffle** (or use Remix):
   npm install -g truffle

2. **Create a Truffle project** (if not using Remix):
   mkdir truffle-project
   cd truffle-project
   truffle init

3. **Compile and deploy the contract**:
   - Update the `truffle-config.js` with the Infura details.
   - Create a migration script in the `migrations` directory.
   - Run the deployment:
   truffle compile
   truffle migrate --network goerli

4. **Update `.env` file** with the deployed contract address.

## Running the Node.js Server

1. **Start the server**:
   node src/index.js

2. The server will run on `http://localhost:3000`.

## Testing the Endpoints

1. **GET /api/message**:
   - Method: GET
   - URL: `http://localhost:3000/api/message`
   - Response:
     {
       "message": "your_current_message"
     }

2. **POST /api/message**:
   - Method: POST
   - URL: `http://localhost:3000/api/message`
   - Body (JSON):
     {
       "message": "your_new_message"
     }
   - Response:
     {
       "message": "Message set successfully"
     }

### Using Curl

1. **GET /api/message**:
   curl -X GET http://localhost:3000/api/message

2. **POST /api/message**:
   curl -X POST -H "Content-Type: application/json" -d '{"message": "your_new_message"}' http://localhost:3000/api/message

## Troubleshooting

- Ensure all environment variables are correctly set.
- Check the Ethereum testnet (e.g., Goerli) for sufficient ETH.
- Verify the smart contract address is correct.
- Ensure the Infura project ID is valid and correctly configured.
