import { useEffect, useState, createContext } from 'react';
import { CONTRACT_ABI, CONTRACT_ADDRESS, CONTRACT_ABI_TEST, CONTRACT_ADDRESS_TEST } from '../constants';
import Web3 from 'web3';

export const Web3Context = createContext();

const Web3Provider = ({ children }) => {

  const [walletAddress, setWalletAddress] = useState();

  let provider = typeof window !== "undefined" && window.ethereum;

  // Get Meta Mask account
  const connectMeta = async () => {
    try {
      // This can be removed for non-signed transactions. (Call())
      if (!provider) return alert("Please install MetaMask");

      const account = await provider.request({
        method: "eth_requestAccounts",
      }).then(res => {
        setWalletAddress(res[0])
        console.log(res[0])
      })

    } catch (err) {
      console.log(err);
    }
  }

  const getContract = () => {
    const web3 = new Web3(provider);
    return new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS)
  }

  // ---- Admin ---- //

  // Get list of all funds
  const getAllFundsList = async () => {
    const contract = getContract();
    let allFunds = [];

    // ToDo: Check if admin is logged in or not.

    const totalFundsCount = await contract.methods
      .noOfFunds()
      .call()

    for (let i = 0; i < totalFundsCount; i++) {
      const fund
        = await contract.methods
          .crowdFundingTypes(i)
          .call()

      allFunds = [...allFunds, fund]
    }
    // console.log("FUNDS: ", allFunds)
    return allFunds
  }


  //  ----- User ----- //

  // User registeration
  const registerUser = async (data) => {
    const contract = getContract();

    const response
      = await contract.methods
        .register(
          data.addr,
          data.password,
          data.confirmPassword,
          data.name
        ).send({ from: walletAddress })

    return response;
  }

  // User login
  const loginUser = async (data) => {
    const contract = getContract();

    const response
      = await contract.methods
        .login(
          data.name,
          data.password
        ).send({ from: walletAddress })

    return response
  }

  // User logout
  const userLogout = async () => {
    const contract = getContract();

    const res
      = await contract.methods
        .logout()
        .send({ from: walletAddress })

    return res;
  }

  // User info
  const getUserInfo = async (addr) => {
    const contract = getContract();

    const response
      = await contract.methods
        .user(addr)
        .call()

    return response
  }


  return (
    <Web3Context.Provider
      value={{
        connectMeta,
        walletAddress,
        getAllFundsList,
        registerUser,
        loginUser,
        userLogout,
        getUserInfo
      }}
    >
      {children}
    </Web3Context.Provider>
  )
}

export default Web3Provider