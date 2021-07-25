require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install infant fox turn fan rate mad slow imitate private frame ghost'; 
let testAccounts = [
"0xfd5d4f4f5ab5fc850a4fb5f2576267383e0bf354152c4079f91a02562e7ce75d",
"0x00dc78fd0aaee442ba32b16aa21ab415015b1879b728f0aa3d3a5cea5bf0c5d3",
"0x1cd3b166089c55797c91400d0090ff530ab62ee26d9e2534ebd8e4e349b9c8ca",
"0x46599db7b76ff4d9b355f8ea89081b60c3bf67678a3396d61ed625426a1829ac",
"0x89108b48e6a4d1b0392fdf88ac772cb5b6f665044d9f785d0958fe31f555fdfb",
"0xfc220b566f7f9cf71bec784b21b7f10d378f631220231dc6d2a16ff4333c604e",
"0xa845c6195f63c36f2d25300c9b236a6642642863be602e114e481e83d4351ddc",
"0x4f53a818115e95af887243a33bbc325b2915d838cdf490eba5cd0c65ae0bf8ad",
"0x1b55879c8b98ea32600e296aded57ca099c1d279c8cb92f03c9b1c9c29afa138",
"0x47b6622f469782f8a959ab695bf8197ba27374a4ec638a16b70aa67b2ee2d946"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

