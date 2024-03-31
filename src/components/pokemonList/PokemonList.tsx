import { useState } from "react";
import { useFetchPokemon } from "../../hooks/useFetchPokemon";
import { PokemonItem } from "../PokemonItem/PokemonItem";
interface Props {
  url?: string[] | null;
}

export const PokemonList = ({ url }: Props) => {
  return (
    <div className="col-6 d-flex flex-wrap gap-4 p-0 bg-primary">
      {url?.map((pokemons) => (
        <PokemonItem key={pokemons} url={pokemons} />
      ))}
    </div>
  );
};
