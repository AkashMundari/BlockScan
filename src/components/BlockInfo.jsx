import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TbBulb } from "react-icons/tb";
import { ethers } from "ethers";
const BlockInfo = () => {
  const { block } = useParams();
  const [totalTransactions, setTotalTransactions] = useState("");
  const [gasUsed, setGasUsed] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const [blockHash, setBlockHash] = useState("");
  const [parentHash, setParentHash] = useState("");
  const [minerAddress, setMinerAddress] = useState("");
  const [gasLimit, setGasLimit] = useState("");
  const [extraData, setExtraData] = useState("");
  const [baseFeePerGas, setBaseFeePerGas] = useState("");
  const [burntFees, setBurntFees] = useState("");
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
        setBurntFees(baseFeePerGas * gasUsed);
      } catch (error) {
        console.error("Error fetching block data:", error);
      }
    };

    getData();
  }, [block, baseFeePerGas, gasUsed]);
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

            {/* <div className="grid md:grid-cols-2 justify-between text-xl mt-3">
              <p className="font-semibold">Status :</p>
              <p className="mt-1 text-lg">Unfinalized</p>
            </div> */}

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
              <p className="mt-1 text-lg">{totalTransactions} transactions</p>
            </div>

            <div className="grid md:grid-cols-2 justify-between mt-3">
              <p className="font-semibold text-xl ">Parent Hash</p>
              <p className="mt-1 text-lg">{parentHash.substring(0, 30)}...</p>
            </div>

            <div className="grid md:grid-cols-2 justify-between text-xl mt-3">
              <p className="font-semibold">Miner Address :</p>
              <p className="mt-1 text-lg">{minerAddress.substring(0, 30)}...</p>
            </div>

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

            <div className="grid md:grid-cols-2 justify-between text-xl mt-3">
              <p className="font-semibold">Burnt Fees :</p>
              <p className="mt-1 text-lg">{burntFees * 10 ** 18} ETH</p>
            </div>

            <div className="grid md:grid-cols-2 justify-between text-xl mt-3">
              <p className="font-semibold">Extra Data :</p>
              <p className="mt-1 text-lg">{extraData.substring(0, 30)}...</p>
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-4">
            <span>
              <TbBulb size={25} />
            </span>
            <span>
              Blocks are batches of transactions linked via cryptographic
              hashes. Any tampering of a block would invalidate all following
              blocks as all subsequent hashes would change.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockInfo;
