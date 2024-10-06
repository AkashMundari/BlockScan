import { useContext } from "react";
import { FaEthereum } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { PiHardDrivesLight } from "react-icons/pi";
import { ImMeter } from "react-icons/im";
import { DataContext } from "../context/NetworkData";
const Overview = () => {
  const { valueETH, totalSupply, latestBlock, latestGasFee } =
    useContext(DataContext);
  return (
    <>
      <div className="w-full p-14 mx-auto md:text-xl sm:text-lg text-sm grid md:grid-cols-2 gap-8 bg-[#2a2a2b]">
        <div className="bg-black p-4 rounded-md">
          <div className="p-4  border-b-2 text-white flex ">
            <span className="mr-3">
              <FaEthereum size={30} className="text-white" />
            </span>
            <span>
              <p className="flex">ETHER PRICE</p>
              <h1>$ {valueETH.toLocaleString()}</h1>
            </span>
          </div>
          <div className="p-4 text-white flex ">
            <span className="mr-3">
              <CiGlobe size={30} className="text-white" />
            </span>
            <span>
              <p className="flex">MARKET CAP</p>
              <h1>$ {(valueETH * totalSupply).toLocaleString()}</h1>
            </span>
          </div>
        </div>

        <div className="bg-black p-4 rounded-md">
          <div className="p-4  border-b-2 text-white grid grid-cols-2">
            <div className="flex ">
              <span className="mr-3">
                <PiHardDrivesLight size={30} className="text-white" />
              </span>
              <span>
                <p className="flex">TRANSACTIONS</p>
                <h1>$2,370</h1>
              </span>
            </div>
            <div className="flex justify-end">
              <span>
                <p className="flex">MED GAS PRICE</p>
                <h1 className="flex justify-end">{latestGasFee} Gwei</h1>
              </span>
            </div>
          </div>

          <div className="p-4 text-white grid grid-cols-2 ">
            <div className="flex">
              <span className="mr-3">
                <ImMeter size={30} className="text-white" />
              </span>
              <span>
                <p className="flex mb-2">LAST FINALIZED BLOCK</p>
                <h1>{latestBlock}</h1>
              </span>
            </div>
            <div className="flex justify-end">
              <span>
                <p className="flex mb-2">LAST SAFE BLOCK</p>
                <h1 className="flex justify-end">20763489</h1>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
