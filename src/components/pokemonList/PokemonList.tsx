import { useState } from "react";
import { useFetchPokemon } from "../../hooks/useFetchPokemon";
import { PokemonItem } from "../PokemonItem/PokemonItem";
interface Props {
  url?: string[] | null;
  page: number;
  perPage: number;
}

export const PokemonList = ({ url, page, perPage }: Props) => {
  return (
    <div className="col-6 d-flex flex-wrap gap-4 p-0 bg-primary">
      {url
        ?.slice((page - 1) * perPage, (page - 1) * perPage + perPage)
        .map((pokemons) => (
          <PokemonItem key={pokemons} url={pokemons} />
        ))}
    </div>
  );
};
