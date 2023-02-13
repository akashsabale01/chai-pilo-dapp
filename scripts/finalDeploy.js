// This is Deploy script used when we deploy our smart contract on Goerli Test Net

const hre = require("hardhat");

async function main() {
  const chai = await hre.ethers.getContractFactory("Chai");
  const contract = await chai.deploy();

  await contract.deployed();
  console.log("Address of Contract: ", contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// Address of Contract deployed on Goerli test net:  0xd5430B42396bcc4b774BdB1b881f3264E2C6f81B
