const Multicall = artifacts.require("Multicall");

module.exports = async function (deployer , network, accounts) {
  await deployer.deploy(Multicall);
};
