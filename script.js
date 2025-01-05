// Connect Wallet
const connectWalletButton = document.getElementById("connectWallet");
const walletAddressDisplay = document.getElementById("walletAddress");

connectWalletButton.addEventListener("click", async () => {
  if (window.ethereum) {
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    walletAddressDisplay.textContent = `Connected: ${accounts[0]}`;
  } else {
    alert("MetaMask is not installed. Please install it to use this DEX.");
  }
});

// Swap Tokens
const swapButton = document.getElementById("swapButton");

swapButton.addEventListener("click", async () => {
  const tokenFrom = document.getElementById("tokenFrom").value;
  const tokenTo = document.getElementById("tokenTo").value;
  const amount = document.getElementById("amount").value;

  if (!tokenFrom || !tokenTo || !amount) {
    alert("Please fill in all fields!");
    return;
  }

  alert(`Swapping ${amount} of ${tokenFrom} to ${tokenTo}`);
  // Add blockchain interaction logic here (Web3.js or Solana.js)
});

// Approve Tokens
const approveButton = document.getElementById("approveButton");

approveButton.addEventListener("click", async () => {
  const approveToken = document.getElementById("approveToken").value;

  if (!approveToken) {
    alert("Please enter a token address!");
    return;
  }

  alert(`Approving token: ${approveToken}`);
  // Add token approval logic here
});
