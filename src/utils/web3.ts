import detectEthereumProvider from "@metamask/detect-provider";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export default async function ConnectToMetamaskWallet() {
  const provider = await detectEthereumProvider();

  if (provider) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      return accounts[0];
    } catch (error) {
      console.error(error);
      return null;
    }
  } else {
    console.error("Please install MetaMask!");
    return null;
  }
}
