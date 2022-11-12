import { useEffect, useState } from 'react';
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../constants';
import Web3 from 'web3';

const Web3Component = () => {

  const [walletAddress, setWalletAddress] = useState();
  const [stateVariable, setStateVariable] = useState();

  let provider = typeof window !== "undefined" && window.ethereum;

  // Get Meta Mask account
  const connectMeta = async () => {
    try {
      if (!provider) return alert("Please install MetaMask");

      const accounts = await provider.request({
        method: "eth_requestAccounts",
      });

      if (accounts.length) {
        setWalletAddress(accounts[0]);
        console.log(accounts[0])
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Get the smart contract
  const getContract = () => {
    const web3 = new Web3(provider);
    return new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
  };

  // Reading data in smart contract
  const readData = () => {
    const contract = getContract();

    contract.methods
      .ListedFunds()
      .call()
      .then((res) => {
        console.log(res);
        // setStateVariable(res);
      })
      .catch((err) => console.log(err));
  }

  // Writing data
  const writeData = () => {
    const contract = getContract();

    contract.methods
      .createCrowdFunding("Fund name 123", 4000, 50)
      .send({ from: walletAddress })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    connectMeta();
  }, []);


  return (
    <>
      <div style={{ margin: '2rem' }}>
        <p>State Variable: {stateVariable}</p>
        <button onClick={readData} style={{ border: '1px solid black', padding: '1rem' }}>
          Read state
        </button>
        <br />
        <br />
        <p>Change state Variable:</p>
        <button onClick={writeData} style={{ border: '1px solid black', padding: '1rem' }}>
          Write state
        </button>
      </div>
    </>
  )
}

export default Web3Component