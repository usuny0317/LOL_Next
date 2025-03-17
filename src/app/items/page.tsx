import ItemCard from "@/components/ItemCard";
import { fetchItemList } from "@/utils/serverApi";

const page = async () => {
  //ssg
  const data = await fetchItemList();

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
