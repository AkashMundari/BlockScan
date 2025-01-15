import { useContext } from "react";
import { FaEthereum } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { BsCartFill } from "react-icons/bs";
import { ImMeter } from "react-icons/im";
import { DataContext } from "../context/NetworkData";
import { FaGasPump } from "react-icons/fa";
import { IoCubeOutline } from "react-icons/io5";
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
          <div className="p-4  border-b-2 text-white grid grid-cols-2  gap-15 ">
            <div className="flex">
              <span className="mr-3">
                <BsCartFill size={30} className="text-white" />
              </span>
              <span>
                <p className="flex">TOTAL SUPPLY</p>
                <h1>{totalSupply} ETH</h1>
              </span>
            </div>
            <div className="flex">
              <span className="mr-3">
                <FaGasPump size={30} className="text-white" />
              </span>
              <span>
                <p className="flex">MEDIAN GAS PRICE</p>
                <h1 className="flex">{latestGasFee} Gwei</h1>
              </span>
            </div>
          </div>

          <div className="p-4 text-white grid grid-cols-2 gap-15 ">
            <div className="flex">
              <span className="mr-3">
                <ImMeter size={30} className="text-white" />
              </span>
              <span>
                <p className="flex">LAST FINALIZED BLOCK</p>
                <h1>{latestBlock}</h1>
              </span>
            </div>
            <div className="flex">
              <span className="mr-3">
                <IoCubeOutline size={30} className="text-white" />
              </span>
              <span>
                <p className="flex">LAST SAFE BLOCK</p>
                <h1 className="flex">{latestBlock}</h1>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
