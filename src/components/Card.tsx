"use client";

import { ChampionCard } from "@/types/Champion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Card = (da: ChampionCard) => {
  const router = useRouter();
  const handleDetail = (id: string) => {
    router.push(`/champions/${encodeURIComponent(id)}`);
  };
  return (
    <div
      className="flex flex-col items-center justify-center text-center w-50 h-50  border-white-100 border-2"
      onClick={() => {
        handleDetail(da.id);
      }}
    >
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/14.5.1/img/champion/${da.image.full}`}
        alt={`${da.name}`}
        width={300}
        height={300}
      />
      <div className="text-red-500 p-2"> {da.name}</div>
      <p className="text-gray-500">{da.title}</p>
    </div>
  );
};

export default Card;
