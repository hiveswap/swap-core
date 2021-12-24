const HiveFactory = artifacts.require("HiveFactory");

module.exports = async function (deployer , network, accounts) {
  const feeToSetter = accounts[0];
  const feeTo = "0x3FFF0952eBC2F7296618189D4aF97c1F7f5a7f43";
  await deployer.deploy(HiveFactory, feeToSetter);
  const factory = await HiveFactory.deployed();
  await factory.setFeeTo(feeTo);
};
