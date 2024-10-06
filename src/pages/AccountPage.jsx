import { FaEthereum } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { IoIosArrowRoundForward } from "react-icons/io";
const AccountPage = () => {
  return (
    <>
      <div className="text-white md:text-2xl text-xl mx-auto max-w-[1200px] mt-5 mb-2 p-2">
        Address : 0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326
      </div>
      <div className="p-14 pt-2 pb-5 mx-auto max-w-[1000px]">
        <h1 className="text-white text-xl font-semibold">Overview</h1>
        <div className="bg-black p-4 rounded-md grid md:grid-cols-2">
          <div className="p-4  text-white flex ">
            <span className="mr-3">
              <FaEthereum size={30} className="text-white" />
            </span>
            <span>
              <p className="flex">ETH BALANCE</p>
              <h1>$ 2,670</h1>
            </span>
          </div>
          <div className="p-4 text-white flex ">
            <span className="mr-3">
              <GiMoneyStack size={30} className="text-white" />
            </span>
            <span>
              <p className="flex">ETH VALUE</p>
              <h1>$200,000,000,000</h1>
            </span>
          </div>
        </div>
      </div>

      <div className="p-14 pt-4 max-w-[1200px] mx-auto">
        <h1 className="text-white text-xl font-semibold">Transactions</h1>
        <div className="bg-black rounded-md text-white">
          <div className="flex justify-between p-4 border-b-[1px] m-2">
            <div>0x882cd3</div>
            <div>
              <p>From 0x882cd3aa...</p>
              <p>To 0x882cd3a...</p>
            </div>
            <div>0.05127 ETH</div>
          </div>

          {/* will be deleted-start */}
          <div className="flex justify-between p-4 border-b-[1px] m-2">
            <div>0x882cd3</div>
            <div>
              <p>From 0x882cd3aa...</p>
              <p>To 0x882cd3a...</p>
            </div>
            <div>0.05127 ETH</div>
          </div>
          <div className="flex justify-between p-4 border-b-[1px] m-2">
            <div>0x882cd3</div>
            <div>
              <p>From 0x882cd3aa...</p>
              <p>To 0x882cd3a...</p>
            </div>
            <div>0.05127 ETH</div>
          </div>
          <div className="flex justify-between p-4 border-b-[1px] m-2">
            <div>0x882cd3</div>
            <div>
              <p>From 0x882cd3aa...</p>
              <p>To 0x882cd3a...</p>
            </div>
            <div>0.05127 ETH</div>
          </div>
          <div className="flex justify-between p-4 border-b-[1px] m-2">
            <div>0x882cd3</div>
            <div>
              <p>From 0x882cd3aa...</p>
              <p>To 0x882cd3a...</p>
            </div>
            <div>0.05127 ETH</div>
          </div>
          {/* will be deleted - end */}
          <div className="flex justify-center items-center p-2 bg-slate-500">
            View All Transactions
            <IoIosArrowRoundForward size={30} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountPage;
