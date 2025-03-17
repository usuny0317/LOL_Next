import ItemCard from "@/components/ItemCard";
import { Item } from "@/types/Item";

const page = async () => {
  //ssg
  const response = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/item.json",
    { cache: "force-cache" }
  );
  const jsonData = await response.json();
  const data: Item[] = Object.values(jsonData.data);

  return (
    <div>
      <p className="text-red-500 m-5">아이템 목록</p>
      <div className=" grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-5 p-5 m-2">
        {data.map((da, index) => {
          return <ItemCard {...da} key={index} />;
        })}
      </div>
    </div>
  );
};

export default page;
