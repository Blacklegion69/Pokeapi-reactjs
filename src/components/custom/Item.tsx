import Textgradient from "@/components/custom/Textgradient";
import { Button } from "@/components/ui/button";
import Image from "@/components/custom/Image";
import { Link } from "react-router-dom";

type propsType = {
  serial: number;
  id: number;
  data: {
    name: string;
    url?: string;
  };
};

const Item = ({ serial, id, data }: propsType) => {
  return (
    <div className="w-[350px] border-2 border-slate-300 hover:shadow-md my-1 flex p-2 rounded bg-slate-200">
      <div className="w-full flex justify-center items-center relative">
        <Image
          className="w-[150px] h-[150px] rounded border-2 border-slate-900"
          src={"https://img.pokemondb.net/artwork/" + data.name + ".jpg"}
        />
      </div>

      <div className="w-full flex text-sm justify-around flex-col">
        <div className="bg-slate-300 px-2 rounded w-full text-3xl z-30 border-2 flex items-center">
          <div className="mr-2">ID :</div>
          <Textgradient className="blackopone bg-gradient-to-l from-gray-900 to-gray-600 bg-gradient-to-r uppercase underline underline-offset-8">
            {Number(id) * 10 - 10 + Number(serial) + 1}
          </Textgradient>
        </div>
        <div className="w-full z-30 border-2 text-md flex flex-col justify-center my-1 bg-slate-400 p-2 rounded">
          <div className="mr-2">Name :</div>
          <div className="px-2 rounded bg-gradient-to-r from-slate-900 to-slate-700">
            <Textgradient className="bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 uppercase underline underline-offset-8">
              {data.name}
            </Textgradient>
          </div>
        </div>

        <Link to="/">
          <Button className="shadow-md">
            <Textgradient className="font-bold bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-indigo-200 via-red-200 to-yellow-100">
              More Info
            </Textgradient>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
