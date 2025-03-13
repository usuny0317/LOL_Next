"use client";
import { useQuery } from "@tanstack/react-query";

interface Champion {
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
}

const Page = () => {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["champions"],
    queryFn: async () => {
      const response = await fetch(
        "https://ddragon.leagueoflegends.com/cdn/14.4.1/data/ko_KR/champion.json"
      );

      if (!response.ok) {
        throw new Error("데이터를 불러오는 데 실패했습니다.");
      }

      const jsonData = await response.json();
      console.log(Object.values(jsonData.data));
      return Object.values(jsonData.data) as Champion[];
    },
  });
  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error!</div>;
  //console.log(data);
  return (
    <div>
      챔피언 page
      {data?.map((da, index) => (
        <div key={index}>
          <p>{da.name}</p>
          <p>{da.title}</p>
          <p>{da.blurb}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;
