"use client";

import Card from "@/components/Card";
import { Champion } from "@/types/Champion";
import { Rotaition } from "@/types/ChampionRotaion";

const page = async () => {
  //https://developer.riotgames.com/apis#champion-v3/GET_getChampionInfo
  //https://br1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-74eadb3c-8a5f-4a05-aadc-f18775cd047d
  const response = await fetch(
    `https://br1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${process.env.RIOT_API_KEY}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
      },
    }
  );
  const data: Rotaition = await response.json();

  const fetchChanpionList = async () => {
    const response = await fetch(
      "https://ddragon.leagueoflegends.com/cdn/14.5.1/data/ko_KR/championFull.json",
      { cache: "no-store" }
    );
    if (!response) {
      throw new Error("리스트 데이터를 불러오지 못했습니다.");
    }
    const jsonData = await response.json();
    const data: Champion[] = Object.values(jsonData.data);
    return data;
  };
  const alldata = await fetchChanpionList();
  const filterdata = alldata.filter((da) =>
    data.freeChampionIds.includes(Number(da.key))
  );
  //결과값이 id로 나온다.

  return (
    <div>
      <p className="text-red-500 ml-5">이번주 무료 챔피언 목록</p>
      <div className=" grid grid-cols-4 grid-rows-4 gap-5 p-5 m-2">
        {filterdata?.map((da) => (
          <Card {...da} key={da.id} />
        ))}
      </div>
    </div>
  );
};

export default page;
