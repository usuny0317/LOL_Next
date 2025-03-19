"use client";

import Card from "@/components/Card";
import { Champion } from "@/types/Champion";

import { useQuery } from "@tanstack/react-query";

const page = () => {
  //라우트 핸들러로 로테이션 받아오기기
  const fetchLotaition = async () => {
    const response = await fetch("api/handleroute", {
      method: "GET",
    });
    const result = await response.json();
    return result;
  };

  //전체 리스트 받아오기기
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

  //쿼리 사용해서 비교하기기
  const CompareLotaitionList = () => {
    //쿼리로 로테이션
    const {
      data: lotation,
      isPending: islotationPending,
      isError: islotationErr,
    } = useQuery({
      queryKey: ["lotation"],
      queryFn: async () => {
        const data = await fetchLotaition();
        return data.data.freeChampionIds;
      },
    });
    //쿼리로 리스트
    const {
      data: list,
      isPending: islistPending,
      isError: islistErr,
    } = useQuery({
      queryKey: ["list"],
      //queryFn: fetchChanpionList,
      queryFn: async () => {
        const data = await fetchChanpionList();
        return data;
      },
    });

    //둘 중 하나라도 받아오기 전일때
    if (islotationPending || islistPending) return <div>Loding...</div>;
    //둘 중 하나라도 오류났을 때
    if (islotationErr || islistErr) return <div>Error!!!</div>;
    //둘 값 비교해서 돌려주기
    const filterdata = list.filter((da) => lotation?.includes(Number(da.key)));

    return (
      <div className=" grid grid-cols-4 grid-rows-4 gap-5 p-5 m-2">
        {filterdata?.map((da) => (
          <Card {...da} key={da.id} />
        ))}
      </div>
    );
  };

  return (
    <div>
      <p className="text-red-500 ml-5 text-xl">이번주 무료 챔피언 목록</p>
      {CompareLotaitionList()}
    </div>
  );
};

export default page;
