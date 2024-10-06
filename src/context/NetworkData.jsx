// import { createContext, useEffect, useState } from "react";
// import { ethers } from "ethers";

// export const DataContext = createContext();

// export const DataContextProvider = ({ children }) => {
//   const [valueETH, setValueETH] = useState("");
//   const [totalSupply, setTotalSupply] = useState("");
//   const [latestBlock, setLatestBlock] = useState("");
//   const [latestGasFee, setLatestGasFee] = useState("");
//   const [FiveBlockWithDetails, setFiveBlockWithDetails] = useState([]);

//   useEffect(() => {
//     const socket = new WebSocket(
//       "wss://stream.binance.com:9443/ws/ethusdt@trade"
//     );
//     socket.onmessage = function (event) {
//       setValueETH(JSON.parse(event.data).p);
//     };

//     const API_KEY = "8IFRGUXZKWGYDHNAM8HKTCW69DXMK6D2RJ";
//     const INFURA_API_KEY = "056b83f7d8c14333a6984248784f71b5";
//     const provider = new ethers.providers.JsonRpcProvider(
//       `https://mainnet.infura.io/v3/${INFURA_API_KEY}`
//     );

//     const getEthereumTotalSupply = async () => {
//       const url = `https://api.etherscan.io/api?module=stats&action=ethsupply&apikey=${API_KEY}`;

//       try {
//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         if (data.status === "1") {
//           const totalSupply = data.result / 10 ** 18;
//           console.log(`Total Ethereum Supply: ${totalSupply}`);
//           setTotalSupply(totalSupply);
//         } else {
//           console.error("Error fetching data:", data.message);
//         }
//       } catch (error) {
//         console.error("Error fetching total supply:", error);
//       }
//     };

//     const getData = async () => {
//       const currentBlock = await provider.getBlockNumber();
//       console.log(currentBlock);
//       setLatestBlock(currentBlock);

//       const gasPrice = await provider.getGasPrice();
//       const gasPriceInGwei = ethers.utils.formatUnits(gasPrice, "gwei");
//       setLatestGasFee(Math.floor(gasPriceInGwei));

//       const details = await provider.getBlock(currentBlock);
//       console.log(details);

//       const FiveBlockNumbers = [];

//       const prevFiveBlockNum = currentBlock - 5;
//       for (let i = currentBlock; i > prevFiveBlockNum; i--) {
//         FiveBlockNumbers.push(i);
//       }

//       console.log(FiveBlockNumbers);

//       FiveBlockNumbers.map(async (blockNum) => {
//         const blockDetail = await provider.getBlock(blockNum);
//         FiveBlockWithDetails.push(blockDetail);
//       });

//       console.log(FiveBlockWithDetails);
//     };

//     getEthereumTotalSupply();
//     getData();
//   }, []);

//   return (
//     <>
//       <DataContext.Provider
//         value={{
//           valueETH,
//           totalSupply,
//           latestBlock,
//           latestGasFee,
//           FiveBlockWithDetails,
//         }}
//       >
//         {children}
//       </DataContext.Provider>
//     </>
//   );
// };

import { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [valueETH, setValueETH] = useState("");
  const [totalSupply, setTotalSupply] = useState("");
  const [latestBlock, setLatestBlock] = useState("");
  const [latestGasFee, setLatestGasFee] = useState("");
  const [FiveBlockWithDetails, setFiveBlockWithDetails] = useState([]);

  useEffect(() => {
    const socket = new WebSocket(
      "wss://stream.binance.com:9443/ws/ethusdt@trade"
    );
    socket.onmessage = function (event) {
      setValueETH(JSON.parse(event.data).p);
    };

    const API_KEY = "8IFRGUXZKWGYDHNAM8HKTCW69DXMK6D2RJ";
    const INFURA_API_KEY = "056b83f7d8c14333a6984248784f71b5";
    const provider = new ethers.providers.JsonRpcProvider(
      `https://mainnet.infura.io/v3/${INFURA_API_KEY}`
    );

    const getEthereumTotalSupply = async () => {
      const url = `https://api.etherscan.io/api?module=stats&action=ethsupply&apikey=${API_KEY}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        if (data.status === "1") {
          const totalSupply = data.result / 10 ** 18;
          console.log(`Total Ethereum Supply: ${totalSupply}`);
          setTotalSupply(totalSupply);
        } else {
          console.error("Error fetching data:", data.message);
        }
      } catch (error) {
        console.error("Error fetching total supply:", error);
      }
    };

    const getData = async () => {
      const currentBlock = await provider.getBlockNumber();
      console.log(currentBlock);
      setLatestBlock(currentBlock);

      const gasPrice = await provider.getGasPrice();
      const gasPriceInGwei = ethers.utils.formatUnits(gasPrice, "gwei");
      setLatestGasFee(Math.floor(gasPriceInGwei));

      const FiveBlockNumbers = [];

      const prevFiveBlockNum = currentBlock - 10;
      for (let i = currentBlock; i > prevFiveBlockNum; i--) {
        FiveBlockNumbers.push(i);
      }

      console.log(FiveBlockNumbers);

      const blockDetails = await Promise.all(
        FiveBlockNumbers.map(async (blockNum) => {
          return provider.getBlock(blockNum);
        })
      );

      // Update state with the new block details
      setFiveBlockWithDetails(blockDetails);

      console.log(blockDetails);
    };

    getEthereumTotalSupply();
    getData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        valueETH,
        totalSupply,
        latestBlock,
        latestGasFee,
        FiveBlockWithDetails,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
