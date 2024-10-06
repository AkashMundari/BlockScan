import { useEffect, useState } from "react";
import { TbBulb } from "react-icons/tb";
import { useParams } from "react-router-dom";
import { ethers } from "ethers";
const TransactionDetailsPage = () => {
  const { transaction } = useParams();
  const [transactionHash, setTransactionHash] = useState();
  const [blockHash, setBlockHash] = useState();
  const [blockNumber, setBlockNumber] = useState();
  const [chainId, setChainId] = useState();
  const [confirmations, setConfirmations] = useState();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [r, setR] = useState();
  const [s, setS] = useState();
  const [nounce, setNounce] = useState();
  const [value, setValue] = useState();

  // const [blockNumber, setBlockNumber] = useState("");
  console.log("Hello");

  useEffect(() => {
    if (!transaction) {
      console.log("Transaction hash is missing from the URL.");
      return;
    }

    const INFURA_API_KEY = "056b83f7d8c14333a6984248784f71b5";
    const provider = new ethers.providers.JsonRpcProvider(
      `https://mainnet.infura.io/v3/${INFURA_API_KEY}`
    );
    console.log(transaction);
    const getData = async () => {
      try {
        const transactionDetails = await provider.getTransaction(transaction);

        // Log the entire block details (optional)
        console.log("Transaction", transactionDetails);
        setTransactionHash(transactionDetails.hash);
        setBlockHash(transactionDetails.blockHash);
        setBlockNumber(transactionDetails.blockNumber);
        setChainId(transactionDetails.chainId);
        setConfirmations(transactionDetails.confirmations);
        setNounce(transactionDetails.nonce);
        setFrom(transactionDetails.from);
        setTo(transactionDetails.to);
        setR(transactionDetails.r);
        setS(transactionDetails.s);
        setValue(
          ethers.utils.formatEther(transactionDetails.value._hex, "eth")
        );
      } catch (error) {
        console.error("Error fetching block data:", error);
      }
    };
    getData();
  }, [transaction]);
  return (
    <>
      <div className="w-full p-16 mx-auto md:text-xl sm:text-lg text-sm  text-white ">
        <div className="w-full">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold ">
            Transaction Details :
          </h1>
          <div className="flex flex-col p-4 bg-black mt-4 rounded-md ">
            <div className="grid md:grid-cols-2 justify-between text-xl mt-2">
              <p className="font-semibold">Transaction Hash :</p>
              <p className="mt-1 text-lg">
                {transactionHash.substring(0, 35)}...
              </p>
            </div>

            <div className="grid md:grid-cols-2 justify-between text-xl mt-3">
              <p className="font-semibold">Status :</p>
              <p className="mt-1 text-lg">Unfinalized</p>
            </div>

            <div className="grid md:grid-cols-2 justify-between text-xl mt-3">
              <p className="font-semibold">Block :</p>
              <p className="mt-1 text-lg">{blockNumber}</p>
            </div>

            <div className="grid md:grid-cols-2 justify-between text-xl mt-3">
              <p className="font-semibold">Block Hash :</p>
              <p className="mt-1 text-lg">{blockHash.substring(0, 35)}...</p>
            </div>

            <div className="grid md:grid-cols-2 justify-between text-xl mt-3 border-b border-b-white pb-3">
              <p className="font-semibold">Chain ID :</p>
              <p className="mt-1 text-lg">{chainId}</p>
            </div>

            <div className="grid md:grid-cols-2 justify-between text-xl mt-3">
              <p className="font-semibold">Confirmations :</p>
              <p className="mt-1 text-lg">{confirmations}</p>
            </div>

            <div className="grid md:grid-cols-2 justify-between text-xl mt-3">
              <p className="font-semibold">Nounce :</p>
              <p className="mt-1 text-lg">{nounce}</p>
            </div>

            <div className="grid md:grid-cols-2 justify-between text-xl mt-3 border-b border-b-white-100 pb-3">
              <p className="font-semibold">Transaction Action :</p>
              <p className="mt-1 text-lg">
                Transfer 0.016464611323316321 ETH ($43.54) to
              </p>
            </div>

            <div className="grid md:grid-cols-2 justify-between mt-3">
              <p className="font-semibold text-xl ">From :</p>
              <p className="mt-1 text-lg">{from}</p>
            </div>

            <div className="grid md:grid-cols-2 justify-between text-xl mt-3 border-b border-b-white pb-3">
              <p className="font-semibold">To :</p>
              <p className="mt-1 text-lg">{to}</p>
            </div>

            <div className="grid md:grid-cols-2 justify-between text-xl mt-3">
              <p className="font-semibold">Value :</p>
              <p className="mt-1 text-lg">{value} ETH</p>
            </div>

            <div className="grid md:grid-cols-2 justify-between text-xl mt-3">
              <p className="font-semibold">Transaction Fee :</p>
              <p className="mt-1 text-lg">0.000022538734398459 ETH</p>
            </div>

            <div className="grid md:grid-cols-2 justify-between text-xl mt-3">
              <p className="font-semibold">Gas Price :</p>
              <p className="mt-1 text-lg">1.019344869 Gwei</p>
            </div>

            <div className="grid md:grid-cols-2 justify-between text-xl mt-3">
              <p className="font-semibold">r :</p>
              <p className="mt-1 text-lg">{r.substring(0, 35)}...</p>
            </div>

            <div className="grid md:grid-cols-2 justify-between text-xl mt-3">
              <p className="font-semibold">s :</p>
              <p className="mt-1 text-lg">{s.substring(0, 35)}...</p>
            </div>
          </div>
          <div className="mt-6 flex justify-center gap-4">
            <span>
              <TbBulb size={25} />
            </span>
            <span>
              {" "}
              A transaction is a cryptographically signed instruction that
              changes the blockchain state. Block explorers track the details of
              all transactions in the network.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionDetailsPage;
