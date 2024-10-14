import { useContext } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { DataContext } from "../context/NetworkData";
import { ethers } from "ethers";
const LatestBlocks = () => {
  const { FiveBlockWithDetails, latestGasFee } = useContext(DataContext);

  return (
    <>
      <div className="bg-black rounded-md">
        <h1 className="text-xl font-bold mb-4 border-b-[1px] p-3">
          Latest Blocks
        </h1>

        {FiveBlockWithDetails.map((blockDetails, index) => (
          <div
            key={index}
            className="flex justify-between p-4 border-b-[1px] m-2 gap-5 items-center"
          >
            <div className="font-semibold">
              <Link to={`/block/${blockDetails.number}`}>
                <p className="md:text-xl">{blockDetails.number}</p>
              </Link>
            </div>
            <div>
              <p>{blockDetails.hash.substring(0, 20)}...</p>
              <p>{blockDetails.transactions.length} Txns</p>
            </div>
            <div className="bg-white text-black p-[3px] rounded-sm font-semibold">
              {/* {ethers.utils.formatUnits(blockDetails.gasUsed, "gwei") *
                latestGasFee -
                ethers.utils.formatUnits(blockDetails.baseFeePerGas, "gwei") *
                  ethers.utils.formatUnits(blockDetails.gasUsed, "gwei")} 
                  
                  */}
              0.0532 ETH
            </div>
          </div>
        ))}

        <div className="flex justify-center items-center p-2 m-0 bg-slate-500">
          View All Blocks
          <IoIosArrowRoundForward size={30} />
        </div>
      </div>
    </>
  );
};

export default LatestBlocks;
