import { Champion } from "@/types/Champion";

export const fetchChanpionList = async () => {
  const response = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/14.5.1/data/ko_KR/championFull.json",
    { next: { revalidate: 86400 } }
  );
  const jsonData = await response.json();
  const data: Champion[] = Object.values(jsonData.data);
  return data;
};
