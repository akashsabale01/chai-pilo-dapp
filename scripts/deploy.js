const hre = require("hardhat");

async function getBalances(address) {
  const balanceBigInt = await hre.ethers.provider.getBalance(address);
  return hre.ethers.utils.formatEther(balanceBigInt);
}

async function consoleBalances(addresses) {
  let counter = 0;
  for (const address of addresses) {
    console.log(`Address ${counter++} balance: `, await getBalances(address));
  }
}

async function consoleMemos(memos) {
  for (const memo of memos) {
    const timestamp = memo.timeStamp; // accessing memo sturcture via . operator
    const name = memo.name;
    const from = memo.from;
    const message = memo.message;

    console.log(
      `At ${timestamp}, name ${name}, address ${from}, message ${message}`
    );
  }
}

async function main() {
  const [owner, from1, from2, from3] = await hre.ethers.getSigners();
  const chai = await hre.ethers.getContractFactory("Chai");
  const contract = await chai.deploy();

  await contract.deployed();
  console.log("Address of Contract: ", contract.address);

  const addresses = [
    owner.address,
    from1.address,
    from2.address,
    from3.address,
  ];
  console.log("Before Buying chai: ");
  await consoleBalances(addresses);

  const amount = { value: hre.ethers.utils.parseEther("1") };
  await contract.connect(from1).buyChai("from1", "Very nice chai", amount); // amount value will be stored in msg in Chai.sol
  await contract.connect(from2).buyChai("from2", "Very nice course", amount);
  await contract.connect(from3).buyChai("from3", "Very nice service", amount);

  console.log("After Buying chai: ");
  await consoleBalances(addresses);

  const memos = await contract.getMemos();
  consoleMemos(memos);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
