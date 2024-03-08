const { ethers } = require("ethers");
const fs = require("fs")
const  prompt = require('prompt-sync')()

console.log("\n=============== RONIN CREATE WALLET =================\n")
const jumlahWallet = parseInt(prompt("Input mau berapa  wallet ? : "));

const dompet = [];

for (let i = 0; i < jumlahWallet; i++) {
  const wallet = ethers.Wallet.createRandom();
  dompet .push(wallet);
}

const outputFile = fs.openSync("wallets.txt", "w");

for (let i = 0; i < jumlahWallet; i++) {
  let output = `Dompet ${i + 1}\n`;
  output += `Private Key : ${dompet[i].privateKey}\n`;
  output += `Address     : ${dompet[i].address}\n`;
  output += `Pharse Key  : ${dompet[i].mnemonic.phrase}\n`;
  output += "---------------------------------------\n";

  fs.writeSync(outputFile, output);
}

fs.closeSync(outputFile);

console.log(`Berhasil disimpan di wallets.txt`)