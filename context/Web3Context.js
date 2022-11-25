import { useEffect, useState, createContext } from 'react';
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../constants';
import Web3 from 'web3';

export const Web3Context = createContext();

const Web3Provider = ({ children }) => {

  const [walletAddress, setWalletAddress] = useState();

  let provider = typeof window !== "undefined" && window.ethereum;

  // Get Meta Mask account
  const connectMeta = async () => {
    try {
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

  // Fetch contract
  const getContract = () => {
    const web3 = new Web3(provider);
    return new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS)
  }



  // ---- ADMIN METHODS ---- //

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
    return allFunds
  }

  // Admin registration = selected wallet addr should be same as the addr from which contract is deployed
  const RegisterAdmin = async (data) => {
    const contract = getContract();
    const response
      = await contract.methods
        .adminRegister(
          data.addr,
          data.password,
          data.confirmPassword,
          data.name
        ).send({ from: walletAddress })

    return response
  }

  // Admin login
  const loginAdmin = async (data) => {
    const contract = getContract();
    const response
      = await contract.methods
        .adminLogin(
          data.name,
          data.password
        ).send({ from: walletAddress })

    return response
  }

  // Admin info
  const getAdminInfo = async (addr) => {
    const contract = getContract();

    const response
      = await contract.methods
        .admin(addr)
        .call()

    return response
  }


  //  ----- GENERAL METHODS ----- //





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

  // User info
  const getUserInfo = async (addr) => {
    const contract = getContract();

    const response
      = await contract.methods
        .user(addr)
        .call()

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

  // Create funding
  const createFunding = async (data) => {
    const contract = getContract();
    const response
      = await contract.methods
        .createCrowdFunding(
          data.fundName,
          data.targetAmount,
          data.minContribution,
          data.deadline,
          data.rcpAddr
        ).send({ from: walletAddress })

    return response;
  }

  // ---------------------- xxxxxx -------------------- //

  useEffect(() => {
    connectMeta()
  }, [])

  return (
    <Web3Context.Provider
      value={{
        walletAddress,
        getAllFundsList,
        RegisterAdmin,
        loginAdmin,
        registerUser,
        loginUser,
        userLogout,
        getUserInfo,
        getAdminInfo,
        createFunding
      }}
    >
      {children}
    </Web3Context.Provider>
  )
}

export default Web3Provider