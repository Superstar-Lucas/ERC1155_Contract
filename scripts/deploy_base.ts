
// Importing necessary functionalities from the Hardhat package.
import { ethers } from 'hardhat'

async function main() {
    // Retrieve the first signer, typically the default account in Hardhat, to use as the deployer.
    const [deployer] = await ethers.getSigners()
    console.log('Contract is deploying...')
    const instanceNFT = await ethers.getContractFactory('CustomNFT');
    const NFTContract = await instanceNFT.deploy(); // base
    // Waiting for the contract deployment to be confirmed on the blockchain.
    await NFTContract.waitForDeployment()

    // Logging the address of the deployed My404 contract.
    console.log(`NFT contract is deployed. Token address: ${NFTContract.target}`)
}

// This pattern allows the use of async/await throughout and ensures that errors are caught and handled properly.
main().catch(error => {
    console.error(error)
    process.exitCode = 1
})