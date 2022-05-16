require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/mNEqZOAXSbxEGeEIsvXpwn7prJxx0QdW',
      accounts: ['0ffc589ae45530a3e2fcb49a87e64e91dc51c361156da96f4780447817bf7ec3']
    }
  }
}
