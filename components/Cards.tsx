import Image from "next/image";
import React from "react";

interface Props {
  Title: string;
  Year: string;
  Poster: string;
}
const Cards = ({ props}: { props: Props }) => {
  return (
    <div className=" shadow-hamburger bg-[#202124] rounded-3xl flex flex-col gap-2  animate-myAnimation">
      <div>
      <Image className=" w-full h-[300px] object-cover" src={props.Poster=== "N/A"? "/img.png": props.Poster} alt="" width={300} height={300} />
      </div>

      {/* movie name */}
      <div className="flex flex-col justify-between h-full gap-4 px-5 py-9">
      <h3 className="text-[#905C53] text-2xl font-bold">{props.Title}</h3>
      <p className="mt-2 text-white">{props.Year}</p>
        
      </div>
    </div>
  );
};

export default Cards;
