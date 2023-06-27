async function main() {
    const JxContract = await ethers.getContractFactory("JxContract");
 
    // Start deployment, returning a promise that resolves to a contract object
    const jxDeploy = await JxContract.deploy("Feel New Smart Contract");
    console.log("Contract deployed to address:", jxDeploy.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });