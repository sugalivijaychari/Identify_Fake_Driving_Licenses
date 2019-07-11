var Miniproject = artifacts.require("./Miniproject.sol");

module.exports = function(deployer) {
  deployer.deploy(Miniproject,"D1",{gas:6721975});
};
