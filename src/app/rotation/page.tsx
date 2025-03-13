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

  return <div>로테이션 page</div>;
};

export default page;
