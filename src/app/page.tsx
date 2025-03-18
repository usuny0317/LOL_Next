import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center gap-3">
      <p className="text-red-500">리그 오브 레전드 정보 앱</p>
      <p className="text-gray-500">
        Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
      </p>
      <Link href={"/champions"}>
        <Image
          src="/champion.jpg"
          alt="챔피언 목록 보기"
          width={800}
          height={800}
        />
        <p className="text-yellow-500 m-5">챔피언 목록보기</p>
      </Link>
      <Link href={"/rotation"}>
        <Image
          src="/rotation.jpg"
          alt="금주 로테이션 확인"
          width={800}
          height={800}
        />
        <p className="text-yellow-500 m-5">금주 로테이션 확인</p>
      </Link>
      <Link href={"/items"}>
        <Image
          src="/item.jpg"
          alt="아이템 목록 보기"
          width={800}
          height={800}
        />
        <p className="text-yellow-500 m-5">아이템 목록 보기</p>
      </Link>
    </div>
  );
}
