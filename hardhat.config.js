require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/** @type import('hardhat/config').HardhatUserConfig */
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "hardhat",
  paths: {
    artifacts: "./src/artifacts",
  },

  networks: {
   hardhat:{
      forking: {
        //url: process.env.GOERII_URL_AlCHEMY,
        url: "https://data-seed-prebsc-1-s1.binance.org:8545",
        allowUnlimitedContractSize: true,
        timeout:90000,
        //blockNumber:12325509
        blockNumber:7022764,        
        chainId:5,
        gas:9000000000000000
      }
      
    },

  ropsten: {
      url: process.env.ROPSTEN_URL,
      accounts: {
        mnemonic: process.env.MNEMONIC,
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 10,
        passphrase: "",
      },
      gas:5603244

    },

  bsctest: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: {
        mnemonic: process.env.MNEMONIC,
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 20,
        passphrase: "",
      },
    },

  roburna : {
      url: process.env.ROBURNA_URL || 'https://preseed-testnet-1.roburna.com/',
      //accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [process.env.PRIVATE_KEY0,process.env.PRIVATE_KEY1,process.env.PRIVATE_KEY2,process.env.PRIVATE_KEY3,process.env.PRIVATE_KEY4,process.env.PRIVATE_KEY5],
      accounts: {
        mnemonic: process.env.MNEMONIC,
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 20,
        passphrase: "",
      },
      gas:5603244,
      chainId:159
    },

  goerli: {
    url: process.env.GOERII_URL_AlCHEMY,
    accounts:{
      mnemonic: process.env.MNEMONIC,
      path: "m/44'/60'/0'/0",
      initialIndex: 0,
      count: 10,
      passphrase: "",
    }
  },

  },

  solidity: { 
    
    compilers: [

    {
      version: "0.8.4",
      settings: {},
    },

    {
      version: "0.8.9",
      settings: {},
    }
  ]

  }

};
