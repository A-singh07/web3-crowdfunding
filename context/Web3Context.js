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

    const totalFundsCount = await contract.methods
      .noOfFunds()
      .call()

    for (let i = 0; i < totalFundsCount; i++) {
      const fund
        = await contract.methods
          .crowdFundingTypes(i)
          .call()

      // Adding fundId (important to fetch details later)
      const temp = {
        ...fund,
        fundId: i
      }
      allFunds = [...allFunds, temp]
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

  // Admin logout
  const adminLogout = async () => {
    const contract = getContract();
    const response
      = await contract.methods
        .adminLogout()
        .send({ from: walletAddress })

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

  // Approve, reject or request edit for a fund
  const fundStatusAuth = async (data) => {
    const contract = getContract();

    const response
      = await contract.methods
        .crowdFundingAuth_Accepted(
          data.fundId,
          data.message,
          data.status
        )
        .send({ from: walletAddress })

    return response;
  }

  // Transfer Amount
  const transferAmount = async () => {

  }


  //  ----- GENERAL METHODS ----- //

  // Get list of approved funds
  const getApprovedFunds = async () => {
    let funds = [];
    await getAllFundsList().then(res => {
      funds = res.filter(item => item.Admin_status === "Approved")
    })

    return funds;
  }

  // Get details of a fund
  const getFundDetails = async (id) => {
    const contract = getContract();
    const fundData
      = await contract.methods
        .crowdFundingTypes(id)
        .call()

    const res = {
      ...fundData,
      fundId: Number(id)
    }
    return res;
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
          data.target,
          data.minContribution,
          data.deadline,
          data.rcpAddr
        ).send({ from: walletAddress })

    return response;
  }

  // Edit funding
  const editFunding = async (data) => {
    const contract = getContract();
    const response
      = await contract.methods
        .edit_crowdfunding(
          data.fundId,
          data.fundName,
          data.target,
          data.minContribution,
          data.deadline,
          data.rcpAddr
        ).send({ from: walletAddress })

    return response
  }

  // User fundraiser history
  const fundraiserHistory = async (addr) => {
    let funds;
    await getAllFundsList().then(res => {
      funds = res.filter(fund => fund.receipent.toLowerCase() === addr.toLowerCase())
    })
    return funds;
  }

  // Donate
  const donate = async (id, value) => {
    const contract = getContract();
    const response
      = await contract.methods
        .donate(id)
        .send({ from: walletAddress, value: value })

    return response;
  }

  // Vote to refund
  const voteToRefund = async (id) => {
    const contract = getContract();
    const response
      = await contract.methods
        .DoNotDonate(id)
        .send({ from: walletAddress })

    return response;
  }

  // Get refund amount
  const getRefundAmount = async () => {

  }

  // ---------------------- xxxxxx -------------------- //

  useEffect(() => {
    connectMeta();
    provider.on("accountsChanged", () => {
      connectMeta();
    })
  }, [])

  return (
    <Web3Context.Provider
      value={{
        walletAddress,
        getAllFundsList,
        getApprovedFunds,
        RegisterAdmin,
        loginAdmin,
        adminLogout,
        fundStatusAuth,
        transferAmount,
        registerUser,
        loginUser,
        userLogout,
        getUserInfo,
        getAdminInfo,
        createFunding,
        editFunding,
        fundraiserHistory,
        getFundDetails,
        donate,
        voteToRefund,
        getRefundAmount
      }}
    >
      {children}
    </Web3Context.Provider>
  )
}

export default Web3Provider