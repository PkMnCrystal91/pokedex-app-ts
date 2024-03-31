import { PokeTypes } from "../utils/BackgroundByType";

export type PokeType = {
  name: PokeTypes | "All";
  url?: string;
};

export type AllPokemonsResult = {
  name: string;
  url: string;
};
