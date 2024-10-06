import { useContext } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { DataContext } from "../context/NetworkData";
import { Link } from "react-router-dom";
const LatestTrans = () => {
  const { FiveBlockWithDetails, latestGasFee } = useContext(DataContext);
  const transactions = FiveBlockWithDetails[0]?.transactions || [];
  const topTenTransactions = transactions.slice(0, 10);

  return (
    <>
      <div className="bg-black rounded-md">
        <h1 className="text-xl font-bold mb-4 border-b-[1px] p-3">
          Latest Transactions
        </h1>

        {topTenTransactions.map((transaction, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-4 gap-5 border-b-[1px] m-2"
          >
            <div>
              <p>TX:</p>
              <p>
                <Link to={`/transaction/${transaction}`}>
                  {transaction.substring(0, 35)}...
                  {typeof transaction}
                </Link>
              </p>
            </div>
            <div className="bg-white text-black p-[3px] rounded-sm font-semibold">
              0.0512 ETH
            </div>
          </div>
        ))}

        <div className="flex justify-center items-center p-2 bg-slate-500">
          View All Transactions
          <IoIosArrowRoundForward size={30} />
        </div>
      </div>
    </>
  );
};

export default LatestTrans;
