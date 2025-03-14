import { Champion } from "@/types/Champion";
import Image from "next/image";
import React from "react";

/* const fetchChanpionList2 = async (decodeid: string) => {
  const response = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/14.5.1/data/ko_KR/champion.json",
    { cache: "no-store" }
  );
  const jsonData = await response.json();
  const data: Champion[] = Object.values(jsonData.data);
  const finddata = data.find((da: Champion) => da.id === decodeid);
  return finddata;
}; */
//params를 받아온다. 그런데 그 params의 타입이 params: {id:string} 이다.
const Detailpage = async ({ params }: { params: { id: string } }) => {
  const decodeid = decodeURIComponent(params.id);

  //값 전부 가져오기
  const response = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/14.5.1/data/ko_KR/championFull.json",
    { cache: "no-store" }
    //ssr 사용
  );
  const jsonData = await response.json();
  const data: Champion[] = Object.values(jsonData.data);
  const finddata = data.find((da: Champion) => da.id === decodeid);
  //console.log(finddata);
  //console.log(finddata.spells[0]);
  //const data = await fetchChanpionList2(decodeid);

  return (
    <div className="m-5">
      <div className="text-red-500 p-2"> {finddata?.name}</div>
      <p className="text-red-300">{finddata?.title}</p>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/14.5.1/img/champion/${finddata?.image.full}`}
        alt={`${finddata?.name}`}
        width={250}
        height={250}
      />
      <p className="text-gray-500">{finddata?.blurb}</p>
      <br />
      <p className="text-red-300"> {finddata?.name}의 스킬</p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-1">
        {finddata.spells.map((spell) => {
          return (
            <div
              key={spell.id}
              className="border-white-100 border-2 m-5 text-red-500 "
            >
              <p>{spell.name}</p>
              <p>{spell.image.full}</p>
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/14.5.1/img/spell/${spell.image.full}`}
                alt={`${spell.name}`}
                width={100}
                height={100}
              />
              <p>{spell.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Detailpage;
