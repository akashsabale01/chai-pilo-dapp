# Chai Dapp

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

## For Local Net

```bash
    npx hardhat node  // this is for running local blockchain
    npx hardhat run --network goerli scripts/Deploy.js

```

## For Goerli Test Net

```bash
    npm i dotenv
    npx hardhat run --network goerli scripts/finalDeploy.js

```

## Installation

1. Clone this repository to your local machine:

```bash
   git clone https://github.com/<your-repo>.git
```

2. install the necessary dependencies:

```bash
   npm install // for backend
   cd client
   npm install // for frontend
```

## Running the Dapp

1. Start a local Ethereum network using Hardhat:

```bash
   npx hardhat node
```

2. In a separate terminal window, compile and deploy the smart contract:

```bash
   npx hardhat compile
   npx hardhat migrate
```

3. for running frontend

```bash
   cd client
   npm run dev
```
