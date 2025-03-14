"use client";
import { Champion } from "@/types/Champion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Card = (da: Champion) => {
  const router = useRouter();
  const handleDetail = (id: string) => {
    router.push(`/champions/${encodeURIComponent(id)}`);
  };
  return (
    <div
      className="display-flex items-center justify-center text-center w-40 h-50  border-white-100 border-2"
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
      <p>{da.title}</p>
    </div>
  );
};

export default Card;
