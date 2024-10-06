import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ethers } from "ethers";
const BlockInfo = () => {
  const { block } = useParams();
  const [totalTransactions, setTotalTransactions] = useState("");
  const [gasUsed, setGasUsed] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const [blockHash, setBlockHash] = useState("");
  const [parentHash, setParentHash] = useState("");
  const [minerAddress, setMinerAddress] = useState("");
  const [gasLimit, setGasLimit] = useState("");
  const [extraData, setExtraData] = useState("");
  const [baseFeePerGas, setBaseFeePerGas] = useState("");
  console.log("Block", block);
  useEffect(() => {
    const INFURA_API_KEY = "056b83f7d8c14333a6984248784f71b5";
    const provider = new ethers.providers.JsonRpcProvider(
      `https://mainnet.infura.io/v3/${INFURA_API_KEY}`
    );

    const getData = async () => {
      try {
        // Fetch block with transactions
        const blockData = await provider.getBlockWithTransactions(
          Number(block)
        );
        console.log(blockData);

        setDifficulty(blockData._difficulty._hex);
        console.log(blockData);
        // Set total number of transactions
        setTotalTransactions(blockData.transactions.length);
        setGasUsed(ethers.utils.formatEther(blockData.gasUsed._hex, "eth"));
        setTimestamp(blockData.timestamp);
        setBlockHash(blockData.hash);
        setParentHash(blockData.parentHash);
        setMinerAddress(blockData.miner);
        setGasLimit(ethers.utils.formatEther(blockData.gasLimit._hex, "eth"));
        setExtraData(blockData.extraData);
        setBaseFeePerGas(
          ethers.utils.formatEther(blockData.baseFeePerGas._hex, "eth")
        );
      } catch (error) {
        console.error("Error fetching block data:", error);
      }
    };

    getData();
  }, [block]);
  return (
    <>
      <div className="w-full p-16 mx-auto md:text-xl sm:text-lg text-sm  text-white ">
        <div className="w-full">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold ">
            Block Overview (#{block})
          </h1>
          <div className="flex flex-col p-4 bg-black mt-4 rounded-md ">
            <div className="grid md:grid-cols-2 justify-between text-xl mt-2">
              <p className="font-semibold">Block Height :</p>
              <p className="mt-1 text-lg">{block}</p>
            </div>

            <div className="grid md:grid-cols-2 justify-between text-xl mt-3">
              <p className="font-semibold">Status :</p>
              <p className="mt-1 text-lg">Unfinalized</p>
            </div>

            <div className="grid md:grid-cols-2 justify-between text-xl mt-3">
              <p className="font-semibold">Timestamp :</p>
              <p className="mt-1 text-lg">{timestamp}</p>
            </div>

            <div className="grid md:grid-cols-2 justify-between text-xl mt-3">
              <p className="font-semibold">Block Hash:</p>
              <p className="mt-1 text-lg">{blockHash.substring(0, 30)}...</p>
            </div>

            <div className="grid md:grid-cols-2 justify-between text-xl mt-3">
              <p className="font-semibold">Transactions :</p>
              <p className="mt-1 text-lg">
                {totalTransactions} transactions and 133 contract internal
                transactions in this block
              </p>
            </div>

            <div className="grid md:grid-cols-2 justify-between mt-3">
              <p className="font-semibold text-xl ">Parent Hash</p>
              <p className="mt-1 text-lg">{parentHash.substring(0, 30)}...</p>
            </div>

            <div className="grid md:grid-cols-2 justify-between text-xl mt-3">
              <p className="font-semibold">Miner Address :</p>
              <p className="mt-1 text-lg">{minerAddress.substring(0, 30)}...</p>
            </div>

            {/* <div className="grid md:grid-cols-2 justify-between text-xl mt-3">
              <p className="font-semibold"> Block Reward :</p>
              <p className="mt-1 text-lg">
                0.016156085296026911 ETH (0 + 0.041858422752843896 -
                0.025702337456816985)
              </p>
            </div> */}

            <div className="grid md:grid-cols-2 justify-between text-xl mt-3">
              <p className="font-semibold">Total Difficulty :</p>
              <p className="mt-1 text-lg">{difficulty}</p>
            </div>

            {/* <div className="grid md:grid-cols-2 justify-between text-xl mt-3">
              <p className="font-semibold">Size :</p>
              <p className="mt-1 text-lg">33,443 bytes</p>
            </div> */}

            <div className="grid md:grid-cols-2 justify-between text-xl mt-3">
              <p className="font-semibold">Gas Used :</p>
              <p className="mt-1 text-lg">{gasUsed}</p>
            </div>

            <div className="grid md:grid-cols-2 justify-between text-xl mt-3">
              <p className="font-semibold">Gas Limit :</p>
              <p className="mt-1 text-lg">{gasLimit}</p>
            </div>

            <div className="grid md:grid-cols-2 justify-between text-xl mt-3">
              <p className="font-semibold">Base Fee Per Gas :</p>
              <p className="mt-1 text-lg">{baseFeePerGas} ETH</p>
            </div>

            {/* <div className="grid md:grid-cols-2 justify-between text-xl mt-3">
              <p className="font-semibold">Burnt Fees :</p>
              <p className="mt-1 text-lg">0.025702337456816985 ETH</p>
            </div> */}

            <div className="grid md:grid-cols-2 justify-between text-xl mt-3">
              <p className="font-semibold">Extra Data :</p>
              <p className="mt-1 text-lg">{extraData.substring(0, 30)}...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockInfo;
