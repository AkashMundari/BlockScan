import LatestTrans from "./LatestTrans";
import LatestBlocks from "./LatestBlocks";
const ChainInfo = () => {
  return (
    <>
      <div className="w-full p-14 mx-auto md:text-xl sm:text-lg text-sm grid md:grid-cols-2 gap-8 text-white">
        <LatestBlocks />
        <LatestTrans />
      </div>
    </>
  );
};

export default ChainInfo;
