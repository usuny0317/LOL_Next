import { Item } from "@/types/Item";
import Image from "next/image";

const stripSpecialCharacters = (text: string) => {
  return text.replace(/[^가-힣0-9%.,"'\s]/g, "").trim();
  //한글이랑 숫자만 가능한 정규식 작성!
};

const ItemCard = (da: Item) => {
  return (
    <div className="display-flex items-center justify-center text-center w-40 h-50  border-white-100 border-2 ">
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/item/${da.image.full}`}
        alt={`${da.name}`}
        width={100}
        height={100}
      />
      <p className="text-red-500">{stripSpecialCharacters(da.name)}</p>
      <p className="text-green-300">살때 : {da.gold.base}</p>
      <p className="text-green-300">팔때 : {da.gold.sell}</p>
      <p className="text-purple-300">
        {stripSpecialCharacters(da.description)}
      </p>
    </div>
  );
};

export default ItemCard;
