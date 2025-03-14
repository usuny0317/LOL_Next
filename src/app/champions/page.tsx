import Card from "@/components/Card";
import { fetchChanpionList } from "@/utils/fetchChanpionList";

const Page = async () => {
  const data = await fetchChanpionList();

  return (
    <div>
      <p className="text-red-500 ml-5">챔피언 목록</p>
      <div className=" grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-5 p-5 m-2">
        {data?.map((da) => (
          <Card {...da} key={da.id} />
        ))}{" "}
      </div>
    </div>
  );
};

export default Page;
