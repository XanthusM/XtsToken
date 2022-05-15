const hre = require("hardhat");

const main = async () => {
  const XtsToken = await hre.ethers.getContractFactory("XtsToken");
  const xtsToken = await XtsToken.deploy();
  await xtsToken.deployed();
  console.log("XtsToken deployed to:", xtsToken.address);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
