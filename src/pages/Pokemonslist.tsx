import Textgradient from "@/components/custom/Textgradient";
import Loading from "@/components/custom/Loading";
import Pagination from "@/components/custom/Pagination";
import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Item from "@/components/custom/Item";
import { ThickArrowLeftIcon, ThickArrowRightIcon } from "@radix-ui/react-icons";

type listType = {
  name: string;
  url: string;
};

const Pokemonslist = () => {
  const [list, setList] = useState<listType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id = 1 } = useParams();

  const fetchData = async () => {
    const api = "https://pokeapi.co/api/v2/pokemon?limit=" + Number(id) * 10;
    setIsLoading(true);
    axios
      .get(api)
      .then((res) => {
        setIsLoading(true);
        const original = res.data.results;
        const newList = original.slice(Number(id) * 10 - 10, Number(id) * 10);
        setList(newList);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const Cards = () => {
    const card = list.map((data, serial) => {
      return (
        <React.Fragment key={serial}>
          <Item serial={Number(serial)} data={data} id={Number(id)} />
        </React.Fragment>
      );
    });
    return card;
  };

  const linkLeft = (): string => {
    if (Number(id) > 1) {
      return `/pokemons/${Number(id) - 1}`;
    } else {
      return "/pokemons/130";
    }
  };
  const linkRight = (): string => {
    if (Number(id) !== 130) {
      return `/pokemons/${Number(id) + 1}`;
    } else {
      return "/pokemons/1";
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div className="w-full bg-gradient-to-r from-gray-100 to-gray-300 min-h-screen flex items-center flex-col relative">
      <Link to="/">
        <Textgradient className="text-4xl font-bold">Pokemons</Textgradient>
      </Link>
      <Textgradient className="text-4xl font-bold">------------</Textgradient>

      <div className="w-full  flex my-6 justify-between items-center relative p-2 px-8">
        <Link to={linkLeft()}>
          <ThickArrowLeftIcon className="scale-[1.5]" />
        </Link>
        <Textgradient className="text-4xl font-bold bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-red-900 via-violet-200 to-orange-500">
          {id}
        </Textgradient>
        <Link to={linkRight()}>
          <ThickArrowRightIcon className="scale-[1.5]" />
        </Link>
      </div>

      <div className="w-full min-h-[70vh] gap-3 flex justify-center items-center flex-wrap relative overflow-hidden">
        {isLoading ? <Loading /> : <Cards />}
      </div>

      <Pagination id={Number(id)} />
    </div>
  );
};

export default Pokemonslist;
