
// Importing necessary functionalities from the Hardhat package.
import { ethers } from 'hardhat'

async function main() {
    // Retrieve the first signer, typically the default account in Hardhat, to use as the deployer.
    const [deployer] = await ethers.getSigners()
    console.log('Contract is deploying...')
    const instanceBridge = await ethers.getContractFactory('OFTWithFee');
    const BridgeContract = await instanceBridge.deploy("USD Coin", "USDC", 8, "0x6EDCE65403992e310A62460808c4b910D972f10f"); // base
    // Waiting for the contract deployment to be confirmed on the blockchain.
    await BridgeContract.waitForDeployment()

    // Logging the address of the deployed My404 contract.
    console.log(`Bridge contract is deployed. Token address: ${BridgeContract.target}`)
}

// This pattern allows the use of async/await throughout and ensures that errors are caught and handled properly.
main().catch(error => {
    console.error(error)
    process.exitCode = 1
})