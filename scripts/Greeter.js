// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const { ethers } = require("hardhat");
const hre = require("hardhat");
require('dotenv').config()

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  [owner] = await ethers.getSigners()

  // We get the contract to deploy
  this.Greeter = await ethers.getContractFactory("Greeter");
  //this.Greeter = await this.Greeter.deploy("Hello, Hardhat!");
  //await this.Greeter.deployed();

  this.Greeter =  this.Greeter.attach(process.env.GREETER)
  //this.Greeter =  this.Greeter.connect(owner)

  console.log("Greeter deployed to:", await this.Greeter.greets());

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });