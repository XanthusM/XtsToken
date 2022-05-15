import { task } from "hardhat/config";

const contractAddress = '0x6E9c5529cc6c4D0C0D1e16Cb11Ce5627a74C1fc7';

task("transfer", "Transfer amount of tokens to address")
    .addParam("address", "Address receiver")
    .addParam("amount", "Amount of tokens for transfering")
    .setAction(async (taskArgs, hre) => {
        const xtsToken = await hre.ethers.getContractAt("XtsToken", contractAddress);
        console.log(await xtsToken.transfer(taskArgs.address, taskArgs.amount));
    });

task("transferFrom", "Transfers tokens from account")
    .addParam("from", "Address of spender")
    .addParam("to", "Address of spender")
    .addParam("amount", "Amount of tokens for transfering")
    .setAction(async (taskArgs, hre) => {
        const xtsToken = await hre.ethers.getContractAt("XtsToken", contractAddress);
        console.log(await xtsToken.transferFrom(taskArgs.from, taskArgs.to, taskArgs.amount));
    });

task("approve", "Approve spend of tokens")
    .addParam("address", "Address of spender")
    .addParam("amount", "Amount of tokens")
    .setAction(async (taskArgs, hre) => {
        const xtsToken = await hre.ethers.getContractAt("XtsToken", contractAddress);
        console.log(await xtsToken.approve(taskArgs.address, taskArgs.amount));
    });
