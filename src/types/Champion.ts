export type Champion = {
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  image: { full: string };
  spells: [
    {
      id: string;
      name: string;
      description: string;
      image: { full: string };
    }
  ];
};

export type ChampionCard = Pick<Champion, "id" | "name" | "title" | "image">;
