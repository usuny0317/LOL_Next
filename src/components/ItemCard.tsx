import { Item } from "@/types/Item";
import Image from "next/image";

const stripSpecialCharacters = (text: string) => {
  return text.replace(/[^가-힣0-9%.,"'\s]/g, "").trim();
  //한글, 숫자, . , " ' 만 가능한 정규식 작성!
};

const ItemCard = (da: Item) => {
  return (
    <div className="display-flex items-center justify-center text-center w-45 max-h-[350px] overflow-y-auto border-white-100 border-2 ">
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/item/${da.image.full}`}
        alt={`${da.name}`}
        width={90}
        height={90}
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
