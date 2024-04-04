import { useContext, useState } from "react";
import { PokemonContext } from "./context/PokemonContext";
import { useFetchPokemon } from "./hooks/useFetchPokemon";
import { usePagination } from "./hooks/usePagination";

import {
  SearchInput,
  PokemonList,
  Pagination,
  CardDetails,
} from "./components";

import "./App.css";

export const App = () => {
  const { pokemonsFiltered } = useContext(PokemonContext);

  const { page, nextPage, previousPage } = usePagination();

  const [pokemonName, setPokemonName] = useState(["blaziken"]);

  const perPage = 4;

  return (
    <div className="container-fluid px-5 py-1 ">
      <h2 className="text-center">Pokemon List</h2>
      <SearchInput />

      {/* Grid */}
      <div className="row justify-content-between">
        <PokemonList url={pokemonsFiltered} page={page} perPage={perPage} />
        <CardDetails name={pokemonName} />
      </div>

      <Pagination
        page={page}
        perPage={perPage}
        nextPage={nextPage}
        previousPage={previousPage}
        maxItems={pokemonsFiltered?.length!}
      />
    </div>
  );
};
