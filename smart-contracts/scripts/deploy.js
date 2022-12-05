async function main() {

    // const AtlantisToken = await ethers.getContractFactory("Atlantis");
    // const atlantisTokenContract = await AtlantisToken.deploy();

    // console.log(`Atlantis contract address => ${atlantisTokenContract.address}`);

    const AtlantisDistributor = await ethers.getContractFactory("AtlantisDistributor");
    const atlantisDistributor = await AtlantisDistributor.deploy()

    console.log(`Distributor contract address: ${atlantisDistributor.address}`)
}

main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error(err);
        process.exit(1)
    });