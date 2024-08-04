// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../images/logo.png"; // Adjust the path if necessary
// import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [userAccount, setUserAccount] = useState("");
  const API_ETHER_KEY = "8IFRGUXZKWGYDHNAM8HKTCW69DXMK6D2RJ";
  const getEtherPrice = async () => {
    try {
      const response = await fetch(
        `https://api.etherscan.io/api?module=stats&action=ethprice&apikey=${API_ETHER_KEY}`
      );
      const data = await response.json();
      const timestamp = Number(data.result.ethusd_timestamp);
      const date = new Date(timestamp);
      const formatedDate = `Updated At ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

      if (response.ok) {
        console.log(data.result.ethusd);
        console.log(formatedDate);
      } else {
        console.error("Error fetching Ether price:", data.message);
      }
    } catch (error) {
      console.error("Error fetching Ether price:", error);
    }
  };

  const getEtherSupply = async () => {
    try {
      const response = await fetch(
        `https://api.etherscan.io/api?module=stats&action=ethsupply&apikey=${API_ETHER_KEY}`
      );

      const data = await response.json();

      if (response.ok) {
        console.log(data.result);
      } else {
        console.error("Error fetching Ether price:", data.message);
      }
    } catch (error) {
      console.error("Error fetching Ether price:", error);
    }
  };

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

  const connectWallet = async () => {
    if (!window.ethereum) {
      console.log("Connect to MetaMask");
      return;
    }

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (accounts.length > 0) {
        console.log(accounts[0]);
        setUserAccount(accounts[0]);
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.error("Error checking account:", error);
    }
  };

  useEffect(() => {
    // getEtherPrice();
    //getEtherSupply();
    checkAccount();
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
                <div>
                  <FontAwesomeIcon icon={faCaretDown} />
                </div>
              </div>
            ) : (
              <button onClick={connectWallet}>Connect Wallet</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
