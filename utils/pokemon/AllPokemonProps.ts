export interface PokemonProps {
  name: string;
  url: string;
};

export interface GetAllPokemonProps {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonProps[];
};
