
window.connectWallet = async function () {
    try {
        if (!window.ethereum) {
            alert("MetaMask not found! Please install MetaMask.");
            return;
        }

        const provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        
        document.getElementById("account").innerText = `Connected: ${await signer.getAddress()}`;
    } catch (error) {
        console.error("Wallet connection failed:", error);
        alert("Failed to connect wallet. See console for details.");
    }
};

async function getBalance() {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const balance = await provider.getBalance(await signer.getAddress());
    document.getElementById("balance").innerText = `Balance: ${ethers.formatEther(balance)} ETH`;
}

async function sendETH() {
    try {
        const recipient = document.getElementById("recipient").value.trim();  // Ensure no extra spaces
        const amount = document.getElementById("amount").value.trim();  // Trim empty spaces

        if (!recipient || !ethers.isAddress(recipient)) {
            alert("Invalid recipient address!");
            return;
        }

        if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
            alert("Invalid ETH amount!");
            return;
        }

        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();

        const tx = await signer.sendTransaction({
            to: recipient,
            value: ethers.parseEther(amount)  // Converts the amount to ETH correctly
        });

        alert(`Transaction sent! Hash: ${tx.hash}`);
    } catch (error) {
        console.error("Transaction error:", error);
        alert("Failed to send ETH. Check console for details.");
    }
}