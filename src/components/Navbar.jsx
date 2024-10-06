import { useEffect, useState } from "react";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { ethers } from "ethers";

const Navbar = () => {
  const [etherBalance, setEtherBalance] = useState(0);
  const [totalTransactions, setTotalTransactions] = useState(0);
  const [userAccount, setUserAccount] = useState("");
  const [info, setInfo] = useState(true);

  const checkAccount = async () => {
    if (!window.ethereum) {
      console.log("Connect to MetaMask");
      return;
    }

    try {
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length > 0) {
        console.log(accounts[0]);
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.error("Error checking account:", error);
    }
  };

  const getAccountDetails = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);

      try {
        // Request account access
        const accounts = await provider.send("eth_requestAccounts", []);
        const account = accounts[0];
        setUserAccount(account);

        // Get account balance
        const balanceWei = await provider.getBalance(account);
        const balanceEth = ethers.utils.formatEther(balanceWei);
        setEtherBalance(balanceEth);

        console.log("Account Address:", account);
        console.log("Balance:", balanceEth, "ETH");

        // Fetch transaction count
        const transactionCount = await provider.getTransactionCount(account);
        console.log("Total Transactions:", transactionCount);
        setTotalTransactions(transactionCount);
      } catch (error) {
        console.error("Error fetching account details:", error);
      }
    } else {
      console.error("MetaMask is not installed");
    }
  };

  const handleInfo = () => {
    setInfo(!info);
  };

  useEffect(() => {
    checkAccount();
    getAccountDetails();
  }, []);

  return (
    <>
      <div className="navbar">
        <div className="nav-container">
          <div className="nav-left">
            <h1>
              <img src={logo} alt="Logo" />
            </h1>
          </div>
          <div className="nav-center">BlockScan</div>
          <div className="nav-right">
            {userAccount ? (
              <div>
                {userAccount.substring(0, 10)}...
                <div onClick={handleInfo}>
                  <FontAwesomeIcon icon={faCaretDown} />
                </div>
              </div>
            ) : (
              <button onClick={getAccountDetails}>Connect Wallet</button>
            )}
          </div>
        </div>
      </div>

      <div className="userInfo">
        {!info ? (
          <div>
            {" "}
            <p>Account : {userAccount.substring(0, 12)}...</p>
            <p>Balance : {etherBalance}</p>
            <p>Transactions : {totalTransactions}</p>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default Navbar;
