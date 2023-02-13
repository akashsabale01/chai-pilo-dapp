import abi from "./contracts/Chai.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Buy from "./components/Buy";
import Memos from "./components/Memos";
import chai from "./assets/chai.png";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  const [currentAccount, setCurrentAccount] = useState("None");

  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0xd5430B42396bcc4b774BdB1b881f3264E2C6f81B";
      const contractABI = abi.abi;

      try {
        const { ethereum } = window;

        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });

          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });

          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );

          setCurrentAccount(account);
          setState({ provider, signer, contract });
        } else {
          alert("Please install metamask");
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);

  // console.log(state);
  // console.log(currentAccount);

  return (
    <div className="App" style={{ backgroundColor: "#EFEFEF", height: "100%" }}>
      <img
        src={chai}
        className="img-fluid"
        alt="chai image"
        style={{ width: "100%" }}
      />
      <p
        className="text-muted lead "
        style={{ marginTop: "10px", marginLeft: "5px", textAlign: "center" }}
      >
        <small>Connected Account - {currentAccount}</small>
      </p>
      <Buy state={state} />
      <Memos state={state} />
    </div>
  );
}

export default App;
