export type Item = {
  name: string;
  description: string;
  image: { full: string };
  gold: {
    base: number;
    sell: number;
  };
};
