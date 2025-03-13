import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>리그 오브 레전드 정보 앱</p>
      <p>Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.</p>
      <Link href={"/champions"}>
        <p>챔피언 목록보기</p>
      </Link>
      <Link href={"/rotation"}>
        <p>금주 로테이션 확인</p>
      </Link>
      <Link href={"/items"}>
        <p>아이템 목록 보기</p>
      </Link>
    </div>
  );
}
