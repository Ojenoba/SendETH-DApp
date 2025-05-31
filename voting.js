window.castVote = async function (proposalNumber) {
    try {
        if (![1, 2].includes(proposalNumber)) {
            alert("Invalid proposal number! Must be 1 or 2.");
            return;
        }

        if (!window.ethereum) {
            alert("MetaMask not found!");
            return;
        }

        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contractAddress = "0x35cd167FA931C6c5E07AbB2621846FC35D54baD6";
        const votingABI = ["function vote(uint proposal) external"];
        const contract = new ethers.Contract(contractAddress, votingABI, signer);

        // Execute vote
        const tx = await contract.vote(proposalNumber);
        await tx.wait();

        document.getElementById("status").innerText = "Voted successfully!";
    } catch (error) {
        console.error("Error during vote cast:", error);
        alert("Voting failed! See console for details.");
    }
};
