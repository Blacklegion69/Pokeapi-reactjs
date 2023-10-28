import Textgradient from "@/components/custom/Textgradient";
import Image from "@/components/custom/Image";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Herosection = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden flex justify-center items-center flex-col relative">
      <div className="p-2 w-4/5 flex rounded justify-center items-center flex-col relative">
        <div className="p-[320px] absolute bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-300 via-transparent to-transparent"></div>
        <Textgradient className="text-6xl md:text-7xl md:flex md:justify-center md:items-center z-30 font-bold bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-pink-500 via-red-500 to-yellow-500 flex">
          <span>
            Pokemon Cards
            <Textgradient className="text-6xl inline mx-1 z-30 font-bold bg-gradient-to-l from-gray-800 via-gray-500 to-gray-600">
              !
            </Textgradient>
          </span>
          <Image />
        </Textgradient>
        <Textgradient className="text-md sm:text-center md:text-xl mt-2 z-30 font-bold bg-gradient-to-r from-gray-700 via-gray-900 md:via-gray-700 to-black">
          Watch all Pokemon together. Image, names, ability and many more....
        </Textgradient>
      </div>
      <div className="w-4/5 z-30 p-2 md:flex md:justify-center md:items-center">
        <Link to="/pokemons/1">
          <Button>
            <Textgradient className="bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-indigo-200 via-red-200 to-yellow-100">
              See more
            </Textgradient>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Herosection;
