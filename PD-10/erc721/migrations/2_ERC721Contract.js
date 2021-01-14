var ERC721Contract = artifacts.require("ERC721Contract");

module.exports = async function (deployer) {
  await deployer.deploy(ERC721Contract);
  const ERC721Contr = await ERC721Contract.deployed();
  ERC721Contr.Mint('0x659d0091E761C2BCFA68A5AB42d76a823d885732', 'https://jsonkeeper.com/b/B5AY');
  ERC721Contr.Mint('0xEA9a7c7cD8d4Dc3acc6f0AaEc1506C8D6041a1c5', 'https://jsonkeeper.com/b/B5AY');
};
