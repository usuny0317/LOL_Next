export async function GET() {
  const res = await fetch(
    "https://br1.api.riotgames.com/lol/platform/v3/champion-rotations",
    {
      headers: {
        "X-Riot-Token": `${process.env.RIOT_API_KEY}`,
        "Content-Type": "application/json",
        "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
      },
    }
  );
  if (!res) {
    return new Response(JSON.stringify({ error: "데이터 불러오기 실패" }));
  }
  const data = await res.json();
  return Response.json({ data });
}
