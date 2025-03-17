import { Champion } from "@/types/Champion";

export const fetchChanpionDetail = async (decodeid: string) => {
  const response = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/14.5.1/data/ko_KR/championFull.json",
    { cache: "no-store" }
    //ssr 사용
  );
  const jsonData = await response.json();
  const data: Champion[] = Object.values(jsonData.data);
  const finddata = data.find((da: Champion) => da.id === decodeid);
  return finddata;
};
