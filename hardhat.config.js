require("@nomiclabs/hardhat-waffle");

require("dotenv").config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      // This value will be replaced on runtime
      url: process.env.STAGING_QUICKNODE_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
  }
};
// Deploying contracts with account:  0x9bc744e1195d2A0F5812F74DF29aB7A54d61b182
// Account balance:  199887822420105182
//WavePortal address:  0xE657EEcbf04653A0134B502f7318A19116E8f94D