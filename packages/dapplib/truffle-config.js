require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena fog sugar noodle ribbon remind hole hidden problem bridge gather'; 
let testAccounts = [
"0xbe156118c1879e7933e96cb180a6bb05329a122e830464bd617a568b455a4ace",
"0xce8e060048e10dece445ec4c11632fad96d027bcffbc5e46b65294df9310fe9f",
"0x80729bba5000685c971b35d6ae32166562fbaa0cd6dda642cca3e454060ce530",
"0x62844af2f7658cb293f5f3d511f7d6863f64ae9b66300f00888ca82dbe5899b0",
"0xa03179c0e0c85fde11891d2ec761e78a0fbd4d927e07b905515b246e0c86ae17",
"0x1b0c5982a948f18cd5512399dccaf84052f36c5cef00fc8bb157f90ce1544fe9",
"0x110d6123f1c872b5467948eecb1df366e815af965179dbf8bbfe29cfea7ae3e9",
"0xa642e0466601e0d6f00898302f2ab99a725e33a3af8d443e4dd8fc190b5f9c1a",
"0x1bc7538712f236c1a5777ce3f941b0033392387ee262a6ff0e8026fb07eb2cd7",
"0x6fb21983dd201c8665e734efb7043b90bb47ddc8d496c4d1a9d3e7d682967e9c"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
