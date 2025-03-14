import { Champion } from "@/types/Champion";
import Image from "next/image";
import React from "react";

const Card = (da: Champion) => {
  return (
    <div className="display-flex items-center justify-center text-center w-40 h-50  border-white-100 border-2">
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/14.5.1/img/champion/${da.image.full}`}
        alt={`${da.name}`}
        width={300}
        height={300}
      />
      <div className="text-red-500 p-2"> {da.name}</div>
      <p>{da.title}</p>
    </div>
  );
};

export default Card;
