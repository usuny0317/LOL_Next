import { Item } from "@/types/Item";
import { Champion } from "@/types/Champion";

export const fetchItemList = async () => {
  const response = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/item.json",
    { cache: "force-cache" }
  );
  if (!response) {
    throw new Error("아이템 데이터를 불러오지 못했습니다.");
  }
  const jsonData = await response.json();
  const data: Item[] = Object.values(jsonData.data);
  return data;
};

export const fetchChanpionList = async () => {
  const response = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/14.5.1/data/ko_KR/championFull.json",
    { next: { revalidate: 86400 } }
  );
  if (!response) {
    throw new Error("리스트 데이터를 불러오지 못했습니다.");
  }
  const jsonData = await response.json();
  const data: Champion[] = Object.values(jsonData.data);
  return data;
};

export const fetchChanpionDetail = async (decodeid: string) => {
  const response = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/14.5.1/data/ko_KR/championFull.json",
    { cache: "no-store" }
    //ssr 사용
  );
  if (!response) {
    throw new Error("디테일 데이터를 불러오지 못했습니다.");
  }
  const jsonData = await response.json();
  const data: Champion[] = Object.values(jsonData.data);
  const finddata = data.find((da: Champion) => da.id === decodeid);
  return finddata;
};
