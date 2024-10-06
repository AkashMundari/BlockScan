import Overview from "./Overview";
import ChainInfo from "./ChainInfo";
// import { ethers } from "ethers";
// import { useEffect, useState } from "react";

const NetworkInfo = () => {
  // const [EthPrice, setEthPrice] = useState(null);
  // let provider = new ethers.providers.JsonRpcProvider(
  //   "https://mainnet.infura.io/v3/056b83f7d8c14333a6984248784f71b5"
  // );

  return (
    <>
      <Overview />
      <ChainInfo />
    </>
  );
};

export default NetworkInfo;
