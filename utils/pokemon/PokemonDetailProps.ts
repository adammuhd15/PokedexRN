// Ability
interface GenericAbilityProps {
  ability: SpecificDetailProps;
  is_hidden: boolean;
  slot: number;
}

// Cries
interface CriesProps {
  latest: string;
  legacy: string;
};

// Moves
interface GenericMoveProps {
  move: SpecificDetailProps;
}

// Statistics
interface GenericStatisticProps {
  base_stat: number;
  effort: number;
  stat: SpecificDetailProps;
};

// Element
interface GenericElementProps {
  slot: number;
  type: SpecificDetailProps;
};

interface SpecificDetailProps {
  name: string;
  url: string;
}

interface SpecificSpriteProps {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
}

// Final
export interface GetPokemonDetailsProps {
  abilities: GenericAbilityProps[];
  base_experience: number;
  cries: CriesProps;
  forms: SpecificDetailProps[];
  height: number;
  id: number;
  is_default: boolean;
  moves: GenericMoveProps[];
  name: string;
  order: number;
  species: SpecificDetailProps;
  sprites: SpecificSpriteProps;
  stats: GenericStatisticProps[];
  types: GenericElementProps[];
  weight: number;
};
