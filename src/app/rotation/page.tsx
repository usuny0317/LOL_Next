import React from "react";

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
  const data = await response.json();
  console.log(data);
  //결과값이 id로 나온다.

  /*  
  useclient 하고 CSR 하래래
  const { data, isPending, isError } = useQuery({
    queryKey: ["champions"],
    queryFn: async () => {
      const response = await fetch(
        "https://ddragon.leagueoflegends.com/cdn/14.5.1/data/ko_KR/champion.json",
        { next: { revalidate: 1 } }
      );
      const jsonData = await response.json();
      return Object.values(jsonData.data) as Champion[];
    },
  });
  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error!</div>; */

  return <div>로테이션 page</div>;
};

export default page;
